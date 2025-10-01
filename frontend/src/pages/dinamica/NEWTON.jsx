import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function NEWTON() {
  return (
    <div className="page-theme newton-page" data-theme="newton">
      <SubtopicLayout
        meta={{
          id: 'newton',
          title: 'Leyes de Newton',
          intro: 'Las tres leyes fundamentales que describen el movimiento de los cuerpos y las fuerzas que actúan sobre ellos.',
          tldr: '1ª Ley: Inercia. 2ª Ley: F=ma. 3ª Ley: Acción y Reacción.'
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}

