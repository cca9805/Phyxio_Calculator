const formulas = [
  {
    name: '1. Componentes de Velocidad Inicial',
    expression: 'v₀ₓ = v₀cosθ, v₀ᵧ = v₀sinθ',
    variables: [
      { symbol: 'v₀ₓ', name: 'Velocidad Horizontal Inicial', unit: 'm/s' },
      { symbol: 'v₀ᵧ', name: 'Velocidad Vertical Inicial', unit: 'm/s' },
      { symbol: 'v₀', name: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'θ', name: 'Ángulo de Lanzamiento', unit: '°' }
    ],
    description: 'Descomposición de la velocidad inicial en componentes horizontal y vertical.'
  },
  {
    name: '2. Posición en Función del Tiempo',
    expression: 'x(t) = x₀ + v₀ₓt, y(t) = y₀ + v₀ᵧt - ½gt²',
    variables: [
      { symbol: 'x(t)', name: 'Posición Horizontal', unit: 'm' },
      { symbol: 'y(t)', name: 'Posición Vertical', unit: 'm' },
      { symbol: 'x₀, y₀', name: 'Posición Inicial', unit: 'm' },
      { symbol: 'v₀ₓ, v₀ᵧ', name: 'Componentes de Velocidad', unit: 'm/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ],
    description: 'Ecuaciones paramétricas de la posición en función del tiempo.'
  },
  {
    name: '3. Velocidad en Función del Tiempo',
    expression: 'vₓ(t) = v₀ₓ, vᵧ(t) = v₀ᵧ - gt',
    variables: [
      { symbol: 'vₓ(t)', name: 'Velocidad Horizontal', unit: 'm/s' },
      { symbol: 'vᵧ(t)', name: 'Velocidad Vertical', unit: 'm/s' },
      { symbol: 'v₀ₓ, v₀ᵧ', name: 'Componentes Iniciales', unit: 'm/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ],
    description: 'Componentes de la velocidad en función del tiempo.'
  },
  {
    name: '4. Ecuación de la Trayectoria',
    expression: 'y(x) = y₀ + tanθ·(x-x₀) - [g(x-x₀)²]/[2(v₀·cosθ)²]',
    variables: [
      { symbol: 'y(x)', name: 'Altura en función de x', unit: 'm' },
      { symbol: 'x₀, y₀', name: 'Posición Inicial', unit: 'm' },
      { symbol: 'v₀', name: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'θ', name: 'Ángulo de Lanzamiento', unit: '°' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ],
    description: 'Ecuación de la trayectoria parabólica como función y(x).'
  },
  {
    name: '5. Tiempo de Vuelo',
    expression: 'T = (2v₀sinθ)/g',
    variables: [
      { symbol: 'T', name: 'Tiempo de Vuelo', unit: 's' },
      { symbol: 'v₀', name: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'θ', name: 'Ángulo de Lanzamiento', unit: '°' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ],
    description: 'Tiempo total que el proyectil permanece en el aire.'
  },
  {
    name: '6. Alcance Máximo',
    expression: 'R = (v₀²sin(2θ))/g',
    variables: [
      { symbol: 'R', name: 'Alcance', unit: 'm' },
      { symbol: 'v₀', name: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'θ', name: 'Ángulo de Lanzamiento', unit: '°' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ],
    description: 'Distancia horizontal máxima alcanzada (para y = y₀).'
  },
  {
    name: '7. Altura Máxima',
    expression: 'h_max = y₀ + (v₀²sin²θ)/(2g)',
    variables: [
      { symbol: 'h_max', name: 'Altura Máxima', unit: 'm' },
      { symbol: 'y₀', name: 'Altura Inicial', unit: 'm' },
      { symbol: 'v₀', name: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'θ', name: 'Ángulo de Lanzamiento', unit: '°' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ],
    description: 'Altura máxima alcanzada por el proyectil.'
  },
  {
    name: '8. Velocidad en un Punto',
    expression: 'v = √(v₀² - 2g(y-y₀))',
    variables: [
      { symbol: 'v', name: 'Módulo de la Velocidad', unit: 'm/s' },
      { symbol: 'v₀', name: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'y, y₀', name: 'Altura Final e Inicial', unit: 'm' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ],
    description: 'Módulo de la velocidad a una altura y (independiente del ángulo).'
  },
  {
    name: '9. Ángulo para Alcance Máximo',
    expression: 'θ = 45°',
    variables: [
      { symbol: 'θ', name: 'Ángulo Óptimo', unit: '°' }
    ],
    description: 'Ángulo que maximiza el alcance horizontal cuando y = y₀.'
  },
  {
    name: '10. Tiempo para Alcanzar Altura Máxima',
    expression: 't_max = (v₀sinθ)/g',
    variables: [
      { symbol: 't_max', name: 'Tiempo hasta Altura Máxima', unit: 's' },
      { symbol: 'v₀', name: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'θ', name: 'Ángulo de Lanzamiento', unit: '°' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ],
    description: 'Tiempo que tarda el proyectil en alcanzar su altura máxima.'
  }
]

export default formulas
