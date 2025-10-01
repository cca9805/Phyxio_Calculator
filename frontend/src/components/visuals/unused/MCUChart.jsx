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
  const targetAngle = 2 * Math.PI
  const canvasRef = useRef(null);
  const animationDataRef = useRef({
    angle: 0,
    x: 0,
    y: 0,
    t: 0
  });
  const isMounted = useRef(true);
  const lastUpdateRef = useRef(0);
  const animationFrameRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [isReady, setIsReady] = useState(ready);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [_, forceUpdate] = useState({}); // Solo para forzar actualizaciones

  useEffect(() => {
    isMounted.current = true;
    console.log('MCUChart - Component mounted, initial ready:', ready);

    // Iniciar la animación después de un breve retraso si está listo
    if (ready) {
      const timer = setTimeout(() => {
        if (isMounted.current) {
          console.log('MCUChart - Starting initial animation');
          setPlaying(true);
        }
      }, 100);

      return () => {
        clearTimeout(timer);
        isMounted.current = false;
      };
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleHudUpdate = useCallback(({ angle, x, y, t }) => {
    if (!isMounted.current) return;

    // Actualizar la referencia
    const now = Date.now();
    if (now - lastUpdateRef.current < 16) { // Limitar a ~60 FPS
      return;
    }
    lastUpdateRef.current = now;

    // Actualizar la referencia
    if (angle !== undefined) animationDataRef.current.angle = angle;
    if (x !== undefined) animationDataRef.current.x = x;
    if (y !== undefined) animationDataRef.current.y = y;
    if (t !== undefined) animationDataRef.current.t = t;

    // Forzar actualización del componente
    forceUpdate({});
  }, []);

  useEffect(() => {
    console.log('MCUChart - Ready prop changed:', ready);

    // Actualizar el estado isReady
    setIsReady(ready);
    
    // Si está listo, iniciar la animación después de un breve retraso
    if (ready) {
      console.log('MCUChart - Ready is true, will start animation');
      const timer = setTimeout(() => {
        if (isMounted.current) {
          console.log('MCUChart - Starting animation');
          setPlaying(true);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      console.log('MCUChart - Ready is false, pausing animation');
      setPlaying(false);
    }
  }, [ready]);

  // Efecto para manejar el redimensionamiento del canvas
  useEffect(() => {
    const updateCanvasSize = () => {
      if (canvasRef.current?.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect();
        setCanvasSize({ 
          width: Math.max(100, width), 
          height: Math.max(100, height) 
        });
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  // Parse input values with defaults using useMemo to prevent recalculations
  const { radius, velocity, angularVelocity, period, frequency } = useMemo(() => {
    const r = toNumber(propRadius) || 5;
    const v = toNumber(propVelocity);
    const ω = toNumber(propAngularVelocity);
    const T = toNumber(propPeriod);
    const f = toNumber(propFrequency);

    return { radius: r, velocity: v, angularVelocity: ω, period: T, frequency: f };
  }, [propRadius, propVelocity, propAngularVelocity, propPeriod, propFrequency]);

  // Calculate derived values using useMemo
  const { ω, v, T, f } = useMemo(() => {
    // Calcular omega (velocidad angular)
    let omega = angularVelocity;
    if (!Number.isFinite(omega) || omega === 0) {
      if (Number.isFinite(frequency) && frequency > 0) {
        omega = 2 * Math.PI * frequency;
      } else if (Number.isFinite(period) && period > 0) {
        omega = (2 * Math.PI) / period;
      } else if (Number.isFinite(velocity) && Number.isFinite(radius) && radius > 0) {
        omega = velocity / radius;
      } else {
        omega = 2; // Valor por defecto
      }
    }

    // Calcular velocidad tangencial
    let vel = velocity;
    if (!Number.isFinite(vel) || vel <= 0) {
      if (Number.isFinite(radius) && radius > 0 && Number.isFinite(omega)) {
        vel = radius * omega;
      } else {
        vel = 10; // Valor por defecto
      }
    }

    // Calcular período
    let per = period;
    if (!Number.isFinite(per) || per <= 0) {
      if (Number.isFinite(frequency) && frequency > 0) {
        per = 1 / frequency;
      } else if (Number.isFinite(omega) && omega !== 0) {
        per = (2 * Math.PI) / omega;
      } else {
        per = 3.14; // Valor por defecto
      }
    }

    // Calcular frecuencia
    let freq = frequency;
    if (!Number.isFinite(freq) || freq <= 0) {
      if (Number.isFinite(omega)) {
        freq = omega / (2 * Math.PI);
      } else {
        freq = 0.32; // Valor por defecto
      }
    }

    return { ω: omega, v: vel, T: per, f: freq };
  }, [radius, velocity, angularVelocity, period, frequency]);

  useMCUAnimation({
    ready: isReady,
    playing,
    radius,
    omega: ω,
    period: T,
    speed: v,
    targetAngle,
    center: { 
      x: (canvasSize.width || 400) / 2, 
      y: (canvasSize.height || 400) / 2 
    },
    onUpdate: (data) => {
      console.log('Animation update:', data);
      handleHudUpdate(data);
    },
    onComplete: () => {
      console.log('Animation completed');
      handleAnimationComplete();
    }
  });

  // Handle play/pause toggle
  const handlePlayPause = useCallback(() => {
    console.log('Toggling play/pause. Current state:', playing);
    setPlaying(prev => !prev);
  }, [playing]);

  const handleAnimationComplete = useCallback(() => {
    console.log('MCUChart - Animation completed');
    setPlaying(false);
  }, []);

  const canvasProps = useMemo(() => ({
    radius,
    velocity: v,
    angularVelocity: ω,
    period: T,
    frequency: f,
    unknownLabel
  }), [radius, v, ω, T, f, unknownLabel]);

  const canvas = useMCUCanvas(canvasRef, {
    ...canvasProps,
    currentAngle: animationDataRef.current.angle,
    x: animationDataRef.current.x,
    y: animationDataRef.current.y,
    progress: (animationDataRef.current.angle % (2 * Math.PI)) / (2 * Math.PI) * 100,
    centerX: (canvasSize.width || 400) / 2,
    centerY: (canvasSize.height || 400) / 2,
    canvasWidth: canvasSize.width || 400,
    canvasHeight: canvasSize.height || 400
  });

  const handleReset = useCallback(() => {
    console.log('Resetting animation');
    setPlaying(false);

    animationDataRef.current = {
      angle: 0,
      x: 0,
      y: 0,
      t: 0
    };

    // Forzar actualización del componente
    forceUpdate({});

    // Reiniciar el estado de listo
    setIsReady(false);
    requestAnimationFrame(() => {
      setIsReady(true);
    });
  }, []);

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
