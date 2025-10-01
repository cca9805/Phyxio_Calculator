const formulas = [
  { 
    id: 'f-mr-1',
    title: '1. Posición en función del tiempo',
    formula: 'x = x_0 + v \\cdot t',
    description: 'Posición final dado un tiempo y velocidad constante',
    variables: [
      { symbol: 'x', name: 'Posición final', unit: 'm' },
      { symbol: 'x_0', name: 'Posición inicial', unit: 'm' },
      { symbol: 'v', name: 'Velocidad', unit: 'm/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  { 
    id: 'f-mr-2',
    title: '2. Velocidad constante',
    formula: 'v = \\frac{x - x_0}{t}',
    description: 'Velocidad cuando se conoce el desplazamiento y el tiempo',
    variables: [
      { symbol: 'v', name: 'Velocidad', unit: 'm/s' },
      { symbol: 'x', name: 'Posición final', unit: 'm' },
      { symbol: 'x_0', name: 'Posición inicial', unit: 'm' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  { 
    id: 'f-mr-3',
    title: '3. Velocidad media',
    formula: '\\bar{v} = \\frac{\\Delta x}{\\Delta t} = \\frac{x_f - x_i}{t_f - t_i}',
    description: 'Velocidad media como el desplazamiento total sobre el tiempo total',
    variables: [
      { symbol: '\\bar{v}', name: 'Velocidad media', unit: 'm/s' },
      { symbol: '\\Delta x', name: 'Desplazamiento', unit: 'm' },
      { symbol: '\\Delta t', name: 'Intervalo de tiempo', unit: 's' }
    ]
  },
  { 
    id: 'f-mr-4',
    title: '4. Tiempo de encuentro',
    formula: 't = \\frac{|x_{B0} - x_{A0}|}{|v_A + v_B|} \\quad (sentidos\\ opuestos)',
    description: 'Tiempo hasta que dos móviles se encuentran yendo en sentidos opuestos',
    variables: [
      { symbol: 'x_{A0}', name: 'Posición inicial A', unit: 'm' },
      { symbol: 'x_{B0}', name: 'Posición inicial B', unit: 'm' },
      { symbol: 'v_A', name: 'Velocidad A', unit: 'm/s' },
      { symbol: 'v_B', name: 'Velocidad B', unit: 'm/s' }
    ]
  },
  { 
    id: 'f-mr-5',
    title: '5. Tiempo de alcance',
    formula: 't = \\frac{|x_{B0} - x_{A0}|}{|v_A - v_B|} \\quad (mismo\\ sentido)',
    description: 'Tiempo hasta que un móvil alcanza a otro que va en el mismo sentido',
    variables: [
      { symbol: 'x_{A0}', name: 'Posición inicial A', unit: 'm' },
      { symbol: 'x_{B0}', name: 'Posición inicial B', unit: 'm' },
      { symbol: 'v_A', name: 'Velocidad A', unit: 'm/s' },
      { symbol: 'v_B', name: 'Velocidad B', unit: 'm/s' }
    ]
  },
  { 
    id: 'f-mr-6',
    title: '6. Velocidad relativa 1D',
    formula: 'v_{AB} = v_A - v_B',
    description: 'Velocidad relativa entre dos objetos A y B en una dimensión',
    variables: [
      { symbol: 'v_{AB}', name: 'Velocidad de A respecto a B', unit: 'm/s' },
      { symbol: 'v_A', name: 'Velocidad de A', unit: 'm/s' },
      { symbol: 'v_B', name: 'Velocidad de B', unit: 'm/s' }
    ]
  },
  { 
    id: 'f-mr-7',
    title: '7. Distancia de seguridad',
    formula: 'd_{seg} = v \\cdot t_r + \\frac{v^2}{2a} + d_{min}',
    description: 'Distancia mínima de seguridad considerando tiempo de reacción y frenado',
    variables: [
      { symbol: 'd_{seg}', name: 'Distancia de seguridad', unit: 'm' },
      { symbol: 'v', name: 'Velocidad', unit: 'm/s' },
      { symbol: 't_r', name: 'Tiempo de reacción', unit: 's' },
      { symbol: 'a', name: 'Aceleración de frenado', unit: 'm/s²' },
      { symbol: 'd_{min}', name: 'Distancia mínima', unit: 'm' }
    ]
  }
];

export default formulas;
