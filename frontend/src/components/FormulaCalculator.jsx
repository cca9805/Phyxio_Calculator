/**
 * FormulaCalculator.jsx
 * 
 * A component that renders an interactive formula calculator with the following features:
 * - Displays a list of available formulas for the current topic
 * - Allows users to input values for formula variables
 * - Calculates and displays results in real-time
 * - Supports LaTeX rendering for mathematical expressions
 * - Responsive design that works on both desktop and mobile
 */

import { useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BlockMath } from 'react-katex';
import { getFormulasByTopic } from '../utils/loadFormulas';

// Import formula data for different physics topics
import { formulas as mruFormulas } from '../data/cinematica/mru/mruFormulas';
import { formulas as mruvFormulas } from '../data/cinematica/mruv/mruvFormulas';
import { formulas as mcuFormulas } from '../data/cinematica/mcu/mcuFormulas';
import { formulas as mcuaFormulas } from '../data/cinematica/mcua/mcuaFormulas';
import { formulas as newtonFormulas } from '../data/dinamica/newton/newtonFormulas';

/**
 * FormulaCalculator Component
 * 
 * @param {Object} props - Component props
 * @param {Array} [props.formulas=[]] - Optional array of formula objects
 * @param {string} [props.topicId=null] - Optional topic ID to determine which formulas to load
 * @returns {JSX.Element} The rendered component
 */
export default function FormulaCalculator({ formulas = [], topicId = null }) {
  const location = useLocation();
  const route = (location?.pathname || '').toLowerCase();

  // Determinar el tema actual incluyendo los subtemas de dinámica
  const currentTopic = useMemo(() => {
    if (topicId) {
      const t = String(topicId).toLowerCase();
      if (t.includes('newton')) return 'newton';
      if (t.includes('mcua')) return 'mcua';
      if (t.includes('mcu')) return 'mcu';
      if (t.includes('mruv')) return 'mruv';
      if (t.includes('mru')) return 'mru';
    }
    if (route.includes('newton')) return 'newton';
    if (route.includes('mcua')) return 'mcua';
    if (route.includes('mcu')) return 'mcu';
    if (route.includes('mruv')) return 'mruv';
    if (route.includes('mru')) return 'mru';
    return 'mru'; // Default
  }, [topicId, route]);

  // loaded automatically from data/* if no explicit formulas prop
  const [autoFormulas, setAutoFormulas] = useState(null);
  useEffect(() => {
    let mounted = true;
    if (Array.isArray(formulas) && formulas.length) {
      // explicit prop -> do not auto-load
      setAutoFormulas(null);
      return () => { mounted = false; };
    }
    if (!topicId) {
      setAutoFormulas(null);
      return () => { mounted = false; };
    }

    (async () => {
      try {
        const loaded = await getFormulasByTopic(topicId);
        if (mounted) setAutoFormulas(loaded || null);
      } catch {
        if (mounted) setAutoFormulas(null);
      }
    })();

    return () => { mounted = false; };
  }, [formulas, topicId]);

  // Get the appropriate formula list: prop > auto-loaded > built-in fallback by topic
  const formulaList = useMemo(() => {
    if (Array.isArray(formulas) && formulas.length > 0) return formulas;
    if (Array.isArray(autoFormulas) && autoFormulas.length > 0) return autoFormulas;
    switch (currentTopic) {
      case 'newton': return newtonFormulas;
      case 'mru': return mruFormulas;
      case 'mruv': return mruvFormulas;
      case 'mcu': return mcuFormulas;
      case 'mcua': return mcuaFormulas;
      default: return mruvFormulas;
    }
  }, [currentTopic, formulas, autoFormulas]);

  // Normalize formula data structure
  const normalizedFormulas = useMemo(() => {
    return formulaList.map((formula, index) => ({
      id: formula.id || `formula-${index}`,
      name: formula.name || formula.title || `Fórmula ${index + 1}`,
      latex: formula.latex || formula.formula || null,
      expr: formula.expr || formula.expression || null,
      vars: Array.isArray(formula.vars) 
        ? formula.vars.map(v => ({
            name: v.name || v.symbol || '',
            label: v.label || v.name || v.symbol || '',
            unit: v.unit || ''
          })).filter(v => v.name)
        : []
    }));
  }, [formulaList]);

  // State for selected formula and input values
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedFormula = normalizedFormulas[selectedIndex] || null;
  
  // State for storing user input values
  const [values, setValues] = useState({});
  
  // Initialize or update input values when the selected formula changes
  useEffect(() => {
    // Preserve existing user inputs for matching variable names, otherwise initialize to empty string
    setValues(prev => {
      const nv = {};
      (selectedFormula?.vars || []).forEach(v => {
        nv[v.name] = prev && Object.prototype.hasOwnProperty.call(prev, v.name) ? prev[v.name] : '';
      });
      return nv;
    });
  }, [selectedFormula]);
  
  // Handle input changes
  const handleInputChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  /**
   * Computes the result of the selected formula with the current input values
   * @returns {Object} Result object with {ok, value, message} properties
   */
  const computeResult = () => {
    // Check if we have a selected formula with an expression
    if (!selectedFormula || !selectedFormula.expr) {
      return { 
        ok: false, 
        message: 'No hay expresión disponible para calcular' 
      };
    }
    
    try {
      // Extract variable names and convert input values to numbers
      const argNames = (selectedFormula.vars || []).map(v => v.name);
      const argValues = argNames.map(name => {
        const val = values[name];
        // Handle both comma and dot as decimal separators
        const num = Number(String(val).replace(',', '.'));
        return Number.isFinite(num) ? num : NaN;
      });

      // Check for missing or invalid inputs
      const hasMissingValues = argValues.some(isNaN);
      if (hasMissingValues) {
        return { 
          ok: false, 
          message: 'Por favor, completa todos los campos con valores numéricos' 
        };
      }

      // Evaluate the expression in a safe way using Function constructor
      // This creates a function with the variable names as parameters
      const evaluator = new Function(...argNames, `return (${selectedFormula.expr});`);
      
      // Call the function with the input values
      const result = evaluator(...argValues);
      
      return { 
        ok: true, 
        value: result 
      };
      
    } catch (error) {
      console.error('Error evaluating expression:', error);
      return { 
        ok: false, 
        message: 'Error al evaluar la expresión. Verifica la sintaxis.' 
      };
    }
  };

  // Compute the current result based on inputs
  const result = computeResult();

  // Early return if no formula is selected or available
  if (!selectedFormula) {
    return (
      <div className="formula-calculator">
        <div className="alert alert-info">
          No hay fórmulas disponibles para mostrar.
        </div>
      </div>
    );
  }

  return (
    <div className="formula-calculator">
      {/* Formula Selection Dropdown */}
      <div className="formula-selector">
        <label className="formula-label">Fórmula</label>
        <select 
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          className="formula-dropdown"
          aria-label="Seleccionar fórmula"
        >
          {normalizedFormulas.map((formula, index) => (
            <option key={formula.id} value={index}>
              {formula.name}
            </option>
          ))}
        </select>
      </div>

      {/* Formula Display (LaTeX or raw expression) */}
      {selectedFormula && (
        <div className="formula-display">
          {selectedFormula.latex ? (
            <div className="formula-latex">
              <BlockMath 
                math={String(selectedFormula.latex).replace(/^\\(|\\)$/g, '')} 
              />
            </div>
          ) : selectedFormula.expr ? (
            <pre className="formula-expression">{selectedFormula.expr}</pre>
          ) : null}
        </div>
      )}

      {/* Variable Inputs */}
      {selectedFormula?.vars?.length > 0 && (
        <div className="formula-variables">
          <h4>Variables:</h4>
          <div className="variables-grid">
            {selectedFormula.vars.map(variable => (
              <div className="variable-input" key={variable.name}>
                <label>
                  {variable.label || variable.name}
                  {variable.unit && ` (${variable.unit})`}
                </label>
                <input
                  type="number"
                  value={values[variable.name] ?? ''}
                  onChange={(e) => handleInputChange(variable.name, e.target.value)}
                  placeholder={`Ingresa ${variable.label || variable.name}`}
                  step="any"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results Section */}
      <div className="formula-results">
        <button 
          onClick={() => {
            const calculation = computeResult();
            if (!calculation.ok) {
              alert(calculation.message);
            } else {
              alert(`Resultado: ${calculation.value}`);
            }
          }} 
          className="calculate-button"
          disabled={!selectedFormula?.expr}
        >
          Calcular
        </button>
        
        <div className={`result-display ${result.ok ? 'success' : 'error'}`}>
          {result.ok ? (
            <>
              <span className="result-label">Resultado:</span>
              <span className="result-value">{String(result.value)}</span>
            </>
          ) : (
            <span className="result-message">{result.message}</span>
          )}
        </div>
      </div>
    </div>
  );
}