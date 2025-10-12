
import { formatNumber } from "../../../utils/formatNumber";

const degToRad = deg => deg * (Math.PI / 180);

export const calculators = [
  {
    id: 'componentes-peso-inclinado',
    title: 'Componentes del Peso en un Plano Inclinado',
    description: 'Descompone el peso de un objeto en un plano inclinado en componentes paralela (Wx) y perpendicular (Wy) al plano.',
    formula: "W_x = W \\cdot \\sin(\\theta) \\quad W_y = W \\cdot \\cos(\\theta)",
    variables: [
      { symbol: 'W', label: 'Peso del objeto', unit: 'N', example: '100' },
      { symbol: '\\theta', label: 'Ángulo de inclinación', unit: '°', example: '30' },
    ],
    output: {
        symbol: 'W_x, W_y',
        label: 'Componente paralela y perpendicular al plano',
        unit: 'N'
    },
    resolve: (args) => {
      const W = Number(args.W);
      const theta = Number(args['\\theta']);

      if (isNaN(W) || isNaN(theta)) {
        return { error: "Por favor, ingrese valores numéricos válidos." };
      }

      const thetaRad = degToRad(theta);
      const Wx = W * Math.sin(thetaRad);
      const Wy = W * Math.cos(thetaRad);

      return {
        result: {
            'W_x': formatNumber(Wx),
            'W_y': formatNumber(Wy)
        },
        steps: [
          `W_x = W \\cdot \\sin(\\theta) = ${formatNumber(W)} \\cdot \\sin(${theta}°) = ${formatNumber(Wx)}\\text{ N}`,
          `W_y = W \\cdot \\cos(\\theta) = ${formatNumber(W)} \\cdot \\cos(${theta}°) = ${formatNumber(Wy)}\\text{ N}`,
        ],
      };
    },
  },
];
