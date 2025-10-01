import { useRef, useEffect, useCallback } from 'react';

const toNumber = (v) => {
  const n = Number(String(v ?? '').replace(',', '.'));
  return Number.isFinite(n) ? n : NaN;
};

export function useMRUAnimation(canvasRef, { v, x0, x, x1, t }, { playing, onUpdateHud }) {
  const rafRef = useRef(null);
  const lastMsRef = useRef(null);
  const tAccumRef = useRef(0);
  const animationFrameRef = useRef(null);
  const hudTickRef = useRef(0);

  // Reset animation state when resetKey changes
  const resetAnimation = useCallback(() => {
    tAccumRef.current = 0;
    lastMsRef.current = null;
  }, []);

  // Calculate safe values for animation
  const getSafeValues = useCallback(() => {
    const x0n = toNumber(x0);
    const xN = toNumber(x);
    const x1n = toNumber(x1);
    const tn = toNumber(t);
    const vn = toNumber(v);
    
    const hasX0 = Number.isFinite(x0n);
    const x0Safe = hasX0 ? x0n : 0;
    const xTarget = Number.isFinite(xN) ? xN : (Number.isFinite(x1n) ? x1n : x0Safe);
    const xSafe = Number.isFinite(xTarget) ? xTarget : x0Safe;
    const dist = Math.abs(xSafe - x0Safe);
    
    return {
      x0: x0Safe,
      x: xSafe,
      v: vn,
      t: tn,
      dist,
      hasMotion: Number.isFinite(dist) && dist > 0 && Number.isFinite(tn) && tn > 0
    };
  }, [v, x0, x, x1, t]);

  // Animation loop
  const animate = useCallback((timestamp) => {
    if (!playing) {
      animationFrameRef.current = requestAnimationFrame(animate);
      return;
    }

    if (lastMsRef.current === null) lastMsRef.current = timestamp;
    const dt = Math.max(0, Math.min(0.05, (timestamp - lastMsRef.current) / 1000));
    lastMsRef.current = timestamp;

    const { x0, x: targetX, t: totalTime, hasMotion } = getSafeValues();
    
    if (hasMotion) {
      tAccumRef.current = Math.min(totalTime, tAccumRef.current + dt);
      if (tAccumRef.current >= totalTime) {
        tAccumRef.current = totalTime;
        onUpdateHud && onUpdateHud({ playing: false });
      }
    }

    const progress = totalTime > 0 ? Math.min(1, Math.max(0, tAccumRef.current / totalTime)) : 1;
    const currentX = x0 + (targetX - x0) * progress;

    // Update HUD at most every 100ms
    if (!hudTickRef.current || timestamp - hudTickRef.current > 100) {
      hudTickRef.current = timestamp;
      onUpdateHud && onUpdateHud({ 
        t: tAccumRef.current, 
        x: currentX,
        progress
      });
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [playing, onUpdateHud, getSafeValues]);

  // Setup and cleanup animation frame
  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate]);

  // Reset animation when dependencies change
  useEffect(() => {
    resetAnimation();
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [resetAnimation]);

  // Handle play/pause state
  useEffect(() => {
    const { hasMotion } = getSafeValues();
    if (!hasMotion && playing) {
      onUpdateHud && onUpdateHud({ playing: false });
    }
  }, [playing, getSafeValues, onUpdateHud]);

  return {
    reset: resetAnimation,
    getCurrentValues: () => {
      const { x0, x, t: totalTime } = getSafeValues();
      const progress = totalTime > 0 ? Math.min(1, Math.max(0, tAccumRef.current / totalTime)) : 1;
      return {
        x: x0 + (x - x0) * progress,
        progress,
        time: tAccumRef.current
      };
    }
  };
}
