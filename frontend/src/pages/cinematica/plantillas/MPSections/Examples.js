const exampleItems = [
  {
    title: "Alcance horizontal",
    description: "Un proyectil se lanza con velocidad inicial de 40 m/s a un ángulo de 30° sobre la horizontal. Calcula el alcance horizontal.",
    solution: [
      "Velocidad inicial: v₀ = 40 m/s",
      "Ángulo: θ = 30°",
      "Aceleración de la gravedad: g = 9.8 m/s²",
      "Aplicar la fórmula del alcance: R = (v₀² · sen(2θ))/g",
      "Sustituir valores: R = (40² · sen(60°))/9.8",
      "Calcular: R = 1600 · 0.866 / 9.8 ≈ 141.4 m"
    ],
    result: "141.4 m"
  },
  {
    title: "Altura máxima",
    description: "Una pelota se lanza con velocidad inicial de 25 m/s a un ángulo de 45° sobre la horizontal. ¿Qué altura máxima alcanza?",
    solution: [
      "Velocidad inicial: v₀ = 25 m/s",
      "Ángulo: θ = 45°",
      "Velocidad inicial vertical: v₀y = v₀ · sen(θ) = 25 · sen(45°) = 25 · 0.707 ≈ 17.68 m/s",
      "Usar la fórmula de altura máxima: H = v₀y²/(2g)",
      "Sustituir: H = (17.68)²/(2 · 9.8)",
      "Calcular: H = 312.58/19.6 ≈ 15.95 m"
    ],
    result: "15.95 m"
  },
  {
    title: "Tiempo de vuelo",
    description: "Un objeto se lanza horizontalmente desde una altura de 20 m con velocidad inicial de 15 m/s. ¿Cuánto tiempo permanece en el aire?",
    solution: [
      "Altura: h = 20 m",
      "La componente vertical del movimiento es caída libre",
      "Usar ecuación de caída libre: h = ½gt²",
      "Despejar t: t = √(2h/g)",
      "Sustituir: t = √(2 · 20/9.8)",
      "Calcular: t = √(40/9.8) ≈ 2.02 s"
    ],
    result: "2.02 s"
  }
];

export default exampleItems;
