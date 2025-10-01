import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function FUERZAS() {
  return (
    <div className="page-theme fuerzas-page" data-theme="fuerzas">
      <SubtopicLayout
        meta={{
          id: 'fuerzas',
          title: 'Fuerzas y equilibrio',
          intro: 'Condiciones de equilibrio de fuerzas en sistemas en reposo.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
