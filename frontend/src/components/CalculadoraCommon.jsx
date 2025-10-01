import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { getCalculatorsByTopic, getFormulasByTopic } from '../utils/loadFormulas';
// fallback lists for topics (merge if dynamic load returns fewer items)
import { calculators as mcuaCalculators } from '../data/cinematica/mcua/mcuaCalculators';
import { calculators as mruCalculators } from '../data/cinematica/mru/mruCalculators';
import { calculators as mruvCalculators } from '../data/cinematica/mruv/mruvCalculators';
import { calculators as mcuCalculators } from '../data/cinematica/mcu/mcuCalculators';
import '../styles/components/_calculator-common.css';
import MRUSimulator from './visuals/Cinematica/MRUSimulator';

export default function CalculadoraCommon({ topicId = 'mcua' }) {
  const [calculators, setCalculators] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  // helper: normalize variable entry
  const normalizeVar = useCallback((v) => {
    if (!v || typeof v !== 'object') return null;
    return {
      name: v.name || v.id || v.symbol || v.label || '',
      label: v.label || v.name || v.id || v.symbol || '',
      unit: v.unit || v.units || v.u || '',
      example: v.example || v.sample || v.ejemplo || ''
    };
  }, []);

  // sanitize candidate name to be a valid JS/key identifier (simple)
  const sanitizeName = useCallback((s) => {
    if (!s) return '';
    const t = String(s).trim();
    // replace spaces and non-alnum by underscores, remove repeated underscores
    return t.replace(/[^a-zA-Z0-9_]+/g, '_').replace(/_+/g, '_').replace(/^_+|_+$/g, '');
  }, []);

  // helper: try extract array of vars from a formula object (support many keys)
  const extractVarsFromFormula = useCallback((f) => {
    if (!f) return [];
    const maybe = (typeof f === 'object') ? (f.variables || f.vars || f.inputs || f.variablesList || f.varsList || f.params || f.arguments) : null;
    if (!Array.isArray(maybe)) return [];
    const out = [];
    for (const v of maybe) {
      if (!v) continue;
      if (typeof v === 'string') {
        const name = sanitizeName(v);
        if (!name) continue;
        out.push({ name, label: v });
        continue;
      }
      // if object, try normalizeVar and ensure name exists
      const nv = normalizeVar(v);
      if (nv && nv.name) {
        nv.name = sanitizeName(nv.name) || sanitizeName(nv.label) || nv.name;
        if (nv.name) out.push(nv);
        continue;
      }
      // fallback: try keys like symbol/text
      const candidate = v && (v.symbol || v.name || v.id || v.label || v.var || v.param) || '';
      const name = sanitizeName(candidate);
      if (name) out.push({ name, label: candidate });
    }
    // remove possible duplicates by name (preserve order)
    const seen = new Set();
    return out.filter(v => {
      const k = String(v.name).toLowerCase();
      if (!k || seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }, [normalizeVar, sanitizeName]);

  // helper: normalize a calculator object to canonical shape
  const normalizeCalc = useCallback((c) => {
    if (!c || typeof c !== 'object') return null;
    const varsRaw = Array.isArray(c.vars) ? c.vars : (Array.isArray(c.variables) ? c.variables : (Array.isArray(c.inputs) ? c.inputs : []));
    const vars = varsRaw.map(normalizeVar).filter(Boolean);
    const expr = c.expr || c.expression || c.formula || c.eval || '';
    const title = c.title || c.name || c.label || c.id || '';
    const output = c.output || c.result || c.out || {};
    return {
      id: c.id || title || Math.random().toString(36).slice(2,9),
      title,
      expr,
      vars,
      output
    };
  }, [normalizeVar]);

  // Extraer identificadores (variables) usados en la expresión
  const extractIdentifiers = useCallback((expr) => {
    if (!expr || typeof expr !== 'string') return new Set();
    const tokens = expr.match(/[A-Za-z_]\w*/g) || [];
    const banned = new Set([
      'Math','Number','String','Boolean','Array','Object','Date','JSON',
      'Infinity','NaN','undefined','null','true','false','PI','E',
      // funciones comunes de Math
      'sin','cos','tan','asin','acos','atan','atan2','sqrt','pow','abs','max','min','round','floor','ceil','trunc','hypot','log','log10','log2','exp','sign','random'
    ]);
    const ids = new Set();
    for (const t of tokens) {
      if (!banned.has(t)) ids.add(t);
    }
    return ids;
  }, []);

  // Cargar definiciones de calculadoras dinámicamente
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    (async () => {
      try {
        const cfg = await getCalculatorsByTopic(topicId);
        // normalizar a array
        let list = null;
        if (!cfg) list = null;
        else if (Array.isArray(cfg)) list = cfg;
        else if (Array.isArray(cfg.calculators)) list = cfg.calculators;
        else if (Array.isArray(cfg.default)) list = cfg.default;
        else if (typeof cfg === 'object' && Array.isArray(Object.values(cfg)[0])) list = Object.values(cfg)[0];

        // NORMALIZAR cada calculadora a la estructura esperada
        let normalized = Array.isArray(list) ? list.map(normalizeCalc).filter(Boolean) : [];
        const tid = String(topicId || '').toLowerCase();
        // pick the appropriate fallback array for this topic
        let fallbackArr = null;
        if (tid.includes('mcua')) fallbackArr = mcuaCalculators;
        else if (tid.includes('mruv')) fallbackArr = mruvCalculators;
        else if (tid.includes('mru')) fallbackArr = mruCalculators;
        else if (tid.includes('mcu')) fallbackArr = mcuCalculators;

        const fallbackNormalized = Array.isArray(fallbackArr) ? fallbackArr.map(normalizeCalc).filter(Boolean) : [];
        if (fallbackNormalized.length) {
          // merge missing items from fallback (by id lowercase)
          const ids = new Set((normalized || []).map(x => String(x.id || '').toLowerCase()));
          const missing = (fallbackNormalized || []).filter(f => f && !ids.has(String(f.id || '').toLowerCase()));
          if (missing.length) normalized = [...(normalized || []), ...missing];
          // if dynamic list was empty, use full fallback
          if ((!normalized || normalized.length === 0) && fallbackNormalized.length) normalized = fallbackNormalized.slice();
        }

        // Synthesize missing entries from formulas only when:
        // - topic is mcua (keep existing behavior), OR
        // - there are no calculators available at all for the topic (fallback+dynamic produced none).
        // This prevents synthesizing "title-only" entries when the project already provides calculator definitions (e.g. mruv).
        if (tid.includes('mcua') || (!normalized || normalized.length === 0)) {

           try {
             const formulas = await getFormulasByTopic(topicId);
             const formulasArr = Array.isArray(formulas) ? formulas : (formulas && Array.isArray(formulas.default) ? formulas.default : null);
             if (Array.isArray(formulasArr) && formulasArr.length) {
               const ids = new Set((normalized || []).map(x => String(x.id || '').toLowerCase()));
               const titles = new Set((normalized || []).map(x => String(x.title || '').toLowerCase()));
               const synth = [];
               for (const f of formulasArr) {
                 const fid = String(f.id || f.name || f.title || '').toLowerCase();
                 const ftitle = String(f.title || f.name || f.id || '').toLowerCase();
                 if ((!fid || !ids.has(fid)) && (!ftitle || !titles.has(ftitle))) {
                   // extract variable list from formula when available so synthesized entry has inputs
                   const varsFromFormula = extractVarsFromFormula(f);
                   synth.push({
                     id: f.id || f.title || f.name || `formula-${Math.random().toString(36).slice(2,8)}`,
                     title: f.title || f.name || f.id || 'Fórmula',
                     expr: '', // LaTeX → JS translation not attempted
                     vars: varsFromFormula,
                     output: {}
                   });
                 }
               }
               if (synth.length) {
                 normalized = [...(normalized || []), ...synth];
                 console.debug('[CalculadoraCommon] synthesized calculators from formulas:', synth.length);
               }
             }
           } catch { void 0; }
          }

        // Fill incomplete entries from fallback (so they get vars/expr when available)
        try {
          const fbById = new Map((fallbackNormalized || []).map(f => [String(f.id || '').toLowerCase(), f]));
          const fbByTitle = new Map((fallbackNormalized || []).map(f => [String(f.title || '').toLowerCase(), f]));
          normalized = (normalized || []).map(n => {
            const idk = String(n.id || '').toLowerCase();
            const tk = String(n.title || '').toLowerCase();
            const src = (idk && fbById.get(idk)) || (tk && fbByTitle.get(tk));
            if (src) {
              return {
                ...src,
                id: n.id || src.id,
                title: n.title || src.title,
                expr: n.expr || src.expr,
                vars: (n.vars && n.vars.length) ? n.vars : src.vars,
                output: (n.output && Object.keys(n.output || {}).length) ? n.output : src.output
              };
            }
            return n;
          });
        } catch { void 0; }

        // Final: desduplicar por id/title/signature (title + var names) manteniendo primer encuentro
        const seen = new Set();
        const unique = [];
        for (const it of (normalized || [])) {
          const idKey = String(it.id || '').toLowerCase();
          const titleKey = String(it.title || '').toLowerCase();
          const varsKey = Array.isArray(it.vars) ? it.vars.map(v => String(v.name || '').toLowerCase()).join(',') : '';
          const sig = idKey || `${titleKey}|${varsKey}`;
          if (!sig) {
            const uid = `auto-${Math.random().toString(36).slice(2,8)}`;
            if (!seen.has(uid)) { seen.add(uid); unique.push({ ...it, id: uid }); }
            continue;
          }
          if (!seen.has(sig)) { seen.add(sig); unique.push(it); }
        }
        normalized = unique;

        if (mounted) {
          setCalculators(normalized);
          try { console.debug('[CalculadoraCommon] loaded calculators:', (normalized || []).length, (normalized || []).map(x => ({ id: x.id, title: x.title }))); } catch { void 0; }

          setSelectedIndex(0);
        }

      } catch {
        if (mounted) setCalculators([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [topicId, normalizeCalc, extractVarsFromFormula]);

  // MOVER ARRIBA: calcular la calculadora actual antes de usarla en otros hooks/cómputos
  const currentCalc = useMemo(
    () => (calculators && calculators[selectedIndex]) || null,
    [calculators, selectedIndex]
  );

  // Calcula el conjunto de variables realmente usadas por la expr de la calculadora actual
  const varsForCurrentCalc = useMemo(() => {
    const c = currentCalc;
    if (!c) return [];
    const ids = extractIdentifiers(c.expr);
    if (!c.expr || ids.size === 0) return c.vars || [];
    return (c.vars || []).filter(v => ids.has(v.name));
  }, [currentCalc, extractIdentifiers]);

  // inicializar inputs cuando cambie la calculadora seleccionada (solo variables usadas)
  useEffect(() => {
    const calc = currentCalc;
    if (!calc) {
      setInputs({});
      setResult(null);
      return;
    }
    const map = {};
    (varsForCurrentCalc || []).forEach(v => {
      map[v.name] = map[v.name] ?? '';
    });
    setInputs(prev => ({ ...map, ...prev })); // preservar posibles valores coincidentes
    setResult(null);
  }, [currentCalc, varsForCurrentCalc]);

  const handleInputChange = (name, value) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  // helper: normalize variable entry
  const toNum = (v) => {
    console.log('toNum - Input:', v, 'Type:', typeof v);
    
    if (v === null || v === undefined || v === '') {
      console.log('toNum - Empty or null input, returning NaN');
      return NaN;
    }
    
    // Convertir a string y limpiar el formato
    const str = String(v).trim();
    console.log('toNum - String value:', str);
    
    // Reemplazar comas por puntos y eliminar espacios en blanco
    const cleanStr = str.replace(/,/g, '.').replace(/\s+/g, '');
    console.log('toNum - Cleaned string:', cleanStr);
    
    // Intentar convertir a número
    const n = Number(cleanStr);
    console.log('toNum - Parsed number:', n, 'Is finite:', Number.isFinite(n));
    
    return Number.isFinite(n) ? n : NaN;
  };

  const handleCalculate = () => {
    const calc = currentCalc;
    if (!calc || !calc.expr) {
      setResult({ ok: false, message: 'No hay expresión para calcular.' });
      return;
    }
    const vars = Array.isArray(varsForCurrentCalc) && varsForCurrentCalc.length ? varsForCurrentCalc : (calc.vars || []);
    const argNames = vars.map(v => v.name);
    const argValues = argNames.map(n => toNum(inputs[n]));
    if (argNames.length > 0 && argValues.some(v => Number.isNaN(v))) {
      setResult({ ok: false, message: 'Por favor completa todos los campos con valores numéricos.' });
      return;
    }
    try {
      const evaluator = new Function(...argNames, `return (${calc.expr});`);
      const value = evaluator(...argNames.map((_, i) => argValues[i]));
      setResult({ ok: true, value });
      // sincronizar output en inputs
      if (calc.output && calc.output.name) {
        const strVal = String(value);
        setInputs(prev => ({ ...prev, [calc.output.name]: strVal }));
      }
    } catch (err) {
      console.error('Calc error', err);
      setResult({ ok: false, message: 'Error al evaluar la expresión.' });
    }
  };

  // Asegurar derivación MRU para simulador aunque falten variables
  const deriveMRUData = useCallback(() => {
    const toNum = (val) => {
      if (val === null || val === undefined || val === '') return NaN;
      const n = Number(String(val).replace(',', '.'));
      return Number.isFinite(n) ? n : NaN;
    };
    let vVal = toNum(inputs.v);
    let dVal = toNum(inputs.d ?? inputs.distance ?? inputs['Δx']);
    let tVal = toNum(inputs.t);
    // Incorporar resultado si corresponde
    if (result?.ok) {
      const outName = String(currentCalc?.output?.name || '').toLowerCase();
      const rNum = toNum(result.value);
      if (['v','velocidad','velocity'].includes(outName)) vVal = rNum;
      if (['d','dx','distancia','distance','Δx'].includes(outName)) dVal = rNum;
      if (['t','tiempo','time'].includes(outName)) tVal = rNum;
    }
    // Completar faltantes simples
    if (!Number.isFinite(vVal) && Number.isFinite(dVal) && Number.isFinite(tVal) && tVal !== 0) {
      vVal = dVal / tVal;
    }
    if (!Number.isFinite(dVal) && Number.isFinite(vVal) && Number.isFinite(tVal)) {
      dVal = vVal * tVal;
    }
    if (!Number.isFinite(tVal) && Number.isFinite(dVal) && Number.isFinite(vVal) && vVal !== 0) {
      tVal = dVal / vVal;
    }
    return { v: vVal, d: dVal, t: tVal };
  }, [inputs, result, currentCalc]);

  return (
    <div className="calculator-common" style={{
      width: '100%',
      maxWidth: '100%',
      boxSizing: 'border-box',
      margin: 0,
      padding: '1rem',
      display: 'block',
      position: 'relative',
      overflow: 'visible'
    }}>
      <div className="calculator-selector" style={{
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        marginBottom: '1rem'
      }}>
        <label style={{ display: 'block', width: '100%' }}>Calculadora</label>
        <select
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          className="calculator-dropdown"
          style={{
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}
        >
          {loading ? <option>Cargando...</option> : (
            (calculators && calculators.length) ? calculators.map((c, i) => (
              <option key={`${c.id || 'calc'}-${i}`} value={i}>{c.title || c.label || c.id || `Calc ${i+1}`}</option>
            )) : <option>No hay calculadoras</option>
          )}
        </select>
      </div>

      {currentCalc && (
        <>
          <div style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
            {currentCalc.title || currentCalc.label}
          </div>
          <div className="calculator-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1rem',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            margin: 0,
            marginBottom: '1.5rem',
            padding: 0
          }}>
            {(varsForCurrentCalc || []).map(v => (
              <label 
                key={v.name} 
                className="calculator-input-label"
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  maxWidth: '100%', 
                  boxSizing: 'border-box',
                  margin: 0,
                  padding: '0.25rem 0'
                }}
              >
                <div className="calculator-input-label-text" style={{ marginBottom: '0.25rem' }}>
                  {v.label || v.name}{v.unit ? ` (${v.unit})` : ''}
                </div>
                <input
                  type="number"
                  value={inputs[v.name] ?? ''}
                  onChange={(e) => handleInputChange(v.name, e.target.value)}
                  placeholder={v.example || ''}
                  className="calculator-input"
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    border: '1px solid #ccc',
                    fontSize: '1rem'
                  }}
                />
              </label>
            ))}
          </div>

          <div className="calculator-buttons" style={{
            display: 'flex',
            gap: '1rem',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            marginTop: '1rem'
          }}>
            <button 
              onClick={handleCalculate} 
              className="calculator-button calculate-button"
              style={{
                flex: 1,
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                border: 'none',
                background: '#4CAF50',
                color: 'white',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              Calcular
            </button>
            <button 
              onClick={() => { setInputs({}); setResult(null); }} 
              className="calculator-button clear-button"
              style={{
                flex: 1,
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                border: '1px solid #ccc',
                background: '#f5f5f5',
                color: '#333',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              Limpiar
            </button>
          </div>

          <div className="calculator-result">
            {result ? (
              result.ok ? (
                <div className="result-success">
                  <strong>Resultado:</strong> {String(result.value)} {currentCalc.output?.unit || ''}
                </div>
              ) : (
                <div className="result-error">{result.message}</div>
              )
            ) : (
              <div className="result-prompt">Introduce valores y pulsa Calcular.</div>
            )}
          </div>
        </>
      )}

      {String(topicId).toLowerCase() === 'mru' && (() => {
          const { v: simV, d: simD, t: simT } = deriveMRUData();
          // Variables de la fórmula seleccionada
          const formulaVars = (varsForCurrentCalc || []).map(v => v.name);
          // Construir mapa de valores para chips
          const chipValues = {};
          // Valores base
          if (Number.isFinite(simV)) chipValues.v = simV;
          if (Number.isFinite(simD)) chipValues.d = simD;
          if (Number.isFinite(simT)) chipValues.t = simT;
          // Derivados adicionales si alguno presente
          if (Number.isFinite(simD) && Number.isFinite(simT) && !Number.isFinite(chipValues.v)) chipValues.v = simD / simT;
          if (Number.isFinite(simV) && Number.isFinite(simT) && !Number.isFinite(chipValues.d)) chipValues.d = simV * simT;
          if (Number.isFinite(simD) && Number.isFinite(simV) && !Number.isFinite(chipValues.t) && simV !== 0) chipValues.t = simD / simV;
          // x0 y x_f si la fórmula los usa
          if (formulaVars.some(n => /x0|x_?0/i.test(n))) chipValues.x0 = 0;
          if (formulaVars.some(n => /^x(f|_?f)?$|x_?final|x$/i.test(n))) {
            const dFinal = Number.isFinite(chipValues.d) ? chipValues.d : (Number.isFinite(chipValues.v) && Number.isFinite(chipValues.t) ? chipValues.v * chipValues.t : NaN);
            if (Number.isFinite(dFinal)) chipValues.x_f = (chipValues.x0 || 0) + dFinal;
          }
          return (
            <div style={{ marginTop: '1.5rem' }}>
              <MRUSimulator
                x0={0}
                v={simV}
                distance={simD}
                totalTime={simT}
                autoPlay={false}
                autoScale={true}
                marginMeters={10}
                showFormula={false}
                showHUD={false}
                variableList={formulaVars}
                chipValues={chipValues}
                variableLabels={{ v: 'v', d: 'd', t: 't', xFinal: 'x_f', x0: 'x0' }}
                style={{ marginTop: 8 }}
              />
            </div>
          );
        })()}
    </div>
  );
}