import { formatNumber } from '../../../../utils/formatNumber';

const MU0 = 4 * Math.PI * 1e-7; // Permeabilidad del vacío

export const calculators = [
  {
    id: 'campo-alambre-infinito',
    title: 'Campo de Alambre Infinito',
    formula: 'B = (μ₀ * I) / (2 * π * r)',
    description: "Calcula el campo magnético a una distancia 'r' de un alambre conductor recto e infinito.",
    variables: [
      { symbol: 'I', label: 'Corriente (I)', unit: 'A', example: '10' },
      { symbol: 'r', label: 'Distancia (r)', unit: 'm', example: '0.05' }
    ],
    output: { symbol: 'B', label: 'Campo Magnético (B)', unit: 'T' },
    resolve: ({ I, r }) => {
      if (r === 0) return { error: "La distancia no puede ser cero." };
      const B = (MU0 * I) / (2 * Math.PI * r);
      const steps = [
        `Constante: μ₀ = ${MU0.toExponential()} T·m/A`,
        `B = (${MU0.toExponential()} * ${I}) / (2 * π * ${r})`,
        `B = ${formatNumber(B)} T`
      ];
      return { result: { B }, steps };
    }
  },
  {
    id: 'campo-espira-circular',
    title: 'Campo en Centro de Espira Circular',
    formula: 'B = (μ₀ * I) / (2 * R)',
    description: "Calcula el campo magnético en el centro de una espira circular de radio 'R'.",
    variables: [
      { symbol: 'I', label: 'Corriente (I)', unit: 'A', example: '5' },
      { symbol: 'R', label: 'Radio de la espira (R)', unit: 'm', example: '0.1' }
    ],
    output: { symbol: 'B', label: 'Campo Magnético (B)', unit: 'T' },
    resolve: ({ I, R }) => {
      if (R === 0) return { error: "El radio no puede ser cero." };
      const B = (MU0 * I) / (2 * R);
      const steps = [
        `Constante: μ₀ = ${MU0.toExponential()} T·m/A`,
        `B = (${MU0.toExponential()} * ${I}) / (2 * ${R})`,
        `B = ${formatNumber(B)} T`
      ];
      return { result: { B }, steps };
    }
  }
];