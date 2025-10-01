import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import './mruChart.css';
import { useMRUCanvas } from './useMRUCanvas';

const toNumber = (v) => {
  if (v === null || v === undefined || v === '') return NaN;
  const n = Number(String(v).replace(',', '.'));
  return Number.isFinite(n) ? n : NaN;
};

const MRUChart = ({ v, x0, x, x1, t, ready, labels = [], unknownLabel = '' }) => {
  const canvasRef = useRef(null);
  const [hud, setHud] = useState({ x: 0, x0: 0, v: 0, t: 0, progress: 0 });
  const [playing, setPlaying] = useState(false);
  
  // Parse input values
  const x0n = toNumber(x0) || 0;
  const xn = toNumber(x) || toNumber(x1);
  const vn = toNumber(v);
  const tn = toNumber(t);
  
  // Calculate distance if x and x0 are provided
  const distance = Number.isFinite(xn) && Number.isFinite(x0n) ? Math.abs(xn - x0n) : 0;
  
  // Determine which variables are known and which is the unknown
  const isUnknown = useCallback((label) => {
    if (!label) return false;
    const s = String(label).toLowerCase().replace(/\s+/g, '');
    const unk = String(unknownLabel || '').toLowerCase().replace(/\s+/g, '');
    return s.includes(unk) || unk.includes(s);
  }, [unknownLabel]);
  
  // Calculate derived values based on inputs
  const calculatedValues = useMemo(() => {
    const hasX0 = Number.isFinite(x0n);
    const hasX = Number.isFinite(xn);
    const hasV = Number.isFinite(vn);
    const hasT = Number.isFinite(tn);
    
    let calculatedX = xn;
    let calculatedV = vn;
    let calculatedT = tn;
    
    // Determine which variable is the unknown
    const unknownVar = isUnknown(unknownLabel) ? String(unknownLabel).toLowerCase() : '';
    
    // Calculate position if velocity and time are known
    if (hasV && hasT) {
      calculatedX = x0n + vn * tn;
    }
    
    // Calculate velocity if position and time are known
    if (hasX && hasT && tn !== 0) {
      calculatedV = (xn - x0n) / tn;
    }
    
    // Calculate time if position and velocity are known and velocity is not zero
    if (hasX && hasV && vn !== 0) {
      calculatedT = (xn - x0n) / vn;
    }
    
    return {
      x: calculatedX,
      v: calculatedV,
      t: calculatedT,
      x0: x0n,
      d: distance
    };
  }, [x0n, xn, vn, tn, distance, isUnknown, unknownLabel]);
  
  // Update HUD when values change
  useEffect(() => {
    setHud(prev => ({
      ...prev,
      x: x0n, // Start at initial position
      x0: x0n,
      v: calculatedValues.v,
      t: calculatedValues.t,
      progress: 0 // Reset progress
    }));
  }, [x0n, xn, calculatedValues]);
  
  // Animation effect
  useEffect(() => {
    if (!playing) return;
    
    const duration = 3000; // 3 seconds animation
    const startTime = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setHud(prev => ({
        ...prev,
        x: x0n + (xn - x0n) * progress,
        progress
      }));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setPlaying(false);
      }
    };
    
    let animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [playing, x0n, xn]);
  
  // Handle play/pause
  const handlePlayPause = useCallback(() => {
    setPlaying(!playing);
  }, [playing]);
  
  // Handle reset
  const handleReset = useCallback(() => {
    setPlaying(false);
    setHud(prev => ({
      ...prev,
      x: x0n,
      progress: 0
    }));
  }, [x0n]);
  
  // Use the canvas hook with the simplified interface
  useMRUCanvas(canvasRef, { 
    x0: x0n,
    x: xn,
    d: distance,
    v: calculatedValues.v,
    t: calculatedValues.t
  }, {
    currentX: hud.x,
    progress: hud.progress || 0
  });

  // Render the component
  return (
    <div className="mru-chart-container">
      <canvas ref={canvasRef} className="mru-canvas" />
      <div className="mru-controls">
        <button 
          onClick={handlePlayPause} 
          className="mru-button"
          disabled={!ready}
        >
          {playing ? 'Pausar' : 'Reproducir'}
        </button>
        <button 
          onClick={handleReset} 
          className="mru-button"
          disabled={!ready}
        >
          Reiniciar
        </button>
      </div>
      <div className="mru-values">
        <div>Posición inicial (x₀): {x0n.toFixed(2)} m</div>
        <div>Posición final (x): {Number.isFinite(xn) ? xn.toFixed(2) : '?'} m</div>
        <div>Distancia (d): {distance.toFixed(2)} m</div>
        {Number.isFinite(calculatedValues.v) && <div>Velocidad (v): {calculatedValues.v.toFixed(2)} m/s</div>}
        {Number.isFinite(calculatedValues.t) && <div>Tiempo (t): {calculatedValues.t.toFixed(2)} s</div>}
      </div>
    </div>
  );
};

MRUChart.propTypes = {
  v: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  x0: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  x1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  t: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ready: PropTypes.bool,
  labels: PropTypes.arrayOf(PropTypes.string),
  unknownLabel: PropTypes.string
};

export default MRUChart;
