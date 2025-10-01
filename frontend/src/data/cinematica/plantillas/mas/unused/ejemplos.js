export default [
  {
    title: "Resorte oscilante",
    description: "Un resorte con constante k = 200 N/m y masa m = 0.5 kg oscila con amplitud A = 0.1 m. ¿Cuál es su período y frecuencia angular?",
    solution: [
      "Identificar variables: k = 200 N/m, m = 0.5 kg, A = 0.1 m",
      "Frecuencia angular: ω = √(k/m) = √(200/0.5) = √400 = 20 rad/s",
      "Período: T = 2π/ω = 2π/20 = 0.314 s",
      "Frecuencia: f = 1/T = 1/0.314 = 3.18 Hz"
    ],
    result: "T = 0.314 s, ω = 20 rad/s, f = 3.18 Hz",
  },
  {
    title: "Energía en MAS",
    description: "Un sistema MAS tiene constante k = 100 N/m y amplitud A = 0.2 m. ¿Cuál es su energía total y velocidad máxima?",
    solution: [
      "Identificar variables: k = 100 N/m, A = 0.2 m",
      "Energía total: E = ½kA² = ½ × 100 × 0.2² = 2 J",
      "Velocidad máxima: v_max = Aω = A√(k/m)",
      "Para m = 1 kg: v_max = 0.2 × √100 = 2 m/s"
    ],
    result: "E = 2 J, v_max = 2 m/s",
  },
  {
    title: "Péndulo simple",
    description: "Un péndulo simple de longitud L = 1 m oscila en la Tierra (g = 9.8 m/s²). ¿Cuál es su período?",
    solution: [
      "Identificar variables: L = 1 m, g = 9.8 m/s²",
      "Para péndulo simple: T = 2π√(L/g)",
      "Sustituir valores: T = 2π√(1/9.8)",
      "Calcular: T = 2π × 0.32 = 2.01 s"
    ],
    result: "T = 2.01 s",
  }
];
