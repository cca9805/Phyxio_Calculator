import React from 'react';
import { BlockMath } from 'react-katex';
import { formulas } from '../../../data/dinamica/newton/newtonFormulas';

const stripDelimiters = (s) => s.replace(/^\\\(|\\\)$/g, '').replace(/^\\\[|\\\]$/g, '');

export default function Formulas() {
  return (
    <div className="formulas-grid">
      {formulas.map(f => (
        <div className="formula-card" key={f.id}>
          <h4 className="formula-title">{f.title}</h4>
          <div className="formula-latex"><BlockMath math={stripDelimiters(f.formula)} /></div>
          <p className="formula-desc">{f.description}</p>
        </div>
      ))}
    </div>
  );
}