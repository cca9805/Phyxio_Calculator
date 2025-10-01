import React, { useRef, useEffect, useState, useCallback } from 'react';

function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
function chooseStep(span) {
  const targets = [1,2,5,10,20,25,50,100,200,250,500,1000];
  for (const t of targets) if (span / t <= 14) return t;
  return Math.pow(10, Math.floor(Math.log10(span)));
}

const MRUSimulator = ({
  // Entrada flexible: se pueden pasar uno o varios; el simulador deriva el resto
  x0 = 0,
  v, velocity,
  tMax = 6,        // tiempo máximo fallback si no se provee t
  t, time, totalTime,
  d, distance, displacement,
  xFinal, finalPosition,
  length = 20,     // solo usado si autoScale = false y no hay distancia para escalar
  pxPerMeter = 30,
  height = 160,
  radius = 10,               // radio lógico (ahora se escala internamente)
  compactScale = 0.75,       // NUEVO: factor global para compactar (1 = igual, <1 más pequeño)
  autoPlay = false,
  loop = false,
  autoScale = true,
  marginMeters = 10,
  showMarkers = true,
  showFormula = true,
  variableLabels = { v: 'v', d: 'd', t: 't', xFinal: 'x_f', x0: 'x0' },
  showHUD = true,              // NUEVO: ocultar HUD interno (para usar chips externos)
  variableList = [],           // NUEVO: lista de variables a mostrar en chips
  chipValues = {},             // NUEVO: mapa nombre -> valor numérico
  onUpdate,
  style = {}
}) => {
  // ---------- Normalización de entradas ----------
  const num = (val) => {
    if (val === null || val === undefined || val === '') return NaN;
    const n = Number(String(val).replace(',', '.'));
    return Number.isFinite(n) ? n : NaN;
  };

  const x0Val = num(x0) || 0;
  let vIn = num(v); if (!Number.isFinite(vIn)) vIn = num(velocity);
  let tIn = num(t); if (!Number.isFinite(tIn)) tIn = num(time); if (!Number.isFinite(tIn)) tIn = num(totalTime);
  let dIn = num(d); if (!Number.isFinite(dIn)) dIn = num(distance); if (!Number.isFinite(dIn)) dIn = num(displacement);
  let xfIn = num(xFinal); if (!Number.isFinite(xfIn)) xfIn = num(finalPosition);

  // Si tenemos x_f y x0, podemos derivar d
  if (!Number.isFinite(dIn) && Number.isFinite(xfIn)) dIn = xfIn - x0Val;
  // Si tenemos d y x0 pero no x_f
  if (!Number.isFinite(xfIn) && Number.isFinite(dIn)) xfIn = x0Val + dIn;

  // Derivar v si falta
  if (!Number.isFinite(vIn) && Number.isFinite(dIn) && Number.isFinite(tIn) && tIn !== 0) vIn = dIn / tIn;
  // Derivar t si falta
  if (!Number.isFinite(tIn) && Number.isFinite(dIn) && Number.isFinite(vIn) && vIn !== 0) tIn = dIn / vIn;
  // Derivar d si falta (otra vez) con v y t
  if (!Number.isFinite(dIn) && Number.isFinite(vIn) && Number.isFinite(tIn)) dIn = vIn * tIn;
  // Derivar x_f si aún falta
  if (!Number.isFinite(xfIn) && Number.isFinite(vIn) && Number.isFinite(tIn)) xfIn = x0Val + vIn * tIn;

  // Fallbacks si aún faltan valores para animar
  const hasV = Number.isFinite(vIn);
  const hasT = Number.isFinite(tIn);
  const hasD = Number.isFinite(dIn);
  const hasXf = Number.isFinite(xfIn);

  // Tiempo efectivo (para animación) – si no hay t derivado usar tMax
  const effectiveT = hasT ? tIn : tMax;
  // Velocidad efectiva – si sigue faltando, 0 (sin animación)
  const effectiveV = hasV ? vIn : (hasD && effectiveT > 0 ? dIn / effectiveT : 0);
  // Distancia efectiva
  const effectiveD = hasD ? dIn : (hasXf ? (xfIn - x0Val) : (effectiveV * effectiveT));

  const computedFinal = x0Val + effectiveD;
  const deltaX = computedFinal - x0Val;

  // Condición de animación: necesitamos al menos v y t (o d y t, etc.)
  const canAnimate = Number.isFinite(effectiveV) && Number.isFinite(effectiveT) && effectiveT > 0;

  // ---------- Escala ----------
  const rangeMin = autoScale ? Math.min(x0Val, computedFinal) - marginMeters : x0Val;
  const rangeMax = autoScale ? Math.max(x0Val, computedFinal) + marginMeters : (x0Val + length);
  // Asegurar un span mínimo para que algo se vea aunque Δx=0
  const rawSpan = rangeMax - rangeMin;
  const span = rawSpan < 1 ? 1 : rawSpan;

  // ---------- Refs y estado ----------
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const lastMsRef = useRef(null);
  const tRef = useRef(0);
  const playingRef = useRef(autoPlay && canAnimate);
  const [playing, setPlaying] = useState(autoPlay && canAnimate);
  const [state, setState] = useState({ t: 0, x: x0Val });

  const togglePlay = useCallback(() => {
    if (!canAnimate) return;
    setPlaying(p => !p);
  }, [canAnimate]);
  const reset = useCallback(() => {
    tRef.current = 0;
    lastMsRef.current = null;
    setState({ t: 0, x: x0Val });
    playingRef.current = false;
    setPlaying(false);
  }, [x0Val]);
  useEffect(() => { playingRef.current = playing; }, [playing]);

  // ---------- Dibujo ----------
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = '#0b1c3a';
    ctx.fillRect(0, 0, w, h);

    const yMid = h * 0.60; // subir un poco para espacio HUD compacto
    const leftPad = 20;
    const rightPad = 20;
    const usableWidth = w - leftPad - rightPad;
    const pxPerM = autoScale ? (usableWidth / span) : pxPerMeter;

    // Línea base
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2 * compactScale;
    ctx.beginPath();
    ctx.moveTo(leftPad, yMid);
    ctx.lineTo(w - rightPad, yMid);
    ctx.stroke();

    // Ticks
    const step = chooseStep(span);
    ctx.strokeStyle = '#60a5fa';
    ctx.fillStyle = '#60a5fa';
    ctx.lineWidth = 0.8 * compactScale;
    ctx.font = `${Math.max(8, 10 * compactScale)}px system-ui`;
    ctx.textAlign = 'center';
    const startTick = Math.ceil(rangeMin / step) * step;
    for (let m = startTick; m <= rangeMax; m += step) {
      const xPx = leftPad + (m - rangeMin) * pxPerM;
      if (xPx < leftPad - 2 || xPx > w - rightPad + 2) continue;
      ctx.beginPath();
      ctx.moveTo(xPx, yMid - 7);
      ctx.lineTo(xPx, yMid + 7);
      ctx.stroke();
      ctx.fillText(m.toString(), xPx, yMid - 12);
    }

    // Marcadores
    if (showMarkers) {
      ctx.save();
      ctx.strokeStyle = '#f87171';
      ctx.fillStyle = '#f87171';
      ctx.lineWidth = 1.5 * compactScale;

      const x0Px = leftPad + (x0Val - rangeMin) * pxPerM;
      ctx.beginPath(); ctx.moveTo(x0Px, yMid - 9 * compactScale); ctx.lineTo(x0Px, yMid + 9 * compactScale); ctx.stroke();
      ctx.font = `${Math.max(9, 11 * compactScale)}px system-ui`; ctx.textAlign = 'center'; ctx.fillText(variableLabels.x0 || 'x0', x0Px, yMid + 24);

      const xfPx = leftPad + (computedFinal - rangeMin) * pxPerM;
      ctx.beginPath(); ctx.moveTo(xfPx, yMid - 10 * compactScale); ctx.lineTo(xfPx, yMid + 10 * compactScale); ctx.stroke();
      ctx.fillText(variableLabels.xFinal || 'x_f', xfPx, yMid + 20 * compactScale);

      const midPx = (x0Px + xfPx) / 2;
      ctx.fillStyle = '#fbbf24';
      ctx.fillText(`${variableLabels.d || 'd'}=${deltaX.toFixed(2)} m`, midPx, yMid - 20 * compactScale);
      ctx.restore();
    }

    // Partícula
    const pos = clamp(state.x, rangeMin, rangeMax);
    const xPx = leftPad + (pos - rangeMin) * pxPerM;
    const visualR = Math.max(4, radius * 0.6 * compactScale);
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath(); ctx.arc(xPx, yMid - 14 * compactScale, visualR, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 1.5 * compactScale; ctx.stroke();

    // HUD (solo si showHUD)
    if (showHUD) {
      const symT = variableLabels.t || 't';
      const symV = variableLabels.v || 'v';
      const symD = variableLabels.d || 'd';
      const symXf = variableLabels.xFinal || 'x_f';
      const symX0 = variableLabels.x0 || 'x0';
      ctx.fillStyle = '#f1f5f9';
      ctx.font = '12px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText(`${symT} = ${state.t.toFixed(2)} s (T = ${effectiveT.toFixed(2)} s)`, 16, 20);
      ctx.fillText(`${symX0} = ${x0Val.toFixed(2)} m`, 16, 36);
      ctx.fillText(`${symXf} = ${computedFinal.toFixed(2)} m`, 16, 52);
      ctx.fillText(`${symV} = ${effectiveV.toFixed(2)} m/s | ${symD} = ${deltaX.toFixed(2)} m`, 16, 68);
      if (showFormula) {
        ctx.fillStyle = '#38bdf8';
        ctx.font = '11px system-ui';
        let line = `${symXf} = ${symX0} + ${symV}·${symT}`;
        if (Number.isFinite(deltaX) && Number.isFinite(effectiveT) && effectiveT > 0) {
          line += ` | ${symV}=${symD}/${symT}=${(deltaX / effectiveT).toFixed(2)}`;
        }
        if (Number.isFinite(effectiveV) && Number.isFinite(deltaX) && effectiveV !== 0) {
          line += ` | ${symT}=${symD}/${symV}=${(deltaX / effectiveV).toFixed(2)}`;
        }
        ctx.fillText(line, 16, 86);
      }
    }
  }, [
    autoScale, span, rangeMin, rangeMax,
    state.x, state.t,
    x0Val, effectiveV, effectiveT, computedFinal, deltaX,
    pxPerMeter, radius, showMarkers, showFormula, variableLabels, compactScale,
    showHUD
  ]);

  // ---------- Animación ----------
  useEffect(() => {
    const frame = (ms) => {
      rafRef.current = requestAnimationFrame(frame);
      if (!playingRef.current) { draw(); return; }
      if (!canAnimate) { draw(); return; }

      if (lastMsRef.current == null) lastMsRef.current = ms;
      const dt = Math.min(0.05, Math.max(0, (ms - lastMsRef.current) / 1000));
      lastMsRef.current = ms;
      tRef.current += dt;
      let tNow = tRef.current;

      if (tNow >= effectiveT) {
        if (loop) {
          tRef.current = 0;
          tNow = 0;
        } else {
            tNow = effectiveT;
            playingRef.current = false;
            setPlaying(false);
        }
      }

      const xCurrent = x0Val + effectiveV * tNow;
      setState({ t: tNow, x: xCurrent });
      if (onUpdate) onUpdate({ t: tNow, x: xCurrent, v: effectiveV, d: deltaX });
      draw();
    };
    rafRef.current = requestAnimationFrame(frame);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [draw, x0Val, effectiveV, effectiveT, loop, onUpdate, canAnimate, deltaX]);

  useEffect(() => { draw(); }, [draw]);

  // ---------- Ancho dinámico ----------
  const dynamicWidth = autoScale
    ? Math.max(420, Math.min(1400, (rangeMax - rangeMin) * (pxPerMeter * 0.6) + 80))
    : Math.max(400, Math.min(1000, 40 + length * pxPerMeter));

  return (
    <div style={{
      background: '#0f172a',
      border: '1px solid rgba(59,130,246,0.25)',
      borderRadius: 12,
      padding: 16,
      width: '100%',
      maxWidth: 950,
      margin: '0 auto',
      boxSizing: 'border-box',
      position: 'relative',
      ...style
    }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <button
          onClick={togglePlay}
          disabled={!canAnimate}
          style={{
            background: !canAnimate ? '#475569' : (playing ? '#ea580c' : '#0d9488'),
            border: 'none',
            color: '#fff',
            padding: '6px 14px',
            borderRadius: 6,
            cursor: canAnimate ? 'pointer' : 'not-allowed',
            fontWeight: 600,
            opacity: canAnimate ? 1 : 0.6
          }}
        >
          {playing ? 'Pausar' : 'Reproducir'}
        </button>
        <button
          onClick={reset}
          style={{
            background: '#334155',
            border: 'none',
            color: '#fff',
            padding: '6px 14px',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          Reiniciar
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width={dynamicWidth}
        height={height}
        style={{ width: '100%', display: 'block' }}
      />
     {/* Chips horizontales con variables de la fórmula seleccionada */}
     {Array.isArray(variableList) && variableList.length > 0 && (
       <div style={{
         display: 'flex',
         flexWrap: 'wrap',
         gap: '0.5rem',
         marginTop: '0.75rem'
       }}>
         {variableList.map(name => {
           const raw = chipValues?.[name];
           const finite = Number.isFinite(raw);
           return (
             <button
               key={name}
               type="button"
               style={{
                 padding: '0.45rem 0.75rem',
                 borderRadius: '999px',
                 border: '1px solid #334155',
                 background: '#1e293b',
                 color: '#e2e8f0',
                 fontSize: '0.75rem',
                 lineHeight: 1,
                 letterSpacing: '.5px',
                 fontWeight: 600,
                 cursor: 'default',
                 display: 'flex',
                 alignItems: 'center',
                 gap: '0.4rem',
                 boxShadow: '0 1px 2px rgba(0,0,0,0.4)'
               }}
             >
               <span style={{ opacity: .85 }}>{name}</span>
               <span style={{
                 background: '#0f172a',
                 padding: '0.25rem 0.5rem',
                 borderRadius: '6px',
                 fontWeight: 700,
                 border: '1px solid #475569',
                 minWidth: '3.2rem',
                 textAlign: 'center'
               }}>
                 {finite ? raw.toFixed(2) : '?'}
               </span>
             </button>
           );
         })}
       </div>
     )}
     {/* Overlay si no animable permanece igual */}
      {!canAnimate && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 1rem',
          textAlign: 'center',
          backdropFilter: 'blur(2px)',
          background: 'rgba(15,23,42,0.55)',
          color: '#e2e8f0',
          fontSize: '.9rem',
          lineHeight: 1.35
        }}>
          Introduce al menos dos variables (por ej. d y t, o v y t) para animar.<br />
          Siempre se muestran los valores derivados: {variableLabels.xFinal || 'x_f'} = {variableLabels.x0 || 'x0'} + {variableLabels.v || 'v'}·{variableLabels.t || 't'}
        </div>
      )}
    </div>
  );
};

export default MRUSimulator;
