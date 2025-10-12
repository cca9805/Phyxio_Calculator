
import { formatNumber } from "../../../utils/formatNumber";

export const calculators = [
  {
    id: "reaccion-apoyo-b-viga-simple",
    title: "Reacción en Apoyo B (Rodillo)",
    description: "Calcula la reacción vertical en el apoyo B (generalmente un rodillo) de una viga simplemente apoyada con una carga puntual.",
    formula: "R_B = \\frac{P \\cdot a}{L}",
    variables: [
      { symbol: "P", label: "Carga puntual (P)", unit: "N", example: "100" },
      { symbol: "a", label: "Distancia de la carga al apoyo A (a)", unit: "m", example: "2" },
      { symbol: "L", label: "Longitud de la viga (L)", unit: "m", example: "10" },
    ],
    output: 
      { symbol: "R_B", label: "Reacción vertical en B (R_B)", unit: "N" },
    
    resolve: (args) => {
      const P = Number(args.P);
      const a = Number(args.a);
      const L = Number(args.L);
      if ([P, a, L].some(isNaN)) return { error: "Valores inválidos." };
      if (L <= 0) return { error: "La longitud L debe ser mayor que 0." };
      if (a < 0 || a > L) return { error: "La distancia 'a' debe estar dentro de la longitud de la viga." };

      const R_B = (P * a) / L;

      const steps = [
        `\\Sigma M_A = 0`,
        `R_B \\cdot L - P \\cdot a = 0`,
        `R_B = \\frac{P \\cdot a}{L}`,
        `R_B = \\frac{${P} \\cdot ${a}}{${L}} = ${formatNumber(R_B)}\\text{ N}`
      ];

      return { result: { "R_B": formatNumber(R_B) }, steps };
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
    output: 
      { symbol: "R_A", label: "Reacción en A (R_A)", unit: "N" },
    
    resolve: (args) => {
      const P = Number(args.P);
      const R_B = Number(args["R_B"]);
      if ([P, R_B].some(isNaN)) return { error: "Valores inválidos." };
      
      const R_A = P - R_B;

      const steps = [
        `\\Sigma F_y = 0`,
        `R_A + R_B - P = 0`,
        `R_A = P - R_B`,
        `R_A = ${P} - ${R_B} = ${formatNumber(R_A)}\\text{ N}`
      ];

      return { result: { "R_A": formatNumber(R_A)}, steps };
    },
  },
];
