export const formulas = [
  // 1
  {
    id: 'f-mruv-1',
    title: 'Velocidad final en MRUV',
    formula: '\\( v = v_0 + a\\cdot t \\)',
    description: 'Ecuación horaria de la velocidad para aceleración constante',
    variables: [
      { symbol: 'v', name: 'Velocidad final', unit: 'm/s' },
      { symbol: 'v_0', name: 'Velocidad inicial', unit: 'm/s' },
      { symbol: 'a', name: 'Aceleración', unit: 'm/s²' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  // 2
  {
    id: 'f-mruv-2',
    title: 'Velocidad media en MRUV',
    formula: '\\( v_{\\mathrm{media}} = \\tfrac{v_0 + v}{2} \\)',
    description: 'Velocidad media en MRUV (solo para aceleración constante)',
    variables: [
      { symbol: 'v_media', name: 'Velocidad media', unit: 'm/s' },
      { symbol: 'v_0', name: 'Velocidad inicial', unit: 'm/s' },
      { symbol: 'v', name: 'Velocidad final', unit: 'm/s' }
    ]
  },
  // 3
  {
    id: 'f-mruv-3',
    title: 'Torricelli',
    formula: '\\( v^{2} = v_0^{2} + 2\\,a\\,(x - x_0) \\)',
    description: 'Velocidad final sin tiempo (Ecuación de Torricelli)',
    variables: [
      { symbol: 'v', name: 'Velocidad final', unit: 'm/s' },
      { symbol: 'v_0', name: 'Velocidad inicial', unit: 'm/s' }, 
      { symbol: 'a', name: 'Aceleración', unit: 'm/s²' },
      { symbol: 'x', name: 'Posición final', unit: 'm' },
      { symbol: 'x_0', name: 'Posición inicial', unit: 'm' }
    ]
   },
  // 4
  {
    id: 'f-mruv-4',
    title: 'Posición final en MRUV',
    formula: '\\( x = x_0 + v_0\\,t + \\tfrac{1}{2} a\\, t^{2} \\)',
    description: 'Posición final en función del tiempo',
    variables: [
      { symbol: 'x', name: 'Posición final', unit: 'm' },
      { symbol: 'x_0', name: 'Posición inicial', unit: 'm' },
      { symbol: 'v_0', name: 'Velocidad inicial', unit: 'm/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: 'a', name: 'Aceleración', unit: 'm/s²' },
    ]
  },
  // 5
  {
    id: 'f-mruv-5',
    title: 'Desplazamiento en MRUV',
    formula: '\\( \\Delta x = v_{\\mathrm{media}}\\, t \\)',
    description: 'Desplazamiento usando velocidad media',
    variables: [
      { symbol: 'Δx', name: 'Desplazamiento', unit: 'm' },
      { symbol: 'v_media', name: 'Velocidad media', unit: 'm/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  // 6
  {
    id: 'f-mruv-6',
    title: 'Aceleración media en MRUV',
    formula: '\\( a = \\dfrac{v - v_0}{t} \\)',
    description: 'Cálculo de la aceleración media en un intervalo de tiempo',
    variables: [
      { symbol: 'a', name: 'Aceleración', unit: 'm/s²' },
      { symbol: 'v', name: 'Velocidad final', unit: 'm/s' },
      { symbol: 'v_0', name: 'Velocidad inicial', unit: 'm/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  // 7
  {
    id: 'f-mruv-7',
    title: 'Tiempo en MRUV',
    formula: '\\( t = \\dfrac{v - v_0}{a} \\)',
    description: 'Cálculo del tiempo transcurrido dados los cambios de velocidad y la aceleración',
    variables: [
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: 'v', name: 'Velocidad final', unit: 'm/s' }, 
      { symbol: 'v_0', name: 'Velocidad inicial', unit: 'm/s' },
      { symbol: 'a', name: 'Aceleración', unit: 'm/s²' }
    ]
  },
  // 8
  {
    id: 'f-mruv-8',
    title: 'Tiempo de frenado',
    formula: '\\( t_{\\mathrm{frenado}} = \\dfrac{v_0}{a} \\)',
    description: 'Tiempo necesario para que un objeto se detenga completamente',
    variables: [
      { symbol: 't_frenado', name: 'Tiempo de frenado', unit: 's' },
      { symbol: 'v_0', name: 'Velocidad inicial', unit: 'm/s' },
      { symbol: 'a', name: 'Aceleración (de frenado)', unit: 'm/s²' }
    ]
    },
  // 9
  {
    id: 'f-mruv-9',
    title: 'Distancia de frenado',
    formula: '\\( d_{\\mathrm{frenado}} = \\dfrac{v_0^{2}}{2 a} \\)',
    description: 'Distancia necesaria para que un vehículo se detenga completamente',
    variables: [
      { symbol: 'd_frenado', name: 'Distancia de frenado', unit: 'm' },
      { symbol: 'v_0', name: 'Velocidad inicial', unit: 'm/s' },
      { symbol: 'a', name: 'Aceleración (de frenado)', unit: 'm/s²' }
    ]
   }
];