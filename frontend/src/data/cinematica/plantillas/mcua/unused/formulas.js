export default [
  {
    name: "Velocidad Angular Final",
    expression: "ω = ω₀ + αt",
    variables: [
      { symbol: "ω", name: "Velocidad Angular Final", unit: "rad/s" },
      { symbol: "ω₀", name: "Velocidad Angular Inicial", unit: "rad/s" },
      { symbol: "α", name: "Aceleración Angular", unit: "rad/s²" },
      { symbol: "t", name: "Tiempo", unit: "s" }
    ],
    description: "La velocidad angular cambia uniformemente con el tiempo."
  },
  {
    name: "Ángulo Recorrido",
    expression: "θ = ω₀t + ½αt²",
    variables: [
      { symbol: "θ", name: "Ángulo", unit: "rad" },
      { symbol: "ω₀", name: "Velocidad Angular Inicial", unit: "rad/s" },
      { symbol: "t", name: "Tiempo", unit: "s" },
      { symbol: "α", name: "Aceleración Angular", unit: "rad/s²" }
    ],
    description: "El ángulo depende lineal y cuadráticamente del tiempo."
  },
  {
    name: "Velocidad sin Tiempo",
    expression: "ω² = ω₀² + 2αθ",
    variables: [
      { symbol: "ω", name: "Velocidad Angular Final", unit: "rad/s" },
      { symbol: "ω₀", name: "Velocidad Angular Inicial", unit: "rad/s" },
      { symbol: "α", name: "Aceleración Angular", unit: "rad/s²" },
      { symbol: "θ", name: "Ángulo", unit: "rad" }
    ],
    description: "Relación útil cuando no se conoce el tiempo."
  }
];
