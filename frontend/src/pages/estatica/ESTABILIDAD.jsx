import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function ESTABILIDAD() {
  return (
    <div className="page-theme estabilidad-page" data-theme="estabilidad">
      <SubtopicLayout
        meta={{
          id: 'estabilidad',
          title: 'Estabilidad y Condiciones de Equilibrio',
          intro: 'Criterios de estabilidad y equilibrio en sistemas físicos.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
