import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function EQUILIBRIO() {
  return (
    <div className="page-theme equilibrio-page" data-theme="equilibrio">
      <SubtopicLayout
        meta={{
          id: 'equilibrio',
          title: 'Equilibrio',
          intro: 'El estudio del equilibrio de fuerzas y momentos en sistemas físicos.',
          tldr: 'Balance de fuerzas y momentos',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
