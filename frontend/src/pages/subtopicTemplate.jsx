import React from 'react';
import SubtopicLayout from '../components/SubtopicLayout';
import Calculator from '../components/Calculator';
import Simulator from '../components/Simulator';

export default function SubtopicTemplate() {
  const items = [
    { id: 'teoria', title: 'Teoría', content: <p>Teoría central del subtema.</p> },
    { id: 'ejemplos', title: 'Ejemplos', content: <p>Ejemplos resueltos.</p> },
    { id: 'formulas', title: 'Fórmulas', content: <p>Lista de fórmulas.</p> },
  ];

  return (
    <SubtopicLayout meta={{ title: 'Plantilla de Subtema', intro: 'Intro breve', tldr: 'Resumen' }} items={items}>
      <div className="custom-content">
        <div className="intro-card">Aquí va el intro-card que se mantiene centralizado.</div>
        <hr />
        <div className="content-card">
          <h4>Contenido principal</h4>
          <p>Este card muestra el contenido principal para el subtema.</p>
          <Calculator />
          <Simulator />
        </div>
      </div>
    </SubtopicLayout>
  );
}
