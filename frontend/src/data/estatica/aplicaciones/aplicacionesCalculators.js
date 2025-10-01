// filepath: src/data/dinamica/${subId}/${subId}Calculators.js
export const calculators = [
  {
    id: 'equilibrio-aplicacion',
    title: 'Comprobador de equilibrio en aplicaciones',
    expr: 'equilibrio = (F1 + F2)',
    latex: '\\sum \\vec{F} = 0',
    vars: [
      { name: 'F1', label: 'Fuerza 1 (N)', unit: 'N', example: '5000' },
      { name: 'F2', label: 'Fuerza 2 (N)', unit: 'N', example: '-5000' }
    ],
    output: { name: 'equilibrio', label: 'Suma de fuerzas', unit: 'N' }
  }
];

export default calculators;
