// filepath: src/data/dinamica/${subId}/${subId}Calculators.js
export const calculators = [
  {
    id: 'equilibrio-estructura',
    title: 'Comprobador de equilibrio de estructura',
    expr: 'equilibrio = (F1 + F2 + F3)',
    latex: '\\sum \\vec{F} = 0',
    vars: [
      { name: 'F1', label: 'Fuerza 1 (N)', unit: 'N', example: '50' },
      { name: 'F2', label: 'Fuerza 2 (N)', unit: 'N', example: '50' },
      { name: 'F3', label: 'Fuerza 3 (N)', unit: 'N', example: '-100' }
    ],
    output: { name: 'equilibrio', label: 'Suma de fuerzas', unit: 'N' }
  },
  {
    id: 'fuerza-nodo-armadura',
    title: 'Comprobador de fuerza en nodo de armadura',
    expr: 'equilibrio = (B1 + B2 + B3)',
    latex: 'F_{nodo} = \\sum F_{barra}',
    vars: [
      { name: 'B1', label: 'Fuerza barra 1 (N)', unit: 'N', example: '10' },
      { name: 'B2', label: 'Fuerza barra 2 (N)', unit: 'N', example: '-5' },
      { name: 'B3', label: 'Fuerza barra 3 (N)', unit: 'N', example: '-5' }
    ],
    output: { name: 'equilibrio', label: 'Suma de fuerzas en nodo', unit: 'N' }
  }
];

export default calculators;
