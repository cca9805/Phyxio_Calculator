export const formulas = [
  {
    id: 'aceleracion-centripeta',
    title: 'Aceleración Centrípeta',
    formula: 'a_c = \\frac{v^2}{r}',
    description: "La aceleración que experimenta un cuerpo en movimiento circular uniforme, siempre dirigida hacia el centro de la trayectoria.",
    variables: [
      { symbol: 'a_c', name: 'Aceleración Centrípeta', unit: 'm/s²' },
      { symbol: 'v', name: 'Velocidad Tangencial', unit: 'm/s' },
      { symbol: 'r', name: 'Radio de la trayectoria', unit: 'm' }
    ]
  },
  {
    id: 'fuerza-centripeta',
    title: 'Fuerza Centrípeta',
    formula: 'F_c = m \\frac{v^2}{r}',
    description: "La fuerza neta que causa la aceleración centrípeta, manteniendo al cuerpo en su trayectoria circular.",
    variables: [
      { symbol: 'F_c', name: 'Fuerza Centrípeta', unit: 'N' },
      { symbol: 'm', name: 'Masa del cuerpo', unit: 'kg' },
      { symbol: 'v', name: 'Velocidad Tangencial', unit: 'm/s' },
      { symbol: 'r', name: 'Radio de la trayectoria', unit: 'm' }
    ]
  },
  {
    id: 'velocidad-angular',
    title: 'Velocidad Angular',
    formula: '\\omega = \\frac{2\\pi}{T} = 2\\pi f',
    description: "La rapidez con la que cambia el ángulo en un movimiento circular, medida en radianes por segundo.",
    variables: [
      { symbol: '\\omega', name: 'Velocidad Angular', unit: 'rad/s' },
      { symbol: 'T', name: 'Período', unit: 's' },
      { symbol: 'f', name: 'Frecuencia', unit: 'Hz' }
    ]
  },
  {
    id: 'velocidad-tangencial',
    title: 'Velocidad Tangencial y Angular',
    formula: 'v = \\omega \\cdot r',
    description: "La relación entre la velocidad lineal (tangencial) y la velocidad angular en un punto de la trayectoria.",
    variables: [
      { symbol: 'v', name: 'Velocidad Tangencial', unit: 'm/s' },
      { symbol: '\\omega', name: 'Velocidad Angular', unit: 'rad/s' },
      { symbol: 'r', name: 'Radio de la trayectoria', unit: 'm' }
    ]
  },
    {
    id: 'periodo-frecuencia',
    title: 'Período y Frecuencia',
    formula: 'T = \\frac{1}{f}',
    description: "El período (T) es el tiempo para una revolución completa, y la frecuencia (f) es el número de revoluciones por segundo.",
    variables: [
      { symbol: 'T', name: 'Período', unit: 's' },
      { symbol: 'f', name: 'Frecuencia', unit: 'Hz' }
    ]
  }
];