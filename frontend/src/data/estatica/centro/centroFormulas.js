export const formulas = [
  {
    id: 'centro-masa-x',
    title: 'Coordenada X del Centro de Masa',
    formula: 'X_cm = (Σ x_i * m_i) / (Σ m_i)',
    description: 'Calcula la coordenada X del centro de masa de un sistema de partículas.',
    variables: [
      { symbol: 'X_cm', label: 'Coordenada X del Centro de Masa', unit: 'unidades' },
      { symbol: 'x_i', label: 'Coordenada X de la masa i', unit: 'unidades' },
      { symbol: 'm_i', label: 'Masa de la partícula i', unit: 'kg' },
    ]
  },
  {
    id: 'centro-masa-y',
    title: 'Coordenada Y del Centro de Masa',
    formula: 'Y_cm = (Σ y_i * m_i) / (Σ m_i)',
    description: 'Calcula la coordenada Y del centro de masa de un sistema de partículas.',
    variables: [
      { symbol: 'Y_cm', label: 'Coordenada Y del Centro de Masa', unit: 'unidades' },
      { symbol: 'y_i', label: 'Coordenada Y de la masa i', unit: 'unidades' },
      { symbol: 'm_i', label: 'Masa de la partícula i', unit: 'kg' },
    ]
  }
];
