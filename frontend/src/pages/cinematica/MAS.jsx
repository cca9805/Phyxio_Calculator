import React from "react";
import SubtopicLayout from "../../components/SubtopicLayout";

export default function MAS() {
  return (
    <div className="page-theme mas-page">
      <SubtopicLayout
        meta={{
          id: "mas",
          title: "Movimiento Armónico Simple",
          intro: "Movimiento oscilatorio periódico de un cuerpo en un sistema de resortes.",
          tldr: "Movimiento oscilatorio con frecuencia y amplitud constantes.",
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
