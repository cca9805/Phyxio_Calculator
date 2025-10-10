export const formulas = [
  {
    id: 'equilibrio-2d',
    title: 'Condiciones de Equilibrio en 2D',
    formula: [
      'Suma Fx = 0',
      'Suma Fy = 0'
    ],
    description: 'Para que un cuerpo esté en equilibrio, la suma de las componentes de todas las fuerzas en las direcciones X e Y debe ser cero.',
    variables: [
      { symbol: 'Fx', label: 'Componente de la fuerza en X', unit: 'N' },
      { symbol: 'Fy', label: 'Componente de la fuerza en Y', unit: 'N' }
    ]
  },
  {
    id: 'componentes-peso-inclinado',
    title: 'Componentes del Peso en un Plano Inclinado',
    formula: [
      'Wx = W * sin(θ)',
      'Wy = W * cos(θ)'
    ],
    description: 'Descompone el peso de un objeto en un plano inclinado en componentes paralela (Wx) y perpendicular (Wy) al plano.',
    variables: [
      { symbol: 'W', label: 'Peso del objeto', unit: 'N' },
      { symbol: 'θ', label: 'Ángulo de inclinación del plano', unit: 'grados' },
      { symbol: 'Wx', label: 'Componente paralela al plano', unit: 'N' },
      { symbol: 'Wy', label: 'Componente perpendicular al plano', unit: 'N' }
    ]
  }
];
