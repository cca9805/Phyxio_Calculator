import React from "react";
import SubtopicLayout from "../../components/SubtopicLayout";

export default function MP() {
  return (
    <div className={`page-theme mp-page`}>
      <SubtopicLayout
        meta={{
          id: "mp",
          title: "Movimiento Parabólico",
          intro: "Mmovimiento de un cuerpo bajo la acción de la gravedad",
          tldr: "Aceleración constante en la dirección vertical y velocidad constante en la dirección horizontal",
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
