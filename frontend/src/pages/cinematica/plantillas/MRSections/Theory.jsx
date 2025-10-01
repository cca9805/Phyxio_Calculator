import React from 'react';

export default function Theory() {
  return (
    <div className="space-y-4">
      <p className="leading-relaxed">
        El Movimiento Relativo (MR) estudia cómo se percibe el movimiento de un objeto desde diferentes marcos de referencia. La velocidad relativa entre dos objetos depende del marco de referencia desde el que se observe.
      </p>
      
      <div>
        <h4 className="font-semibold mb-2">Conceptos Clave</h4>
        <ul className="list-disc list-inside">
          <li>La velocidad relativa entre objetos A y B se expresa como: v_AB = v_A - v_B</li>
          <li>En una dimensión, para objetos que se mueven en la misma dirección: v_rel = |v_1 - v_2|</li>
          <li>Para objetos que se mueven en direcciones opuestas: v_rel = v_1 + v_2</li>
          <li>En dos dimensiones, se deben considerar las componentes vectoriales</li>
          <li>Las transformaciones de Galileo relacionan coordenadas en diferentes sistemas de referencia</li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold mb-2">Aplicaciones</h4>
        <p>
          El movimiento relativo es fundamental para resolver problemas de navegación, 
          encuentros entre vehículos, y movimientos dentro de sistemas en movimiento, 
          como una persona caminando dentro de un tren o un avión volando con viento.
        </p>
      </div>
    </div>
  );
}
