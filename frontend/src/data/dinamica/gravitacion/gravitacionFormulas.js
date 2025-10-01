
export const formulas = [
  {
    id: 'ley-gravitacion-universal',
    title: 'Ley de la Gravitación Universal',
    formula: 'F = G \\frac{m_1 m_2}{r^2}',
    latex: 'F = G \\frac{m_1 m_2}{r^2}',
    description: 'La fuerza de atracción entre dos masas separadas por una distancia r.',
    variables: [
      { symbol: 'F', name: 'Fuerza gravitatoria', unit: 'N' },
      { symbol: 'G', name: 'Constante de gravitación universal', unit: 'N·m²/kg²' },
      { symbol: 'm_1', name: 'Masa 1', unit: 'kg' },
      { symbol: 'm_2', name: 'Masa 2', unit: 'kg' },
      { symbol: 'r', name: 'Distancia entre masas', unit: 'm' }
    ]
  },
  {
    id: 'peso',
    title: 'Peso',
    formula: 'P = m \\cdot g',
    latex: 'P = m \\cdot g',
    description: 'El peso es la fuerza gravitatoria que la Tierra ejerce sobre un objeto.',
    variables: [
      { symbol: 'P', name: 'Peso', unit: 'N' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'g', name: 'Aceleración gravitatoria', unit: 'm/s²' }
    ]
  },
  {
    id: 'energia-potencial-gravitatoria',
    title: 'Energía potencial gravitatoria',
    formula: 'U = -G \\frac{m_1 m_2}{r}',
    latex: 'U = -G \\frac{m_1 m_2}{r}',
    description: 'La energía almacenada por dos masas debido a su posición en el campo gravitatorio.',
    variables: [
      { symbol: 'U', name: 'Energía potencial gravitatoria', unit: 'J' },
      { symbol: 'G', name: 'Constante de gravitación universal', unit: 'N·m²/kg²' },
      { symbol: 'm_1', name: 'Masa 1', unit: 'kg' },
      { symbol: 'm_2', name: 'Masa 2', unit: 'kg' },
      { symbol: 'r', name: 'Distancia entre masas', unit: 'm' }
    ]
  }
];

export default formulas;
