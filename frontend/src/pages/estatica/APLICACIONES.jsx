import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function APLICACIONES() {
  return (
    <div className="page-theme aplicaciones-page" data-theme="aplicaciones">
      <SubtopicLayout
        meta={{
          id: 'aplicaciones',
          title: 'Aplicaciones en Ingeniería y Arquitectura',
          intro: 'Ejemplos prácticos de estática en ingeniería y arquitectura.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
