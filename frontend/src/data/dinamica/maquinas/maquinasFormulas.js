// filepath: src/data/dinamica/${subId}/${subId}Formulas.js
export const formulas = [
  {
    id: 'ventaja-mecanica',
    title: 'Ventaja mecánica',
    formula: 'VM = F_{resistencia} / F_{esfuerzo}',
    description: 'Relación entre la fuerza vencida y la fuerza aplicada en una máquina.',
    variables: [
      { symbol: 'VM', name: 'Ventaja mecánica', unit: '' },
      { symbol: 'F_{resistencia}', name: 'Fuerza de resistencia', unit: 'N' },
      { symbol: 'F_{esfuerzo}', name: 'Fuerza de esfuerzo', unit: 'N' }
    ]
  },
  {
    id: 'eficiencia',
    title: 'Eficiencia de una máquina',
    formula: 'Eficiencia = (Trabajo útil / Trabajo suministrado) * 100',
    description: 'Porcentaje de energía útil obtenida respecto a la energía suministrada.',
    variables: [
      { symbol: 'Eficiencia', name: 'Eficiencia', unit: '%' },
      { symbol: 'Trabajo útil', name: 'Trabajo útil', unit: 'J' },
      { symbol: 'Trabajo suministrado', name: 'Trabajo suministrado', unit: 'J' }
    ]
  },
  {
    id: 'palanca-equilibrio',
    title: 'Equilibrio de la palanca',
    formula: 'F_{esfuerzo} \\cdot d_{esfuerzo} = F_{resistencia} \\cdot d_{resistencia}',
    description: 'Condición de equilibrio en una palanca.',
    variables: [
      { symbol: 'F_{esfuerzo}', name: 'Fuerza de esfuerzo', unit: 'N' },
      { symbol: 'd_{esfuerzo}', name: 'Distancia de esfuerzo', unit: 'm' },
      { symbol: 'F_{resistencia}', name: 'Fuerza de resistencia', unit: 'N' },
      { symbol: 'd_{resistencia}', name: 'Distancia de resistencia', unit: 'm' }
    ]
  }
];

export default formulas;
