// filepath: src/data/cinematica/mas/masCalculators.js
export const calculators = [
  {
    id: 'calc-omega',
    title: 'ω = √(k / m) — Frecuencia angular ω',
    expr: 'Math.sqrt(k / m)',
    vars: [
      { name: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
      { name: 'm', label: 'Masa (m)', unit: 'kg' }
    ],
    output: { name: 'ω', unit: 'rad/s' }
  },
  {
    id: 'calc-periodo_from_omega',
    title: 'T = 2π / ω — Período T (desde ω)',
    expr: '2 * Math.PI / omega',
    vars: [
      { name: 'omega', label: 'Frecuencia angular (ω)', unit: 'rad/s' }
    ],
    output: { name: 'T', unit: 's' }
  },
  {
    id: 'calc-periodo_from_mk',
    title: 'T = 2π √(m / k) — Período T (desde m y k)',
    expr: '2 * Math.PI * Math.sqrt(m / k)',
    vars: [
      { name: 'm', label: 'Masa (m)', unit: 'kg' },
      { name: 'k', label: 'Constante elástica (k)', unit: 'N/m' }
    ],
    output: { name: 'T', unit: 's' }
  },
  {
    id: 'calc_x_of_t',
    title: 'x(t) = A cos(ω t + φ) — Posición x(t)',
    expr: 'A * Math.cos(omega * t + phi)',
    vars: [
      { name: 'A', label: 'Amplitud (A)', unit: 'm' },
      { name: 'omega', label: 'ω', unit: 'rad/s' },
      { name: 't', label: 'Tiempo (t)', unit: 's' },
      { name: 'phi', label: 'Fase (φ)', unit: 'rad' }
    ],
    output: { name: 'x', unit: 'm' }
  },
  {
    id: 'calc_v_of_t',
    title: 'v(t) = -A ω sin(ω t + φ) — Velocidad v(t)',
    expr: '-A * omega * Math.sin(omega * t + phi)',
    vars: [
      { name: 'A', label: 'Amplitud (A)', unit: 'm' },
      { name: 'omega', label: 'ω', unit: 'rad/s' },
      { name: 't', label: 'Tiempo (t)', unit: 's' },
      { name: 'phi', label: 'Fase (φ)', unit: 'rad' }
    ],
    output: { name: 'v', unit: 'm/s' }
  },
  {
    id: 'calc_a_of_t_from_x',
    title: 'a = -ω² x — Aceleración a(t) desde x',
    expr: '- Math.pow(omega, 2) * x',
    vars: [
      { name: 'omega', label: 'ω', unit: 'rad/s' },
      { name: 'x', label: 'Posición (x)', unit: 'm' }
    ],
    output: { name: 'a', unit: 'm/s²' }
  },
  {
    id: 'calc_E_from_A_k',
    title: 'E = ½ k A² — Energía total E',
    expr: '0.5 * k * Math.pow(A, 2)',
    vars: [
      { name: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
      { name: 'A', label: 'Amplitud (A)', unit: 'm' }
    ],
    output: { name: 'E', unit: 'J' }
  },
  {
    id: 'calc_Ec_from_v',
    title: 'Ec = ½ m v² — Energía cinética Ec',
    expr: '0.5 * m * Math.pow(v, 2)',
    vars: [
      { name: 'm', label: 'Masa (m)', unit: 'kg' },
      { name: 'v', label: 'Velocidad (v)', unit: 'm/s' }
    ],
    output: { name: 'Ec', unit: 'J' }
  },
  {
    id: 'calc_Ec_from_position',
    title: 'Ec = ½ k (A² - x²) — Energía cinética Ec (desde posición)',
    expr: '0.5 * k * (Math.pow(A,2) - Math.pow(x,2))',
    vars: [
      { name: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
      { name: 'A', label: 'Amplitud (A)', unit: 'm' },
      { name: 'x', label: 'Posición (x)', unit: 'm' }
    ],
    output: { name: 'Ec', unit: 'J' }
  },
  {
    id: 'calc_Ep_from_x',
    title: 'Ep = ½ k x² — Energía potencial Ep',
    expr: '0.5 * k * Math.pow(x, 2)',
    vars: [
      { name: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
      { name: 'x', label: 'Posición (x)', unit: 'm' }
    ],
    output: { name: 'Ep', unit: 'J' }
  },
  {
    id: 'calc_F_from_x',
    title: 'F = -k x — Fuerza restauradora F',
    expr: '- k * x',
    vars: [
      { name: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
      { name: 'x', label: 'Posición (x)', unit: 'm' }
    ],
    output: { name: 'F', unit: 'N' }
  },
  {
    id: 'calc_vmax_from_A_omega',
    title: 'v_max = A ω — Velocidad máxima v_max',
    expr: 'A * omega',
    vars: [
      { name: 'A', label: 'Amplitud (A)', unit: 'm' },
      { name: 'omega', label: 'ω', unit: 'rad/s' }
    ],
    output: { name: 'v_max', unit: 'm/s' }
  },
  {
    id: 'calc_vmax_from_A_km',
    title: 'v_max = A √(k/m) — Velocidad máxima v_max (desde k,m)',
    expr: 'A * Math.sqrt(k / m)',
    vars: [
      { name: 'A', label: 'Amplitud (A)', unit: 'm' },
      { name: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
      { name: 'm', label: 'Masa (m)', unit: 'kg' }
    ],
    output: { name: 'v_max', unit: 'm/s' }
  },
  {
    id: 'calc_omega_from_k_m',
    title: 'ω = √(k / m) — ω desde k y m',
    expr: 'Math.sqrt(k / m)',
    vars: [
      { name: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
      { name: 'm', label: 'Masa (m)', unit: 'kg' }
    ],
    output: { name: 'ω', unit: 'rad/s' }
  },
  {
    id: 'calc_amax_from_A_k_m',
    title: 'a_max = A (k / m) — Aceleración máxima a_max',
    expr: 'A * (k / m)',
    vars: [
      { name: 'A', label: 'Amplitud (A)', unit: 'm' },
      { name: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
      { name: 'm', label: 'Masa (m)', unit: 'kg' }
    ],
    output: { name: 'a_max', unit: 'm/s²' }
  }
];

export default calculators;
