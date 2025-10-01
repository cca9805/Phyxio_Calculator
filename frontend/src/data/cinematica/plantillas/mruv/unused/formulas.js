export default [
  {
    name: "Velocidad Final",
    expression: "v = v₀ + a t",
    variables: [
      { symbol: "v", name: "Velocidad final", unit: "m/s" },
      { symbol: "v₀", name: "Velocidad inicial", unit: "m/s" },
      { symbol: "a", name: "Aceleración", unit: "m/s²" },
      { symbol: "t", name: "Tiempo", unit: "s" }
    ],
    description: "Velocidad final en MRUV."
  },
  {
    name: "Posición",
    expression: "x = x₀ + v₀ t + ½ a t²",
    variables: [
      { symbol: "x", name: "Posición final", unit: "m" },
      { symbol: "x₀", name: "Posición inicial", unit: "m" },
      { symbol: "v₀", name: "Velocidad inicial", unit: "m/s" },
      { symbol: "t", name: "Tiempo", unit: "s" },
      { symbol: "a", name: "Aceleración", unit: "m/s²" }
    ],
    description: "Posición en función del tiempo en MRUV."
  },
  {
    name: "Velocidad sin Tiempo",
    expression: "v² = v₀² + 2 a (x - x₀)",
    variables: [
      { symbol: "v", name: "Velocidad final", unit: "m/s" },
      { symbol: "v₀", name: "Velocidad inicial", unit: "m/s" },
      { symbol: "a", name: "Aceleración", unit: "m/s²" },
      { symbol: "x", name: "Posición final", unit: "m" },
      { symbol: "x₀", name: "Posición inicial", unit: "m" }
    ],
    description: "Relación útil cuando no se conoce el tiempo."
  }
];
