export default [
  {
    id: 1,
    dificultad: 'fácil',
    enunciado: "Un ciclista recorre 250 metros en línea recta. ¿Cuál es su desplazamiento?",
    datos: ["Distancia: 250 m"],
    respuesta: 250,
    unidad: 'm',
    tolerancia: 0.1,
    solucion: [
      'Trayectoria recta, desplazamiento igual a distancia recorrida',
      'Desplazamiento = 250 m',
    ],
    pistas: ['Desplazamiento = distancia en MR'],
  },
  // Legacy fusionado
  {
    id: 2,
    difficulty: 'easy',
    statement: 'Un tren viaja a 90 km/h y un coche a 70 km/h en la misma dirección. ¿Cuál es la velocidad relativa del tren respecto al coche?',
    given: ['v₁ = 90 km/h', 'v₂ = 70 km/h', 'misma dirección'],
    correctAnswer: 20,
    unit: 'km/h',
    tolerance: 1,
    solution: ['v_rel = v₁ - v₂ = 20 km/h'],
    hints: ['En misma dirección se restan velocidades']
  },
  {
    id: 3,
    difficulty: 'medium',
    statement: 'Dos coches separados 300 km se dirigen uno hacia el otro a 80 km/h y 60 km/h. ¿Cuándo se encuentran?',
    given: ['d = 300 km', 'v₁ = 80 km/h', 'v₂ = 60 km/h'],
    correctAnswer: 2.14,
    unit: 'h',
    tolerance: 0.1,
    solution: ['t = d/(v₁ + v₂) = 300/140 = 2.14 h'],
    hints: ['Cuando se aproximan se suman velocidades']
  }
];
