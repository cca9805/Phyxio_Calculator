export const formulas = [
  {
    id: 'equilibrio-traslacional',
    title: 'Condición de equilibrio traslacional',
    formula: '\\sum \\vec{F} = 0',
    latex: '\\sum \\vec{F} = 0',
    description: 'La suma de todas las fuerzas que actúan sobre el cuerpo debe ser cero para que esté en equilibrio traslacional.',
    variables: [
      { symbol: '\\vec{F}', name: 'Fuerza', unit: 'N' }
    ]
  },
  {
    id: 'equilibrio-rotacional',
    title: 'Condición de equilibrio rotacional',
    formula: '\\sum \\tau = 0',
    latex: '\\sum \\tau = 0',
    description: 'La suma de todos los torques respecto a cualquier eje debe ser cero para que esté en equilibrio rotacional.',
    variables: [
      { symbol: '\\tau', name: 'Torque', unit: 'N·m' }
    ]
  },
  {
    id: 'descomposicion-fuerzas',
    title: 'Descomposición de fuerzas',
    formula: 'F = F_x + F_y',
    latex: 'F = F_x + F_y',
    description: 'Una fuerza puede descomponerse en componentes ortogonales (x, y) para facilitar el análisis.',
    variables: [
      { symbol: 'F', name: 'Fuerza total', unit: 'N' },
      { symbol: 'F_x', name: 'Componente en x', unit: 'N' },
      { symbol: 'F_y', name: 'Componente en y', unit: 'N' }
    ]
  }
];

export default formulas;
