export default [
  {
    name: 'Componentes de Velocidad',
    expression: 'v₀ₓ = v₀cosθ, v₀ᵧ = v₀sinθ',
    variables: [
      { symbol: 'v₀ₓ', name: 'Velocidad Horizontal', unit: 'm/s' },
      { symbol: 'v₀ᵧ', name: 'Velocidad Vertical', unit: 'm/s' },
      { symbol: 'v₀', name: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'θ', name: 'Ángulo', unit: '°' }
    ],
    description: 'Descomposición de la velocidad inicial en componentes.'
  },
  {
    name: 'Ecuaciones de Posición',
    expression: 'x = v₀ₓt, y = v₀ᵧt - ½gt²',
    variables: [
      { symbol: 'x', name: 'Posición Horizontal', unit: 'm' },
      { symbol: 'y', name: 'Posición Vertical', unit: 'm' },
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ],
    description: 'Posición del proyectil en función del tiempo.'
  },
  {
    name: 'Alcance Máximo',
    expression: 'R = (v₀²sin(2θ))/g',
    variables: [
      { symbol: 'R', name: 'Alcance', unit: 'm' },
      { symbol: 'v₀', name: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'θ', name: 'Ángulo', unit: '°' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ],
    description: 'Distancia horizontal máxima alcanzada.'
  },
  {
    name: 'Altura Máxima',
    expression: 'h_max = (v₀²sin²θ)/(2g)',
    variables: [
      { symbol: 'h_max', name: 'Altura Máxima', unit: 'm' },
      { symbol: 'v₀', name: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'θ', name: 'Ángulo', unit: '°' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ],
    description: 'Altura máxima alcanzada por el proyectil.'
  }
];
