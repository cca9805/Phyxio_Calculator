import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function APOYOS() {
  return (
    <div className="page-theme apoyos-page" data-theme="apoyos">
      <SubtopicLayout
        meta={{
          id: 'apoyos',
          title: 'Apoyos y Reacciones',
          intro: 'Estudio de los diferentes tipos de apoyos y las reacciones que generan en estructuras estáticas.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
