// filepath: src/data/dinamica/${subId}/${subId}Formulas.js
export const formulas = [
  {
    id: 'condicion-estabilidad',
    title: 'Condición de estabilidad',
    formula: 'La vertical desde el centro de gravedad debe caer dentro de la base de sustentación.',
    latex: '\\text{La vertical desde el centro de gravedad debe caer dentro de la base}',
    description: 'Para que un cuerpo sea estable, la línea de acción de la gravedad debe pasar por la base de sustentación.',
    variables: [
      { symbol: 'CG', name: 'Centro de gravedad', unit: '' },
      { symbol: 'Base', name: 'Base de sustentación', unit: '' }
    ]
  }
];

export default formulas;
