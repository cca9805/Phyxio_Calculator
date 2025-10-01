import React from "react";
import SubtopicLayout from "../../components/SubtopicLayout";

export default function MRUV() {
  return (
    <div className="page-theme mruv-page">
      <SubtopicLayout
        meta={{
          id: "mruv",
          title: "Movimiento Rectilíneo Uniforme Variado",
          intro: "Movimiento en línea recta con aceleración constante.",
          tldr: "Aceleración constante",
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
