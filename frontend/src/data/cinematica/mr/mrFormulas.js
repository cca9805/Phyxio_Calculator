// filepath: src/data/cinematica/${subId}/${subId}Formulas.js
export const formulas = [
  {
    id: 'f-mr-1',
    title: 'Posición relativa',
    formula: 'r_AB = r_A − r_B',
    description: 'Posición de A respecto de B como diferencia de posiciones absolutas.',
    variables: [
      { symbol: 'r_AB', name: 'Posición de A respecto de B', unit: 'm', output: true },
      { symbol: 'r_A', name: 'Posición de A', unit: 'm' },
      { symbol: 'r_B', name: 'Posición de B', unit: 'm' }
    ],
    notes: ['El módulo |r_AB| es la distancia entre A y B.']
  },
  {
    id: 'f-mr-2',
    title: 'Velocidad relativa',
    formula: 'v_AB = v_A − v_B',
    description: 'Velocidad de A observada desde B en SR inerciales.',
    variables: [
      { symbol: 'v_AB', name: 'Velocidad de A respecto de B', unit: 'm/s', output: true },
      { symbol: 'v_A', name: 'Velocidad de A', unit: 'm/s' },
      { symbol: 'v_B', name: 'Velocidad de B', unit: 'm/s' }
    ]
  },
  {
    id: 'f-mr-3',
    title: 'Aceleración relativa',
    formula: 'a_AB = a_A − a_B',
    description: 'Aceleración de A observada desde B en SR inerciales.',
    variables: [
      { symbol: 'a_AB', name: 'Aceleración de A respecto de B', unit: 'm/s²', output: true },
      { symbol: 'a_A', name: 'Aceleración de A', unit: 'm/s²' },
      { symbol: 'a_B', name: 'Aceleración de B', unit: 'm/s²' }
    ]
  },
  {
    id: 'f-mr-4',
    title: 'Transformación galileana de posición',
    formula: 'r = r\' + V·t',
    description: 'Posición en S en función de la posición en S\' cuando S\' se mueve a velocidad constante V respecto de S.',
    variables: [
      { symbol: 'r', name: 'Posición en S', unit: 'm', output: true },
      { symbol: 'r\'', name: 'Posición en S\'', unit: 'm' },
      { symbol: 'V', name: 'Velocidad de S\' respecto de S', unit: 'm/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  {
    id: 'f-mr-5',
    title: 'Transformación galileana de velocidad',
    formula: 'v = v\' + V',
    description: 'Relación de velocidades entre S y S\' (inerciales).',
    variables: [
      { symbol: 'v', name: 'Velocidad en S', unit: 'm/s', output: true },
      { symbol: 'v\'', name: 'Velocidad en S\'', unit: 'm/s' },
      { symbol: 'V', name: 'Velocidad de S\' respecto de S', unit: 'm/s' }
    ],
    notes: ['La aceleración permanece invariante: a = a\'.']
  },
  {
    id: 'f-mr-6',
    title: 'Transformación galileana de aceleración',
    formula: 'a = a\'',
    description: 'Las aceleraciones no cambian entre SR inerciales.',
    variables: [
      { symbol: 'a', name: 'Aceleración en S', unit: 'm/s²', output: true },
      { symbol: 'a\'', name: 'Aceleración en S\'', unit: 'm/s²' }
    ]
  },
  {
    id: 'f-mr-7',
    title: 'Composición de velocidades (medio + móvil)',
    formula: 'v_obj/suelo = v_obj/medio + v_medio/suelo',
    description: 'Velocidad del móvil respecto del suelo como suma de su velocidad respecto del medio y la del medio respecto del suelo.',
    variables: [
      { symbol: 'v_obj/suelo', name: 'Velocidad del objeto respecto del suelo', unit: 'm/s', output: true },
      { symbol: 'v_obj/medio', name: 'Velocidad del objeto respecto del medio', unit: 'm/s' },
      { symbol: 'v_medio/suelo', name: 'Velocidad del medio respecto del suelo', unit: 'm/s' }
    ],
    examples: [{ title: 'Barco en río', description: 'v_barco/suelo = v_barco/agua + v_agua/suelo' }]
  },
  {
    id: 'f-mr-8',
    title: 'Proyección sobre una dirección',
    formula: 'v_AB·û = (v_A − v_B)·û',
    description: 'Componente de la velocidad relativa sobre un eje/dirección û.',
    variables: [
      { symbol: 'v_AB·û', name: 'Componente proyectada', unit: 'm/s', output: true },
      { symbol: 'û', name: 'Versor (dirección unidad)', unit: '' }
    ]
  },
  {
    id: 'f-mr-9',
    title: 'Distancia relativa',
    formula: 'd_AB = | r_A − r_B |',
    description: 'Distancia instantánea entre A y B.',
    variables: [
      { symbol: 'd_AB', name: 'Distancia entre A y B', unit: 'm', output: true }
    ]
  },
  {
    id: 'f-mr-10',
    title: 'Intercepción en MR (lineal, SR inercial)',
    formula: 'r_A0 + v_A·t = r_B0 + v_B·t (resolver t)',
    description: 'Condición vectorial de encuentro; se resuelve para t y se verifica que t ≥ 0.',
    variables: [
      { symbol: 'r_A0', name: 'Posición inicial de A', unit: 'm' },
      { symbol: 'r_B0', name: 'Posición inicial de B', unit: 'm' },
      { symbol: 't', name: 'Tiempo de encuentro', unit: 's', output: true }
    ],
    notes: ['Si v_A = v_B y r_A0 ≠ r_B0 no hay intersección; en 2D/3D puede requerir proyectar componentes.']
  }
];

export default formulas;
