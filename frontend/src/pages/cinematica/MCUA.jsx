import React from "react";
import SubtopicLayout from "../../components/SubtopicLayout";

export default function MCUA() {
  return (
    <div className="page-theme mcua-page">
      <SubtopicLayout
        meta={{
          id: "mcua",
          title: "Movimiento Circular Uniformemente Acelerado",
          intro: "Movimiento circular con aceleración angular constante.",
          tldr: "Velocidad angular variable con aceleración angular constante",
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
