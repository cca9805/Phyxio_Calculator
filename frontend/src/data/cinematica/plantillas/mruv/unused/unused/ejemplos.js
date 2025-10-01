export default [
  {
    titulo: "Rueda acelerando desde el reposo",
    descripcion: "Una rueda parte del reposo y acelera a α = 2 rad/s² durante t = 5 s. ¿Cuál es ω final?",
    solucion: [
      "Identificar MCUA: α constante",
      "Datos: ω₀ = 0, α = 2 rad/s², t = 5 s",
      "Ecuación: ω = ω₀ + αt",
      "Sustitución: ω = 0 + 2 × 5",
      "Resultado: ω = 10 rad/s"
    ],
    resultado: "10 rad/s"
  },
  {
    titulo: "Ángulo recorrido con aceleración",
    descripcion: "Un disco con ω₀ = 3 rad/s y α = 1.5 rad/s² gira durante 4 s. ¿Qué ángulo recorre?",
    solucion: [
      "Identificar MCUA",
      "Datos: ω₀ = 3, α = 1.5, t = 4",
      "Ecuación: θ = ω₀t + ½αt²",
      "Cálculo: θ = 3×4 + 0.5×1.5×4² = 12 + 12 = 24 rad"
    ],
    resultado: "24 rad"
  },
  {
    titulo: "Tiempo de frenado",
    descripcion: "Un rotor frena desde ω₀ = 20 rad/s hasta detenerse con α = -3 rad/s². ¿Cuánto tarda?",
    solucion: [
      "Identificar MCUA con α < 0",
      "Datos: ω = 0, ω₀ = 20, α = -3",
      "Ecuación: ω = ω₀ + αt",
      "Despeje: t = (ω - ω₀)/α = (0 - 20)/(-3) = 6.67 s"
    ],
    resultado: "6.67 s"
  },
  {
    titulo: "Disco acelerando",
    descripcion: "Un disco parte del reposo y acelera angularmente a 0.5 rad/s² durante 8 segundos. ¿Cuál es su velocidad angular final?",
    solucion: [
      "Identificar que es MCUA: aceleración angular constante, trayectoria circular",
      "Aplicar la ecuación: ω = ω₀ + αt",
      "ω₀ = 0, α = 0.5 rad/s², t = 8 s",
      "Sustituir valores: ω = 0 + 0.5 × 8",
      "Calcular: ω = 4 rad/s"
    ],
    resultado: "4 rad/s"
  },
  // Legacy ejemplo fusionado
  {
    title: "Rueda acelerando desde el reposo",
    description: "Una rueda parte del reposo y acelera a α = 2 rad/s² durante t = 5 s. ¿Cuál es ω final?",
    solution: [
      "Identificar MCUA: α constante",
      "Datos: ω₀ = 0, α = 2 rad/s², t = 5 s",
      "Ecuación: ω = ω₀ + αt",
      "Sustitución: ω = 0 + 2 × 5",
      "Resultado: ω = 10 rad/s"
    ],
    result: "10 rad/s"
  },
  {
    title: "Ángulo recorrido con aceleración",
    description: "Un disco con ω₀ = 3 rad/s y α = 1.5 rad/s² gira durante 4 s. ¿Qué ángulo recorre?",
    solution: [
      "Identificar MCUA",
      "Datos: ω₀ = 3, α = 1.5, t = 4",
      "Ecuación: θ = ω₀t + ½αt²",
      "Cálculo: θ = 3×4 + 0.5×1.5×4² = 12 + 12 = 24 rad"
    ],
    result: "24 rad"
  },
  {
    title: "Tiempo de frenado",
    description: "Un rotor frena desde ω₀ = 20 rad/s hasta detenerse con α = -3 rad/s². ¿Cuánto tarda?",
    solution: [
      "Identificar MCUA con α < 0",
      "Datos: ω = 0, ω₀ = 20, α = -3",
      "Ecuación: ω = ω₀ + αt",
      "Despeje: t = (ω - ω₀)/α = (0 - 20)/(-3) = 6.67 s"
    ],
    result: "6.67 s"
  }
];
