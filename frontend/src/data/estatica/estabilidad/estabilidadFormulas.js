export const formulas = [
  {
    id: 'condicion-estabilidad',
    title: 'Condición de Estabilidad Unidimensional',
    formula: 'x_base_min ≤ x_cg ≤ x_base_max',
    description: 'Para que un cuerpo sea estable, la proyección de su centro de gravedad (x_cg) sobre un eje debe caer dentro de los límites de su base de apoyo en ese mismo eje (x_base_min, x_base_max).',
    variables: [
      { symbol: 'x_cg', name: 'Posición del Centro de Gravedad', unit: 'm' },
      { symbol: 'x_base_min', name: 'Límite inferior de la base de apoyo', unit: 'm' },
      { symbol: 'x_base_max', name: 'Límite superior de la base de apoyo', unit: 'm' }
    ]
  }
];
