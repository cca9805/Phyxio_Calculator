export default [
  {
    id: 1,
    dificultad: 'fácil',
    enunciado: "Un objeto parte del reposo y acelera a 3 m/s² durante 4 segundos. ¿Cuál es su velocidad final?",
    datos: ["Aceleración: 3 m/s²", "Tiempo: 4 s"],
    respuesta: 12,
    unidad: 'm/s',
    tolerancia: 0.1,
    solucion: [
      'Aplicar fórmula: v = v₀ + at',
      'v₀ = 0, a = 3 m/s², t = 4 s',
      'v = 0 + 3 × 4 = 12 m/s',
    ],
    pistas: ['Usa la fórmula v = v₀ + at'],
  },
  {
    id: 2,
    dificultad: 'media',
    enunciado: 'Un coche a 15 m/s frena uniformemente a -3 m/s² hasta detenerse. ¿Distancia de frenado?',
    datos: ['v₀ = 15 m/s', 'v = 0', 'a = -3 m/s²'],
    respuesta: 37.5,
    unidad: 'm',
    tolerancia: 0.5,
    solucion: ['Torricelli: v² = v₀² + 2 a Δx → Δx = (v² - v₀²)/(2a) = (0 - 225)/(-6) = 37.5 m'],
    pistas: ['Aplica Torricelli'],
  }
];
