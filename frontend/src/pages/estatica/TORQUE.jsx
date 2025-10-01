import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function TORQUE() {
  return (
    <div className="page-theme torque-page" data-theme="torque">
      <SubtopicLayout
        meta={{
          id: 'torque',
          title: 'Torque y Momento de Fuerza',
          intro: 'Estudio del torque y su aplicación en la estática.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
