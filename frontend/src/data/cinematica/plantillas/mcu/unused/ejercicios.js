export default [
  { titulo: 'Ejercicio 1', contenido: 'Ejercicio de MCU...' },
  // Legacy fusionado
  {
    id: 1,
    difficulty: 'easy',
    statement: 'Una rueda gira 3π radianes en 6 segundos. ¿Cuál es su velocidad angular?',
    given: ['Ángulo: 3π rad', 'Tiempo: 6 s'],
    correctAnswer: 1.57,
    unit: 'rad/s',
    tolerance: 0.01,
    solution: [
      'Identificar variables: θ = 3π rad, t = 6 s',
      'Aplicar fórmula: ω = θ/t',
      'Sustituir valores: ω = 3π/6',
      'Calcular: ω = π/2 = 1.57 rad/s',
    ],
    hints: ['Usa la fórmula ω = θ/t', 'π/2 ≈ 1.57 rad/s'],
  },
  {
    id: 2,
    difficulty: 'medium',
    statement: 'Un disco de 0.8 m de radio gira a 4 rad/s. ¿Cuál es su velocidad tangencial?',
    given: ['Radio: 0.8 m', 'Velocidad angular: 4 rad/s'],
    correctAnswer: 3.2,
    unit: 'm/s',
    tolerance: 0.1,
    solution: [
      'Identificar variables: r = 0.8 m, ω = 4 rad/s',
      'Aplicar fórmula: v = rω',
      'Sustituir valores: v = 0.8 × 4',
      'Calcular: v = 3.2 m/s',
    ],
    hints: ['Usa la fórmula v = rω', 'La velocidad tangencial es el producto del radio por la velocidad angular'],
  },
  {
    id: 3,
    difficulty: 'hard',
    statement: 'Una partícula gira en MCU con velocidad angular de 2π rad/s. ¿Cuál es su período y frecuencia?',
    given: ['Velocidad angular: 2π rad/s'],
    correctAnswer: 1,
    unit: 's (período)',
    tolerance: 0.1,
    solution: [
      'Identificar variables: ω = 2π rad/s',
      'Aplicar fórmula: T = 2π/ω',
      'Sustituir valores: T = 2π/(2π)',
      'Calcular: T = 1 s',
      'Frecuencia: f = 1/T = 1 Hz',
    ],
    hints: ['Usa T = 2π/ω para el período', 'La frecuencia es f = 1/T', '2π rad/s = 1 revolución por segundo'],
  }
];
