export const formulas = [
  {
    id: 'centro-masa-x',
    title: 'Centro de masa en una dimensión',
    formula: 'x_cm = (Σ m_i x_i) / (Σ m_i)',
    latex: 'x_{cm} = \\frac{\\sum m_i x_i}{\\sum m_i}',
    description: 'Calcula la posición del centro de masa en el eje x para un sistema de partículas.',
    variables: [
      { symbol: 'x_{cm}', name: 'Centro de masa (x)', unit: 'm' },
      { symbol: 'm_i', name: 'Masa de la partícula i', unit: 'kg' },
      { symbol: 'x_i', name: 'Posición de la partícula i', unit: 'm' }
    ]
  },
  {
    id: 'centro-masa-2d',
    title: 'Centro de masa en dos dimensiones',
    formula: 'x_cm = (Σ m_i x_i) / (Σ m_i), y_cm = (Σ m_i y_i) / (Σ m_i)',
    latex: 'x_{cm} = \\frac{\\sum m_i x_i}{\\sum m_i}, \\quad y_{cm} = \\frac{\\sum m_i y_i}{\\sum m_i}',
    description: 'Calcula la posición del centro de masa en x e y para un sistema de partículas.',
    variables: [
      { symbol: 'x_{cm}', name: 'Centro de masa (x)', unit: 'm' },
      { symbol: 'y_{cm}', name: 'Centro de masa (y)', unit: 'm' },
      { symbol: 'm_i', name: 'Masa de la partícula i', unit: 'kg' },
      { symbol: 'x_i', name: 'Posición x de la partícula i', unit: 'm' },
      { symbol: 'y_i', name: 'Posición y de la partícula i', unit: 'm' }
    ]
  }
];

export default formulas;

