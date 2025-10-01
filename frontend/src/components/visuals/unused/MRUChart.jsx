import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import './mruChart.css';
import { useMRUCanvas } from './useMRUCanvas';

const toNumber = (v) => {
  if (v === null || v === undefined || v === '') return NaN;
  const n = Number(String(v).replace(',', '.'));
  return Number.isFinite(n) ? n : NaN;
};

const MRUChart = ({ v, x0, x, x1, t, ready = true, unknownLabel = '' }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [hud, setHud] = useState({ x: 0, x0: 0, v: 0, t: 0, progress: 0 });
  const [playing, setPlaying] = useState(false);
  const [isReady, setIsReady] = useState(Boolean(ready));
  
  // Parse input values
  const x0n = toNumber(x0) || 0;
  const xn = toNumber(x) || toNumber(x1);
  const vn = toNumber(v);
  const tn = toNumber(t);
  
  // Sincronizar isReady con el prop ready
  useEffect(() => {
    setIsReady(Boolean(ready));
  }, [ready]);

  // Determinar qué variable es la incógnita basada en la fórmula
  const unknownVariable = useMemo(() => {
    // Función para normalizar el texto (eliminar acentos y caracteres especiales)
    const normalizeText = (text) => {
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    };
    
    // Si hay un unknownLabel, usarlo directamente
    if (unknownLabel) {
      const unk = normalizeText(String(unknownLabel));
      
      // Mapeo directo de etiquetas a variables
      const varMap = {
        // Formas básicas
        'v': 'velocidad',
        'velocidad': 'velocidad',
        'velocity': 'velocidad',
        't': 'tiempo',
        'tiempo': 'tiempo',
        'time': 'tiempo',
        'd': 'distancia',
        'distancia': 'distancia',
        'distance': 'distancia',
        'dx': 'distancia',
        'δx': 'distancia',
        'x': 'posición final',
        'xf': 'posición final',
        'x_f': 'posición final',
        'xfinal': 'posición final',
        'posición final': 'posición final',
        'posicion final': 'posición final',
        'x0': 'posición inicial',
        'x₀': 'posición inicial',
        'xi': 'posición inicial',
        'x_i': 'posición inicial',
        'posición inicial': 'posición inicial',
        'posicion inicial': 'posición inicial',
        
        // Abreviaturas
        'vel': 'velocidad',
        'vel.': 'velocidad',
        'veloc.': 'velocidad',
        'rapidez': 'velocidad',
        'rap.': 'velocidad',
        't.': 'tiempo',
        'tiemp.': 'tiempo',
        'dist': 'distancia',
        'dist.': 'distancia',
        'desplazamiento': 'distancia',
        'despl.': 'distancia',
        'pos': 'posición final',
        'posición': 'posición final',
        'posicion': 'posición final',
        'pos.': 'posición final',
        'posfin': 'posición final',
        'posfinal': 'posición final',
        'posinicial': 'posición inicial',
        'posini': 'posición inicial',
        'pos.ini': 'posición inicial',
        
        // Formatos con paréntesis
        'posicion (x)': 'posición final',
        'posicion x': 'posición final',
        'pos x': 'posición final',
        'pos. x': 'posición final',
        'pos. (x)': 'posición final',
        'posicion(x)': 'posición final',
        'pos(x)': 'posición final',
        'posx': 'posición final',
        
        'velocidad (v)': 'velocidad',
        'velocidad v': 'velocidad',
        'vel v': 'velocidad',
        'vel. v': 'velocidad',
        'vel. (v)': 'velocidad',
        'velocidad(v)': 'velocidad',
        'vel(v)': 'velocidad',
        'velv': 'velocidad',
        
        'tiempo (t)': 'tiempo',
        'tiempo t': 'tiempo',
        't. t': 'tiempo',
        't. (t)': 'tiempo',
        'tiempo(t)': 'tiempo',
        't(t)': 'tiempo',
        'tiempot': 'tiempo',
        
        'distancia (d)': 'distancia',
        'distancia d': 'distancia',
        'dist d': 'distancia',
        'dist. d': 'distancia',
        'dist. (d)': 'distancia',
        'distancia(d)': 'distancia',
        'dist(d)': 'distancia',
        'distd': 'distancia',
        
        'posicion inicial (x0)': 'posición inicial',
        'posicion inicial x0': 'posición inicial',
        'pos ini x0': 'posición inicial',
        'pos. ini. x0': 'posición inicial',
        'pos. ini. (x0)': 'posición inicial',
        'posicion inicial(x0)': 'posición inicial',
        'pos ini(x0)': 'posición inicial',
        'posinix0': 'posición inicial',
        'tiempo (t)': 'tiempo',
        'distancia (d)': 'distancia',
        'dist. (d)': 'distancia',
        'pos. final (x)': 'posición final',
        'pos. inicial (x0)': 'posición inicial',
        'pos. ini. (x0)': 'posición inicial'
      };
      
      // Buscar coincidencia exacta primero
      let result = varMap[unk] || '';
      
      // Si no hay coincidencia exacta, buscar coincidencias parciales
      if (!result) {
        // Buscar por coincidencia parcial en las claves del mapa
        const matchingKey = Object.keys(varMap).find(key => 
          unk.includes(key) || key.includes(unk)
        );
        
        if (matchingKey) {
          result = varMap[matchingKey];
        }
      }
      
      return result;
    }
    
    // Si no hay unknownLabel, determinar la incógnita basada en los valores faltantes
    const hasX0 = Number.isFinite(x0n);
    const hasX = Number.isFinite(xn);
    const hasV = Number.isFinite(vn);
    const hasT = Number.isFinite(tn);

    const distancia = hasX && hasX0 ? xn - x0n : null;

    if (!hasV && (distancia !== null && hasT && hasT > 0)) {
      return 'velocidad';
    }
    if (!hasT && hasV && hasV !== 0 && distancia !== null) {
      return 'tiempo';
    }
    if (!hasX && hasX0 && hasV && hasT) {
      return 'posición final';
    }
    if (!hasX0 && hasX && hasV && hasT) {
      return 'posición inicial';
    }

    // Si no se pudo determinar, devolver cadena vacía
    return '';
  }, [unknownLabel, x0n, xn, vn, tn]);
  
  // Calculate derived values based on inputs
  const calculatedValues = useMemo(() => {
    const hasX0 = Number.isFinite(x0n);
    const hasX = Number.isFinite(xn);
    const hasV = Number.isFinite(vn);
    const hasT = Number.isFinite(tn);
    
    let calculatedX = xn;
    let calculatedV = vn;
    let calculatedT = tn;
    
    // Determine which formula to use based on the unknown variable
    let formula = '';
    let formulaParts = [];
    
    // Determinar qué variable es la incógnita
    let unknownVar = '';
    if (unknownVariable) {
      unknownVar = unknownVariable.toLowerCase();
    } else if (!hasV && hasX && hasT && hasX0) {
      unknownVar = 'velocidad';
    } else if (!hasX && hasV && hasT && hasX0) {
      unknownVar = 'posición final';
    } else if (!hasT && hasX && hasV && hasX0) {
      unknownVar = 'tiempo';
    } else if (!hasX0 && hasX && hasV && hasT) {
      unknownVar = 'posición inicial';
    }
    
    if (unknownVariable === 'velocidad' || (!hasV && hasX && hasT && hasX0)) {
      // v = (x - x₀) / t
      formula = 'v = (x - x₀) / t';
      formulaParts = ['v', ' = (', 'x', ' - ', 'x₀', ') / ', 't'];
    } else if (unknownVariable === 'distancia' || unknownVariable === 'posición final' || (!hasX && hasV && hasT && hasX0)) {
      // x = x₀ + v·t
      formula = 'x = x₀ + v·t';
      formulaParts = ['x', ' = ', 'x₀', ' + ', 'v', '·', 't'];
    } else if (unknownVariable === 'tiempo' || (!hasT && hasX && hasV && hasX0)) {
      // t = (x - x₀) / v
      formula = 't = (x - x₀) / v';
      formulaParts = ['t', ' = (', 'x', ' - ', 'x₀', ') / ', 'v'];
    } else if (unknownVariable === 'posición inicial' || (!hasX0 && hasX && hasV && hasT)) {
      // x₀ = x - v·t
      formula = 'x₀ = x - v·t';
      formulaParts = ['x₀', ' = ', 'x', ' - ', 'v', '·', 't'];
    } else if (hasX && hasX0) {
      // Default to distance formula if we have both positions
      formula = 'd = |x - x₀|';
      formulaParts = ['d', ' = |', 'x', ' - ', 'x₀', '|'];
    } else {
      // Fallback to a simple formula if we can't determine
      formula = 'v = d / t';
      formulaParts = ['v', ' = ', 'd', ' / ', 't'];
    }
    
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
    
    // Calculate distance if x and x0 are provided
    const calculatedDistance = Number.isFinite(calculatedX) && Number.isFinite(x0n) ? Math.abs(calculatedX - x0n) : 0;
    
    return {
      x: calculatedX,
      v: calculatedV,
      t: calculatedT,
      x0: x0n,
      d: calculatedDistance,
      formula,
      formulaParts,
      unknownVar: unknownVariable || unknownVar // Mantener compatibilidad temporal
    };
  }, [x0n, xn, vn, tn, unknownVariable]);
  
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
    console.log('Animation effect', { playing, x0n, xn });
    
    if (!playing) {
      console.log('Animation is paused');
      return;
    }
    
    const duration = 3000; // 3 seconds animation
    const startTime = performance.now();
    
    console.log('Starting animation', { x0n, xn, duration });
    
    const animate = (currentTime) => {
      if (!playing) {
        console.log('Animation stopped by playing state change');
        return;
      }
      
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Update position based on progress
      const newX = x0n + (xn - x0n) * progress;
      
      console.log('Animation frame', { progress, newX });
      
      setHud(prev => ({
        ...prev,
        x: newX,
        progress: progress
      }));
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        console.log('Animation complete');
        setPlaying(false);
      }
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      console.log('Cleaning up animation');
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [playing, x0n, xn]);
  
  // Force initial values
  useEffect(() => {
    console.log('Setting initial values', { x0n, xn });
    setHud(prev => ({
      ...prev,
      x: x0n,
      x0: x0n,
      progress: 0
    }));
  }, [x0n, xn]);
  
  // Handle play/pause
  const handlePlayPause = useCallback(() => {
    console.log('Play/pause clicked', { current: playing });
    setPlaying(prevPlaying => !prevPlaying);
  }, [playing]);
  
  // Use the canvas hook with the simplified interface
  const { draw } = useMRUCanvas(canvasRef, { 
    x0: x0n,
    x: xn,
    d: calculatedValues.d,
    v: calculatedValues.v,
    t: calculatedValues.t,
    unknownLabel: unknownLabel // Pasar la etiqueta de la incógnita
  }, {
    currentX: hud.x,
    progress: hud.progress || 0
  });
  
  // Force initial draw
  useEffect(() => {
    console.log('Initial draw');
    if (draw) {
      requestAnimationFrame(() => {
        draw();
      });
    }
  }, [draw]);
  
  // Handle reset
  const handleReset = useCallback(() => {
    console.log('Reset clicked');
    setPlaying(false);
    
    // Cancel any running animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    
    // Reset position immediately
    setHud(prev => ({
      ...prev,
      x: x0n,
      progress: 0
    }));
    
    // Force a redraw after reset
    if (draw) {
      requestAnimationFrame(() => {
        draw();
      });
    }
  }, [x0n, draw]);
  
  // Forzar redibujado cuando cambian los valores
  useEffect(() => {
    if (draw) {
      draw();
    }
  }, [draw, hud.x, hud.progress]);
  

  // Ajustar el tamaño del canvas cuando cambie el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const container = canvasRef.current.parentElement;
        if (container) {
          // Asegurarse de que el canvas tenga el tamaño correcto
          const containerWidth = container.clientWidth - 16; // Restar el padding
          canvasRef.current.width = containerWidth * window.devicePixelRatio;
          canvasRef.current.style.width = `${containerWidth}px`;
          canvasRef.current.height = 200 * window.devicePixelRatio;
          canvasRef.current.style.height = '200px';
        }
      }
    };

    // Configurar el tamaño inicial
    handleResize();
    
    // Escuchar cambios de tamaño
    window.addEventListener('resize', handleResize);
    
    // Limpiar el event listener al desmontar
    return () => window.removeEventListener('resize', handleResize);
  }, [x0n, xn, calculatedValues.d]);


  return (
    <div className="mru-chart-container">
      
      <div className="mru-controls">
        <button 
          onClick={handlePlayPause} 
          className="mru-button"
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
          className="mru-button"
          disabled={!isReady}
          title="Reiniciar animación"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
          </svg>
          Reiniciar
        </button>
      </div>
      
      {/* Canvas para el gráfico */}
      <canvas 
        ref={canvasRef} 
        className="mru-canvas" 
        width={800}
        height={200}
      />
      
      {/* Valores en la parte inferior con la incógnita resaltada */}
      <div className="mru-values">
        <div 
          className={`mru-chip ${unknownVariable === 'posición inicial' ? 'is-unknown' : ''}`}
          data-testid="posicion-inicial"
          title={unknownVariable === 'posición inicial' ? 'Variable desconocida' : ''}
        >
          <span>POSICIÓN INICIAL</span>
          <span>{x0n.toFixed(2)} m</span>
          {unknownVariable === 'posición inicial' && (
            <div className="unknown-indicator" title="Variable desconocida">?</div>
          )}
        </div>
        <div 
          className={`mru-chip ${unknownVariable === 'posición final' ? 'is-unknown' : ''}`}
          data-testid="posicion-final"
          title={unknownVariable === 'posición final' ? 'Variable desconocida' : ''}
        >
          <span>POSICIÓN FINAL</span>
          <span>{Number.isFinite(xn) ? `${xn.toFixed(2)} m` : '?'}</span>
          {unknownVariable === 'posición final' && (
            <div className="unknown-indicator" title="Variable desconocida">?</div>
          )}
        </div>
        <div 
          className={`mru-chip ${unknownVariable === 'distancia' ? 'is-unknown' : ''}`}
          data-testid="distancia"
          title={unknownVariable === 'distancia' ? 'Variable desconocida' : ''}
        >
          <span>DISTANCIA</span>
          <span>{calculatedValues.d.toFixed(2)} m</span>
          {unknownVariable === 'distancia' && (
            <div className="unknown-indicator" title="Variable desconocida">?</div>
          )}
        </div>
        <div 
          className={`mru-chip ${unknownVariable === 'velocidad' ? 'is-unknown' : ''}`}
          data-testid="velocidad"
          title={unknownVariable === 'velocidad' ? 'Variable desconocida' : ''}
        >
          <span>VELOCIDAD</span>
          <span>{Number.isFinite(calculatedValues.v) ? `${calculatedValues.v.toFixed(2)} m/s` : '?'}</span>
          {unknownVariable === 'velocidad' && (
            <div className="unknown-indicator" title="Variable desconocida">?</div>
          )}
        </div>
        <div 
          className={`mru-chip ${unknownVariable === 'tiempo' ? 'is-unknown' : ''}`}
          data-testid="tiempo"
          title={unknownVariable === 'tiempo' ? 'Variable desconocida' : ''}
        >
          <span>TIEMPO</span>
          <span>{Number.isFinite(calculatedValues.t) ? `${calculatedValues.t.toFixed(2)} s` : '?'}</span>
          {unknownVariable === 'tiempo' && (
            <div className="unknown-indicator" title="Variable desconocida">?</div>
          )}
        </div>
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
  unknownLabel: PropTypes.string
};

export default MRUChart;
