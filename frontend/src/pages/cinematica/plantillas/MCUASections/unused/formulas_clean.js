const formulas = [
  // ===================================
  // 1. CINEMÁTICA ANGULAR
  // ===================================
  {
    name: "Velocidad Angular Final",
    expression: "ω = ω₀ + α·t",
    variables: [
      { symbol: "ω", name: "Velocidad Angular Final", unit: "rad/s" },
      { symbol: "ω₀", name: "Velocidad Angular Inicial", unit: "rad/s" },
      { symbol: "α", name: "Aceleración Angular", unit: "rad/s²" },
      { symbol: "t", name: "Tiempo", unit: "s" }
    ],
    description: "Relación entre la velocidad angular final, inicial, aceleración y tiempo.",
    category: "Cinemática Angular",
    examples: [
      {
        title: "Aceleración positiva",
        description: "ω₀ = 2 rad/s, α = 3 rad/s², t = 2 s",
        calculation: "ω = 2 + 3×2 = 8 rad/s",
        result: "8 rad/s"
      },
      {
        title: "Frenado",
        description: "ω₀ = 10 rad/s, α = -2 rad/s², t = 3 s",
        calculation: "ω = 10 + (-2)×3 = 4 rad/s",
        result: "4 rad/s"
      }
    ],
    notes: [
      "Si α > 0: velocidad angular aumenta (aceleración angular positiva)",
      "Si α < 0: velocidad angular disminuye (desaceleración)",
      "La gráfica ω-t es una recta de pendiente α"
    ]
  },
  {
    name: "Posición Angular",
    expression: "θ = θ₀ + ω₀·t + ½α·t²",
    variables: [
      { symbol: "θ", name: "Ángulo Final", unit: "rad" },
      { symbol: "θ₀", name: "Ángulo Inicial", unit: "rad" },
      { symbol: "ω₀", name: "Velocidad Angular Inicial", unit: "rad/s" },
      { symbol: "t", name: "Tiempo", unit: "s" },
      { symbol: "α", name: "Aceleración Angular", unit: "rad/s²" }
    ],
    description: "Ángulo recorrido en función del tiempo, velocidad angular inicial y aceleración angular.",
    category: "Cinemática Angular",
    examples: [
      {
        title: "Partiendo del reposo",
        description: "θ₀ = 0 rad, ω₀ = 0 rad/s, α = 2 rad/s², t = 3 s",
        calculation: "θ = 0 + 0 + 0.5×2×3² = 9 rad",
        result: "9 rad"
      }
    ],
    notes: [
      "Si parte del reposo (ω₀ = 0): θ = ½αt²",
      "Si no hay aceleración (α = 0): θ = θ₀ + ω₀t (MCU)",
      "El área bajo la curva ω-t representa el ángulo recorrido"
    ]
  },
  
  // ===================================
  // 2. RELACIONES LINEALES-ANGULARES
  // ===================================
  {
    name: "Velocidad Tangencial",
    expression: "v = ω·r",
    variables: [
      { symbol: "v", name: "Velocidad Tangencial", unit: "m/s" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" },
      { symbol: "r", name: "Radio de giro", unit: "m" }
    ],
    description: "Relación entre la velocidad tangencial y la velocidad angular.",
    category: "Relaciones Lineales-Angulares",
    examples: [
      {
        title: "Rueda girando",
        description: "ω = 10 rad/s, r = 0.5 m",
        calculation: "v = 10 × 0.5 = 5 m/s",
        result: "5 m/s"
      }
    ],
    notes: [
      "La velocidad tangencial es perpendicular al radio en cada punto",
      "A mayor radio, mayor velocidad tangencial para la misma ω"
    ]
  },
  {
    name: "Desplazamiento Lineal",
    expression: "s = θ·r",
    variables: [
      { symbol: "s", name: "Desplazamiento Lineal", unit: "m" },
      { symbol: "θ", name: "Desplazamiento Angular", unit: "rad" },
      { symbol: "r", name: "Radio de giro", unit: "m" }
    ],
    description: "Relación entre el desplazamiento lineal y el desplazamiento angular.",
    category: "Relaciones Lineales-Angulares",
    examples: [
      {
        title: "Desplazamiento en una rueda",
        description: "θ = 2 rad, r = 0.3 m",
        calculation: "s = 2 × 0.3 = 0.6 m",
        result: "0.6 m"
      }
    ],
    notes: [
      "El desplazamiento lineal es proporcional al radio",
      "Para una vuelta completa (2π rad), s = 2πr (circunferencia)"
    ]
  },
  
  // ===================================
  // 3. ACELERACIONES
  // ===================================
  {
    name: "Aceleración Tangencial",
    expression: "aₜ = α·r",
    variables: [
      { symbol: "aₜ", name: "Aceleración Tangencial", unit: "m/s²" },
      { symbol: "α", name: "Aceleración Angular", unit: "rad/s²" },
      { symbol: "r", name: "Radio de giro", unit: "m" }
    ],
    description: "Relación entre la aceleración tangencial y la aceleración angular.",
    category: "Aceleraciones",
    examples: [
      {
        title: "Aceleración de un punto",
        description: "α = 2 rad/s², r = 0.3 m",
        calculation: "aₜ = 2 × 0.3 = 0.6 m/s²",
        result: "0.6 m/s²"
      }
    ],
    notes: [
      "Es tangente a la trayectoria circular",
      "Causa el cambio en la magnitud de la velocidad tangencial"
    ]
  },
  {
    name: "Aceleración Centrípeta",
    expression: "a_c = ω²·r = v²/r",
    variables: [
      { symbol: "a_c", name: "Aceleración Centrípeta", unit: "m/s²" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" },
      { symbol: "v", name: "Velocidad Tangencial", unit: "m/s" },
      { symbol: "r", name: "Radio de giro", unit: "m" }
    ],
    description: "Aceleración dirigida hacia el centro de la trayectoria circular.",
    category: "Aceleraciones",
    examples: [
      {
        title: "Cálculo con velocidad angular",
        description: "ω = 4 rad/s, r = 0.5 m",
        calculation: "a_c = 4² × 0.5 = 8 m/s²",
        result: "8 m/s²"
      },
      {
        title: "Cálculo con velocidad tangencial",
        description: "v = 10 m/s, r = 2 m",
        calculation: "a_c = 10² / 2 = 50 m/s²",
        result: "50 m/s²"
      }
    ],
    notes: [
      "Siempre apunta hacia el centro de la trayectoria circular",
      "Responsable del cambio en la dirección de la velocidad",
      "Existe incluso en MCU (donde α = 0 pero aₜ = 0)"
    ]
  },
  {
    name: "Aceleración Total",
    expression: "a = √(aₜ² + a_c²)",
    variables: [
      { symbol: "a", name: "Aceleración Total", unit: "m/s²" },
      { symbol: "aₜ", name: "Aceleración Tangencial", unit: "m/s²" },
      { symbol: "a_c", name: "Aceleración Centrípeta", unit: "m/s²" }
    ],
    description: "Módulo de la aceleración total en un movimiento circular.",
    category: "Aceleraciones",
    examples: [
      {
        title: "Cálculo de aceleración total",
        description: "aₜ = 3 m/s², a_c = 4 m/s²",
        calculation: "a = √(3² + 4²) = 5 m/s²",
        result: "5 m/s²"
      }
    ],
    notes: [
      "La dirección de la aceleración total no es ni tangencial ni radial",
      "Forma un ángulo φ con la dirección radial: tan(φ) = aₜ/a_c"
    ]
  },
  
  // ===================================
  // 4. ENERGÍA Y TRABAJO
  // ===================================
  {
    name: "Energía Cinética Rotacional",
    expression: "K = ½·I·ω²",
    variables: [
      { symbol: "K", name: "Energía Cinética Rotacional", unit: "J" },
      { symbol: "I", name: "Momento de Inercia", unit: "kg·m²" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" }
    ],
    description: "Energía cinética asociada al movimiento de rotación.",
    category: "Energía y Trabajo",
    examples: [
      {
        title: "Energía de un disco",
        description: "I = 0.5 kg·m², ω = 4 rad/s",
        calculation: "K = 0.5 × 0.5 × 4² = 4 J",
        result: "4 J"
      }
    ],
    notes: [
      "Análoga a K = ½mv² en traslación",
      "Depende del momento de inercia del cuerpo"
    ]
  },
  {
    name: "Trabajo por Torque",
    expression: "W = τ·Δθ",
    variables: [
      { symbol: "W", name: "Trabajo", unit: "J" },
      { symbol: "τ", name: "Torque aplicado", unit: "N·m" },
      { symbol: "Δθ", name: "Desplazamiento angular", unit: "rad" }
    ],
    description: "Trabajo realizado por un torque constante.",
    category: "Energía y Trabajo",
    examples: [
      {
        title: "Trabajo en una puerta",
        description: "τ = 10 N·m, Δθ = π/2 rad (90°)",
        calculation: "W = 10 × (π/2) ≈ 15.71 J",
        result: "15.71 J"
      }
    ],
    notes: [
      "Análogo a W = F·d en traslación",
      "El trabajo puede ser positivo o negativo según el sentido del torque"
    ]
  },
  
  // ===================================
  // 5. OTRAS RELACIONES
  // ===================================
  {
    name: "Frecuencia y Período",
    expression: "f = ω/(2π) = 1/T",
    variables: [
      { symbol: "f", name: "Frecuencia", unit: "Hz" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" },
      { symbol: "T", name: "Período", unit: "s" }
    ],
    description: "Relaciones entre frecuencia, velocidad angular y período.",
    category: "Otras Relaciones",
    examples: [
      {
        title: "Cálculo de frecuencia",
        description: "ω = 6.28 rad/s",
        calculation: "f = 6.28 / (2×3.1416) ≈ 1 Hz",
        result: "1 Hz"
      },
      {
        title: "Cálculo de período",
        description: "f = 50 Hz",
        calculation: "T = 1/50 = 0.02 s",
        result: "0.02 s"
      }
    ],
    notes: [
      "La frecuencia mide vueltas por segundo",
      "El período es el tiempo que tarda en completar una vuelta",
      "En MCUA, ω y f varían con el tiempo"
    ]
  },
  {
    name: "Número de Vueltas",
    expression: "N = θ/(2π)",
    variables: [
      { symbol: "N", name: "Número de vueltas", unit: "" },
      { symbol: "θ", name: "Ángulo recorrido", unit: "rad" }
    ],
    description: "Convierte radianes a número de vueltas completas.",
    category: "Otras Relaciones",
    examples: [
      {
        title: "Vueltas completadas",
        description: "θ = 10π rad",
        calculation: "N = 10π / (2π) = 5 vueltas",
        result: "5 vueltas"
      }
    ],
    notes: [
      "2π radianes = 1 vuelta completa",
      "Para ángulos mayores a 2π, N puede ser mayor que 1"
    ]
  },
  {
    name: "Área Barrida",
    expression: "A = ½·r²·θ",
    variables: [
      { symbol: "A", name: "Área barrida", unit: "m²" },
      { symbol: "r", name: "Radio de giro", unit: "m" },
      { symbol: "θ", name: "Ángulo barrido", unit: "rad" }
    ],
    description: "Área barrida por el radio vector en un movimiento circular.",
    category: "Otras Relaciones",
    examples: [
      {
        title: "Cálculo de área barrida",
        description: "r = 2 m, θ = π/2 rad",
        calculation: "A = 0.5 × 2² × (π/2) = π m² ≈ 3.14 m²",
        result: "3.14 m²"
      }
    ],
    notes: [
      "El área es proporcional al cuadrado del radio",
      "Para una vuelta completa (θ=2π): A = πr² (área del círculo)"
    ]
  }
];

export default formulas;
