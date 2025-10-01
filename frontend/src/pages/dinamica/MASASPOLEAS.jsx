import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function MASASPOLEAS() {
  return (
    <div className="page-theme masaspoleas-page" data-theme="masaspoleas">
      <SubtopicLayout
        meta={{
          id: 'masaspoleas',
          title: 'Masas y Poleas',
          intro: 'Estudio de sistemas de masas conectadas por poleas y cuerdas.',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
