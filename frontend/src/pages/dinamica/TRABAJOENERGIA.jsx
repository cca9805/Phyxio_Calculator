
import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function TRABAJOENERGIA() {
  return (
    <div className="page-theme newton-page" data-theme="trab-energia">
      <SubtopicLayout
        meta={{
          id: 'trabajoenergia',
          title: 'Trabajo y Energía',
          intro: 'Estudio del trabajo realizado por fuerzas y la energía asociada a los cuerpos en movimiento.',
          tldr: 'Trabajo = Fuerza x Distancia; Energía Cinética y Potencial.'
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}