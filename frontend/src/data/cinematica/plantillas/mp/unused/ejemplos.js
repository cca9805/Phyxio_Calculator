export default [
  {
    titulo: 'Componentes de velocidad inicial',
    descripcion: 'Un proyectil se lanza con velocidad inicial de 50 m/s y ángulo de 30°. ¿Cuáles son sus componentes v0x y v0y?',
    solucion: [
      'v0x = v0 cos θ = 50 cos 30° = 43.3 m/s',
      'v0y = v0 sin θ = 50 sin 30° = 25 m/s'
    ],
    resultado: 'v0x = 43.3 m/s, v0y = 25 m/s'
  },
  {
    titulo: 'Alcance máximo de un balón',
    descripcion: 'Un balón se patea con v0 = 20 m/s y θ = 45°. ¿Cuál es su alcance máximo?',
    solucion: [
      'R = v0² sin(2θ)/g = 400×1/9.8',
      'R = 40.8 m'
    ],
    resultado: 'R = 40.8 m'
  },
  {
    titulo: 'Altura máxima',
    descripcion: 'Un proyectil se lanza con v0 = 30 m/s y θ = 60°. ¿Cuál es su altura máxima?',
    solucion: [
      'v0y = v0 sin θ = 26 m/s',
      'hmax = v0y²/(2g) = 676/19.6 = 34.5 m'
    ],
    resultado: 'hmax = 34.5 m'
  },
  // Legacy ejemplo fusionado
  {
    title: "Pelota lanzada",
    description: "Una pelota se lanza con velocidad inicial de 20 m/s en un ángulo de 45°. ¿Cuál es su alcance máximo?",
    solution: [
      "Descomponer velocidad inicial: v₀x = v₀ cos(θ), v₀y = v₀ sin(θ)",
      "Calcular tiempo de vuelo: t = 2v₀y/g",
      "Calcular alcance: x = v₀x × t",
      "Sustituir valores y calcular"
    ],
    result: "40.8 m"
  }
];
