// Lista de ejemplos para MCUA
const exampleItems = [
  {
    title: "Aceleración de un disco",
    description: "Un disco parte del reposo y adquiere una velocidad de 33.3 rpm en 5 segundos. Calcula la aceleración angular.",
    solution: [
      "Convertir rpm a rad/s: ω = 33.3 rpm = (33.3 · 2π)/60 ≈ 3.49 rad/s",
      "Velocidad angular inicial: ω₀ = 0",
      "Tiempo: t = 5 s",
      "Aplicar ecuación: α = (ω - ω₀)/t",
      "Sustituir: α = (3.49 - 0)/5",
      "Calcular: α = 0.698 rad/s²"
    ],
    result: "0.698 rad/s²"
  },
  {
    title: "Frenado de una turbina",
    description: "Una turbina gira a 3600 rpm y comienza a frenar con aceleración angular constante de -2 rad/s². ¿Cuánto tiempo tarda en detenerse?",
    solution: [
      "Convertir rpm a rad/s: ω₀ = 3600 rpm = (3600 · 2π)/60 = 60π rad/s ≈ 188.5 rad/s",
      "Velocidad angular final: ω = 0 (se detiene)",
      "Aceleración angular: α = -2 rad/s²",
      "Aplicar ecuación: ω = ω₀ + αt",
      "Despejar t: t = (ω - ω₀)/α",
      "Sustituir: t = (0 - 188.5)/(-2)",
      "Calcular: t = 94.25 s"
    ],
    result: "94.25 s"
  },
  {
    title: "Posición angular",
    description: "Un ventilador parte del reposo y acelera uniformemente a 0.5 rad/s². ¿Cuántas vueltas habrá dado después de 10 segundos?",
    solution: [
      "Posición angular inicial: θ₀ = 0",
      "Velocidad angular inicial: ω₀ = 0",
      "Aceleración angular: α = 0.5 rad/s²",
      "Tiempo: t = 10 s",
      "Aplicar ecuación: θ = θ₀ + ω₀t + ½αt²",
      "Sustituir: θ = 0 + 0 + ½(0.5)(10)²",
      "Calcular: θ = 25 rad",
      "Convertir a vueltas: 25/(2π) ≈ 3.98 vueltas"
    ],
    result: "3.98 vueltas"
  }
];

export default exampleItems;
