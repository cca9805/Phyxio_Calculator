// filepath: src/data/dinamica/${subId}/${subId}Formulas.js
export const formulas = [
  {
    id: 'equilibrio-aplicacion',
    title: 'Condición de equilibrio en estructuras',
    formula: '\\sum \\vec{F} = 0, \\quad \\sum \\tau = 0',
    latex: '\\sum \\vec{F} = 0, \\quad \\sum \\tau = 0',
    description: 'Para que una estructura sea segura, la suma de fuerzas y torques debe ser cero.',
    variables: [
      { symbol: 'F', name: 'Fuerza', unit: 'N' },
      { symbol: 'τ', name: 'Torque', unit: 'N·m' }
    ]
  }
];

export default formulas;
