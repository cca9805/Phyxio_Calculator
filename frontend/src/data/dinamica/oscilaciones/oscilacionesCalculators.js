
export const calculators = [
  {
    id: 'fuerza-restauradora',
    title: 'Calculadora de fuerza restauradora',
    expr: 'F = -k * x',
    latex: 'F = -k x',
    vars: [
      { name: 'k', label: 'Constante de resorte (k)', unit: 'N/m', example: '50' },
      { name: 'x', label: 'Desplazamiento (x)', unit: 'm', example: '0.1' }
    ],
    output: { name: 'F', label: 'Fuerza restauradora', unit: 'N' }
  },
  {
    id: 'periodo-resorte',
    title: 'Calculadora de periodo de resorte',
    expr: 'T = 2 * Math.PI * Math.sqrt(m / k)',
    latex: 'T = 2\\pi \\sqrt{\\frac{m}{k}}',
    vars: [
      { name: 'm', label: 'Masa (m)', unit: 'kg', example: '0.5' },
      { name: 'k', label: 'Constante de resorte (k)', unit: 'N/m', example: '50' }
    ],
    output: { name: 'T', label: 'Periodo', unit: 's' }
  },
  {
    id: 'energia-mas',
    title: 'Calculadora de energía total en MAS',
    expr: 'E = 0.5 * k * A * A',
    latex: 'E = \\frac{1}{2} k A^2',
    vars: [
      { name: 'k', label: 'Constante de resorte (k)', unit: 'N/m', example: '50' },
      { name: 'A', label: 'Amplitud (A)', unit: 'm', example: '0.2' }
    ],
    output: { name: 'E', label: 'Energía total', unit: 'J' }
  }
];

export default calculators;
