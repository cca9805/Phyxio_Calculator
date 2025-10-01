import { useEffect, useRef } from 'react';

function toNumber(v) {
  const n = Number(String(v ?? '').replace(',', '.'));
  return Number.isFinite(n) ? n : NaN;
}

/**
 * useMCUAnimation
 * - Avanza el tiempo solo si playing y hay ω efectivo.
 * - ω efectivo: omega || 2π/T || v/r.
 * - Emite onUpdate({ t, angle, x, y }) en cada frame.
 * - targetAngle (rad) dispara onComplete una sola vez cuando se cruza.
 */
export default function useMCUAnimation({
  ready,
  playing,
  radius,      // r
  omega,       // ω (rad/s)
  period,      // T (s)
  speed,       // v tangencial (m/s)
  center = { x: 0, y: 0 },
  onUpdate,
  targetAngle,
  onComplete
}) {
  // Refs internos
  const rafRef = useRef(null);
  const lastMsRef = useRef(null);
  const tAccumRef = useRef(0);
  const omegaRef = useRef(0);
  const rRef = useRef(0);
  const canAnimateRef = useRef(false);
  const playingRef = useRef(false);
  const onUpdateRef = useRef(null);
  const onCompleteRef = useRef(null);
  const completedRef = useRef(false);
  const prevAngleRef = useRef(0);

  // Sincronizar flags / callbacks en refs
  useEffect(() => { playingRef.current = !!playing; }, [playing]);
  useEffect(() => { onUpdateRef.current = (typeof onUpdate === 'function' ? onUpdate : null); }, [onUpdate]);
  useEffect(() => {
    onCompleteRef.current = (typeof onComplete === 'function' ? onComplete : null);
    completedRef.current = false; // rearmar cuando cambia callback u objetivo
  }, [onComplete, targetAngle]);

  // Calcular parámetros efectivos
  useEffect(() => {
    const r = toNumber(radius);
    const w = toNumber(omega);
    const T = toNumber(period);
    const v = toNumber(speed);

    let omegaEff = NaN;
    if (Number.isFinite(w) && w !== 0) omegaEff = w;
    else if (Number.isFinite(T) && T > 0) omegaEff = (2 * Math.PI) / T;
    else if (Number.isFinite(v) && Number.isFinite(r) && r > 0) omegaEff = v / r;

    omegaRef.current = omegaEff;
    rRef.current = Number.isFinite(r) && r >= 0 ? r : 0;
    canAnimateRef.current = Boolean(ready && Number.isFinite(omegaEff) && omegaEff !== 0);

    // Reset de tiempo y ángulo previo
    tAccumRef.current = 0;
    lastMsRef.current = null;
    prevAngleRef.current = 0;
    completedRef.current = false;

    // Estado inicial t=0
    if (onUpdateRef.current) {
      const cx = toNumber(center?.x);
      const cy = toNumber(center?.y);
      const angle0 = 0;
      const x0 = (Number.isFinite(cx) ? cx : 0) + rRef.current * Math.cos(angle0);
      const y0 = (Number.isFinite(cy) ? cy : 0) + rRef.current * Math.sin(angle0);
      onUpdateRef.current({ t: 0, angle: angle0, x: x0, y: y0 });
    }
  }, [ready, radius, omega, period, speed, center?.x, center?.y]);

  // Loop de animación
  useEffect(() => {
    const loop = (ms) => {
      if (lastMsRef.current == null) lastMsRef.current = ms;
      const dt = Math.max(0, Math.min(0.05, (ms - lastMsRef.current) / 1000));
      lastMsRef.current = ms;

      if (playingRef.current && canAnimateRef.current) {
        tAccumRef.current += dt;
      }

      const tNow = tAccumRef.current;
      const wEff = omegaRef.current;
      const prevAngle = prevAngleRef.current;
      const angle = Number.isFinite(wEff) ? (wEff * tNow) : 0;

      const cx = toNumber(center?.x);
      const cy = toNumber(center?.y);
      const r = rRef.current;
      const x = (Number.isFinite(cx) ? cx : 0) + r * Math.cos(angle);
      const y = (Number.isFinite(cy) ? cy : 0) + r * Math.sin(angle);

      if (onUpdateRef.current) {
        onUpdateRef.current({ t: tNow, angle, x, y });
      }

      if (Number.isFinite(targetAngle) && !completedRef.current && Number.isFinite(wEff) && wEff !== 0) {
        const crossed =
          (wEff > 0 && prevAngle < targetAngle && angle >= targetAngle) ||
          (wEff < 0 && prevAngle > targetAngle && angle <= targetAngle);
        if (crossed) {
          completedRef.current = true;
          if (onCompleteRef.current) {
            onCompleteRef.current({ t: tNow, angle, x, y });
          }
        }
      }

      prevAngleRef.current = angle;
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [center?.x, center?.y, targetAngle]);
}
// Fin del archivo (sin código sobrante)
      const dt = Math.max(0, Math.min(0.05, (ms - lastMsRef.current) / 1000));
      lastMsRef.current = ms;

      if (playingRef.current && canAnimateRef.current) {
        tAccumRef.current += dt;
      }

      const tNow = tAccumRef.current;
      const wEff = omegaRef.current;
      const prevAngle = prevAngleRef.current;
      const angle = Number.isFinite(wEff) ? (wEff * tNow) : 0;

      const cx = toNumber(center?.x);
      const cy = toNumber(center?.y);
      const r = rRef.current;

      const x = (Number.isFinite(cx) ? cx : 0) + r * Math.cos(angle);
      const y = (Number.isFinite(cy) ? cy : 0) + r * Math.sin(angle);

      if (onUpdateRef.current) {
        onUpdateRef.current({ t: tNow, angle, x, y });
      }
      
      // Disparar onComplete al cruzar targetAngle (si está definido)
      if (Number.isFinite(targetAngle) && !completedRef.current && Number.isFinite(wEff) && wEff !== 0) {
        const crossed =
          (wEff > 0 && prevAngle < targetAngle && angle >= targetAngle) ||
          (wEff < 0 && prevAngle > targetAngle && angle <= targetAngle);
        if (crossed) {
          completedRef.current = true;
          if (onCompleteRef.current) {
            onCompleteRef.current({ t: tNow, angle, x, y });
          }
        }
      }
      prevAngleRef.current = angle;

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [center?.x, center?.y, targetAngle]); // callbacks vía refs; incluir targetAngle y center para ESLint
}
    omegaRef.current = animationParams.omegaEff;
    rRef.current = animationParams.radius;
    canAnimateRef.current = animationParams.canAnimate;
    
    // Reset tiempo
    tAccumRef.current = 0;
    lastMsRef.current = null;

    // Estado inicial t=0 (posiciona el objeto sin animar)
    if (typeof onUpdate === 'function') {
      const cx = toNumber(center?.x);
      const cy = toNumber(center?.y);
      const angle0 = 0;
      const x0 = (Number.isFinite(cx) ? cx : 0) + rRef.current * Math.cos(angle0);
      const y0 = (Number.isFinite(cy) ? cy : 0) + rRef.current * Math.sin(angle0);
      console.log('Initial state:', { t: 0, angle: angle0, x: x0, y: y0, canAnimate: canAnimateRef.current });
      onUpdate({ t: 0, angle: angle0, x: x0, y: y0 });
      
      // Si podemos animar, forzar un nuevo frame para asegurar que la animación comience
      if (canAnimateRef.current && playingRef.current) {
        console.log('useMCUAnimation - Forcing animation start');
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        lastMsRef.current = null;
        rafRef.current = requestAnimationFrame(loop);
      }
    }
  }, [ready, radius, omega, period, speed, center?.x, center?.y, onUpdate]);

  // Bucle de animación
  const loop = useCallback((timestamp) => {
    if (!playingRef.current) return; // Salir si ya no estamos reproduciendo
    
    if (lastMsRef.current === null) {
      console.log('Animation loop - First frame');
      lastMsRef.current = timestamp;
    }
    
    const deltaTime = (timestamp - lastMsRef.current) / 1000; // Convertir a segundos
    lastMsRef.current = timestamp;
    
    // Calcular el nuevo ángulo basado en la velocidad angular y el tiempo
    const omega = omegaRef.current;
    const newAngle = (tAccumRef.current + omega * deltaTime) % (2 * Math.PI);
    
    // Actualizar el tiempo acumulado
    tAccumRef.current = newAngle;
    
    // Calcular la posición
    const r = rRef.current;
    const cx = toNumber(center?.x) || 0;
    const cy = toNumber(center?.y) || 0;
    const x = cx + r * Math.cos(newAngle - Math.PI/2); // Ajustar para que comience en la parte superior
    const y = cy + r * Math.sin(newAngle - Math.PI/2);
    
    // Llamar a la función de actualización
    if (typeof onUpdate === 'function') {
      onUpdate({
        t: tAccumRef.current,
        angle: newAngle,
        x,
        y
      });
    }
    
    // Verificar si hemos alcanzado el ángulo objetivo
    if (typeof targetAngle === 'number' && newAngle >= targetAngle) {
      console.log('Target angle reached:', targetAngle);
      if (typeof onComplete === 'function') {
        onComplete();
      }
      return; // Detener la animación
    }
    
    // Continuar el bucle de animación
    rafRef.current = requestAnimationFrame(loop);
  }, [onUpdate, center?.x, center?.y, targetAngle, onComplete]);

  // Setup and cleanup animation loop
  useEffect(() => {
    console.log('useMCUAnimation - Setting up animation loop');
    
    // Limpiar cualquier animación existente
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    // Iniciar el bucle de animación si está playing
    if (playingRef.current) {
      rafRef.current = requestAnimationFrame(loop);
    }
    
    // Función de limpieza
    return () => {
      console.log('useMCUAnimation - Cleaning up animation loop');
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [loop]);
}
