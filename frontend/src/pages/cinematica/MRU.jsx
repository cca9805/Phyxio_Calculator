import React from "react";
import SubtopicLayout from "../../components/SubtopicLayout";

export default function MRU() {
  return (
    <div className="page-theme mru-page">
      <SubtopicLayout
        meta={{
          id: "mru",
          title: "Movimiento Rectilíneo Uniforme",
          intro: "Movimiento en línea recta con velocidad constante.",
          tldr: "Velocidad constante",
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
