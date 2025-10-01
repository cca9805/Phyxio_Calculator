
export const formulas = [
  {
    id: 'aceleracion-masas-polea',
    title: 'Aceleración del sistema de masas y polea',
    formula: 'a = (m1 * g - m2 * g) / (m1 + m2)',
    latex: 'a = \\frac{m_1 g - m_2 g}{m_1 + m_2}',
    description: 'La aceleración común de dos masas conectadas por una cuerda sobre una polea ideal.',
    variables: [
      { symbol: 'a', name: 'Aceleración', unit: 'm/s²' },
      { symbol: 'm_1', name: 'Masa 1', unit: 'kg' },
      { symbol: 'm_2', name: 'Masa 2', unit: 'kg' },
      { symbol: 'g', name: 'Aceleración gravitatoria', unit: 'm/s²' }
    ]
  },
  {
    id: 'tension-cuerda',
    title: 'Tensión en la cuerda',
    formula: 'T = m1 * (g - a)',
    latex: 'T = m_1 (g - a)',
    description: 'La tensión en la cuerda para la masa 1.',
    variables: [
      { symbol: 'T', name: 'Tensión', unit: 'N' },
      { symbol: 'm_1', name: 'Masa 1', unit: 'kg' },
      { symbol: 'g', name: 'Aceleración gravitatoria', unit: 'm/s²' },
      { symbol: 'a', name: 'Aceleración', unit: 'm/s²' }
    ]
  }
];

export default formulas;
