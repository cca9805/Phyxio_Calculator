// filepath: src/data/dinamica/${subId}/${subId}Formulas.js
export const formulas = [
  {
    id: 'equilibrio-traslacional',
    title: 'Condición de equilibrio traslacional',
    formula: '\\sum \\vec{F} = 0',
    latex: '\\sum \\vec{F} = 0',
    description: 'La suma de todas las fuerzas que actúan sobre el cuerpo debe ser cero para que no se traslade.',
    variables: [
      { symbol: '\\vec{F}', name: 'Fuerza', unit: 'N' }
    ]
  },
  {
    id: 'equilibrio-rotacional',
    title: 'Condición de equilibrio rotacional',
    formula: '\\sum \\tau = 0',
    latex: '\\sum \\tau = 0',
    description: 'La suma de todos los torques respecto a cualquier eje debe ser cero para que no rote.',
    variables: [
      { symbol: '\\tau', name: 'Torque', unit: 'N·m' }
    ]
  },
  {
    id: 'torque',
    title: 'Torque o momento de fuerza',
    formula: '\\tau = F \\cdot r \\cdot \\sin(\\theta)',
    latex: '\\tau = F \\cdot r \\cdot \\sin(\\theta)',
    description: 'El torque es la tendencia de una fuerza a producir rotación alrededor de un eje.',
    variables: [
      { symbol: '\\tau', name: 'Torque', unit: 'N·m' },
      { symbol: 'F', name: 'Fuerza', unit: 'N' },
      { symbol: 'r', name: 'Distancia al eje', unit: 'm' },
      { symbol: '\\theta', name: 'Ángulo', unit: 'rad' }
    ]
  },
  {
    id: 'palanca',
    title: 'Equilibrio de palanca',
    formula: 'F_1 \\cdot r_1 = F_2 \\cdot r_2',
    latex: 'F_1 \\cdot r_1 = F_2 \\cdot r_2',
    description: 'En una palanca en equilibrio, el producto de la fuerza y la distancia al eje es igual en ambos lados.',
    variables: [
      { symbol: 'F_1', name: 'Fuerza 1', unit: 'N' },
      { symbol: 'r_1', name: 'Distancia 1', unit: 'm' },
      { symbol: 'F_2', name: 'Fuerza 2', unit: 'N' },
      { symbol: 'r_2', name: 'Distancia 2', unit: 'm' }
    ]
  }
];

export default formulas;
