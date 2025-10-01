// filepath: src/data/dinamica/${subId}/${subId}Calculators.js
export const calculators = [
  {
    id: 'condicion-estabilidad',
    title: 'Calculadora de condición de estabilidad',
    expr: 'estable = (x_cg >= x_base_min && x_cg <= x_base_max)',
    latex: '\\text{La vertical desde el centro de gravedad debe caer dentro de la base}',
    vars: [
      { name: 'x_cg', label: 'Posición del centro de gravedad (m)', unit: 'm', example: '0.25' },
      { name: 'x_base_min', label: 'Límite izquierdo de la base (m)', unit: 'm', example: '0' },
      { name: 'x_base_max', label: 'Límite derecho de la base (m)', unit: 'm', example: '0.5' }
    ],
    output: { name: 'estable', label: '¿Es estable?', unit: '' }
  }
];

export default calculators;
