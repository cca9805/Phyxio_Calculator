// filepath: src/data/dinamica/equilibrio/equilibrioCalculators.js
export const calculators = [
  {
    id: 'torque',
    title: 'Calculadora de Torque',
    expr: 'tau = F * r * Math.sin(theta)',
    latex: '\\tau = F \\cdot r \\cdot \\sin(\\theta)',
    vars: [
      { name: 'F', label: 'Fuerza (F)', unit: 'N', example: '10' },
      { name: 'r', label: 'Distancia al eje (r)', unit: 'm', example: '2' },
      { name: 'theta', label: 'Ángulo (θ, en grados)', unit: 'grados', example: '90' }
    ],
    output: { name: 'tau', label: 'Torque', unit: 'N·m' }
  },
  {
    id: 'palanca',
    title: 'Calculadora de Equilibrio de Palanca',
    expr: 'F2 = F1 * r1 / r2',
    latex: 'F_2 = \\frac{F_1 \\cdot r_1}{r_2}',
    vars: [
      { name: 'F1', label: 'Fuerza 1 (F₁)', unit: 'N', example: '15' },
      { name: 'r1', label: 'Distancia 1 (r₁)', unit: 'm', example: '0.5' },
      { name: 'r2', label: 'Distancia 2 (r₂)', unit: 'm', example: '0.3' }
    ],
    output: { name: 'F2', label: 'Fuerza 2', unit: 'N' }
  }
];

export default calculators;
