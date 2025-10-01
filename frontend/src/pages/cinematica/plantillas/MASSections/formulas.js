const formulas = [
  // 1. FÓRMULAS BÁSICAS
  {
    name: '1. Frecuencia Angular',
    expression: 'ω = √(k/m)',
    variables: [
      { symbol: 'ω', name: 'Frecuencia Angular', unit: 'rad/s' },
      { symbol: 'k', name: 'Constante Elástica', unit: 'N/m' },
      { symbol: 'm', name: 'Masa', unit: 'kg' }
    ],
    description: 'Relación entre la frecuencia angular, constante elástica y masa',
    examples: [
      {
        title: 'Cálculo de frecuencia angular',
        description: 'Un resorte con k=100 N/m y una masa de 4 kg',
        calculation: 'ω = √(100/4) = 5 rad/s',
        result: '5 rad/s'
      }
    ],
    notes: [
      'La frecuencia angular es independiente de la amplitud',
      'Unidades consistentes: N/m, kg → rad/s',
      'Relacionada con la frecuencia por ω = 2πf'
    ]
  },
  {
    name: '2. Período',
    expression: 'T = 2π/ω = 2π√(m/k)',
    variables: [
      { symbol: 'T', name: 'Período', unit: 's' },
      { symbol: 'ω', name: 'Frecuencia Angular', unit: 'rad/s' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'k', name: 'Constante Elástica', unit: 'N/m' }
    ],
    description: 'Tiempo para completar una oscilación completa',
    examples: [
      {
        title: 'Cálculo del período',
        description: 'Un péndulo con m=1 kg y k=4 N/m',
        calculation: 'T = 2π√(1/4) = π s ≈ 3.14 s',
        result: 'π s (≈3.14 s)'
      }
    ],
    notes: [
      'El período es independiente de la amplitud (isocronismo)',
      'Inversamente proporcional a la frecuencia (T = 1/f)',
      'A mayor masa, mayor período; a mayor k, menor período'
    ]
  },

  // 2. ECUACIONES DE MOVIMIENTO
  {
    name: '3. Posición',
    expression: 'x(t) = A·cos(ωt + φ)',
    variables: [
      { symbol: 'x(t)', name: 'Posición en tiempo t', unit: 'm' },
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'ω', name: 'Frecuencia Angular', unit: 'rad/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: 'φ', name: 'Fase Inicial', unit: 'rad' }
    ],
    description: 'Posición en función del tiempo',
    examples: [
      {
        title: 'Posición en t=2s',
        description: 'A=0.5m, ω=2 rad/s, φ=π/4 rad',
        calculation: 'x(2) = 0.5·cos(2·2 + π/4) ≈ 0.5·cos(4 + 0.785) ≈ -0.35 m',
        result: '-0.35 m'
      }
    ],
    notes: [
      'La posición varía entre -A y A',
      'En t=0: x(0) = A·cos(φ)',
      'Alternativa: x(t) = A·sin(ωt + φ + π/2)'
    ]
  },
  {
    name: '4. Velocidad',
    expression: 'v(t) = -Aω·sin(ωt + φ)',
    variables: [
      { symbol: 'v(t)', name: 'Velocidad en tiempo t', unit: 'm/s' },
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'ω', name: 'Frecuencia Angular', unit: 'rad/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: 'φ', name: 'Fase Inicial', unit: 'rad' }
    ],
    description: 'Velocidad en función del tiempo',
    examples: [
      {
        title: 'Velocidad en t=2s',
        description: 'A=0.5m, ω=2 rad/s, φ=π/4 rad',
        calculation: 'v(2) = -0.5·2·sin(4 + π/4) ≈ -0.96 m/s',
        result: '-0.96 m/s'
      }
    ],
    notes: [
      'La velocidad es máxima en x=0',
      'La velocidad es cero en los extremos (x=±A)',
      'v_max = Aω (módulo)'
    ]
  },
  {
    name: '5. Aceleración',
    expression: 'a(t) = -Aω²·cos(ωt + φ) = -ω²x(t)',
    variables: [
      { symbol: 'a(t)', name: 'Aceleración en tiempo t', unit: 'm/s²' },
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'ω', name: 'Frecuencia Angular', unit: 'rad/s' },
      { symbol: 'x(t)', name: 'Posición', unit: 'm' },
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: 'φ', name: 'Fase Inicial', unit: 'rad' }
    ],
    description: 'Aceleración en función del tiempo y posición',
    examples: [
      {
        title: 'Aceleración en x=0.2m',
        description: 'ω=3 rad/s',
        calculation: 'a = -3²·0.2 = -1.8 m/s²',
        result: '-1.8 m/s²'
      }
    ],
    notes: [
      'La aceleración es proporcional y opuesta al desplazamiento',
      'Es máxima en los extremos (x=±A)',
      'a_max = Aω² (módulo)'
    ]
  },

  // 3. ENERGÍAS
  {
    name: '6. Energía Mecánica Total',
    expression: 'E = ½kA²',
    variables: [
      { symbol: 'E', name: 'Energía Total', unit: 'J' },
      { symbol: 'k', name: 'Constante Elástica', unit: 'N/m' },
      { symbol: 'A', name: 'Amplitud', unit: 'm' }
    ],
    description: 'Energía mecánica total del sistema',
    examples: [
      {
        title: 'Energía total',
        description: 'k=50 N/m, A=0.1 m',
        calculation: 'E = 0.5·50·0.1² = 0.25 J',
        result: '0.25 J'
      }
    ],
    notes: [
      'Se conserva en ausencia de rozamiento',
      'Depende del cuadrado de la amplitud',
      'En los extremos es toda potencial, en el centro es toda cinética'
    ]
  },
  {
    name: '7. Energía Cinética',
    expression: 'Ec = ½mv² = ½k(A² - x²)',
    variables: [
      { symbol: 'Ec', name: 'Energía Cinética', unit: 'J' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'v', name: 'Velocidad', unit: 'm/s' },
      { symbol: 'k', name: 'Constante Elástica', unit: 'N/m' },
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'x', name: 'Posición', unit: 'm' }
    ],
    description: 'Energía cinética en función de la velocidad o posición',
    examples: [
      {
        title: 'Energía cinética en x=A/2',
        description: 'k=100 N/m, A=0.2 m, x=0.1 m',
        calculation: 'Ec = 0.5·100·(0.2² - 0.1²) = 1.5 J',
        result: '1.5 J'
      }
    ],
    notes: [
      'Máxima en x=0 (punto de equilibrio)',
      'Cero en los extremos (x=±A)',
      'Ec_max = ½kA² = E_total'
    ]
  },
  {
    name: '8. Energía Potencial',
    expression: 'Ep = ½kx²',
    variables: [
      { symbol: 'Ep', name: 'Energía Potencial', unit: 'J' },
      { symbol: 'k', name: 'Constante Elástica', unit: 'N/m' },
      { symbol: 'x', name: 'Posición', unit: 'm' }
    ],
    description: 'Energía potencial elástica',
    examples: [
      {
        title: 'Energía potencial',
        description: 'k=80 N/m, x=0.05 m',
        calculation: 'Ep = 0.5·80·0.05² = 0.1 J',
        result: '0.1 J'
      }
    ],
    notes: [
      'Máxima en los extremos (x=±A)',
      'Cero en x=0 (punto de equilibrio)',
      'Ep_max = ½kA² = E_total'
    ]
  },

  // 4. RELACIONES ADICIONALES
  {
    name: '9. Fuerza Restauradora',
    expression: 'F = -kx = ma',
    variables: [
      { symbol: 'F', name: 'Fuerza Restauradora', unit: 'N' },
      { symbol: 'k', name: 'Constante Elástica', unit: 'N/m' },
      { symbol: 'x', name: 'Posición', unit: 'm' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'a', name: 'Aceleración', unit: 'm/s²' }
    ],
    description: 'Ley de Hooke y segunda ley de Newton',
    examples: [
      {
        title: 'Fuerza en x=0.1m',
        description: 'k=20 N/m',
        calculation: 'F = -20·0.1 = -2 N',
        result: '-2 N (hacia la posición de equilibrio)'
      }
    ],
    notes: [
      'La fuerza siempre apunta hacia la posición de equilibrio',
      'Es proporcional al desplazamiento',
      'F = -kx es la condición para que el movimiento sea armónico simple'
    ]
  },
  {
    name: '10. Velocidad Máxima',
    expression: 'v_max = Aω = A√(k/m)',
    variables: [
      { symbol: 'v_max', name: 'Velocidad Máxima', unit: 'm/s' },
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'ω', name: 'Frecuencia Angular', unit: 'rad/s' },
      { symbol: 'k', name: 'Constante Elástica', unit: 'N/m' },
      { symbol: 'm', name: 'Masa', unit: 'kg' }
    ],
    description: 'Máxima velocidad del oscilador',
    examples: [
      {
        title: 'Velocidad máxima',
        description: 'A=0.3m, k=45 N/m, m=0.5kg',
        calculation: 'v_max = 0.3·√(45/0.5) ≈ 0.3·9.49 ≈ 2.85 m/s',
        result: '2.85 m/s'
      }
    ],
    notes: [
      'Ocurre al pasar por la posición de equilibrio (x=0)',
      'Proporcional a la amplitud y a la frecuencia angular',
      'v_max = Aω = A√(k/m)'
    ]
  },
  {
    name: '11. Aceleración Máxima',
    expression: 'a_max = Aω² = A(k/m)',
    variables: [
      { symbol: 'a_max', name: 'Aceleración Máxima', unit: 'm/s²' },
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'ω', name: 'Frecuencia Angular', unit: 'rad/s' },
      { symbol: 'k', name: 'Constante Elástica', unit: 'N/m' },
      { symbol: 'm', name: 'Masa', unit: 'kg' }
    ],
    description: 'Máxima aceleración del oscilador',
    examples: [
      {
        title: 'Aceleración máxima',
        description: 'A=0.15m, k=200 N/m, m=2kg',
        calculation: 'a_max = 0.15·(200/2) = 15 m/s²',
        result: '15 m/s²'
      }
    ],
    notes: [
      'Ocurre en los extremos (x=±A)',
      'Proporcional al cuadrado de la frecuencia angular',
      'a_max = Aω² = A(k/m)'
    ]
  }
]

export default formulas
