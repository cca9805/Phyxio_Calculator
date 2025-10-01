// Fórmulas de Movimiento Circular Uniformemente Acelerado (MCUA)
// Lista de fórmulas sin categorías ni duplicados
const formulas = [
  {
    name: "1. Velocidad Angular Final",
    expression: "ω = ω₀ + α·t",
    variables: [
      { symbol: "ω", name: "Velocidad Angular Final", unit: "rad/s" },
      { symbol: "ω₀", name: "Velocidad Angular Inicial", unit: "rad/s" },
      { symbol: "α", name: "Aceleración Angular", unit: "rad/s²" },
      { symbol: "t", name: "Tiempo", unit: "s" }
    ],
    description: "Relación entre la velocidad angular final, inicial, aceleración y tiempo.",
    
  },
  {
    name: "2. Posición Angular",
    expression: "θ = θ₀ + ω₀·t + ½α·t²",
    variables: [
      { symbol: "θ", name: "Ángulo Final", unit: "rad" },
      { symbol: "θ₀", name: "Ángulo Inicial", unit: "rad" },
      { symbol: "ω₀", name: "Velocidad Angular Inicial", unit: "rad/s" },
      { symbol: "t", name: "Tiempo", unit: "s" },
      { symbol: "α", name: "Aceleración Angular", unit: "rad/s²" }
    ],
    description: "Ángulo recorrido en función del tiempo, velocidad angular inicial y aceleración angular.",
    
  },
  {
    name: "3. Relación sin Tiempo",
    expression: "ω² = ω₀² + 2·α·(θ - θ₀)",
    variables: [
      { symbol: "ω", name: "Velocidad Angular Final", unit: "rad/s" },
      { symbol: "ω₀", name: "Velocidad Angular Inicial", unit: "rad/s" },
      { symbol: "α", name: "Aceleración Angular", unit: "rad/s²" },
      { symbol: "θ", name: "Ángulo Final", unit: "rad" },
      { symbol: "θ₀", name: "Ángulo Inicial", unit: "rad" }
    ],
    description: "Relación entre velocidades angulares, aceleración y desplazamiento angular, sin depender del tiempo.",
  },
  {
    name: "4. Velocidad Tangencial",
    expression: "v = ω·r",
    variables: [
      { symbol: "v", name: "Velocidad Tangencial", unit: "m/s" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" },
      { symbol: "r", name: "Radio de giro", unit: "m" }
    ],
    description: "Relación entre la velocidad tangencial y la velocidad angular.",
  },
  {
    name: "5. Aceleración Tangencial",
    expression: "aₜ = α·r",
    variables: [
      { symbol: "aₜ", name: "Aceleración Tangencial", unit: "m/s²" },
      { symbol: "α", name: "Aceleración Angular", unit: "rad/s²" },
      { symbol: "r", name: "Radio de giro", unit: "m" }
    ],
    description: "Relación entre la aceleración tangencial y la aceleración angular.",
  },
  {
    name: "6. Aceleración Centrípeta",
    expression: "a_c = ω²·r = v²/r",
    variables: [
      { symbol: "a_c", name: "Aceleración Centrípeta", unit: "m/s²" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" },
      { symbol: "v", name: "Velocidad Tangencial", unit: "m/s" },
      { symbol: "r", name: "Radio de giro", unit: "m" }
    ],
    description: "Aceleración dirigida hacia el centro de la trayectoria circular.",
  },
  {
    name: "7. Aceleración Total",
    expression: "a = √(aₜ² + a_c²)",
    variables: [
      { symbol: "a", name: "Aceleración Total", unit: "m/s²" },
      { symbol: "aₜ", name: "Aceleración Tangencial", unit: "m/s²" },
      { symbol: "a_c", name: "Aceleración Centrípeta", unit: "m/s²" }
    ],
    description: "Módulo de la aceleración total en un movimiento circular.",
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
  {
    name: "8. Energía Cinética Rotacional",
    expression: "K = ½·I·ω²",
    variables: [
      { symbol: "K", name: "Energía Cinética Rotacional", unit: "J" },
      { symbol: "I", name: "Momento de Inercia", unit: "kg·m²" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" }
    ],
    description: "Energía cinética asociada al movimiento de rotación.",
    
  },
  {
    name: "9. Trabajo por Torque",
    expression: "W = τ·Δθ",
    variables: [
      { symbol: "W", name: "Trabajo", unit: "J" },
      { symbol: "τ", name: "Torque aplicado", unit: "N·m" },
      { symbol: "Δθ", name: "Desplazamiento angular", unit: "rad" }
    ],
    description: "Trabajo realizado por un torque constante.",
    
  },
  {
    name: "10. Frecuencia y Período",
    expression: "f = ω/(2π) = 1/T",
    variables: [
      { symbol: "f", name: "Frecuencia", unit: "Hz" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" },
      { symbol: "T", name: "Período", unit: "s" }
    ],
    description: "Relaciones entre frecuencia, velocidad angular y período.",
    
  },
  {
    name: "11. Número de Vueltas",
    expression: "N = θ/(2π)",
    variables: [
      { symbol: "N", name: "Número de vueltas", unit: "" },
      { symbol: "θ", name: "Ángulo recorrido", unit: "rad" }
    ],
    description: "Convierte radianes a número de vueltas completas.",
    
  },
  {
    name: "12. Área Barrida",
    expression: "A = ½·r²·θ",
    variables: [
      { symbol: "A", name: "Área barrida", unit: "m²" },
      { symbol: "r", name: "Radio de giro", unit: "m" },
      { symbol: "θ", name: "Ángulo barrido", unit: "rad" }
    ],
    description: "Área barrida por el radio vector en un movimiento circular.",
   
  },
  {
    name: "13. Aceleraciones en MCUA",
    expression: "a_t = rα,  a_c = rω²,  a = √(a_t² + a_c²)",
    variables: [
      { symbol: "a_t", name: "Aceleración Tangencial", unit: "m/s²" },
      { symbol: "a_c", name: "Aceleración Centrípeta", unit: "m/s²" },
      { symbol: "a", name: "Aceleración Total", unit: "m/s²" },
      { symbol: "r", name: "Radio de giro", unit: "m" },
      { symbol: "α", name: "Aceleración Angular", unit: "rad/s²" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" }
    ],
    description: "Relación entre las componentes de la aceleración en movimiento circular.",
   
  },
  {
    name: "14. Desplazamiento Lineal",
    expression: "s = θ·r",
    variables: [
      { symbol: "s", name: "Desplazamiento Lineal", unit: "m" },
      { symbol: "θ", name: "Ángulo Recorrido", unit: "rad" },
      { symbol: "r", name: "Radio de giro", unit: "m" }
    ],
    description: "Relación entre el desplazamiento lineal y el ángulo recorrido.",
   
  },
  {
    name: "15. Ángulo Recorrido",
    expression: "Δθ = ω₀·t + ½·α·t²",
    variables: [
      { symbol: "Δθ", name: "Ángulo Recorrido", unit: "rad" },
      { symbol: "ω₀", name: "Velocidad Angular Inicial", unit: "rad/s" },
      { symbol: "α", name: "Aceleración Angular", unit: "rad/s²" },
      { symbol: "t", name: "Tiempo", unit: "s" }
    ],
    description: "Ángulo total recorrido en función del tiempo, velocidad angular inicial y aceleración angular.",
    
  },
  {
    name: "16. Potencia Rotacional",
    expression: "P = τ·ω",
    variables: [
      { symbol: "P", name: "Potencia", unit: "W" },
      { symbol: "τ", name: "Torque", unit: "N·m" },
      { symbol: "ω", name: "Velocidad Angular", unit: "rad/s" }
    ],
    description: "Potencia instantánea en un sistema rotacional.",
    
  },
  {
    name: "17. Teorema Trabajo-Energía",
    expression: "W = ½I(ω² - ω₀²)",
    variables: [
      { symbol: "W", name: "Trabajo", unit: "J" },
      { symbol: "I", name: "Momento de Inercia", unit: "kg·m²" },
      { symbol: "ω", name: "Velocidad Angular Final", unit: "rad/s" },
      { symbol: "ω₀", name: "Velocidad Angular Inicial", unit: "rad/s" }
    ],
    description: "Relación entre el trabajo realizado y el cambio en la energía cinética rotacional.",
   
  }
]

