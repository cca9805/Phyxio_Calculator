export const calculators = [
  {
    id: 'torque',
    title: 'Calculadora de torque',
    expr: 'tau = F * r * Math.sin(theta)',
    latex: '\\tau = F \\cdot r \\cdot \\sin(\\theta)',
    vars: [
      { name: 'F', label: 'Fuerza (F)', unit: 'N', example: '15' },
      { name: 'r', label: 'Distancia al eje (r)', unit: 'm', example: '0.4' },
      { name: 'theta', label: 'Ángulo (θ, en radianes)', unit: 'rad', example: '1.5708' }
    ],
    output: { name: 'tau', label: 'Torque', unit: 'N·m' }
  }
];

export default calculators;
