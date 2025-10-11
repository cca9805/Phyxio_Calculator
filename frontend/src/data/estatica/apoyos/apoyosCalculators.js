
import { formatNumber } from "../../../utils/formatNumber";

export const calculators = [
  {
    id: "reaccion-apoyo-b-viga-simple",
    title: "Reacción en Apoyo B (Rodillo)",
    description: "Calcula la reacción vertical en el apoyo B (generalmente un rodillo) de una viga simplemente apoyada con una carga puntual.",
    formula: "R_B = (P * a) / L",
    variables: [
      { symbol: "P", label: "Carga puntual (P)", unit: "N", example: "100" },
      { symbol: "a", label: "Distancia de la carga al apoyo A (a)", unit: "m", example: "2" },
      { symbol: "L", label: "Longitud de la viga (L)", unit: "m", example: "10" },
    ],
    output: [
      { symbol: "R_B", label: "Reacción vertical en B (R_B)", unit: "N" },
    ],
    resolve: (args) => {
      const { P, a, L } = args;
      if (L <= 0) return { error: "La longitud L debe ser mayor que 0." };
      if (a < 0 || a > L) return { error: "La distancia 'a' debe estar dentro de la longitud de la viga." };

      const R_B = (P * a) / L;

      const steps = [
        `1. Aplicar la suma de momentos en el apoyo A (ΣM_A = 0).`,
        `   Momento de la carga P: M_P = P * a = ${P} * ${a} = ${formatNumber(P * a)} N·m (horario)`, 
        `   Momento de la reacción R_B: M_RB = R_B * L (antihorario)`, 
        `2. Igualar momentos para el equilibrio:`, 
        `   R_B * L = P * a`, 
        `   R_B = (${P} * ${a}) / ${L} = ${formatNumber(R_B)} N`,
      ];

      return { result: { R_B }, steps };
    },
  },
  {
    id: "reaccion-apoyo-a-viga-simple",
    title: "Reacción en Apoyo A (Pasador)",
    description: "Calcula la reacción vertical en el apoyo A (generalmente un pasador) usando la suma de fuerzas verticales, una vez conocida R_B.",
    formula: "R_A = P - R_B",
    variables: [
      { symbol: "P", label: "Carga puntual total (P)", unit: "N", example: "100" },
      { symbol: "R_B", label: "Reacción en B (R_B)", unit: "N", example: "20" },
    ],
    output: [
      { symbol: "R_A", label: "Reacción en A (R_A)", unit: "N" },
    ],
    resolve: (args) => {
      const { P, R_B } = args;
      const R_A = P - R_B;

      const steps = [
        `1. Aplicar la suma de fuerzas verticales (ΣF_y = 0).`, 
        `   Fuerzas hacia arriba: R_A + R_B`, 
        `   Fuerzas hacia abajo: P`, 
        `2. Igualar fuerzas para el equilibrio:`, 
        `   R_A + R_B = P`, 
        `   R_A = P - R_B = ${P} - ${R_B} = ${formatNumber(R_A)} N`, 
      ];

      return { result: { R_A }, steps };
    },
  },
];
