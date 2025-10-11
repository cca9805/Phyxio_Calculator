export const formulas = [
  {
    id: 'descomponer-vector',
    title: 'Descomposición de un Vector',
    formula: [
        'V_x = |V| \\cos(\\theta)',
        'V_y = |V| \\sin(\\theta)'
    ],
    description: 'Calcula las componentes cartesianas (Vx, Vy) de un vector a partir de su magnitud y su ángulo.',
    variables: [
      { symbol: '|V|', label: 'Magnitud del vector', unit: 'unidades' },
      { symbol: '\\theta', label: 'Ángulo', unit: 'grados' },
      { symbol: 'V_x', label: 'Componente en X', unit: 'unidades' },
      { symbol: 'V_y', label: 'Componente en Y', unit: 'unidades' }
    ]
  },
  {
    id: 'componer-vector',
    title: 'Composición de un Vector',
    formula: [
        '|V| = \\sqrt{V_x^2 + V_y^2}',
        '\\theta = \\arctan(\\frac{V_y}{V_x})'
    ],
    description: 'Calcula la magnitud y dirección (ángulo) de un vector a partir de sus componentes cartesianas.',
    variables: [
        { symbol: 'V_x', label: 'Componente en X', unit: 'unidades' },
        { symbol: 'V_y', label: 'Componente en Y', unit: 'unidades' },
        { symbol: '|V|', label: 'Magnitud del vector', unit: 'unidades' },
        { symbol: '\\theta', label: 'Ángulo', unit: 'grados' }
    ]
  },
  {
    id: 'suma-vectores',
    title: 'Suma de Vectores',
    formula: [
        'R_x = A_x + B_x',
        'R_y = A_y + B_y'
    ],
    description: 'Calcula el vector resultante de la suma de dos vectores a partir de sus componentes.',
    variables: [
        { symbol: 'A_x', label: 'Componente X del Vector A', unit: 'unidades' },
        { symbol: 'A_y', label: 'Componente Y del Vector A', unit: 'unidades' },
        { symbol: 'B_x', label: 'Componente X del Vector B', unit: 'unidades' },
        { symbol: 'B_y', label: 'Componente Y del Vector B', unit: 'unidades' },
        { symbol: 'R_x', label: 'Componente X Resultante', unit: 'unidades' },
        { symbol: 'R_y', label: 'Componente Y Resultante', unit: 'unidades' }
    ]
  }
];
