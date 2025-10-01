import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function MR() {
  return (
    <div className="page-theme mr-page">
      <SubtopicLayout
        meta={{
          id: 'mr',
          title: 'Movimiento Relativo',
          intro: '',
          tldr: '',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
