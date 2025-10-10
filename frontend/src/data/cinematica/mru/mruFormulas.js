export const formulas = [
  // 1
  { 
    id: 'f-mru-1',
    title: 'Velocidad en MRU',
    formula: 'v = \\frac{d}{t}',
    description: 'La velocidad es constante y se calcula dividiendo la distancia entre el tiempo',
    variables: [
      { symbol: 'v', name: 'Velocidad', unit: 'm/s' },
      { symbol: 'd', name: 'Distancia', unit: 'm' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  // 2
  { 
    id: 'f-mru-2',
    title: 'Posición en MRU',
    formula: 'x = x_0 + v \\cdot t',
    description: 'La posición en cualquier instante depende de la posición inicial, la velocidad y el tiempo',
    variables: [
      { symbol: 'x', name: 'Posición final', unit: 'm' },
      { symbol: 'x_0', name: 'Posición inicial', unit: 'm' },
      { symbol: 'v', name: 'Velocidad', unit: 'm/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  // 3
  { 
    id: 'f-mru-3',
    title: 'Distancia recorrida',
    formula: 'd = v \\cdot t',
    description: 'La distancia recorrida es proporcional al tiempo transcurrido',
    variables: [
      { symbol: 'd', name: 'Distancia', unit: 'm' },
      { symbol: 'v', name: 'Velocidad', unit: 'm/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  // 4
  { 
    id: 'f-mru-4',
    title: 'Tiempo de viaje',
    formula: 't = \\frac{d}{v}',
    description: 'El tiempo necesario para recorrer una distancia es la distancia dividida por la velocidad',
    variables: [
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: 'd', name: 'Distancia', unit: 'm' },
      { symbol: 'v', name: 'Velocidad', unit: 'm/s' }
    ]
  }
];
