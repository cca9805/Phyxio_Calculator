import React, { useRef, useEffect, useState, useCallback } from 'react';

function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }

const MRUSimulator = ({
  x0 = 0,          // posición inicial (m)
  v = 5,           // velocidad constante (m/s)
  length = 20,     // longitud total mostrada (m)
  tMax = 6,        // tiempo máximo antes de parar (s)
  pxPerMeter = 30, // escala (px/m)
  height = 160,    // alto canvas
  radius = 10,     // radio partícula px
  autoPlay = false,
  loop = true,
  onUpdate,        // callback opcional ({t, x})
  style = {}
}) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const lastMsRef = useRef(null);
  const tRef = useRef(0);
  const playingRef = useRef(autoPlay);
  const [playing, setPlaying] = useState(autoPlay);
  const [state, setState] = useState({ t: 0, x: x0 });

  // Iniciar / parar
  const togglePlay = useCallback(() => {
    setPlaying(p => !p);
  }, []);
  const reset = useCallback(() => {
    tRef.current = 0;
    lastMsRef.current = null;
    setState({ t: 0, x: x0 });
  }, [x0]);

  useEffect(() => { playingRef.current = playing; }, [playing]);

  // Redibujar
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Fondo
    ctx.fillStyle = '#0b1c3a';
    ctx.fillRect(0, 0, w, h);

    // Línea base
    const yMid = h * 0.65;
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(20, yMid);
    ctx.lineTo(w - 20, yMid);
    ctx.stroke();

    // Marcas cada 1 m
    const usableWidth = w - 40;
    const metersVisible = usableWidth / pxPerMeter;
    const step = Math.max(1, Math.round(metersVisible / 10));
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 1;
    ctx.fillStyle = '#60a5fa';
    ctx.font = '10px system-ui';
    ctx.textAlign = 'center';
    for (let m = 0; m <= length; m += step) {
      const px = 20 + (m * pxPerMeter);
      if (px < 20 || px > w - 20) continue;
      ctx.beginPath();
      ctx.moveTo(px, yMid - 8);
      ctx.lineTo(px, yMid + 8);
      ctx.stroke();
      ctx.fillText(m.toString(), px, yMid - 12);
    }

    // Partícula (posición actual)
    const xMeters = clamp(state.x - x0, 0, length);
    const xPx = 20 + xMeters * pxPerMeter;
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(xPx, yMid - 18, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Vectores / etiqueta
    ctx.fillStyle = '#f1f5f9';
    ctx.font = '12px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText(`t = ${state.t.toFixed(2)} s`, 16, 20);
    ctx.fillText(`x = ${(state.x).toFixed(2)} m`, 16, 36);
    ctx.fillText(`v = ${v.toFixed(2)} m/s`, 16, 52);
  }, [pxPerMeter, radius, state.x, state.t, x0, v, length]);

  // Animación
  useEffect(() => {
    const loop = (ms) => {
      if (!playingRef.current) {
        draw();
        return;
      }
      if (lastMsRef.current == null) lastMsRef.current = ms;
      const dt = Math.min(0.05, Math.max(0, (ms - lastMsRef.current) / 1000));
      lastMsRef.current = ms;

      tRef.current += dt;
      let tNow = tRef.current;
      if (tNow > tMax) {
        if (loop) {
          tRef.current = 0;
          tNow = 0;
        } else {
          playingRef.current = false;
          setPlaying(false);
        }
      }

      const xCurrent = x0 + v * tNow;
      setState({ t: tNow, x: xCurrent });
      if (onUpdate) onUpdate({ t: tNow, x: xCurrent });

      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [draw, x0, v, tMax, onUpdate, loop]);

  // Redibujar en cambios de estado
  useEffect(() => { draw(); }, [draw]);

  return (
    <div style={{
      background: '#0f172a',
      border: '1px solid rgba(59,130,246,0.25)',
      borderRadius: 12,
      padding: 16,
      width: '100%',
      maxWidth: 700,
      margin: '0 auto',
      boxSizing: 'border-box',
      ...style
    }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <button
          onClick={togglePlay}
          style={{
            background: playing ? '#ea580c' : '#0d9488',
            border: 'none',
            color: '#fff',
            padding: '6px 14px',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 600
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
        width={Math.max(400, Math.min(1000, 40 + length * pxPerMeter))}
        height={height}
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  );
};

export default MRUSimulator;
