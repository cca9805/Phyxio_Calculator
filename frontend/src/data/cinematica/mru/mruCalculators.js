export const calculators = [
  // 1
  {
    id: 'v_from_d_t',
    title: 'v = d / t — Velocidad (MRU)',
    expr: 'd / t',
    vars: [
      { name: 'd', label: 'Distancia (d)', unit: 'm', example: '100' },
      { name: 't', label: 'Tiempo (t)', unit: 's', example: '10' }
    ],
    output: { name: 'v', label: 'Velocidad (v)', unit: 'm/s' }
  },
  // 2
  {
    id: 'd_from_v_t',
    title: 'd = v · t — Distancia (MRU)',
    expr: 'v * t',
    vars: [
      { name: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '10' },
      { name: 't', label: 'Tiempo (t)', unit: 's', example: '5' }
    ],
    output: { name: 'd', label: 'Distancia (d)', unit: 'm' }
  },
  // 3
  {
    id: 't_from_d_v',
    title: 't = d / v — Tiempo (MRU)',
    expr: 'd / v',
    vars: [
      { name: 'd', label: 'Distancia (d)', unit: 'm', example: '150' },
      { name: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '15' }
    ],
    output: { name: 't', label: 'Tiempo (t)', unit: 's' }
  },
  // 4
  {
    id: 'x_from_x0_v_t',
    title: 'x = x₀ + v · t — Posición (MRU)',
    expr: 'x0 + v * t',
    vars: [
      { name: 'x0', label: 'Posición inicial (x₀)', unit: 'm', example: '0' },
      { name: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '10' },
      { name: 't', label: 'Tiempo (t)', unit: 's', example: '5' }
    ],
    output: { name: 'x', label: 'Posición (x)', unit: 'm' }
  }
];

export default calculators;
