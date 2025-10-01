export const formulas = [
  {
    id: 'f-mcua-1',
    title: 'Velocidad Angular Final',
    formula: '\\( \\omega = \\omega_0 + \\alpha\\,t \\)',
    description: 'Relación entre la velocidad angular final, inicial, aceleración y tiempo.',
    variables: [
      { symbol: 'ω', name: 'Velocidad angular final', unit: 'rad/s', output: true },
      { symbol: 'ω₀', name: 'Velocidad angular inicial', unit: 'rad/s' },
      { symbol: 'α', name: 'Aceleración angular', unit: 'rad/s²' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  {
    id: 'f-mcua-2',
    title: 'Posición Angular',
    formula: '\\( \\theta = \\theta_0 + \\omega_0\\,t + \\tfrac{1}{2}\\alpha\\,t^2 \\)',
    description: 'Ángulo recorrido en función del tiempo, velocidad angular inicial y aceleración angular.',
    variables: [
      { symbol: 'θ', name: 'Posición angular', unit: 'rad', output: true },
      { symbol: 'θ₀', name: 'Posición angular inicial', unit: 'rad' },
      { symbol: 'ω₀', name: 'Velocidad angular inicial', unit: 'rad/s' },
      { symbol: 'α', name: 'Aceleración angular', unit: 'rad/s²' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  {
    id: 'f-mcua-3',
    title: 'Relación sin Tiempo',
    formula: '\\( \\omega^2 = \\omega_0^2 + 2\\alpha(\\theta - \\theta_0) \\)',
    description: 'Relación entre velocidades angulares, aceleración y desplazamiento angular sin depender del tiempo.',
    variables: [
      { symbol: 'ω', name: 'Velocidad angular final', unit: 'rad/s', output: true },
      { symbol: 'ω₀', name: 'Velocidad angular inicial', unit: 'rad/s' },
      { symbol: 'α', name: 'Aceleración angular', unit: 'rad/s²' },
      { symbol: 'θ', name: 'Posición angular final', unit: 'rad' },
      { symbol: 'θ₀', name: 'Posición angular inicial', unit: 'rad' }
    ]
  },
  {
    id: 'f-mcua-4',
    title: 'Velocidad Tangencial',
    formula: '\\( v = \\omega\\,r \\)',
    description: 'Relación entre la velocidad tangencial y la velocidad angular.',
    variables: [
      { symbol: 'v', name: 'Velocidad tangencial', unit: 'm/s', output: true },
      { symbol: 'ω', name: 'Velocidad angular', unit: 'rad/s' },
      { symbol: 'r', name: 'Radio', unit: 'm' }
    ]
  },
  {
    id: 'f-mcua-5',
    title: 'Aceleración Tangencial',
    formula: '\\( a_t = \\alpha\\,r \\)',
    description: 'Relación entre la aceleración tangencial y la aceleración angular.',
    variables: [
      { symbol: 'a_t', name: 'Aceleración tangencial', unit: 'm/s²', output: true },
      { symbol: 'α', name: 'Aceleración angular', unit: 'rad/s²' },
      { symbol: 'r', name: 'Radio', unit: 'm' }
    ]
  },
  {
    id: 'f-mcua-6',
    title: 'Aceleración Centrípeta',
    formula: '\\( a_c = \\omega^2\\,r = \\dfrac{v^2}{r} \\)',
    description: 'Aceleración dirigida hacia el centro de la trayectoria circular.',
    variables: [
      { symbol: 'a_c', name: 'Aceleración centrípeta', unit: 'm/s²', output: true },
      { symbol: 'ω', name: 'Velocidad angular', unit: 'rad/s' },
      { symbol: 'v', name: 'Velocidad tangencial', unit: 'm/s' },
      { symbol: 'r', name: 'Radio', unit: 'm' }
    ]
  },
  {
    id: 'f-mcua-7',
    title: 'Aceleración Total',
    formula: '\\( a = \\sqrt{a_t^2 + a_c^2} \\)',
    description: 'Módulo de la aceleración total en un movimiento circular (componentes tangencial y centrípeta).',
    variables: [
      { symbol: 'a', name: 'Aceleración total', unit: 'm/s²', output: true },
      { symbol: 'a_t', name: 'Aceleración tangencial', unit: 'm/s²' },
      { symbol: 'a_c', name: 'Aceleración centrípeta', unit: 'm/s²' }
    ]
  },
  {
    id: 'f-mcua-8',
    title: 'Energía Cinética Rotacional',
    formula: '\\( K = \\tfrac{1}{2} I \\omega^2 \\)',
    description: 'Energía cinética asociada al movimiento de rotación.',
    variables: [
      { symbol: 'K', name: 'Energía cinética rotacional', unit: 'J', output: true },
      { symbol: 'I', name: 'Momento de inercia', unit: 'kg·m²' },
      { symbol: 'ω', name: 'Velocidad angular', unit: 'rad/s' }
    ]
  },
  {
    id: 'f-mcua-9',
    title: 'Trabajo por Torque',
    formula: '\\( W = \\tau\\,\\Delta\\theta \\)',
    description: 'Trabajo realizado por un torque constante sobre un desplazamiento angular.',
    variables: [
      { symbol: 'W', name: 'Trabajo', unit: 'J', output: true },
      { symbol: 'τ', name: 'Torque', unit: 'N·m' },
      { symbol: 'Δθ', name: 'Desplazamiento angular', unit: 'rad' }
    ]
  },
  {
    id: 'f-mcua-10',
    title: 'Frecuencia',
    formula: '\\( f = \\dfrac{\\omega}{2\\pi}',
    description: 'Relaciones entre frecuencia, velocidad angular y periodo.',
    variables: [
      { symbol: 'f', name: 'Frecuencia', unit: 'Hz', output: true },
      { symbol: 'ω', name: 'Velocidad angular', unit: 'rad/s' },
      { symbol: 'T', name: 'Período', unit: 's' }
    ]
  },
  {
    id: 'f-mcua-10b',
    title: 'Período',
    formula: '\\( T = \\dfrac{2\\pi}{\\omega} \\)',
    description: 'Relaciones entre frecuencia, velocidad angular y periodo.',
    variables: [
      { symbol: 'T', name: 'Período', unit: 's', output: true },
      { symbol: 'ω', name: 'Velocidad angular', unit: 'rad/s' },
      { symbol: 'f', name: 'Frecuencia', unit: 'Hz' }
    ]
  },
  {
    id: 'f-mcua-11',
    title: 'Número de Vueltas',
    formula: '\\( N = \\dfrac{\\theta}{2\\pi} \\)',
    description: 'Convierte radianes a número de vueltas completas.',
    variables: [
      { symbol: 'N', name: 'Número de vueltas', unit: '', output: true },
      { symbol: 'θ', name: 'Desplazamiento angular', unit: 'rad' }
    ]
  },
  {
    id: 'f-mcua-12',
    title: 'Área Barrida',
    formula: '\\( A = \\tfrac{1}{2} r^2 \\theta \\)',
    description: 'Área barrida por el radio vector en un movimiento circular.',
    variables: [
      { symbol: 'A', name: 'Área barrida', unit: 'm²', output: true },
      { symbol: 'r', name: 'Radio', unit: 'm' },
      { symbol: 'θ', name: 'Desplazamiento angular', unit: 'rad' }
    ]
  },
  {
    id: 'f-mcua-13',
    title: 'Desplazamiento Lineal',
    formula: '\\( s = \\theta\\,r \\)',
    description: 'Relación entre el desplazamiento lineal y el ángulo recorrido.',
    variables: [
      { symbol: 's', name: 'Desplazamiento lineal', unit: 'm', output: true },
      { symbol: 'θ', name: 'Desplazamiento angular', unit: 'rad' },
      { symbol: 'r', name: 'Radio', unit: 'm' }
    ]
  },
  {
    id: 'f-mcua-14',
    title: 'Ángulo Recorrido',
    formula: '\\( \\Delta\\theta = \\omega_0\\,t + \\tfrac{1}{2}\\alpha\\,t^2 \\)',
    description: 'Ángulo total recorrido en función del tiempo, velocidad angular inicial y aceleración angular.',
    variables: [
      { symbol: 'Δθ', name: 'Desplazamiento angular', unit: 'rad', output: true },
      { symbol: 'ω₀', name: 'Velocidad angular inicial', unit: 'rad/s' },
      { symbol: 'α', name: 'Aceleración angular', unit: 'rad/s²' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  {
    id: 'f-mcua-15',
    title: 'Potencia Rotacional',
    formula: '\\( P = \\tau\\,\\omega \\)',
    description: 'Potencia instantánea en un sistema rotacional.',
    variables: [
      { symbol: 'P', name: 'Potencia', unit: 'W', output: true },
      { symbol: 'τ', name: 'Torque', unit: 'N·m' },
      { symbol: 'ω', name: 'Velocidad angular', unit: 'rad/s' }
    ]
  },
  {
    id: 'f-mcua-16',
    title: 'Teorema Trabajo-Energía (Rotacional)',
    formula: '\\( W = \\tfrac{1}{2} I (\\omega^2 - \\omega_0^2) \\)',
    description: 'Relación entre el trabajo realizado y el cambio en la energía cinética rotacional.',
    variables: [
      { symbol: 'W', name: 'Trabajo', unit: 'J', output: true },
      { symbol: 'I', name: 'Momento de inercia', unit: 'kg·m²' },
      { symbol: 'ω', name: 'Velocidad angular final', unit: 'rad/s' },
      { symbol: 'ω₀', name: 'Velocidad angular inicial', unit: 'rad/s' }
    ]
  }
];
