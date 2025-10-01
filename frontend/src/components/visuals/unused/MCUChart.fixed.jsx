import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useMCUCanvas } from './useMCUCanvas';
import useMCUAnimation from './useMCUAnimation';
import './mcuChart.css';

const toNumber = (v) => {
  if (v === null || v === undefined || v === '') return NaN;
  const n = Number(String(v).replace(',', '.'));
  return Number.isFinite(n) ? n : NaN;
};

const MCUChart = ({
  radius: propRadius,
  velocity: propVelocity,
  period: propPeriod,
  frequency: propFrequency,
  angularVelocity: propAngularVelocity,
  ready = true,
  unknownLabel = ''
}) => {
  const canvasRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [isReady, setIsReady] = useState(ready);

  // Set isReady when component mounts and when ready prop changes
  useEffect(() => {
    setIsReady(true);
  }, []);

  // Parse input values with defaults
  const radius = toNumber(propRadius) || 5;
  const velocity = toNumber(propVelocity);
  const angularVelocity = toNumber(propAngularVelocity);
  const period = toNumber(propPeriod);
  const frequency = toNumber(propFrequency);

  // Calculate derived values
  const ω = Number.isFinite(angularVelocity) ? angularVelocity : 
           (Number.isFinite(frequency) ? 2 * Math.PI * frequency :
           (Number.isFinite(period) && period > 0 ? (2 * Math.PI) / period : 2));
  
  const v = Number.isFinite(velocity) ? velocity : 
           (Number.isFinite(radius) && Number.isFinite(ω) ? radius * ω : 10);
  
  const T = Number.isFinite(period) ? period : 
           (Number.isFinite(frequency) && frequency > 0 ? 1 / frequency :
           (Number.isFinite(ω) && ω !== 0 ? (2 * Math.PI) / ω : 3.14));
  
  const f = Number.isFinite(frequency) ? frequency : 
           (Number.isFinite(ω) ? ω / (2 * Math.PI) : 0.32);

  // Handle play/pause toggle
  const handlePlayPause = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  
  // Handle HUD updates from animation
  const handleHudUpdate = useCallback((hudData) => {
    // opcional: actualizar HUD si se requiere
  }, []);
  
  // Setup canvas and animation
  const canvasProps = {
    radius,
    velocity: v,
    angularVelocity: ω,
    period: T,
    frequency: f,
    unknownLabel
  };
  
  // Use the custom hooks
  const canvas = useMCUCanvas(canvasRef, canvasProps, {
    currentAngle: 0,
    progress: 0
  });
  
  // Animación (playing solo avanza el tiempo)
  useMCUAnimation({
    ready: isReady && ready,
    playing,
    radius,
    omega: ω,
    period: T,
    speed: v,
    onUpdate: handleHudUpdate
  });
  
  // Handle reset
  const handleReset = useCallback(() => {
    setPlaying(false);
    // Force a re-render to reset the animation
    setIsReady(false);
    setTimeout(() => setIsReady(true), 0);
  }, [playing]);

  // Determine which variable is the unknown based on unknownLabel
  const unknownVariable = useMemo(() => {
    if (!unknownLabel) return '';
    const unk = String(unknownLabel).toLowerCase();
    
    const varMap = {
      'r': 'radio',
      'radius': 'radio',
      'radio': 'radio',
      'v': 'velocidad',
      'velocidad': 'velocidad',
      'velocity': 'velocidad',
      'ω': 'velocidad angular',
      'omega': 'velocidad angular',
      'velocidad angular': 'velocidad angular',
      't': 'período',
      'periodo': 'período',
      'period': 'período',
      'f': 'frecuencia',
      'frecuencia': 'frecuencia',
      'frequency': 'frecuencia'
    };
    
    return varMap[unk] || '';
  }, [unknownLabel]);

  return (
    <div className="mcu-chart-container">
      <div className="mcu-controls">
        <button 
          onClick={handlePlayPause} 
          className="mcu-button"
          disabled={!isReady}
          title={playing ? 'Pausar animación' : 'Reproducir animación'}
        >
          {playing ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
              Pausar
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Reproducir
            </>
          )}
        </button>
        <button 
          onClick={handleReset} 
          className="mcu-button"
          disabled={!isReady}
          title="Reiniciar animación"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
          Reiniciar
        </button>
      </div>

      <div className="mcu-chart">
        <canvas 
          ref={canvasRef}
          className="mcu-canvas"
        />
      </div>
      
      <div className="mcu-chips">
        <div 
          className={`mcu-chip ${unknownVariable === 'radio' ? 'is-unknown' : ''}`}
          data-testid="radio"
          title={unknownVariable === 'radio' ? 'Variable desconocida' : ''}
        >
          <span className="chip-title">RADIO</span>
          <span className="chip-value">{radius.toFixed(2)} m</span>
          {unknownVariable === 'radio' && (
            <div className="unknown-indicator" title="Variable desconocida">?</div>
          )}
        </div>
        <div 
          className={`mcu-chip ${unknownVariable === 'velocidad' ? 'is-unknown' : ''}`}
          data-testid="velocidad"
          title={unknownVariable === 'velocidad' ? 'Variable desconocida' : ''}
        >
          <span className="chip-title">VELOCIDAD</span>
          <span className="chip-value">{v.toFixed(2)} m/s</span>
          {unknownVariable === 'velocidad' && (
            <div className="unknown-indicator" title="Variable desconocida">?</div>
          )}
        </div>
        <div 
          className={`mcu-chip ${unknownVariable === 'velocidad angular' ? 'is-unknown' : ''}`}
          data-testid="velocidad-angular"
          title={unknownVariable === 'velocidad angular' ? 'Variable desconocida' : ''}
        >
          <span className="chip-title">VEL. ANGULAR</span>
          <span className="chip-value">{ω.toFixed(2)} rad/s</span>
          {unknownVariable === 'velocidad angular' && (
            <div className="unknown-indicator" title="Variable desconocida">?</div>
          )}
        </div>
        <div 
          className={`mcu-chip ${unknownVariable === 'período' ? 'is-unknown' : ''}`}
          data-testid="periodo"
          title={unknownVariable === 'período' ? 'Variable desconocida' : ''}
        >
          <span className="chip-title">PERÍODO</span>
          <span className="chip-value">{T.toFixed(2)} s</span>
          {unknownVariable === 'período' && (
            <div className="unknown-indicator" title="Variable desconocida">?</div>
          )}
        </div>
        <div 
          className={`mcu-chip ${unknownVariable === 'frecuencia' ? 'is-unknown' : ''}`}
          data-testid="frecuencia"
          title={unknownVariable === 'frecuencia' ? 'Variable desconocida' : ''}
        >
          <span className="chip-title">FRECUENCIA</span>
          <span className="chip-value">{f.toFixed(2)} Hz</span>
          {unknownVariable === 'frecuencia' && (
            <div className="unknown-indicator" title="Variable desconocida">?</div>
          )}
        </div>
      </div>
    </div>
  );
};

MCUChart.propTypes = {
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  velocity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  period: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  frequency: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  angularVelocity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ready: PropTypes.bool,
  unknownLabel: PropTypes.string
};

export default MCUChart;
