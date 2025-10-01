// filepath: src/data/cinematica/mcua/mcuaCalculators.js
export const calculators = [
  // 1
  {
    id: 'f-mcua-1',
    title: 'ω = ω₀ + α·t — Velocidad angular final',
    expr: 'omega0 + alpha * t',
    vars: [
      { name: 'omega0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '1.5' },
      { name: 'alpha', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '0.2' },
      { name: 't', label: 'Tiempo (t)', unit: 's', example: '4' }
    ],
    output: { name: 'omega', label: 'Velocidad angular final (ω)', unit: 'rad/s' }
  },

  // 2
  {
    id: 'f-mcua-2',
    title: 'θ = θ₀ + ω₀·t + ½α·t² — Posición angular',
    expr: 'theta0 + omega0 * t + 0.5 * alpha * t * t',
    vars: [
      { name: 'theta0', label: 'Ángulo inicial (θ₀)', unit: 'rad', example: '0' },
      { name: 'omega0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '1.2' },
      { name: 'alpha', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '0.3' },
      { name: 't', label: 'Tiempo (t)', unit: 's', example: '5' }
    ],
    output: { name: 'theta', label: 'Ángulo final (θ)', unit: 'rad' }
  },

  // 3
  {
    id: 'f-mcua-3',
    title: 'ω² = ω₀² + 2α(θ - θ₀) — Relación sin tiempo',
    expr: 'Math.sqrt(omega0*omega0 + 2 * alpha * (theta - theta0))',
    vars: [
      { name: 'omega0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '1.0' },
      { name: 'alpha', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '0.5' },
      { name: 'theta', label: 'Ángulo final (θ)', unit: 'rad', example: '10' },
      { name: 'theta0', label: 'Ángulo inicial (θ₀)', unit: 'rad', example: '2' }
    ],
    output: { name: 'omega', label: 'Velocidad angular (ω)', unit: 'rad/s' }
  },

  // 4
  {
    id: 'f-mcua-4',
    title: 'v = ω·r — Velocidad tangencial',
    expr: 'omega * r',
    vars: [
      { name: 'omega', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '2' },
      { name: 'r', label: 'Radio (r)', unit: 'm', example: '0.5' }
    ],
    output: { name: 'v', label: 'Velocidad tangencial (v)', unit: 'm/s' }
  },

  // 5
  {
    id: 'f-mcua-5',
    title: 'a_t = α·r — Aceleración tangencial',
    expr: 'alpha * r',
    vars: [
      { name: 'alpha', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '0.4' },
      { name: 'r', label: 'Radio (r)', unit: 'm', example: '0.75' }
    ],
    output: { name: 'at', label: 'Aceleración tangencial (aₜ)', unit: 'm/s²' }
  },

  // 6
  {
    id: 'f-mcua-6',
    title: 'a_c = ω²·r = v²/r — Aceleración centrípeta',
    expr: 'omega * omega * r',
    vars: [
      { name: 'omega', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '3' },
      { name: 'r', label: 'Radio (r)', unit: 'm', example: '0.4' }
    ],
    output: { name: 'ac', label: 'Aceleración centrípeta (a_c)', unit: 'm/s²' }
  },

  // 7
  {
    id: 'f-mcua-7',
    title: 'a = √(a_t² + a_c²) — Aceleración total',
    expr: 'Math.sqrt(at*at + ac*ac)',
    vars: [
      { name: 'at', label: 'Aceleración tangencial (aₜ)', unit: 'm/s²', example: '2' },
      { name: 'ac', label: 'Aceleración centrípeta (a_c)', unit: 'm/s²', example: '3' }
    ],
    output: { name: 'a', label: 'Aceleración total (a)', unit: 'm/s²' }
  },

  // 8
  {
    id: 'f-mcua-8',
    title: 'K = ½ I ω² — Energía cinética rotacional',
    expr: '0.5 * I * omega * omega',
    vars: [
      { name: 'I', label: 'Momento de inercia (I)', unit: 'kg·m²', example: '0.2' },
      { name: 'omega', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '5' }
    ],
    output: { name: 'K', label: 'Energía cinética rotacional (K)', unit: 'J' }
  },

  // 9
  {
    id: 'f-mcua-9',
    title: 'W = τ·Δθ — Trabajo por torque',
    expr: 'tau * deltaTheta',
    vars: [
      { name: 'tau', label: 'Torque (τ)', unit: 'N·m', example: '10' },
      { name: 'deltaTheta', label: 'Desplazamiento angular (Δθ)', unit: 'rad', example: '1.57' }
    ],
    output: { name: 'W', label: 'Trabajo (W)', unit: 'J' }
  },

  // 10
  {
    id: 'f-mcua-10',
    title: 'f = ω / (2π) = 1/T — Frecuencia y período',
    expr: 'omega / (2 * Math.PI)',
    vars: [
      { name: 'omega', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '6.28' },
      { name: 'T', label: 'Periodo (T)', unit: 's', example: '1' }
    ],
    output: { name: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
  },

  // 11
  {
    id: 'f-mcua-11',
    title: 'N = θ / (2π) — Número de vueltas',
    expr: 'theta / (2 * Math.PI)',
    vars: [
      { name: 'theta', label: 'Ángulo recorrido (θ)', unit: 'rad', example: '6.28' }
    ],
    output: { name: 'N', label: 'Número de vueltas (N)', unit: '' }
  },

  // 12
  {
    id: 'f-mcua-12',
    title: 'A = ½ r² θ — Área barrida',
    expr: '0.5 * r * r * theta',
    vars: [
      { name: 'r', label: 'Radio (r)', unit: 'm', example: '2' },
      { name: 'theta', label: 'Ángulo (θ)', unit: 'rad', example: '1.57' }
    ],
    output: { name: 'A', label: 'Área barrida (A)', unit: 'm²' }
  },

  // 13
  {
    id: 'f-mcua-14',
    title: 's = θ·r — Desplazamiento lineal',
    expr: 'theta * r',
    vars: [
      { name: 'theta', label: 'Ángulo recorrido (θ)', unit: 'rad', example: '2' },
      { name: 'r', label: 'Radio (r)', unit: 'm', example: '0.5' }
    ],
    output: { name: 's', label: 'Desplazamiento lineal (s)', unit: 'm' }
  },

  // 14
  {
    id: 'f-mcua-15',
    title: 'Δθ = ω₀·t + ½α·t² — Ángulo recorrido',
    expr: 'omega0 * t + 0.5 * alpha * t * t',
    vars: [
      { name: 'omega0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '1.2' },
      { name: 't', label: 'Tiempo (t)', unit: 's', example: '5' },
      { name: 'alpha', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '0.3' }
    ],
    output: { name: 'deltaTheta', label: 'Ángulo recorrido (Δθ)', unit: 'rad' }
  },

  // 15
  {
    id: 'f-mcua-16',
    title: 'P = τ·ω — Potencia rotacional',
    expr: 'tau * omega',
    vars: [
      { name: 'tau', label: 'Torque (τ)', unit: 'N·m', example: '8' },
      { name: 'omega', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '20' }
    ],
    output: { name: 'P', label: 'Potencia (P)', unit: 'W' }
  },

  // 16
  {
    id: 'f-mcua-17',
    title: 'W = ½ I (ω² - ω₀²) — Teorema Trabajo-Energía (Rotacional)',
    expr: '0.5 * I * (omega*omega - omega0*omega0)',
    vars: [
      { name: 'I', label: 'Momento de inercia (I)', unit: 'kg·m²', example: '0.2' },
      { name: 'omega', label: 'Velocidad angular final (ω)', unit: 'rad/s', example: '5' },
      { name: 'omega0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '1' }
    ],
    output: { name: 'W', label: 'Trabajo (W)', unit: 'J' }
  }
];

export default calculators;
