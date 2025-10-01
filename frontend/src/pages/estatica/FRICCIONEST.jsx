import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function FRICCIONEST() {
  return (
    <div className="page-theme friccionest-page" data-theme="friccionest">
      <SubtopicLayout
        meta={{
          id: 'friccionest',
          title: 'Fricción en Equilibrio',
          intro: 'Estudio de la fricción en sistemas estáticos.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
