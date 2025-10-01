import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function LEYES() {
  return (
    <div className="page-theme leyes-page" data-theme="leyes">
      <SubtopicLayout
        meta={{
          id: 'leyes',
          title: 'Leyes de los Cuerpos Rígidos',
          intro: 'Estudio de las propiedades y leyes que rigen a los cuerpos rígidos en equilibrio.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
