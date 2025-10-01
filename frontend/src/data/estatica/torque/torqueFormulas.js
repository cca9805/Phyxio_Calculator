export const formulas = [
  {
    id: 'torque',
    title: 'Torque o momento de fuerza',
    formula: '\\tau = F \\cdot r \\cdot \\sin(\\theta)',
    latex: '\\tau = F \\cdot r \\cdot \\sin(\\theta)',
    description: 'El torque es el producto de la fuerza, la distancia al eje y el seno del ángulo entre ellos.',
    variables: [
      { symbol: 'τ', name: 'Torque', unit: 'N·m' },
      { symbol: 'F', name: 'Fuerza', unit: 'N' },
      { symbol: 'r', name: 'Distancia al eje', unit: 'm' },
      { symbol: 'Ø', name: 'Ángulo', unit: 'rad' }
    ]
  },
  {
    id: 'equilibrio-rotacional',
    title: 'Condición de equilibrio rotacional',
    formula: '\\sum \\tau = 0',
    latex: '\\sum \\tau = 0',
    description: 'La suma de todos los torques respecto a cualquier eje debe ser cero para que el cuerpo esté en equilibrio rotacional.',
    variables: [
      { symbol: 'τ', name: 'Torque', unit: 'N·m' }
    ]
  }
];

export default formulas;
