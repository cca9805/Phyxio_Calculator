export default [
  {
    id: 1,
    dificultad: 'fácil',
    enunciado: "Un proyectil se lanza con velocidad inicial de 10 m/s en un ángulo de 30°. ¿Cuál es su altura máxima?",
    datos: ["Velocidad inicial: 10 m/s", "Ángulo: 30°"],
    respuesta: 1.27,
    unidad: 'm',
    tolerancia: 0.01,
    solucion: [
      'Descomponer velocidad inicial: v₀y = v₀ sin(θ)',
      'Calcular altura máxima: h = v₀y² / (2g)',
      'Sustituir valores y calcular',
    ],
    pistas: ['Usa la fórmula h = v₀y² / (2g)'],
  },
  // Legacy fusionado
  {
    id: 2,
    difficulty: 'easy',
    statement: 'Un proyectil se lanza con v₀ = 30 m/s y θ = 45°. ¿Cuál es su alcance máximo?',
    given: ['v₀ = 30 m/s', 'θ = 45°'],
    correctAnswer: 91.8,
    unit: 'm',
    tolerance: 0.5,
    solution: ['R = (v₀² sin(2θ))/g = 900/9.8 = 91.8 m'],
    hints: ['Usa R = (v₀² sin(2θ))/g', 'sin(90°) = 1']
  },
  {
    id: 3,
    difficulty: 'medium',
    statement: 'v₀ = 25 m/s y θ = 60°. ¿Altura máxima?',
    given: ['v₀ = 25 m/s', 'θ = 60°'],
    correctAnswer: 23.9,
    unit: 'm',
    tolerance: 0.2,
    solution: ['h_max = (v₀² sin²θ)/(2g) = (625×0.75)/19.6 = 23.9 m'],
    hints: ['sin²60° = 0.75']
  }
];
