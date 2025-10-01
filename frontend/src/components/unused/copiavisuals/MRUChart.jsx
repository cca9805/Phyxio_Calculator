import React, { useEffect, useRef, useState } from 'react';
import './mruChart.css';

function toNumber(v) {
  const n = Number(String(v ?? '').replace(',', '.'));
  return Number.isFinite(n) ? n : NaN;
}

export default function MRUChart({ v, x0, x1, ready }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const lastMsRef = useRef(null);
  const tAccumRef = useRef(0);
  const [playing, setPlaying] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [hud, setHud] = useState({ t: 0, x: 0 });
  const hudTickRef = useRef(0);

  // Autoinicio cuando hay datos válidos
  useEffect(() => {
    if (ready) {
      setPlaying(true);
      setResetKey(k => k + 1); // reinicia tiempo interno
    } else {
      setPlaying(false);
    }
  }, [ready, v, x0, x1]);

  // Reset interno
  useEffect(() => {
    tAccumRef.current = 0;
    lastMsRef.current = null;
  }, [resetKey]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 680;
    const height = Math.round(260 * 2 / 3); // 2/3 de la altura original (~173)
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Tipografía base del proyecto (compartida por escala y marcadores)
    const bodyStyle = window.getComputedStyle(document.body);
    const baseFontSize = parseFloat(bodyStyle.fontSize) || 16;
    const baseFontFamily = bodyStyle.fontFamily || 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';

    // Datos del movimiento
    const vx = toNumber(v);
    const x0n = toNumber(x0);
    const x1n = toNumber(x1);
    const dist = Math.abs(x1n - x0n);
    const T = (Math.abs(vx) > 0 && dist > 0) ? dist / Math.abs(vx) : 0;

    // Escena: paleta azulada/metal
    const margin = 28;
    const trackY = height * 0.48; // subir un poco más la línea de movimiento

    // Asegurar que el tramo visible cubra de min(x0,x1) a max(x0,x1) con padding
    const pad = Math.max(0.2, dist * 0.125);
    const worldMin = Math.min(x0n, x1n) - pad;
    const worldMax = Math.max(x0n, x1n) + pad;
    const worldSpan = Math.max(1, worldMax - worldMin);
    const pxPerMeter = (width - 2 * margin) / worldSpan;
    const toPx = (xWorld) => margin + (xWorld - worldMin) * pxPerMeter;

    // Trazado de fondo (canvas)
    const drawBackground = () => {
      const g = ctx.createLinearGradient(0, 0, 0, height);
      // Cambia estos stops para el fondo del canvas:
      g.addColorStop(0, '#0b1c3a');
      g.addColorStop(1, '#026afc');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height); // si quitas esto, se verá el background CSS

      // Marco “metálico”
      ctx.strokeStyle = 'rgba(148,163,184,0.18)';
      ctx.lineWidth = 2;
      ctx.strokeRect(6, 6, width - 12, height - 12);
    };

    const drawScale = () => {
      // Eje/rail
      ctx.strokeStyle = 'rgba(59,130,246,0.65)'; // azul con contraste en oscuro
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(margin, trackY);
      ctx.lineTo(width - margin, trackY);
      ctx.stroke();

      // Escala bajo el rail (ticks y etiquetas en metros)
      const targetPxStep = 90; // ~90px entre ticks etiquetados
      // incluir pasos grandes para spans largos
      const steps = [0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000];
      let step = steps[0];
      for (const s of steps) {
        if (s * pxPerMeter >= targetPxStep) { step = s; break; }
        step = s;
      }
      // forzar mínimos según el rango visible para evitar demasiadas etiquetas
      if (worldSpan > 2000) step = Math.max(step, 500);
      else if (worldSpan > 900) step = Math.max(step, 200);

      // fuente dinámica según densidad
      const pxPerStep = step * pxPerMeter;
      let fontSize = Math.round(baseFontSize * 0.85);
      if (pxPerStep < 80) fontSize = Math.round(baseFontSize * 0.8);
      if (pxPerStep < 60) fontSize = Math.round(baseFontSize * 0.75);
      ctx.font = `${fontSize}px ${baseFontFamily}`;

      ctx.strokeStyle = 'rgba(148,163,184,0.35)'; // ticks
      ctx.fillStyle = '#e2e8f0'; // etiquetas claras

      const startTick = Math.ceil(worldMin / step) * step;
      const minLabelGapPx = 70; // distancia mínima entre labels
      let lastLabeledPx = -Infinity;
      // decimales del label dependientes del paso
      const decimals = step >= 10 ? 0 : (step >= 1 ? 1 : 2);

      for (let xm = startTick; xm <= worldMax + 1e-9; xm += step) {
        const xp = toPx(xm);
        // tick menor por defecto
        let tickTop = trackY + 10;
        let tickBottom = trackY + 18;
        // ¿etiquetamos este tick?
        const canLabel = (xp - lastLabeledPx) >= minLabelGapPx;
        if (canLabel) {
          // tick mayor
          tickTop = trackY + 8;
          tickBottom = trackY + 22;
          const label = `${(xm - x0n).toFixed(decimals)} m`;
          // centrar mejor el texto
          ctx.textAlign = 'center';
          ctx.fillText(label, xp, trackY + 36);
          lastLabeledPx = xp;
        }
        // dibujar tick
        ctx.beginPath();
        ctx.moveTo(xp, tickTop);
        ctx.lineTo(xp, tickBottom);
        ctx.stroke();
      }
      // restaurar alineación por si otros draw usan texto
      ctx.textAlign = 'start';
    };

    const drawMarkers = () => {
      // Punto de partida
      const p0 = toPx(x0n);
      ctx.fillStyle = '#0ea5e9'; // azul visible
      ctx.beginPath();
      ctx.arc(p0, trackY, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#e2e8f0'; // texto claro en fondo oscuro
      ctx.font = `${Math.round(baseFontSize * 0.85)}px ${baseFontFamily}`;
      ctx.textAlign = 'right';
      ctx.fillText('Inicio', p0 - 10, trackY - 12);

      // Punto de llegada
      const p1 = toPx(x1n);
      ctx.fillStyle = '#ef4444'; // rojo para destino
      ctx.beginPath();
      ctx.arc(p1, trackY, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#e2e8f0';
      ctx.textAlign = 'left';
      ctx.fillText('Llegada', p1 + 10, trackY - 12);
      ctx.textAlign = 'start';
    };

    const drawObject = (xCurr) => {
      const px = toPx(xCurr);
      // Objeto (solo punto con sombra; sin vector)
      ctx.shadowColor = 'rgba(34, 197, 94, 0.6)';
      ctx.shadowBlur = 14;
      ctx.fillStyle = '#22c55e'; // verde visible
      ctx.beginPath();
      ctx.arc(px, trackY, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawFrame = (ms) => {
      if (lastMsRef.current == null) lastMsRef.current = ms;
      const dt = Math.max(0, Math.min(0.05, (ms - lastMsRef.current) / 1000));
      lastMsRef.current = ms;

      if (playing && T > 0) {
        tAccumRef.current = Math.min(T, tAccumRef.current + dt);
        if (tAccumRef.current >= T) {
          // finaliza el recorrido y pausa
          tAccumRef.current = T;
          setPlaying(false);
        }
      }

      const t = tAccumRef.current;
      const dir = Math.sign(x1n - x0n) || 1;
      const xCurr = (T > 0) ? (x0n + dir * Math.abs(vx) * t) : x0n;

      // Dibujo
      ctx.clearRect(0, 0, width, height);
      drawBackground();
      drawScale();
      drawMarkers();
      drawObject(xCurr);

      // Actualizar HUD externo (máx. ~10 fps para no sobrecargar)
      if (!hudTickRef.current || ms - hudTickRef.current > 100) {
        hudTickRef.current = ms;
        setHud({ t, x: xCurr });
      }

      rafRef.current = requestAnimationFrame(drawFrame);
    };

    rafRef.current = requestAnimationFrame(drawFrame);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [v, x0, x1, ready, playing]);

  return (
    <div className="mru-card">
      <div className="mru-toolbar">
        <div className="mru-title">Simulación MRU</div>
        <div className="mru-controls">
          <button
            className={`mru-btn ${playing ? 'is-primary' : ''}`}
            onClick={() => setPlaying(p => !p)}
            disabled={!ready}
            title={playing ? 'Pausar' : 'Reproducir'}
            aria-label={playing ? 'Pausar' : 'Reproducir'}
          >
            {playing ? '⏸ Pausa' : '▶️ Play'}
          </button>
          <button
            className="mru-btn"
            onClick={() => { setPlaying(false); setResetKey(k => k + 1); }}
            disabled={!ready}
            title="Reiniciar"
            aria-label="Reiniciar"
          >
            ⟲ Reset
          </button>
        </div>
      </div>


      <div className="mru-canvas-wrap">
        <canvas ref={canvasRef} className="mru-canvas" />
        <div className="mru-chips">
          <div className="mru-chip">
            <div className="chip-title">v (m/s)</div>
            <div className="chip-value">{Number.isFinite(toNumber(v)) ? toNumber(v).toFixed(2) : '—'}</div>
          </div>
          <div className="mru-chip">
            <div className="chip-title">x0 (m)</div>
            <div className="chip-value">{Number.isFinite(toNumber(x0)) ? toNumber(x0).toFixed(2) : '—'}</div>
          </div>
          <div className="mru-chip">
            <div className="chip-title">xf (m)</div>
            <div className="chip-value">{Number.isFinite(toNumber(x1)) ? toNumber(x1).toFixed(2) : '—'}</div>
          </div>
          <div className="mru-chip">
            <div className="chip-title">t (s)</div>
            <div className="chip-value">{Number.isFinite(hud.t) ? hud.t.toFixed(2) : '—'}</div>
          </div>
          <div className="mru-chip">
            <div className="chip-title">x(t) (m)</div>
            <div className="chip-value">{Number.isFinite(hud.x) ? hud.x.toFixed(2) : '—'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}