const exampleItems = [
  {
    title: "Resorte oscilante",
    description: "Un objeto de 0.5 kg unido a un resorte con constante k = 20 N/m oscila con una amplitud de 10 cm. Calcula el periodo de oscilación.",
    solution: [
      "Identificar variables: m = 0.5 kg, k = 20 N/m",
      "Aplicar la fórmula del periodo: T = 2π√(m/k)",
      "Sustituir valores: T = 2π√(0.5/20)",
      "Simplificar: T = 2π√(1/40)",
      "Calcular: T = 2π/√40 ≈ 0.99 s"
    ],
    result: "0.99 s"
  },
  {
    title: "Velocidad máxima",
    description: "Un péndulo simple de 50 cm de longitud oscila con una amplitud angular de 5°. ¿Cuál es la velocidad máxima de la masa? (g = 9.8 m/s²)",
    solution: [
      "Convertir amplitud a radianes: A = 5° = 0.0873 rad",
      "Longitud: L = 0.5 m",
      "Calcular frecuencia angular: ω = √(g/L) = √(9.8/0.5) = √19.6 ≈ 4.427 rad/s",
      "Velocidad máxima: v_max = Aω",
      "Sustituir: v_max = 0.0873 · 4.427",
      "Calcular: v_max ≈ 0.386 m/s"
    ],
    result: "0.386 m/s"
  },
  {
    title: "Energía mecánica",
    description: "Un objeto de 200 g unido a un resorte oscila con amplitud de 15 cm y periodo de 0.8 s. Calcula la energía mecánica total.",
    solution: [
      "Masa: m = 0.2 kg",
      "Amplitud: A = 0.15 m",
      "Periodo: T = 0.8 s",
      "Calcular frecuencia angular: ω = 2π/T = 2π/0.8 = 7.85 rad/s",
      "Calcular constante del resorte: k = mω² = 0.2 · (7.85)² ≈ 12.32 N/m",
      "Energía mecánica: E = ½kA² = ½ · 12.32 · (0.15)² = 0.5 · 12.32 · 0.0225",
      "Calcular: E ≈ 0.139 J"
    ],
    result: "0.139 J"
  }
];

export default exampleItems;
