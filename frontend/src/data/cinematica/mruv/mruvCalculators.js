export const calculators = [
  // 1
  {
    id: 'v_from_v0_a_t',
    title: 'v = v₀ + a·t — Velocidad (MRUV)',
    expr: 'v0 + a * t',
    vars: [
      { name: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '0' },
      { name: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' },
      { name: 't', label: 'Tiempo (t)', unit: 's', example: '3' }
    ],
    output: { name: 'v', label: 'Velocidad final (v)', unit: 'm/s' }
  },
  // 2
  {
    id: 'v_media_from_v0_v',
    title: 'v_media = (v₀ + v) / 2 — Velocidad media (MRUV)',
    expr: '(v0 + v) / 2',
    vars: [
      { name: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '0' },
      { name: 'v', label: 'Velocidad final (v)', unit: 'm/s', example: '10' }  
    ],
    output: { name: 'v_media', label: 'Velocidad media (v_media)', unit: 'm/s' }
  },
  // 3
  {
    id: 'v_from_v0_a_d',
    title: 'v² = v₀² + 2·a·d — Velocidad (Torricelli, MRUV)',
    expr: 'Math.sqrt(v0 * v0 + 2 * a * d)', // expr produces v from other data
    vars: [
      { name: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '0' },
      { name: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' },
      { name: 'd', label: 'Distancia (d)', unit: 'm', example: '100' }
    ],
    output: { name: 'v', label: 'Velocidad final (v)', unit: 'm/s' }
  },
  // 4
  {
    id: 'x_from_x0_v0_a_t',
    title: 'x = x₀ + v₀·t + ½·a·t² — Posición (MRUV)',
    expr: 'x0 + v0 * t + 0.5 * a * t * t',
    vars: [
      { name: 'x0', label: 'Posición inicial (x₀)', unit: 'm', example: '0' },
      { name: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '0' },
      { name: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' },
      { name: 't', label: 'Tiempo (t)', unit: 's', example: '4' }
    ],
    output: { name: 'x', label: 'Posición final (x)', unit: 'm' }
  },
  // 5
  {
    id: 'delta_x_from_v_media_t',
    title: 'Δx = v_media·t — Distancia (MRUV)',
    expr: 'v_media * t',
    vars: [
      { name: 'v_media', label: 'Velocidad media (v_media)', unit: 'm/s', example: '5' },
      { name: 't', label: 'Tiempo (t)', unit: 's', example: '4' }
    ],    
    output: { name: 'delta_x', label: 'Distancia (Δx)', unit: 'm' }
  },   
  // 6
  {
    id: 'a_from_delta_v_t',
    title: 'a = (v - v₀) / t — Aceleración (MRUV)',
    expr: '(v - v0) / t',
    vars: [
      { name: 'v', label: 'Velocidad final (v)', unit: 'm/s', example: '20' },
      { name: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '5' },
      { name: 't', label: 'Tiempo (t)', unit: 's', example: '3' }
    ],
    output: { name: 'a', label: 'Aceleración (a)', unit: 'm/s²' }
  },
  // 7
  {
    id: 't_from_delta_v_a',
    title: 't = (v - v₀) / a — Tiempo (MRUV)',
    expr: '(v - v0) / a',
    vars: [
      { name: 'v', label: 'Velocidad final (v)', unit: 'm/s', example: '20' },
      { name: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '0' },
      { name: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' }
    ],
    output: { name: 't', label: 'Tiempo (t)', unit: 's' }
  },
  // 8
  {
    id: 't_break_from_v0_a',
    title: 't_break = -v₀ / a — Tiempo para detenerse (MRUV)',
    expr: '-v0 / a',
    vars: [
      { name: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '10' },
      { name: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '-2' }
    ],
    output: { name: 't_break', label: 'Tiempo para detenerse (t_break)', unit: 's' }
  },
  // 9
  {
    id: 'd_break_from_v0_a',
    title: 'd_break = -v₀² / (2·a) — Distancia para detenerse (MRUV)',
    expr: '-(v0 * v0) / (2 * a)',
    vars: [
      { name: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '10' },
      { name: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '-2' }
    ], 
    output: { name: 'd_break', label: 'Distancia para detenerse (d_break)', unit: 'm' }
  }
];

export default calculators;
