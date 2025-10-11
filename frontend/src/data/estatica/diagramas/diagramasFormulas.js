export const formulas = [
  {
    id: 'componentes-peso-inclinado',
    title: 'Componentes del Peso en un Plano Inclinado',
    formula: 'Wx = W * sin(θ), Wy = W * cos(θ)',
    description: 'Descompone el peso de un objeto en un plano inclinado en componentes paralela (Wx) y perpendicular (Wy) al plano.',
    variables: [
      { symbol: 'W', name: 'Peso del objeto', unit: 'N' },
      { symbol: 'θ', name: 'Ángulo de inclinación del plano', unit: 'grados' },
      { symbol: 'Wx', name: 'Componente paralela al plano', unit: 'N' },
      { symbol: 'Wy', name: 'Componente perpendicular al plano', unit: 'N' }
    ]
  }
];
