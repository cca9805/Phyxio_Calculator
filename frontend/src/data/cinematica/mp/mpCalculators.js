// filepath: src/data/cinematica/mp/mpCalculators.js
export const calculators = [
  {
    id: 'calc-v0x',
    title: 'v0x = v0 · cos(θ) — Componente horizontal de la velocidad inicial',
    expr: 'v0 * Math.cos(theta)',
    vars: [
      { name: 'v0', label: 'Velocidad inicial v0', unit: 'm/s' },
      { name: 'theta', label: 'Ángulo θ (rad)', unit: 'rad' }
    ],
    output: { name: 'v0x', unit: 'm/s' }
  },
  {
    id: 'calc-v0y',
    title: 'v0y = v0 · sin(θ) — Componente vertical de la velocidad inicial',
    expr: 'v0 * Math.sin(theta)',
    vars: [
      { name: 'v0', label: 'Velocidad inicial v0', unit: 'm/s' },
      { name: 'theta', label: 'Ángulo θ (rad)', unit: 'rad' }
    ],
    output: { name: 'v0y', unit: 'm/s' }
  },
  {
    id: 'calc-x-of-t',
    title: 'x(t) = v0x · t — Posición horizontal',
    expr: 'v0x * t',
    vars: [
      { name: 'v0x', label: 'Componente horizontal v0x', unit: 'm/s' },
      { name: 't', label: 'Tiempo t', unit: 's' }
    ],
    output: { name: 'x', unit: 'm' }
  },
  {
    id: 'calc-y-of-t',
    title: 'y(t) = v0y·t − ½ g t² — Posición vertical',
    expr: 'v0y * t - 0.5 * g * t * t',
    vars: [
      { name: 'v0y', label: 'Componente vertical v0y', unit: 'm/s' },
      { name: 't', label: 'Tiempo t', unit: 's' },
      { name: 'g', label: 'Gravedad g', unit: 'm/s²', default: 9.81 }
    ],
    output: { name: 'y', unit: 'm' }
  },
  {
    id: 'calc-y-of-x',
    title: 'y(x) = x tanθ − (g x²) / (2 v0² cos²θ) — Ecuación de la trayectoria',
    expr: 'x * Math.tan(theta) - (g * x * x) / (2 * v0 * v0 * Math.cos(theta) * Math.cos(theta))',
    vars: [
      { name: 'v0', label: 'Velocidad inicial v0', unit: 'm/s' },
      { name: 'theta', label: 'Ángulo θ (rad)', unit: 'rad' },
      { name: 'g', label: 'Gravedad g', unit: 'm/s²', default: 9.81 },
      { name: 'x', label: 'Posición horizontal x', unit: 'm' }
    ],
    output: { name: 'y', unit: 'm' }
  },
  {
    id: 'calc-time-flight',
    title: 'T = 2 v0 sinθ / g — Tiempo de vuelo (misma altura)',
    expr: '2 * v0 * Math.sin(theta) / g',
    vars: [
      { name: 'v0', label: 'Velocidad inicial v0', unit: 'm/s' },
      { name: 'theta', label: 'Ángulo θ (rad)', unit: 'rad' },
      { name: 'g', label: 'Gravedad g', unit: 'm/s²', default: 9.81 }
    ],
    output: { name: 'T', unit: 's' }
  },
  {
    id: 'calc-range',
    title: 'R = v0² sin(2θ) / g — Alcance horizontal (misma altura)',
    expr: '(v0 * v0 * Math.sin(2 * theta)) / g',
    vars: [
      { name: 'v0', label: 'Velocidad inicial v0', unit: 'm/s' },
      { name: 'theta', label: 'Ángulo θ (rad)', unit: 'rad' },
      { name: 'g', label: 'Gravedad g', unit: 'm/s²', default: 9.81 }
    ],
    output: { name: 'R', unit: 'm' }
  },
  {
    id: 'calc-max-height',
    title: 'H = v0² sin²θ / (2 g) — Altura máxima',
    expr: '(v0 * v0 * Math.pow(Math.sin(theta),2)) / (2 * g)',
    vars: [
      { name: 'v0', label: 'Velocidad inicial v0', unit: 'm/s' },
      { name: 'theta', label: 'Ángulo θ (rad)', unit: 'rad' },
      { name: 'g', label: 'Gravedad g', unit: 'm/s²', default: 9.81 }
    ],
    output: { name: 'H', unit: 'm' }
  },
  {
    id: 'calc-time-to-peak',
    title: 't_H = v0 sinθ / g — Tiempo hasta la altura máxima',
    expr: '(v0 * Math.sin(theta)) / g',
    vars: [
      { name: 'v0', label: 'Velocidad inicial v0', unit: 'm/s' },
      { name: 'theta', label: 'Ángulo θ (rad)', unit: 'rad' },
      { name: 'g', label: 'Gravedad g', unit: 'm/s²', default: 9.81 }
    ],
    output: { name: 't_H', unit: 's' }
  },
  {
    id: 'calc-v-magnitude',
    title: 'v = sqrt(vx² + vy²) — Velocidad escalar instantánea',
    expr: 'Math.sqrt(vx*vx + vy*vy)',
    vars: [
      { name: 'vx', label: 'Componente horizontal vx', unit: 'm/s' },
      { name: 'vy', label: 'Componente vertical vy', unit: 'm/s' }
    ],
    output: { name: 'v', unit: 'm/s' }
  }
];

export default calculators;
