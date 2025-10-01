export const calculators = [
  {
    id: 'omega_from_theta_time',
    title: 'ω = θ / t — Velocidad angular',
    expr: 'theta / time',
    vars: [
      { name: 'theta', label: 'Desplazamiento angular (θ)', unit: 'rad', example: '6.28' },
      { name: 'time', label: 'Tiempo (t)', unit: 's', example: '2' }
    ],
    output: { name: 'omega', label: 'Velocidad angular (ω)', unit: 'rad/s' }
  },
  {
    id: 'v_from_r_omega',
    title: 'v = r · ω — Velocidad tangencial',
    expr: 'r * omega',
    vars: [
      { name: 'r', label: 'Radio (r)', unit: 'm', example: '0.5' },
      { name: 'omega', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '4' }
    ],
    output: { name: 'v', label: 'Velocidad tangencial (v)', unit: 'm/s' }
  },
  {
    id: 'period_from_freq',
    title: 'T = 1 / f — Periodo',
    expr: '1 / f',
    vars: [
      { name: 'f', label: 'Frecuencia (f)', unit: 'Hz', example: '2' }
    ],
    output: { name: 'T', label: 'Periodo (T)', unit: 's' }
  },
  {
    id: 'freq_from_period',
    title: 'f = 1 / T — Frecuencia',
    expr: '1 / T',
    vars: [
      { name: 'T', label: 'Periodo (T)', unit: 's', example: '0.5' }
    ],
    output: { name: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
  },
  {
    id: 'ac_from_v_r',
    title: 'a_c = v² / r — Aceleración centrípeta',
    expr: '(v * v) / r',
    vars: [
      { name: 'v', label: 'Velocidad tangencial (v)', unit: 'm/s', example: '10' },
      { name: 'r', label: 'Radio (r)', unit: 'm', example: '2' }
    ],
    output: { name: 'ac', label: 'Aceleración centrípeta (a_c)', unit: 'm/s²' }
  },
  {
    id: 'theta_from_omega_t',
    title: 'θ = ω · t — Desplazamiento angular',
    expr: 'omega * time',
    vars: [
      { name: 'omega', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '3' },
      { name: 'time', label: 'Tiempo (t)', unit: 's', example: '2' }
    ],
    output: { name: 'theta', label: 'Desplazamiento angular (θ)', unit: 'rad' }
  },
  {
    id: 'alpha_from_deltaomega_t',
    title: 'α = (ω - ω₀) / t — Aceleración angular',
    expr: '(omega - omega0) / time',
    vars: [
      { name: 'omega0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' },
      { name: 'omega', label: 'Velocidad angular final (ω)', unit: 'rad/s', example: '6' },
      { name: 'time', label: 'Tiempo (t)', unit: 's', example: '2' }
    ],
    output: { name: 'alpha', label: 'Aceleración angular (α)', unit: 'rad/s²' }
  }
];

export default calculators;
