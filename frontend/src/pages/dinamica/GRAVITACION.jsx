import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function GRAVITACION() {
  return (
    <div className="page-theme gravitacion-page" data-theme="gravitacion">
      <SubtopicLayout
        meta={{
          id: 'gravitacion',
          title: 'Gravitacion',
          intro: 'Estudio de la gravedad y las fuerzas gravitacionales.',
          tldr: 'Ley de la gravitación universal'
        }}
        items={[]}
      />
    </div>
  );
}
