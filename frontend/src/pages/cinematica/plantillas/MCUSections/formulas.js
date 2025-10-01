const formulas = [
  // 1. FÓRMULAS BÁSICAS
  {
    name: "1. Velocidad Angular",
    expression: "ω = 2π/T = 2πf",
    variables: [
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" },
      { symbol: "T", name: "Período", unit: "s" },
      { symbol: "f", name: "Frecuencia", unit: "Hz" }
    ],
    description: "Relación entre velocidad angular, período y frecuencia",
    examples: [
      {
        title: "Velocidad angular a partir de período",
        description: "Un objeto con período de 2 segundos",
        calculation: "ω = 2π/2 = π rad/s",
        result: "π rad/s"
      },
      {
        title: "Velocidad angular a partir de frecuencia",
        description: "Frecuencia de 0.5 Hz",
        calculation: "ω = 2π × 0.5 = π rad/s",
        result: "π rad/s"
      }
    ],
    notes: [
      "En MCU, ω es constante",
      "1 revolución = 2π radianes",
      "Relación fundamental entre ω, T y f"
    ]
  },
  {
    name: "2. Posición Angular",
    expression: "θ = θ₀ + ωt",
    variables: [
      { symbol: "θ", name: "Posición Angular Final", unit: "rad" },
      { symbol: "θ₀", name: "Posición Angular Inicial", unit: "rad" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" },
      { symbol: "t", name: "Tiempo", unit: "s" }
    ],
    description: "Posición angular en función del tiempo",
    examples: [
      {
        title: "Posición después de un tiempo",
        description: "Partiendo de π/2 rad con ω = π/4 rad/s durante 4s",
        calculation: "θ = π/2 + (π/4)×4 = 3π/2 rad",
        result: "3π/2 rad (270°)"
      }
    ],
    notes: [
      "Similar a x = x₀ + vt en MRU",
      "El ángulo se puede expresar en radianes o grados",
      "Para t = T, el ángulo aumenta en 2π rad"
    ]
  },
  {
    name: "3. Velocidad Tangencial",
    expression: "v = rω",
    variables: [
      { symbol: "v", name: "Velocidad Tangencial", unit: "m/s" },
      { symbol: "r", name: "Radio", unit: "m" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" }
    ],
    description: "Velocidad en la dirección tangente a la circunferencia",
    examples: [
      {
        title: "Velocidad tangencial",
        description: "Radio de 2 m y velocidad angular de 3 rad/s",
        calculation: "v = 2 × 3 = 6 m/s",
        result: "6 m/s"
      }
    ],
    notes: [
      "Es constante en magnitud",
      "Cambia de dirección continuamente",
      "Es perpendicular al radio"
    ]
  },
  {
    name: "4. Período y Frecuencia",
    expression: "T = 2π/ω, f = 1/T",
    variables: [
      { symbol: "T", name: "Período", unit: "s" },
      { symbol: "f", name: "Frecuencia", unit: "Hz" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" }
    ],
    description: "Tiempo para completar una vuelta y número de vueltas por segundo",
    examples: [
      {
        title: "Período y frecuencia",
        description: "Velocidad angular de π rad/s",
        calculation: "T = 2π/π = 2s, f = 1/2 = 0.5 Hz",
        result: "T = 2s, f = 0.5 Hz"
      }
    ],
    notes: [
      "T y f son inversamente proporcionales",
      "f = ω/(2π)",
      "1 Hz = 1 vuelta por segundo"
    ]
  },
  {
    name: "5. Aceleración Centrípeta",
    expression: "a_c = v²/r = rω² = vω",
    variables: [
      { symbol: "a_c", name: "Aceleración Centrípeta", unit: "m/s²" },
      { symbol: "v", name: "Velocidad Tangencial", unit: "m/s" },
      { symbol: "r", name: "Radio", unit: "m" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" }
    ],
    description: "Aceleración dirigida hacia el centro de la circunferencia",
    examples: [
      {
        title: "Aceleración centrípeta",
        description: "Radio de 1 m y velocidad de 5 m/s",
        calculation: "a_c = 5²/1 = 25 m/s²",
        result: "25 m/s²"
      },
      {
        title: "Aceleración centrípeta con ω",
        description: "Radio de 2 m y ω = 3 rad/s",
        calculation: "a_c = 2 × 3² = 18 m/s²",
        result: "18 m/s²"
      }
    ],
    notes: [
      "Siempre apunta hacia el centro",
      "Es responsable del cambio de dirección",
      "No cambia la magnitud de la velocidad",
      "Relaciona v, r y ω"
    ]
  },
  {
    name: "6. Número de vueltas",
    expression: "n = θ/2π",
    variables: [
      { symbol: "n", name: "Número de vueltas", unit: "" },
      { symbol: "θ", name: "Ángulo", unit: "rad" }
    ],
    description: "Número de vueltas en función del ángulo",
    examples: [
      {
        title: "Número de vueltas",
        description: "Ángulo de 4π rad",
        calculation: "n = 4π/2π = 2 vueltas",
        result: "2 vueltas"
      }
    ],
    notes: [
      "Relación directa entre ángulo y número de vueltas",
      "Importante en diseño de engranajes y poleas",
      "Útil en aplicaciones de ingeniería y física de partículas"
    ]
  },
  {
    name: "7. Tiempo para n vueltas",
    expression: "t = nT = n/f",
    variables: [
      { symbol: "t", name: "Tiempo", unit: "s" },
      { symbol: "n", name: "Número de vueltas", unit: "" },
      { symbol: "T", name: "Período", unit: "s" },
      { symbol: "f", name: "Frecuencia", unit: "Hz" }
    ],
    description: "Tiempo necesario para completar n vueltas completas",
    examples: [
      {
        title: "Tiempo para 5 vueltas",
        description: "Con período de 2 segundos",
        calculation: "t = 5 × 2 = 10 s",
        result: "10 segundos"
      },
      {
        title: "Tiempo para 3 vueltas",
        description: "Con frecuencia de 0.5 Hz",
        calculation: "t = 3 / 0.5 = 6 s",
        result: "6 segundos"
      }
    ],
    notes: [
      "Útil para calcular tiempos de giro completos",
      "Relación inversa con la frecuencia",
      "Proporcional al número de vueltas"
    ]
  },
  {
    name: "8. Relación entre v, r y T",
    expression: "v = 2πr/T = 2πrf",
    variables: [
      { symbol: "v", name: "Velocidad Tangencial", unit: "m/s" },
      { symbol: "r", name: "Radio", unit: "m" },
      { symbol: "T", name: "Período", unit: "s" },
      { symbol: "f", name: "Frecuencia", unit: "Hz" }
    ],
    description: "Relación entre velocidad tangencial, radio y período/frecuencia",
    examples: [
      {
        title: "Velocidad tangencial",
        description: "Radio de 3 m y período de 2 s",
        calculation: "v = 2π×3/2 = 3π m/s",
        result: "3π m/s ≈ 9.42 m/s"
      },
      {
        title: "Radio de la trayectoria",
        description: "v = 10 m/s, f = 2 Hz",
        calculation: "r = 10/(2π×2) = 5/π m",
        result: "5/π m ≈ 1.59 m"
      }
    ],
    notes: [
      "Útil para relacionar parámetros lineales y angulares",
      "Muestra cómo v depende de r y f",
      "Importante en diseño de engranajes y poleas"
    ]
  },
  {
    name: "9. Radio de Trayectoria",
    expression: "r = v/ω",
    variables: [
      { symbol: "r", name: "Radio de la trayectoria", unit: "m" },
      { symbol: "v", name: "Velocidad Tangencial", unit: "m/s" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" }
    ],
    description: "Radio de la trayectoria circular a partir de la velocidad tangencial y angular",
    examples: [
      {
        title: "Radio de la trayectoria",
        description: "v = 15 m/s, ω = 3 rad/s",
        calculation: "r = 15/3 = 5 m",
        result: "5 metros"
      },
      {
        title: "Aplicación práctica",
        description: "Un automóvil toma una curva a 20 m/s con ω = 0.5 rad/s",
        calculation: "r = 20/0.5 = 40 m",
        result: "40 metros de radio de curvatura"
      }
    ],
    notes: [
      "Relación inversa entre radio y velocidad angular para una velocidad tangencial dada",
      "Importante en diseño de curvas y trayectorias circulares",
      "Útil en aplicaciones de ingeniería y física de partículas"
    ]
  }
]

export default formulas
