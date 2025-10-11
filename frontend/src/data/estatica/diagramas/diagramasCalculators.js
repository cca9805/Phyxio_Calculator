import { formatNumber } from "../../../utils/formatNumber";

// Función para convertir grados a radianes
const toRadians = (degrees) => degrees * (Math.PI / 180);

export const calculators = [
  {
    id: 'componentes-peso-inclinado',
    title: 'Componentes del Peso en un Plano Inclinado',
    description: 'Descompone el peso de un objeto en un plano inclinado en componentes paralela (Wx) y perpendicular (Wy) al plano.',
    variables: [
      { symbol: 'W', label: 'Peso del objeto', unit: 'N', example: '100' },
      { symbol: 'θ', label: 'Ángulo de inclinación', unit: '°', example: '30' },
    ],
    output: [
        { symbol: 'Wx', label: 'Componente paralela al plano', unit: 'N' },
        { symbol: 'Wy', label: 'Componente perpendicular al plano', unit: 'N' },
    ],
    resolve: (args) => {
      const W = Number(args.W);
      const theta = Number(args.θ);

      if (isNaN(W) || isNaN(theta)) {
        return { error: "Por favor, ingrese valores numéricos válidos." };
      }

      const thetaRad = toRadians(theta);
      const Wx = W * Math.sin(thetaRad);
      const Wy = W * Math.cos(thetaRad);

      return {
        result: { Wx, Wy },
        steps: [
          `Paso 1: Convertir el ángulo a radianes: $θ_{rad} = ${formatNumber(theta)}° * (\\frac{\\pi}{180}) \\approx ${formatNumber(thetaRad)}$ rad`,
          `Paso 2: Calcular la componente paralela (Wx): $W_x = W * sin(θ_{rad}) = ${formatNumber(W)} * sin(${formatNumber(thetaRad)}) \\approx ${formatNumber(Wx)}$ N`,
          `Paso 3: Calcular la componente perpendicular (Wy): $W_y = W * cos(θ_{rad}) = ${formatNumber(W)} * cos(${formatNumber(thetaRad)}) \\approx ${formatNumber(Wy)}$ N`,
        ],
      };
    },
  },
];
