import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function ESTRUCTURAS() {
  return (
    <div className="page-theme estructuras-page" data-theme="estructuras">
      <SubtopicLayout
        meta={{
          id: 'estructuras',
          title: 'Estructuras, Soportes y Armaduras',
          intro: 'Estudio de vigas, puentes y armaduras en equilibrio.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
