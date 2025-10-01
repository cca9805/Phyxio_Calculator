export const formulas = [
  {
    id: 'reaccion-apoyo-simple',
    title: 'Reacción en apoyo simple',
    formula: 'R = F',
    latex: 'R = F',
    description: 'La reacción en un apoyo simple es igual a la fuerza aplicada verticalmente sobre el apoyo.',
    variables: [
      { symbol: 'R', name: 'Reacción', unit: 'N' },
      { symbol: 'F', name: 'Fuerza aplicada', unit: 'N' }
    ]
  },
  {
    id: 'reaccion-apoyo-movil',
    title: 'Reacción en apoyo móvil (rodillo)',
    formula: 'R = F',
    latex: 'R = F',
    description: 'La reacción en un apoyo móvil es igual a la fuerza vertical aplicada sobre el apoyo.',
    variables: [
      { symbol: 'R', name: 'Reacción', unit: 'N' },
      { symbol: 'F', name: 'Fuerza aplicada', unit: 'N' }
    ]
  },
  {
    id: 'reaccion-apoyo-fijo',
    title: 'Reacciones en apoyo fijo',
    formula: 'R_x, R_y, M',
    latex: 'R_x, R_y, M',
    description: 'El apoyo fijo genera reacciones horizontales, verticales y un momento.',
    variables: [
      { symbol: 'R_x', name: 'Reacción horizontal', unit: 'N' },
      { symbol: 'R_y', name: 'Reacción vertical', unit: 'N' },
      { symbol: 'M', name: 'Momento', unit: 'N·m' }
    ]
  }
];

export default formulas;
