import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function MOVIMPULSO() {
  return (
    <div className="page-theme movimpulso-page" data-theme="movimpulso">
      <SubtopicLayout
        meta={{
          id: 'movimpulso',
          title: 'Movimiento e Impulso',
          intro: 'El estudio del movimiento de los cuerpos y el impulso que reciben debido a las fuerzas aplicadas.',
          tldr: 'Cambio de cantidad de movimiento',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
