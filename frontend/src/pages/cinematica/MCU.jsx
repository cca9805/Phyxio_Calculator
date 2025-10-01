import React from "react";
import SubtopicLayout from "../../components/SubtopicLayout";
import CalculadoraCommon from "../../components/CalculadoraCommon";

export default function MCU() {
  return (
    <div className="page-theme mcu-page">
      <SubtopicLayout
        meta={{
          id: "mcu",
          title: "Movimiento Circular Uniforme",
          intro: "Movimiento circular con rapidez constante.",
          tldr: "Rapidez constante",
        }}
        items={[]}
        rightPanel={
          <div className="calculator-container">
            <h3>Calculadora MCU</h3>
            <CalculadoraCommon topicId="mcu" />
          </div>
        }
      />
    </div>
  );
}
