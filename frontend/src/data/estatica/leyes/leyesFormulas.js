export const formulas = [
  {
    id: 'equilibrio-traslacional',
    title: 'Equilibrio traslacional de cuerpo rígido',
    formula: '\\sum \\vec{F} = 0',
    latex: '\\sum \\vec{F} = 0',
    description: 'La suma de todas las fuerzas que actúan sobre el cuerpo rígido debe ser cero para que esté en equilibrio traslacional.',
    variables: [
      { symbol: '\\vec{F}', name: 'Fuerza', unit: 'N' }
    ]
  },
  {
    id: 'equilibrio-rotacional',
    title: 'Equilibrio rotacional de cuerpo rígido',
    formula: '\\sum \\tau = 0',
    latex: '\\sum \\tau = 0',
    description: 'La suma de todos los torques respecto a cualquier eje debe ser cero para que el cuerpo rígido esté en equilibrio rotacional.',
    variables: [
      { symbol: '\\tau', name: 'Torque', unit: 'N·m' }
    ]
  }
];

export default formulas;
