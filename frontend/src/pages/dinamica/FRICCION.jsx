
import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';


export default function FRICCION() {
  return (
    <div className="page-theme friccion-page" data-theme="friccion">
      <SubtopicLayout
        meta={{
          id: 'friccion',
          title: 'Fricción',
          intro: 'Estudio de la fuerza de fricción entre superficies en contacto.',
          tldr: 'Fuerza de fricción'
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
