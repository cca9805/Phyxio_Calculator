// filepath: src/data/cinematica/mp/mpFormulas.js
export const formulas = [
  {
    id: 'mp-v0x',
    title: 'Componente horizontal de la velocidad inicial v0x',
    formula: 'v_{0x} = v_0 \\cos\\theta',
    description: 'Componente horizontal de la velocidad inicial.',
    relation: 'Se usa en x(t) = v0x·t y en el cálculo del alcance R = v0x·T.',
    variables: [
      { symbol: 'v0x', name: 'Componente horizontal', unit: 'm/s', output: true },
      { symbol: 'v0', name: 'Velocidad inicial', unit: 'm/s' },
      { symbol: '\\theta', name: 'Ángulo', unit: 'rad' }
    ]
  },

  {
    id: 'mp-v0y',
    title: 'Componente vertical de la velocidad inicial v0y',
    formula: 'v_{0y} = v_0 \\sin\\theta',
    description: 'Componente vertical de la velocidad inicial.',
    relation: 'Se usa en y(t), en el tiempo de vuelo T y en la altura máxima H.',
    variables: [
      { symbol: 'v0y', name: 'Componente vertical', unit: 'm/s', output: true },
      { symbol: 'v0', name: 'Velocidad inicial', unit: 'm/s' },
      { symbol: '\\theta', name: 'Ángulo', unit: 'rad' }
    ]
  },

  {
    id: 'mp-xt',
    title: 'Posición horizontal x(t)',
    formula: 'x(t) = v_{0x}\\,t',
    description: 'Posición horizontal en función del tiempo (MRU).',
    relation: 'Deriva de v0x; junto con y(t) define la trayectoria paramétrica.',
    variables: [
      { symbol: 'x(t)', name: 'Posición horizontal', unit: 'm', output: true },
      { symbol: 'v0x', name: 'Componente horizontal', unit: 'm/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },

  {
    id: 'mp-yt',
    title: 'Posición vertical y(t)',
    formula: 'y(t) = v_{0y}\\,t - \\frac{1}{2} g t^{2}',
    description: 'Posición vertical en función del tiempo (MRUA con aceleración -g).',
    relation: 'Deriva de v0y; imponiendo y(T)=0 se obtiene el tiempo de vuelo T.',
    variables: [
      { symbol: 'y(t)', name: 'Posición vertical', unit: 'm', output: true },
      { symbol: 'v0y', name: 'Componente vertical', unit: 'm/s' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },

  {
    id: 'mp-vx',
    title: 'Componente horizontal de la velocidad v_x(t)',
    formula: 'v_x(t) = v_{0x}',
    description: 'Velocidad horizontal constante en el movimiento parabólico.',
    relation: 'Constante y usada para hallar el alcance R = v0x·T y la componente de la velocidad total.',
    variables: [
      { symbol: 'v_x', name: 'Velocidad horizontal', unit: 'm/s', output: true },
      { symbol: 'v0x', name: 'Componente horizontal', unit: 'm/s' }
    ]
  },

  {
    id: 'mp-vy',
    title: 'Componente vertical de la velocidad v_y(t)',
    formula: 'v_y(t) = v_{0y} - g t',
    description: 'Velocidad vertical que decrece linealmente por la gravedad.',
    relation: 'Se anula en el instante de altura máxima; interviene en el cálculo de v(t).',
    variables: [
      { symbol: 'v_y', name: 'Velocidad vertical', unit: 'm/s', output: true },
      { symbol: 'v0y', name: 'Componente vertical', unit: 'm/s' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },

  {
    id: 'mp-trajectory',
    title: 'Ecuación de la trayectoria y(x)',
    formula: 'y(x)=x\\tan\\theta - \\frac{g}{2 v_0^2 \\cos^2\\theta}\\,x^2',
    description: 'Expresión de y en función de x (parábola).',
    relation: 'Se obtiene eliminando t entre x(t) y y(t); útil para estudiar la forma de la trayectoria.',
    variables: [
      { symbol: 'x', name: 'Posición horizontal', unit: 'm' },
      { symbol: '\\theta', name: 'Desplazamiento angular', unit: 'rad' },
      { symbol: 'v0', name: 'Velocidad inicial', unit: 'm/s' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' },
      { symbol: 'y', name: 'Posición vertical', unit: 'm', output: true }
    ]
  },

  {
    id: 'mp-time-flight',
    title: 'Tiempo de vuelo T (misma altura)',
    formula: 'T=\\frac{2 v_0 \\sin\\theta}{g}',
    description: 'Tiempo total en el aire cuando la altura de salida y llegada coinciden.',
    relation: 'Deriva de y(t) imponiendo y(T)=0; se usa para calcular R.',
    variables: [
      { symbol: 'T', name: 'Tiempo de vuelo', unit: 's', output: true },
      { symbol: 'v0', name: 'Velocidad inicial', unit: 'm/s' },
      { symbol: '\\theta', name: 'Ángulo', unit: 'rad' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ]
  },

  {
    id: 'mp-range',
    title: 'Alcance horizontal R (misma altura)',
    formula: 'R=\\frac{v_0^{2}\\sin(2\\theta)}{g}',
    description: 'Distancia horizontal recorrida en el vuelo (misma altura).',
    relation: 'Se obtiene como R = v0x · T; máximo para θ = 45°.',
    variables: [
      { symbol: 'R', name: 'Alcance', unit: 'm', output: true },
      { symbol: 'v0', name: 'Velocidad inicial', unit: 'm/s' },
      { symbol: '\\theta', name: 'Ángulo', unit: 'rad' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ]
  },

  {
    id: 'mp-max-height',
    title: 'Altura máxima H',
    formula: 'H=\\frac{v_{0y}^{2}}{2g}=\\frac{v_0^{2}\\sin^{2}\\theta}{2g}',
    description: 'Altura máxima alcanzada respecto al punto de lanzamiento.',
    relation: 'Se obtiene imponiendo v_y(t)=0 y evaluando y(t) en ese tiempo t_H.',
    variables: [
      { symbol: 'H', name: 'Altura máxima', unit: 'm', output: true },
      { symbol: 'v0y', name: 'Componente vertical', unit: 'm/s' },
      { symbol: 'v0', name: 'Velocidad inicial', unit: 'm/s' },
      { symbol: '\\theta', name: 'Ángulo', unit: 'rad' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ]
  },

  {
    id: 'mp-time-to-peak',
    title: 'Tiempo hasta la altura máxima t_H',
    formula: 't_{H}=\\frac{v_{0y}}{g}',
    description: 'Momento en que la componente vertical de la velocidad se anula.',
    relation: 't_H es la mitad de T cuando la trayectoria es simétrica (misma altura).',
    variables: [
      { symbol: 't_H', name: 'Tiempo hasta el pico', unit: 's', output: true },
      { symbol: 'v0y', name: 'Componente vertical', unit: 'm/s' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' }
    ]
  },

  {
    id: 'mp-angle-max-range',
    title: 'Ángulo óptimo para máximo alcance',
    formula: '\\theta_{opt} = 45^{\\circ}',
    description: 'Ángulo que maximiza el alcance en ausencia de resistencia del aire.',
    relation: 'Se obtiene al maximizar R = (v0^2/g) sin(2θ).',
    variables: [
    ]
  },

  {
    id: 'mp-impact-time-general',
    title: 'Tiempo de impacto (caso general)',
    formula: 'y_f = y_0 + v_{0y}\\,t - \\frac{1}{2} g t^{2}',
    description: 'Ecuación cuadrática en t para hallar el tiempo de impacto si la altura final y_f difiere.',
    relation: 'Resuelve la cuadrática para obtener t; elegir la raíz real positiva adecuada.',
    variables: [
      { symbol: 'y_0', name: 'Altura inicial', unit: 'm' },
      { symbol: 'y_f', name: 'Altura final', unit: 'm' },
      { symbol: 'v0y', name: 'Componente vertical', unit: 'm/s' },
      { symbol: 'g', name: 'Gravedad', unit: 'm/s²' },
      { symbol: 't', name: 'Tiempo de impacto', unit: 's', output: true }
    ]
  },

  {
    id: 'mp-v-magnitude',
    title: 'Velocidad escalar v(t)',
    formula: 'v(t) = \\sqrt{ v_x(t)^2 + v_y(t)^2 }',
    description: 'Magnitud instantánea de la velocidad a partir de sus componentes.',
    relation: 'Usada para energía cinética y rapidez instantánea; combina vx y vy.',
    variables: [
      { symbol: 'v', name: 'Velocidad escalar', unit: 'm/s', output: true },
      { symbol: 'v_x', name: 'Componente horizontal', unit: 'm/s' },
      { symbol: 'v_y', name: 'Componente vertical', unit: 'm/s' }
    ]
  }
];

export default formulas;
