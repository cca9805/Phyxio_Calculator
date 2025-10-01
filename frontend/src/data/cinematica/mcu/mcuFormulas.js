export const formulas = [
  { 
    id: 'f-mcu-1',
    title: 'Velocidad Angular (ω)',
    formula: '\\( ω = \\frac{θ}{t} \\)',
    description: 'Rapidez con que cambia el ángulo en MCU.',
    variables: [
      { symbol: 'ω', name: 'Velocidad angular', unit: 'rad/s', output: true },
      { symbol: 'θ', name: 'Desplazamiento angular', unit: 'rad' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  { 
    id: 'f-mcu-2',
    title: 'Velocidad Tangencial (v)',
    formula: '\\( v = r \\cdot ω \\)',
    description: 'Velocidad en la dirección tangente a la circunferencia.',
    variables: [
      { symbol: 'v', name: 'Velocidad tangencial', unit: 'm/s', output: true },
      { symbol: 'r', name: 'Radio', unit: 'm' },
      { symbol: 'ω', name: 'Velocidad angular', unit: 'rad/s' }
    ]
  },
  { 
    id: 'f-mcu-3',
    title: 'Período (T)',
    formula: '\\( T = \\frac{1}{f} \\)',
    description: '"Tiempo para completar una vuelta.',
    variables: [
      { symbol: 'T', name: 'Período', unit: 's', output: true },
      { symbol: 'f', name: 'Frecuencia', unit: 'Hz' }
    ]
  },
  { 
    id: 'f-mcu-4',
    title: 'Frecuencia (f)',
    formula: '\\( f = \\frac{1}{T} \\)',
    description: 'Número de vueltas por segundo.',
    variables: [
      { symbol: 'f', name: 'Frecuencia', unit: 'Hz', output: true },
      { symbol: 'T', name: 'Período', unit: 's' }
    ]
  },
  { 
    id: 'f-mcu-5',
    title: 'Aceleración Centrípeta (a_c)',
    formula: '\\( a_c = \\frac{v^2}{r} = ω^2 \\cdot r \\)',
    description: 'Aceleración que mantiene el objeto en movimiento circular.',
    variables: [
      { symbol: 'a_c', name: 'Aceleración centrípeta', unit: 'm/s²', output: true },
      { symbol: 'v', name: 'Velocidad tangencial', unit: 'm/s' },
      { symbol: 'r', name: 'Radio', unit: 'm' },
      { symbol: 'ω', name: 'Velocidad angular', unit: 'rad/s' }
    ]
  },
  { 
    id: 'f-mcu-6',
    title: 'Desplazamiento Angular (θ)',
    formula: '\\( θ = ω \\cdot t \\)',
    description: 'Ángulo total recorrido en un tiempo t.',
    variables: [
      { symbol: 'θ', name: 'Desplazamiento angular', unit: 'rad', output: true },
      { symbol: 'ω', name: 'Velocidad angular', unit: 'rad/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  { 
    id: 'f-mcu-7',
    title: 'Aceleración Angular (α)',
    formula: '\\( α = \\frac{Δω}{t} \\)',
    description: 'Tasa de cambio de la velocidad angular.',
    variables: [
      { symbol: 'α', name: 'Aceleración angular', unit: 'rad/s²', output: true },
      { symbol: 'Δω', name: 'Cambio en velocidad angular', unit: 'rad/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  }
];
