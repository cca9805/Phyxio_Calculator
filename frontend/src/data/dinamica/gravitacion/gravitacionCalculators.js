
export const calculators = [
  {
    id: 'ley-gravitacion-universal',
    title: 'Calculadora de fuerza gravitatoria',
    expr: 'F = G * m1 * m2 / (r * r)',
    latex: 'F = G \\frac{m_1 m_2}{r^2}',
    vars: [
      { name: 'G', label: 'Constante de gravitación universal (G)', unit: 'N·m²/kg²', example: '6.674e-11' },
      { name: 'm1', label: 'Masa 1 (m₁)', unit: 'kg', example: '5' },
      { name: 'm2', label: 'Masa 2 (m₂)', unit: 'kg', example: '10' },
      { name: 'r', label: 'Distancia entre masas (r)', unit: 'm', example: '2' }
    ],
    output: { name: 'F', label: 'Fuerza gravitatoria', unit: 'N' }
  },
  {
    id: 'peso',
    title: 'Calculadora de peso',
    expr: 'P = m * g',
    latex: 'P = m \\cdot g',
    vars: [
      { name: 'm', label: 'Masa (m)', unit: 'kg', example: '12' },
      { name: 'g', label: 'Aceleración gravitatoria (g)', unit: 'm/s²', example: '9.8' }
    ],
    output: { name: 'P', label: 'Peso', unit: 'N' }
  },
  {
    id: 'energia-potencial-gravitatoria',
    title: 'Calculadora de energía potencial gravitatoria',
    expr: 'U = -G * m1 * m2 / r',
    latex: 'U = -G \\frac{m_1 m_2}{r}',
    vars: [
      { name: 'G', label: 'Constante de gravitación universal (G)', unit: 'N·m²/kg²', example: '6.674e-11' },
      { name: 'm1', label: 'Masa 1 (m₁)', unit: 'kg', example: '3' },
      { name: 'm2', label: 'Masa 2 (m₂)', unit: 'kg', example: '7' },
      { name: 'r', label: 'Distancia entre masas (r)', unit: 'm', example: '5' }
    ],
    output: { name: 'U', label: 'Energía potencial gravitatoria', unit: 'J' }
  }
];

export default calculators;
