import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function CENTRO() {
  return (
    <div className="page-theme centro-page" data-theme="centro">
      <SubtopicLayout
        meta={{
          id: 'centro',
          title: 'Centro de masas',
          intro: 'Estudio del punto donde se concentra la masa de un objeto o sistema y la gravedad.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
