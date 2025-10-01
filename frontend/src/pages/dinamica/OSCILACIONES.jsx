import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function OSCILACIONES() {
  return (
    <div className="page-theme oscilaciones-page" data-theme="oscilaciones">
      <SubtopicLayout
        meta={{
          id: 'oscilaciones',
          title: 'Oscilaciones',
          intro: 'Estudio del movimiento repetitivo alrededor de una posición de equilibrio.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
