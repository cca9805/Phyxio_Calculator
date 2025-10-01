export const calculators = [
  {
    id: 'reaccion-apoyo-simple',
    title: 'Calculadora de reacción en apoyo simple',
    expr: 'R = F',
    latex: 'R = F',
    vars: [
      { name: 'F', label: 'Fuerza aplicada (N)', unit: 'N', example: '50' }
    ],
    output: { name: 'R', label: 'Reacción', unit: 'N' }
  },
  {
    id: 'reaccion-apoyo-movil',
    title: 'Calculadora de reacción en apoyo móvil',
    expr: 'R = F',
    latex: 'R = F',
    vars: [
      { name: 'F', label: 'Fuerza aplicada (N)', unit: 'N', example: '30' }
    ],
    output: { name: 'R', label: 'Reacción', unit: 'N' }
  },
  {
    id: 'reaccion-apoyo-fijo',
    title: 'Calculadora de reacciones en apoyo fijo',
    expr: 'Rx = Fx; Ry = Fy; M = M_aplicado',
    latex: 'R_x = F_x, \\quad R_y = F_y, \\quad M = M_{aplicado}',
    vars: [
      { name: 'Fx', label: 'Fuerza horizontal (N)', unit: 'N', example: '10' },
      { name: 'Fy', label: 'Fuerza vertical (N)', unit: 'N', example: '40' },
      { name: 'M_aplicado', label: 'Momento aplicado (N·m)', unit: 'N·m', example: '5' }
    ],
    output: { name: 'Rx', label: 'Reacción horizontal', unit: 'N' }
    // Ry y M también se calculan, puedes mostrarlos en tu componente
  }
];

export default calculators;
