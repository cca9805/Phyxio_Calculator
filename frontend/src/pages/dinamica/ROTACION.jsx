import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function ROTACION() {
  return (
    <div className="page-theme rotacion-page" data-theme="rotacion">
      <SubtopicLayout
        meta={{
          id: 'rotacion',
          title: 'Rotación',
          intro: 'Estudio del movimiento rotacional de cuerpos rígidos.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
