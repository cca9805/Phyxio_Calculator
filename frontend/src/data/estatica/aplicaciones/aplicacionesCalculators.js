
import { formatNumber } from "../../../utils/formatNumber";

const degToRad = deg => deg * (Math.PI / 180);

export const calculators = [
  {
    id: "tension-cables-simetrico",
    title: "Tensión en Cables Simétricos",
    formula: "T = \\frac{P}{2 \\cdot \\sin(\\theta)}",
    variables: [
      {
        symbol: "P",
        label: "Peso del objeto",
        unit: "N",
        example: "100",
      },
      {
        symbol: "theta",
        label: "Ángulo del cable con la horizontal",
        unit: "°",
        example: "30",
      },
    ],
    output: {
        symbol: "T",
        label: "Tensión en cada cable",
        unit: "N",
    },
    resolve: (args) => {
      const P = Number(args.P);
      const theta = Number(args.theta);

      if (isNaN(P) || isNaN(theta)) {
        return { error: 'Por favor, introduzca valores numéricos válidos.' };
      }

      if (theta <= 0 || theta >= 180) {
        return {
          error: "El ángulo debe estar entre 0 y 180 grados.",
        };
      }

      const thetaRad = degToRad(theta);
      const result = P / (2 * Math.sin(thetaRad));

      return {
        result: { T: result },
        steps: [
          `Fórmula: T = \\frac{P}{2 \\cdot \\sin(\\theta)}`,
          `Sustituyendo: T = \\frac{${P}}{2 \\cdot \\sin(${theta}^{\\circ})}`,
          `Resultado: T = ${formatNumber(result)} N`,
        ],
      };
    },
  },
];
