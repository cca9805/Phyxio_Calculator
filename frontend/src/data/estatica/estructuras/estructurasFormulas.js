// filepath: src/data/dinamica/${subId}/${subId}Formulas.js
export const formulas = [
  {
    id: 'equilibrio-estructura',
    title: 'Condiciones de equilibrio en estructuras',
    formula: '\\sum \\vec{F} = 0, \\quad \\sum \\tau = 0',
    latex: '\\sum \\vec{F} = 0, \\quad \\sum \\tau = 0',
    description: 'Para que una estructura esté en equilibrio, la suma de fuerzas y torques debe ser cero.',
    variables: [
      { symbol: '\\vec{F}', name: 'Fuerza', unit: 'N' },
      { symbol: '\\tau', name: 'Torque', unit: 'N·m' }
    ]
  },
  {
    id: 'fuerza-nodo-armadura',
    title: 'Fuerza en un nodo de armadura',
    formula: 'F_{nodo} = \\sum F_{barra}',
    latex: 'F_{nodo} = \\sum F_{barra}',
    description: 'La suma de fuerzas en cada nodo de una armadura debe ser cero para equilibrio.',
    variables: [
      { symbol: 'F_{nodo}', name: 'Fuerza en el nodo', unit: 'N' },
      { symbol: 'F_{barra}', name: 'Fuerza en la barra', unit: 'N' }
    ]
  }
];

export default formulas;
