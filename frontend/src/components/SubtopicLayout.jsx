import React, { useState, useRef, useEffect } from 'react';
import { BlockMath } from 'react-katex';
import Layout from './Layout';
import Accordion from './Accordion';
import { useLocation } from 'react-router-dom';
import MarkdownRenderer from './MarkdownRenderer';
import pagesIndex from '../data';
import '../styles/nivel3.css';
import ExercisesCommon from './ExercisesCommon';
import TheoryCommon from './TheoryCommon';
import MCUData from '../data/cinematica/MCUData';
import CalculadoraCommon from './CalculadoraCommon';

// MRU formulas fallback (centralized in data)
import { formulas as mcuFormulas } from '../data/cinematica/mcu/mcuFormulas';
import { formulas as mcuaFormulas } from '../data/cinematica/mcua/mcuaFormulas';
import { formulas as mruFormulas } from '../data/cinematica/mru/mruFormulas';
import { formulas as mruvFormulas } from '../data/cinematica/mruv/mruvFormulas';
import { formulas as masFormulas } from '../data/cinematica/mas/masFormulas';
import { formulas as mpFormulas } from '../data/cinematica/mp/mpFormulas';
import { formulas as mrFormulas } from '../data/cinematica/mr/mrFormulas';
import { formulas as newtonFormulas } from '../data/dinamica/newton/newtonFormulas';
import { formulas as trabajoenergiaFormulas } from '../data/dinamica/trabajoenergia/trabajoenergiaFormulas';
import { formulas as movimpulsoFormulas } from '../data/dinamica/movimpulso/movimpulsoFormulas';
import { formulas as equilibrioFormulas } from '../data/dinamica/equilibrio/equilibrioFormulas';
import { formulas as friccionFormulas } from '../data/dinamica/friccion/friccionFormulas';
import { formulas as gravitacionFormulas } from '../data/dinamica/gravitacion/gravitacionFormulas';
import { formulas as maquinasFormulas } from '../data/dinamica/maquinas/maquinasFormulas';
import { formulas as oscilacionesFormulas } from '../data/dinamica/oscilaciones/oscilacionesFormulas';
import { formulas as rotacionFormulas } from '../data/dinamica/rotacion/rotacionFormulas';
import { formulas as masaspoleasFormulas } from '../data/dinamica/masaspoleas/masaspoleasFormulas';
import { formulas as fuerzasFormulas } from '../data/estatica/fuerzas/fuerzasFormulas';
import { formulas as torqueFormulas } from '../data/estatica/torque/torqueFormulas';
import { formulas as centroFormulas } from '../data/estatica/centro/centroFormulas';
import { formulas as leyesFormulas } from '../data/estatica/leyes/leyesFormulas';
import { formulas as apoyosFormulas } from '../data/estatica/apoyos/apoyosFormulas';
import { formulas as diagramasFormulas } from '../data/estatica/diagramas/diagramasFormulas';
import { formulas as friccionestFormulas } from '../data/estatica/friccionest/friccionestFormulas';
import { formulas as estructurasFormulas } from '../data/estatica/estructuras/estructurasFormulas';
import { formulas as estabilidadFormulas } from '../data/estatica/estabilidad/estabilidadFormulas';
import { formulas as aplicacionesFormulas } from '../data/estatica/aplicaciones/aplicacionesFormulas';
/* 
  SubtopicLayout
  - Centralized scaffold for all Nivel3 / subtopic pages.
  - Usage: Wrap page-specific content (cards, examples, calculators, simulators)
    inside this component as children. Provide `meta` and `items` when you
    want the right-hand reference panel and the Accordion content card to
    be populated automatically.
*/

// Reusable subtopic layout: TL;DR, TOC, Accordion, right reference panel and mobile ref
export default function SubtopicLayout({ meta = {}, items = [], rightPanel = null, children }) {
  // debug info (safe to remove)
  // console.log('=== SubtopicLayout se está renderizando ===', { meta });

  const [pageData, setPageData] = useState(null);
  // Forzar remount de la calculadora por tema para reiniciar animaciones (e.g., MCU)
  const [calcKey, setCalcKey] = useState(0);
  const metaId = meta && meta.id ? meta.id : null;

  useEffect(() => {
    let mounted = true;
    const id = metaId;
    if (!id) return;
    // Try local data index first
    try {
      const local = pagesIndex && pagesIndex.cinematica && pagesIndex.cinematica[id];
      if (local) {
        setPageData(local);
        return () => { mounted = false; };
      }
    } catch { /* ignore */ }

    // Fallback to network fetch (if backend exists)
    fetch(`/api/pages/${id}`)
      .then(r => { if (!r.ok) throw new Error('not found'); return r.json(); })
      .then(json => { if (mounted) setPageData(json); })
      .catch(() => { /* fallback to meta if no page */ });
    return () => { mounted = false; };
  }, [metaId]);

  // Obtener location e inferir topicId antes de cualquier uso
  const location = useLocation();
  const routePath = (location && location.pathname) ? location.pathname.toLowerCase() : '';
  const inferredFromPath = routePath.includes('/aplicaciones') ? 'aplicaciones' : (routePath.includes('/estabilidad') ? 'estabilidad' : (routePath.includes('/estructuras') ? 'estructuras' : (routePath.includes('/friccionest') ? 'friccionest' : (routePath.includes('/diagramas') ? 'diagramas' : (routePath.includes('/apoyos') ? 'apoyos' : (routePath.includes('/leyes') ? 'leyes' : (routePath.includes('/centro') ? 'centro' : (routePath.includes('/torque') ? 'torque' : (routePath.includes('/fuerzas') ? 'fuerzas' : (routePath.includes('/masaspoleas') ? 'masaspoleas' : (routePath.includes('/rotacion') ? 'rotacion' : (routePath.includes('/oscilaciones') ? 'oscilaciones' : (routePath.includes('/maquinas') ? 'maquinas' : (routePath.includes('/gravitacion') ? 'gravitacion' : (routePath.includes('/friccion') ? 'friccion' : (routePath.includes('/equilibrio') ? 'equilibrio' : (routePath.includes('/movimpulso') ? 'movimpulso' : (routePath.includes('/trabajoenergia') ? 'trabajoenergia' : (routePath.includes('/newton') ? 'newton' : (routePath.includes('/mas') ? 'mas' :
    routePath.includes('/mp') ? 'mp' :
    routePath.includes('/mcua') ? 'mcua' :
    routePath.includes('/mcu') ? 'mcu' :
    routePath.includes('/mruv') ? 'mruv' :
    routePath.includes('/mru') ? 'mru' :
    routePath.includes('/mr') ? 'mr' :
    null))))))))))))))))))));
  const rawTopicId = metaId || (pageData && (pageData.id || pageData.slug)) || inferredFromPath || '';
  const topicId = String(rawTopicId).toLowerCase();

  // Forzar remount de calculadora al cambiar de tema
  useEffect(() => { setCalcKey(k => k + 1); }, [topicId]);

  const navPalette = location && location.state ? (location.state.palette || location.state.variant) : null;
  const palette = navPalette || (pageData && pageData.palette) || meta.palette || null;
  const headerStyle = palette ? { background: `var(--${palette}-400)`, color: `var(--${palette}-900)` } : {};
  const panelStyle = palette ? { background: `var(--${palette}-200)`, color: `var(--${palette}-900)` } : {};

  // helper to normalize and resolve section content
  const resolveContent = (c) => {
    if (!c && c !== 0) return null;
    if (React.isValidElement(c)) return c;
    if (typeof c === 'function') return React.createElement(c);
    if (typeof c === 'string') return <MarkdownRenderer source={c} />;
    if (Array.isArray(c)) return c.map((item, i) => (
      typeof item === 'string' ? <MarkdownRenderer key={i} source={item} /> : (React.isValidElement(item) ? <span key={i}>{item}</span> : (typeof item === 'function' ? React.createElement(item) : <pre key={i}>{JSON.stringify(item)}</pre>))
    ));

    // if it's a module namespace or plain object, try common properties
    if (typeof c === 'object') {
      const maybe = c.default || c.Component || c.content || c.body || c;
      if (React.isValidElement(maybe)) return maybe;
      if (typeof maybe === 'function') return React.createElement(maybe);
      if (typeof maybe === 'string') return <MarkdownRenderer source={maybe} />;
      if (Array.isArray(maybe)) return maybe.map((item, i) => <div key={i}>{typeof item === 'string' ? <MarkdownRenderer source={item} /> : JSON.stringify(item)}</div>);
      if (maybe && typeof maybe === 'object' && maybe.content && typeof maybe.content === 'string') return <MarkdownRenderer source={maybe.content} />;
      return <pre>{JSON.stringify(maybe)}</pre>;
    }

    return null;
  };

  // Priorizar coincidencias específicas y evitar capturar MRU/MRUV con "mr" por substring
  const fallbackFormulas = topicId.includes('aplicaciones') ? aplicacionesFormulas : topicId.includes('estabilidad') ? estabilidadFormulas : topicId.includes('estructuras') ? estructurasFormulas : topicId.includes('friccionest') ? friccionestFormulas : topicId.includes('diagramas') ? diagramasFormulas : topicId.includes('apoyos') ? apoyosFormulas : topicId.includes('leyes') ? leyesFormulas : topicId.includes('centro') ? centroFormulas : topicId.includes('torque') ? torqueFormulas : topicId.includes('fuerzas') ? fuerzasFormulas : topicId.includes('masaspoleas') ? masaspoleasFormulas : topicId.includes('rotacion') ? rotacionFormulas : topicId.includes('oscilaciones') ? oscilacionesFormulas : topicId.includes('maquinas') ? maquinasFormulas : topicId.includes('gravitacion') ? gravitacionFormulas : topicId.includes('friccion') ? friccionFormulas : topicId.includes('equilibrio') ? equilibrioFormulas : topicId.includes('movimpulso') ? movimpulsoFormulas : topicId.includes('trabajoenergia') ? trabajoenergiaFormulas : topicId.includes('newton') ? newtonFormulas : topicId.includes('mcua') ? mcuaFormulas :
    topicId.includes('mruv') ? mruvFormulas :
    topicId.includes('mru')  ? mruFormulas  :
    topicId.includes('mcu')  ? mcuFormulas  :
    topicId.includes('mas')  ? masFormulas  :
    topicId.includes('mp')   ? mpFormulas   :
    (topicId === 'mr' ? mrFormulas : []);

  // prefer explicit pageData; if missing and topic is mcu, use MCUData as fallback
  const pageDataEffective = pageData || (topicId === 'mcu' ? MCUData : null);

  // extract formulas section from effective page data
  const formulasSection = (pageDataEffective && Array.isArray(pageDataEffective.sections)) ? pageDataEffective.sections.find(s => s.id === 'formulas' || s.type === 'formulas') : null;

  // helper: try obtain an array of formulas from various shapes (array, module.default, object.formulas)
  const extractFormulasArray = (maybe) => {
    if (!maybe) return null;
    if (Array.isArray(maybe)) return maybe;
    if (typeof maybe === 'object') {
      if (Array.isArray(maybe.default)) return maybe.default;
      if (Array.isArray(maybe.formulas)) return maybe.formulas;
      if (Array.isArray(maybe.content)) return maybe.content;
    }
    return null;
  };

  // formulasList: prefer page-defined formulas section, then meta, then fallback by topic
  const formulasList = (() => {
    if (!formulasSection) {
      return (meta.formulas || meta.formulasContent || fallbackFormulas || []);
    }
    if (Array.isArray(formulasSection.formulas) && formulasSection.formulas.length) {
      return formulasSection.formulas;
    }
    const fromContent = extractFormulasArray(formulasSection.content);
    if (Array.isArray(fromContent) && fromContent.length) return fromContent;
    return (meta.formulas || meta.formulasContent || fallbackFormulas || []);
  })();

  // helper to render a single formula object in a readable way
  const renderFormulaItem = (f) => {
    if (!f) return null;
    // prefer human-friendly title/name/label and fall back to id
    const title = f.title || f.name || f.label || f.id || `Fórmula`;
    const exprRaw = f.latex || f.formula || f.expr || f.expression || f.value || '';
    const description = f.description || f.desc || f.note || '';
    const vars = Array.isArray(f.variables) ? f.variables : (Array.isArray(f.vars) ? f.vars : (Array.isArray(f.variablesList) ? f.variablesList : []));

    // decide if we should render as LaTeX (prefer explicit latex property)
    const isLatex = Boolean(f.latex) || /\\\(|\\\[|\\frac|\\omega|\\alpha|\\theta|\\sqrt|\\left|\\right/.test(exprRaw);
    // No modifiques el string latexContent, pásalo tal cual al BlockMath
    const latexContent = exprRaw;

    return (
      <div key={f.id || title} className="formula-card" style={{ marginBottom: '0.75rem', padding: '0.75rem' }}>
        <div className="formula-title" style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{title}</div>

        <div className="formula-expression" style={{ marginTop: '0.25rem' }}>
          {exprRaw ? (
            isLatex ? (
              <div className="formula-latex"><BlockMath math={latexContent} /></div>
            ) : (
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{exprRaw}</pre>
            )
          ) : null}
        </div>

        {description ? <div className="formula-desc" style={{ marginTop: '0.25rem', color: 'rgba(0,0,0,0.7)' }}>{description}</div> : null}

        {vars && vars.length ? (
          <div className="formula-vars" style={{ marginTop: '0.5rem' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Variables:</div>
            <ul style={{ margin: '0.25rem 0 0.5rem 1rem' }}>
              {vars.map((v, i) => {
                const sym = v.symbol || v.name || v.label || `v${i}`;
                const nm = v.name || v.label || '';
                const unit = v.unit ? ` (${v.unit})` : '';
                return <li key={i}><strong>{sym}</strong> {nm}{unit}</li>;
              })}
            </ul>
          </div>
        ) : null}

        {Array.isArray(f.examples) && f.examples.length ? (
          <div className="formula-examples" style={{ marginTop: '0.5rem' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Ejemplos:</div>
            {f.examples.map((ex, i) => (
              <div key={i} style={{ marginTop: '0.25rem' }}>
                {ex.title ? <div style={{ fontWeight: 600 }}>{ex.title}</div> : null}
                {ex.description ? <div>{ex.description}</div> : null}
                {ex.calculation ? <pre style={{ margin: '0.25rem 0' }}>{ex.calculation}</pre> : null}
                {ex.result ? <div><strong>Resultado:</strong> {ex.result}</div> : null}
              </div>
            ))}
          </div>
        ) : null}

        {Array.isArray(f.notes) && f.notes.length ? (
          <div className="formula-notes" style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'rgba(0,0,0,0.6)' }}>
            <div style={{ fontWeight: 600 }}>Notas:</div>
            <ul style={{ margin: '0.25rem 0 0.5rem 1rem' }}>
              {f.notes.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </div>
        ) : null}
      </div>
    );
  };

  const renderSectionContent = (s) => {
    const c = s.content;
    // Normalizar tipo de sección para evitar que "formulas" se trate como calculadora por error de tipo
    const sectionId = String(s.id || '').toLowerCase();
    const sectionType = String(s.type || '').toLowerCase();
    const treatAsFormulas = sectionId === 'formulas' || sectionType === 'formulas';
    const treatAsCalculators = !treatAsFormulas && (sectionType === 'calculators' || sectionType === 'calculadora' || sectionId === 'calculadoras');

    // calculators sections (support common ids/types) -> interactive, unified component
    if (treatAsCalculators) {
      return (
        <div
          className="calculators-card"
          style={{
            ...panelStyle,
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            margin: 0,
            padding: '1rem',
            display: 'block',
            position: 'relative',
            overflow: 'visible',
            minHeight: 220 // evitar colapsos que rompan canvas/animaciones (canvas necesita layout estable)
          }}
        >
          <CalculadoraCommon
            key={`calc-${topicId}-${calcKey}`} // remount garantizado al entrar al subtema
            topicId={topicId}
          />
        </div>
      );
    }

    if (treatAsFormulas) {
      // support multiple shapes: s.formulas, s.content (array), s.content.default, etc.
      const formulas = Array.isArray(s.formulas) ? s.formulas : (Array.isArray(c) ? c : (Array.isArray(c && c.default) ? c.default : []));
      if (formulas.length > 0) {
        return (
          <div className="formulas-card">
            <div className="formulas-grid">
              {formulas.map(f => renderFormulaItem(f))}
            </div>
          </div>
        );
      }
      // fallback: render resolved content if any
      // si no hay contenido en la sección, usar fallbackFormulas para no mostrar calculadora por error de tipado
      return (
        <div className="formulas-card">
          {Array.isArray(fallbackFormulas) && fallbackFormulas.length
            ? <div className="formulas-grid">{fallbackFormulas.map(f => renderFormulaItem(f))}</div>
            : resolveContent(c)}
        </div>
      );
    }

    return <div className="theory-card">{resolveContent(c)}</div>;
  };

  // Función auxiliar para obtener descripciones por defecto
  const getDefaultDescription = (sectionId) => {
    const descriptions = {
      'teoria': 'Conceptos fundamentales y explicaciones detalladas',
      'formulas': 'Ecuaciones principales y relaciones matemáticas',
      'ejercicios': 'Problemas resueltos y ejercicios de práctica',
      'calculadoras': 'Herramientas interactivas para cálculos automáticos',
      'simulador': 'Simulaciones visuales e interactivas',
      'tips': 'Consejos útiles y trucos para resolver problemas'
    };
    return descriptions[sectionId] || 'Contenido adicional del tema';
  };

  // Función auxiliar para obtener íconos por defecto
  const getDefaultIcon = (sectionId) => {
    const icons = {
      'teoria': '📚',
      'formulas': '🧮',
      'ejercicios': '📝',
      'calculadoras': '⚡',
      'simulador': '🎮',
      'ejemplos': '💡',
      'tips': '🎯'
    };
    return icons[sectionId] || '📄';
  };

  // Función para crear títulos con descripción e ícono (usa clases CSS)
  const createAccordionTitle = (mainTitle, description, icon) => (
    <div className="accordion-summary summary-row">
      <div className="summary-icon">
        <span className="icon-text">{icon}</span>
      </div>
      <div className="summary-title">
        <div className="summary-main">{mainTitle}</div>
        <div className="summary-sub">{description}</div>
      </div>
    </div>
  );

  // If effective pageData has sections, map those to accordion items; otherwise fall back to meta-based defaults
  const defaultItems = (pageDataEffective && Array.isArray(pageDataEffective.sections)) ? pageDataEffective.sections.map(s => ({
     id: s.id,
     title: createAccordionTitle(
       s.title || s.id,
       s.description || getDefaultDescription(s.id),
       s.icon || getDefaultIcon(s.id)
     ),
     content: renderSectionContent(s)
  })) : [
     { 
       id: 'teoria', 
       title: createAccordionTitle(
         'Teoría',
         'Conceptos fundamentales y explicaciones detalladas',
         '📚'
       ),
       // aplicar panelStyle para que la teoría reciba los mismos tonos que el panel
       content: meta.theoryContent 
         ? <div className="theory-card" style={panelStyle}>{resolveContent(meta.theoryContent)}</div>
         : <div className="theory-card" style={panelStyle}>
            <TheoryCommon topicId={topicId} panelStyle={panelStyle} fallback={<div>Teoría no disponible. Puedes añadir <code>data/cinematica/{topicId}/teoria.md</code>.</div>} />
          </div>
     },
     { 
       id: 'formulas', 
       title: createAccordionTitle(
         'Fórmulas',
         'Ecuaciones principales y relaciones matemáticas',
         '🧮'
       ),
       content: (
         <div className="formulas-card" style={panelStyle}>
           {Array.isArray(formulasList) && formulasList.length > 0 ? (
             <div className="formulas-grid">
               {formulasList.map(f => renderFormulaItem(f))}
             </div>
           ) : (meta.formulasContent ? resolveContent(meta.formulasContent) : <div>Fórmulas principales y definiciones.</div>)}
         </div>
       )
     },
     { 
       id: 'ejercicios', 
       title: createAccordionTitle(
         'Ejercicios',
         'Problemas resueltos y ejercicios de práctica',
         '📝'
       ),
       content: <div className="exercises-card"><ExercisesCommon topicId={topicId} /></div> 
     },
     { 
       id: 'calculadoras', 
       title: createAccordionTitle(
         'Calculadoras',
         'Herramientas interactivas para cálculos automáticos',
         '⚡'
       ),
       // Use the interactive calculator component so all topics share the same structure
       content: (
         <div className="calculators-card" style={panelStyle}>
           <CalculadoraCommon topicId={topicId} />
         </div>
       )
     }
   ];

  const effectiveItems = Array.isArray(items) && items.length > 0 ? items : defaultItems;

  // build page class (e.g. "mru-page", "mruv-page") so CSS theme blocks apply automatically
  const pageClass = `${topicId || metaId || ''}-page`.trim();

  return (
    <Layout title={meta.title} intro={meta.intro}>
      <div className={`page-theme ${pageClass}`}>
        <div className="nivel3-grid">
          <div className="nivel3-content">
            <section className="nivel3-section">
              <Accordion items={effectiveItems} headerStyle={headerStyle} panelStyle={panelStyle} />
            </section>
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}