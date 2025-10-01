import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { getCalculatorsByTopic, getFormulasByTopic } from '../utils/loadFormulas';
import { calculators as mcuaCalculators } from '../data/cinematica/mcua/mcuaCalculators';
import { calculators as mruCalculators } from '../data/cinematica/mru/mruCalculators';
import { calculators as mruvCalculators } from '../data/cinematica/mruv/mruvCalculators';
import { calculators as mcuCalculators } from '../data/cinematica/mcu/mcuCalculators';
import MRUScene from '../simulators/scenes/MRUScene';
import './calculadoraCommon.css';

export default function CalculadoraCommon({ topicId = 'mcua' }) {
  const [calculators, setCalculators] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resetKey, setResetKey] = useState(0);

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
    const tokens = expr.match(/[A-Za-z_]\\\\w*/g) || [];
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

  const validateAndParse = (val) => {
    const s = String(val ?? '').trim();
    if (s === '') return NaN;
    const num = Number(s.replace(',', '.'));
    return Number.isFinite(num) ? num : NaN;
  };

  const handleCalculate = () => {
    const calc = currentCalc;
    if (!calc || !calc.expr) {
      setResult({ ok: false, message: 'No hay expresión para calcular.' });
      return;
    }
    const vars = Array.isArray(varsForCurrentCalc) && varsForCurrentCalc.length ? varsForCurrentCalc : (calc.vars || []);
    const argNames = vars.map(v => v.name);
    const argValues = argNames.map(n => validateAndParse(inputs[n]));
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

  const toNum = (val) => {
    const n = Number(String(val ?? '').replace(',', '.'));
    return Number.isFinite(n) ? n : NaN;
  };

  return (
    <div className="calculator-common" style={{ width: '100%' }}>
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: 'block', marginBottom: 6 }}>Calculadora</label>
        <select
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          style={{ width: '100%', padding: '8px', borderRadius: 6 }}
        >
          {loading ? <option>Cargando...</option> : (
            (calculators && calculators.length) ? calculators.map((c, i) => (
              <option key={`${c.id || 'calc'}-${i}`} value={i}>{c.title || c.label || c.id || `Calc ${i+1}`}</option>
            )) : <option>No hay calculadoras</option>
          )}
        </select>
      </div>

      {currentCalc && (
        <> {/* fragment para agrupar todos los elementos renderizados */}
          <div style={{ marginBottom: 10, fontWeight: 600 }}>{currentCalc.title || currentCalc.label}</div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 12,
              width: '100%',
              direction: 'rtl'
            }}
          >
            {(varsForCurrentCalc || []).map(v => (
              <label
                key={v.name}
                style={{
                  display: 'block',
                  marginBottom: 8,
                  direction: 'ltr',
                  textAlign: 'left'
                }}
              >
                <div style={{ fontSize: 12, marginBottom: 6 }}>{v.label || v.name}{v.unit ? ` (${v.unit})` : ''}</div>
                <input
                  type="number"
                  value={inputs[v.name] ?? ''}
                  onChange={(e) => handleInputChange(v.name, e.target.value)}
                  placeholder={v.example || ''}
                  style={{
                    width: '100%',
                    padding: 8,
                    borderRadius: 6,
                    boxSizing: 'border-box',
                    textAlign: 'right'
                  }}
                />
              </label>
            ))}
          </div>

          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <button onClick={handleCalculate} style={{ padding: '8px 12px', borderRadius: 6, background: '#4ecdc4', color: '#fff', border: 'none' }}>
              Calcular
            </button>
            <button onClick={() => { setInputs({}); setResult(null); }} style={{ padding: '8px 12px', borderRadius: 6 }}>
              Limpiar
            </button>
          </div>

          <div style={{ marginTop: 12 }}>
            {result ? (
              result.ok ? (
                <div style={{ padding: 10, background: '#eef', borderRadius: 6 }}>
                  <strong>Resultado:</strong> {String(result.value)} {currentCalc.output?.unit || ''}
                </div>
              ) : (
                <div style={{ padding: 10, background: '#fee', borderRadius: 6, color: '#900' }}>{result.message}</div>
              )
            ) : (
              <div style={{ color: '#666' }}>Introduce valores y pulsa Calcular.</div>
            )}
          </div>

          {/* Renderizar el simulador MRU */}
          {String(topicId).toLowerCase().includes('mru') && (
            <div style={{ marginTop: 16 }}>
              <MRUScene
                width={560}
                height={260}
                inputs={inputs}
                resetKey={resetKey}
                parameterToCalculate={result?.ok ? 'd' : 'v'} // Ajustar según el resultado
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
