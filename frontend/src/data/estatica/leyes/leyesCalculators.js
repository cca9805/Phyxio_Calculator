export const calculators = [
  // No hay cálculo directo, solo comprobación de suma de fuerzas y torques.
  {
    id: 'equilibrio-traslacional',
    title: 'Comprobador de equilibrio traslacional',
    expr: 'equilibrio = (F1 + F2 + F3)',
    latex: '\\sum \\vec{F} = 0',
    vars: [
      { name: 'F1', label: 'Fuerza 1 (N)', unit: 'N', example: '20' },
      { name: 'F2', label: 'Fuerza 2 (N)', unit: 'N', example: '-20' },
      { name: 'F3', label: 'Fuerza 3 (N)', unit: 'N', example: '0' }
    ],
    output: { name: 'equilibrio', label: 'Suma de fuerzas', unit: 'N' }
  },
  {
    id: 'equilibrio-rotacional',
    title: 'Comprobador de equilibrio rotacional',
    expr: 'equilibrio = (T1 + T2 + T3)',
    latex: '\\sum \\tau = 0',
    vars: [
      { name: 'T1', label: 'Torque 1 (N·m)', unit: 'N·m', example: '5' },
      { name: 'T2', label: 'Torque 2 (N·m)', unit: 'N·m', example: '-5' },
      { name: 'T3', label: 'Torque 3 (N·m)', unit: 'N·m', example: '0' }
    ],
    output: { name: 'equilibrio', label: 'Suma de torques', unit: 'N·m' }
  }
];

export default calculators;
