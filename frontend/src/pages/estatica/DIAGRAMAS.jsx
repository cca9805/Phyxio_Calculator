import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function DIAGRAMAS() {
  return (
    <div className="page-theme diagramas-page" data-theme="diagramas">
      <SubtopicLayout
        meta={{
          id: 'diagramas',
          title: 'Diagramas de Cuerpo Libre',
          intro: 'Representación gráfica de fuerzas en sistemas en equilibrio.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
