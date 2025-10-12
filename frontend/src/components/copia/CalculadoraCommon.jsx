
import React, { useState, useEffect, useMemo } from 'react';
import Latex from 'react-latex-next';

// --- Helpers ---
function formatNumber(num) {
    if (typeof num !== 'number') return num;
    return num.toLocaleString('es-ES', { maximumFractionDigits: 4 });
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
    return <div className="alert alert-info">No hay calculadoras disponibles para este tema.</div>;
  }

  return (
    <div className="calculator-common">
      <div className="mb-3">
        <label htmlFor="calculator-select" className="form-label fw-bold">Selecciona una fórmula:</label>
        <select 
          id="calculator-select" 
          value={selectedCalcId || ''} 
          onChange={handleSelectChange}
          className="form-select"
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
  const { id, latex, description, variables, output, resolve } = calculator;

  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    const initialInputs = {};
    if (variables) {
      variables.forEach(v => {
        initialInputs[v.symbol] = v.example !== undefined ? String(v.example) : '';
      });
    }
    setInputs(initialInputs);
    setResult(null);
  }, [id, variables]);

  const handleInputChange = (symbol, value) => {
    setInputs(prev => ({ ...prev, [symbol]: value }));
  };

  const handleCalculate = () => {
    const args = {};
    let hasError = false;

    for (const v of variables) {
      const value = inputs[v.symbol];
      if (value === '' || value === null || value === undefined) {
        setResult({ error: `Por favor, introduce un valor para "${v.label}".` });
        hasError = true;
        break;
      }
      const num = Number(String(value).replace(',', '.'));
      if (isNaN(num)) {
        setResult({ error: `El valor de "${v.label}" no es un número válido.` });
        hasError = true;
        break;
      }
      args[v.symbol] = num;
    }

    if (hasError) return;

    try {
      if (!resolve) {
        throw new Error('La configuración de la calculadora es inválida o no está actualizada.');
      }
      const calculation = resolve(args);
      setResult(calculation);
    } catch (err) {
      console.error("Error during calculation:", err);
      setResult({ error: 'Hubo un error inesperado al realizar el cálculo.' });
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-light">
      <div className="text-center mb-4 p-3 bg-white border rounded">
        <Latex>{`$$${latex}$$`}</Latex>
      </div>
      <p className='text-center mb-4'>{description}</p>

      <div className="row g-3 my-3">
        {variables.map(v => (
          <div className="col-md-6" key={v.symbol}>
            <label htmlFor={`${id}-${v.symbol}`} className="form-label">
              {v.label}{v.unit ? ` (${v.unit})` : ''}
            </label>
            <input
              id={`${id}-${v.symbol}`}
              type="number"
              step="any"
              value={inputs[v.symbol] || ''}
              onChange={e => handleInputChange(v.symbol, e.target.value)}
              placeholder={v.example || ''}
              className="form-control"
            />
          </div>
        ))}
      </div>

      <button onClick={handleCalculate} className="btn btn-primary w-100 mb-4">
        Calcular
      </button>

      {result && (
        <div className="mt-4">
          {result.error ? (
            <div className="alert alert-danger">{result.error}</div>
          ) : (
            <div className="alert alert-success">
              <h5 className="alert-heading">Solución:</h5>
              {result.steps && result.steps.map((step, index) => (
                <div key={index} className="text-center my-2">
                  <Latex>{step}</Latex>
                </div>
              ))}
              <hr />
              <div className="text-center fw-bold fs-5">
                 <p>{output.label}: {formatNumber(result.result)} {output.unit}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
