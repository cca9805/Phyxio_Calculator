import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function MAQUINAS() {
  return (
    <div className="page-theme maquinas-page" data-theme="maquinas">
      <SubtopicLayout
        meta={{
          id: 'maquinas',
          title: 'Maquinas Simples',
          intro: 'Estudio de las máquinas simples y su funcionamiento.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
