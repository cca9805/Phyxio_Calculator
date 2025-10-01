export default [
  {
    name: "Fuerza Restauradora",
    expression: "F = -kx",
    variables: [
      { symbol: "F", name: "Fuerza", unit: "N" },
      { symbol: "k", name: "Constante Elástica", unit: "N/m" },
      { symbol: "x", name: "Desplazamiento", unit: "m" }
    ],
    description: "Fuerza proporcional y opuesta al desplazamiento."
  },
  {
    name: "Período",
    expression: "T = 2π√(m/k)",
    variables: [
      { symbol: "T", name: "Período", unit: "s" },
      { symbol: "m", name: "Masa", unit: "kg" },
      { symbol: "k", name: "Constante Elástica", unit: "N/m" }
    ],
    description: "Período del movimiento oscilatorio."
  },
  {
    name: "Frecuencia Angular",
    expression: "ω = √(k/m)",
    variables: [
      { symbol: "ω", name: "Frecuencia Angular", unit: "rad/s" },
      { symbol: "k", name: "Constante Elástica", unit: "N/m" },
      { symbol: "m", name: "Masa", unit: "kg" }
    ],
    description: "Frecuencia angular del movimiento."
  },
  {
    name: "Posición",
    expression: "x = A cos(ωt + φ)",
    variables: [
      { symbol: "x", name: "Posición", unit: "m" },
      { symbol: "A", name: "Amplitud", unit: "m" },
      { symbol: "ω", name: "Frecuencia Angular", unit: "rad/s" },
      { symbol: "t", name: "Tiempo", unit: "s" },
      { symbol: "φ", name: "Fase Inicial", unit: "rad" }
    ],
    description: "Posición en función del tiempo."
  }
];
