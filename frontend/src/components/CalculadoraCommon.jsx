
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

// --- Helpers ---
function formatNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) return num; // Devuelve el valor original si no es un número
    return String(num);
}

// --- Componente Principal ---
export default function CalculadoraCommon({ calculators = [] }) {
  const [selectedCalcId, setSelectedCalcId] = useState(null);

  useEffect(() => {
    if (calculators && calculators.length > 0) {
      setSelectedCalcId(calculators[0].id);
    } else {
      setSelectedCalcId(null);
    }
  }, [calculators]);

  const handleSelectChange = (event) => {
    setSelectedCalcId(event.target.value);
  };

  const selectedCalculator = useMemo(() => 
    calculators.find(c => c.id === selectedCalcId)
  , [selectedCalcId, calculators]);

  if (!calculators || calculators.length === 0) {
    return <div className='alert alert-info'>No hay calculadoras disponibles para este tema.</div>;
  }

  return (
    <div className='calculator-common'>
      <div className='mb-3'>
        <label htmlFor='calculator-select' className='form-label fw-bold'>Selecciona una calculadora:</label>
        <select 
          id='calculator-select' 
          value={selectedCalcId || ''} 
          onChange={handleSelectChange}
          className='form-select'
        >
          {calculators.map(calc => (
            <option key={calc.id} value={calc.id}>
              {calc.title}
            </option>
          ))}
        </select>
      </div>

      {selectedCalculator && <CalculatorInterface calculator={selectedCalculator} />}
    </div>
  );
}

// --- Interfaz de una Sola Calculadora ---
function CalculatorInterface({ calculator }) {
  if (calculator.type === 'interactive-visual') {
    return <InteractiveCalculator calculator={calculator} />;
  }
  return <FormBasedCalculator calculator={calculator} />;
}

// --- Calculadora Interactiva Genérica (Masas, Vértices y Figuras) ---
function InteractiveCalculator({ calculator }) {
    const { description, initialState, resolve } = calculator;
    const [state, setState] = useState(initialState);
    const svgRef = useRef(null);
    const [dragging, setDragging] = useState(null);
    const entityType = state.entityType || 'masses';
    const entities = state[entityType] || [];

    useEffect(() => {
      setState(initialState);
    }, [initialState]);

    const result = useMemo(() => {
        if (typeof resolve !== 'function') return { error: 'Función resolve no implementada.' };
        try {
            return resolve(state);
        } catch (e) {
            console.error("Error en `resolve` interactivo:", e);
            return { error: 'Hubo un error al procesar el estado.' };
        }
    }, [state, resolve]);

    const getSvgCoords = (e) => {
        const svg = svgRef.current;
        if (!svg) return { x: 0, y: 0 };
        const pt = svg.createSVGPoint();
        pt.x = e.clientX; pt.y = e.clientY;
        const { left, top } = svg.getBoundingClientRect();
        pt.x -= left; pt.y -= top;
        return { x: pt.x, y: pt.y };
    };
    
    const svgToWorld = (svgX, svgY) => {
        const svg = svgRef.current;
        if (!svg) return { x: 0, y: 0 };
        const { bounds } = state;
        const svgWidth = svg.clientWidth, svgHeight = svg.clientHeight;
        const worldWidth = bounds.x_max - bounds.x_min;
        const worldHeight = bounds.y_max - bounds.y_min;

        const worldX = (svgX / svgWidth) * worldWidth + bounds.x_min;
        const worldY = (1 - (svgY / svgHeight)) * worldHeight + bounds.y_min;
        return { x: worldX, y: worldY };
    };

    const handleMouseDown = (e, id) => {
        e.preventDefault();
        const { x, y } = getSvgCoords(e);
        const entity = entities.find(m => m.id === id);
        if (!entity) return;
        
        const svgWidth = svgRef.current.clientWidth, svgHeight = svgRef.current.clientHeight;
        const { x_min, x_max, y_min, y_max } = state.bounds;
        const worldWidth = x_max - x_min, worldHeight = y_max - y_min;

        const entitySvgX = (entity.x - x_min) / worldWidth * svgWidth;
        const entitySvgY = (1 - (entity.y - y_min) / worldHeight) * svgHeight;

        setDragging({ id, offsetX: x - entitySvgX, offsetY: y - entitySvgY });
    };

    const handleMouseMove = (e) => {
        if (!dragging) return;
        const { x, y } = getSvgCoords(e);
        const { x: worldX, y: worldY } = svgToWorld(x - dragging.offsetX, y - dragging.offsetY);
        const { bounds } = state;
        
        const clampedX = Math.max(bounds.x_min, Math.min(worldX, bounds.x_max));
        const clampedY = Math.max(bounds.y_min, Math.min(worldY, bounds.y_max));

        setState(prevState => ({
            ...prevState,
            [entityType]: prevState[entityType].map(en => 
                en.id === dragging.id ? { ...en, x: clampedX, y: clampedY } : en
            )
        }));
    };

    const handleMouseUp = () => setDragging(null);

    const handleCanvasClick = (e) => {
        if (e.target.closest('rect, circle')) return; // No añadir si se hace clic en una entidad
        if (dragging) return;

        const { x: svgX, y: svgY } = getSvgCoords(e);
        const { x: worldX, y: worldY } = svgToWorld(svgX, svgY);

        let newEntity;
        if (entityType === 'masses') {
            newEntity = { id: Date.now(), x: worldX, y: worldY, m: 5 };
        } else if (entityType === 'vertices') {
            newEntity = { id: Date.now(), x: worldX, y: worldY };
        } else if (entityType === 'shapes') {
            newEntity = { id: Date.now(), type: 'rect', x: worldX, y: worldY, width: 4, height: 4, isHole: false };
        }

        if (newEntity) {
            setState(prevState => ({ ...prevState, [entityType]: [...prevState[entityType], newEntity] }));
        }
    };

    const updateEntity = (id, field, value, type = 'number') => {
        const processedValue = type === 'checkbox' ? value : (parseFloat(value) || 0);
        setState(prevState => ({
            ...prevState,
            [entityType]: prevState[entityType].map(e => 
                e.id === id ? { ...e, [field]: processedValue } : e
            )
        }));
    };

    const deleteEntity = (id) => {
        setState(prevState => ({ ...prevState, [entityType]: prevState[entityType].filter(e => e.id !== id) }));
    }

    const SvgCanvas = () => {
        if (!svgRef.current) return null;
        const { clientWidth, clientHeight } = svgRef.current;
        const { bounds } = state;
        const worldWidth = bounds.x_max - bounds.x_min;
        const worldHeight = bounds.y_max - bounds.y_min;

        const worldToSvg = (wx, wy) => ({
            x: (wx - bounds.x_min) / worldWidth * clientWidth,
            y: (1 - (wy - bounds.y_min) / worldHeight) * clientHeight
        });

        const cmPos = result?.interactive_data?.cm ? worldToSvg(result.interactive_data.cm.x, result.interactive_data.cm.y) : null;
        const origin = worldToSvg(0, 0);

        return (
            <g onMouseDown={e => e.stopPropagation()}>
                <line x1={0} y1={origin.y} x2={clientWidth} y2={origin.y} stroke='#ccc' strokeDasharray='4' />
                <line x1={origin.x} y1={0} x2={origin.x} y2={clientHeight} stroke='#ccc' strokeDasharray='4' />

                {entityType === 'shapes' && entities.map(shape => {
                    if (shape.type !== 'rect') return null;
                    const svgW = (shape.width / worldWidth) * clientWidth;
                    const svgH = (shape.height / worldHeight) * clientHeight;
                    const svgTopLeft = worldToSvg(shape.x - shape.width / 2, shape.y + shape.height / 2);
                    return (
                        <rect key={shape.id} x={svgTopLeft.x} y={svgTopLeft.y} width={svgW} height={svgH}
                            fill={shape.isHole ? 'rgba(220, 53, 69, 0.4)' : 'rgba(13, 110, 253, 0.4)'}
                            stroke={shape.isHole ? '#dc3545' : '#0d6efd'} strokeWidth='2' 
                            onMouseDown={e => handleMouseDown(e, shape.id)} style={{ cursor: 'grab' }} />
                    );
                })}

                {(entityType === 'masses' || entityType === 'vertices') && (() => {
                    const points = entities.map(e => worldToSvg(e.x, e.y));
                    const pointsString = points.map(p => `${p.x},${p.y}`).join(' ');
                    return (
                        <>
                            {entityType === 'vertices' && entities.length > 2 && <polygon points={pointsString} fill='rgba(25, 135, 84, 0.2)' stroke='#198754' strokeWidth='2' />}
                            {entities.map((entity, i) => {
                                const { x, y } = points[i];
                                const radius = entityType === 'masses' ? 5 + Math.sqrt(entity.m) : 6;
                                const color = entityType === 'masses' ? '#0d6efd' : '#198754';
                                return <circle key={entity.id} cx={x} cy={y} r={radius} fill={color} onMouseDown={e => handleMouseDown(e, entity.id)} style={{ cursor: 'grab' }} />;
                            })}
                        </>
                    );
                })()}

                {cmPos && !isNaN(cmPos.x) && !isNaN(cmPos.y) && <path d={`M ${cmPos.x-8} ${cmPos.y-8} L ${cmPos.x+8} ${cmPos.y+8} M ${cmPos.x-8} ${cmPos.y+8} L ${cmPos.x+8} ${cmPos.y-8}`} stroke='#dc3545' strokeWidth='3' />}
            </g>
        );
    };
    
    const instructionText = {
        masses: "Añade partículas (masas) al lienzo.",
        vertices: "Añade vértices para formar un polígono.",
        shapes: "Añade rectángulos al lienzo."
    }[entityType];

    return (
        <div className='p-4 border rounded-lg bg-light'>
            <p className='text-center mb-4'>{description}</p>

            <details className='mb-3'>
                 <summary className='fw-bold btn btn-sm btn-outline-secondary'>¿Cómo usar esta calculadora?</summary>
                <div className='mt-2 p-3 border rounded bg-white'>
                    <ul>
                        <li><b>Añadir:</b> Haz clic en el lienzo para añadir {entityType === 'masses' ? 'partículas' : (entityType === 'shapes' ? 'figuras' : 'vértices')}.</li>
                        <li><b>Mover:</b> Haz clic y arrastra una entidad para moverla.</li>
                        <li><b>Ajustar/Eliminar:</b> Usa la lista de abajo para ajustar valores o eliminar entidades.</li>
                        <li><b>Observar:</b> La cruz roja (centroide/CM) y los cálculos se actualizan automáticamente.</li>
                    </ul>
                </div>
            </details>

            <div className='w-100 mb-3' style={{ aspectRatio: '1.5 / 1' }}>
                 <svg ref={svgRef} className='w-100 h-100 border rounded bg-white' onClick={handleCanvasClick} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
                    <rect width='100%' height='100%' fill='transparent' />
                    {svgRef.current && <SvgCanvas />}
                </svg>
            </div>

            <div className='mb-3'>
                {entityType === 'shapes' ? entities.map(e => (
                    <div key={e.id} className='row gx-2 gy-2 mb-2 align-items-center p-2 border rounded'>
                        <div className='col-1'><button onClick={() => deleteEntity(e.id)} className='btn btn-sm btn-outline-danger'>X</button></div>
                        <div className='col'>X: <input type='number' value={formatNumber(e.x)} onChange={ev => updateEntity(e.id, 'x', ev.target.value)} className='form-control form-control-sm'/></div>
                        <div className='col'>Y: <input type='number' value={formatNumber(e.y)} onChange={ev => updateEntity(e.id, 'y', ev.target.value)} className='form-control form-control-sm'/></div>
                        <div className='col'>W: <input type='number' value={formatNumber(e.width)} onChange={ev => updateEntity(e.id, 'width', ev.target.value)} className='form-control form-control-sm'/></div>
                        <div className='col'>H: <input type='number' value={formatNumber(e.height)} onChange={ev => updateEntity(e.id, 'height', ev.target.value)} className='form-control form-control-sm'/></div>
                        <div className='col-auto'>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' checked={e.isHole} onChange={ev => updateEntity(e.id, 'isHole', ev.target.checked, 'checkbox')} id={`isHole-${e.id}`} />
                                <label className='form-check-label' htmlFor={`isHole-${e.id}`}>Hueco</label>
                            </div>
                        </div>
                    </div>
                )) : entities.map(e => (
                    <div key={e.id} className='row gx-2 gy-2 mb-2 align-items-center p-2 border rounded'>
                        <div className='col-1'><button onClick={() => deleteEntity(e.id)} className='btn btn-sm btn-outline-danger'>X</button></div>
                        {entityType === 'masses' && <div className='col-auto'>M: <input type='number' value={formatNumber(e.m)} onChange={ev => updateEntity(e.id, 'm', ev.target.value)} className='form-control form-control-sm' style={{width: '80px'}}/></div>}
                        <div className='col'>X: <input type='number' value={formatNumber(e.x)} onChange={ev => updateEntity(e.id, 'x', ev.target.value)} className='form-control form-control-sm'/></div>
                        <div className='col'>Y: <input type='number' value={formatNumber(e.y)} onChange={ev => updateEntity(e.id, 'y', ev.target.value)} className='form-control form-control-sm'/></div>
                    </div>
                ))}
            </div>

            {result && (
                <div className='mt-4'>
                    {result.error ? (
                        <div className='alert alert-danger'>{result.error}</div>
                    ) : (
                        <div className='alert alert-success'>
                            <h5 className='alert-heading'>Resultados en Tiempo Real:</h5>
                            {result.steps.map((step, index) => <div key={index} className='my-1 font-monospace small'><Latex>{`$${step}$`}</Latex></div>)}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

// --- Calculadora de Formulario (Lógica Antigua) ---
function FormBasedCalculator({ calculator }) {
  const [values, setValues] = useState({});
  const [result, setResult] = useState(null);

  const { id, title, description, variables, output, resolve, formula } = calculator;

  // Asegurarnos de que `output` sea siempre un array
  const outputArray = Array.isArray(output) ? output : [output];

  useEffect(() => {
    setValues({});
    setResult(null);
  }, [id]);

  const handleChange = (symbol, value) => {
    setValues(prev => ({ ...prev, [symbol]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resolved = resolve(values);
    setResult(resolved);
  };
  
  return (
    <div className='p-4 border rounded-lg bg-light'>
      <p className='text-muted text-center'>{description}</p>
      <div className='d-flex justify-content-center'>
        <div className='text-center bg-dark text-light p-2 rounded mb-3'>
          <Latex>{`$${formula}$`}</Latex>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='row g-3'>
          {variables.map((v, i) => (
            <React.Fragment key={v.symbol || `d-${i}`}>
              {v.type === 'divider' ? (
                <div className='col-12 mt-4'>
                  <h6 className='text-primary'>{v.label}</h6>
                  <hr className='mt-1'/>
                </div>
              ) : (
                <div className='col-md-4 col-sm-6'>
                  <label htmlFor={v.symbol} className='form-label fw-bold'>{v.label} <small className='text-muted'>({v.unit})</small></label>
                  <input
                    type='number'
                    step='any'
                    id={v.symbol}
                    value={values[v.symbol] || ''}
                    onChange={e => handleChange(v.symbol, e.target.value)}
                    className='form-control'
                    placeholder={v.example || ''}
                    required={!v.label.toLowerCase().includes("opcional")}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className='d-grid gap-2 col-6 mx-auto mt-4'>
          <button type='submit' className='btn btn-primary'>Calcular</button>
        </div>
      </form>

      {result && (
        <div className='mt-4'>
          {result.error ? (
            <div className='alert alert-danger'>{result.error}</div>
          ) : (
            <div className='alert alert-success'>
              <h5 className='alert-heading'>Resultados:</h5>
              {outputArray.map(o => {
                const resultValue = result.result[o.symbol];
                const displayValue = typeof resultValue === 'number'
                    ? formatNumber(resultValue)
                    : resultValue;
                return (
                    <p key={o.symbol} className='mb-1'>
                        <strong>{o.label}:</strong> {displayValue} {o.unit}
                    </p>
                );
              })}
              <hr />
              <details>
                <summary>Ver pasos del cálculo</summary>
                <div className='mt-2 font-monospace small bg-dark text-light p-2 rounded'>
                  {result.steps.map((step, index) => (
                    <div key={index} style={{ whiteSpace: 'pre-wrap' }}><Latex>{`$${step}$`}</Latex></div>
                  ))}
                </div>
              </details>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
