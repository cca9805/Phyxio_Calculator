export const formulas = [
  {
    id: 'suma_vectores_componentes',
    title: 'Suma de Vectores (Componentes)',
    formula: 'Rx = Ax + Bx, Ry = Ay + By',
    description: 'Calcula el vector resultante de la suma de dos vectores A y B mediante sus componentes rectangulares.',
    variables: [
      { symbol: 'Rx, Ry', name: 'Componentes del vector resultante', unit: 'N' },
      { symbol: 'Ax, Ay', name: 'Componentes del vector A', unit: 'N' },
      { symbol: 'Bx, By', name: 'Componentes del vector B', unit: 'N' }
    ]
  },
  {
    id: 'equilibrio_particula',
    title: 'Equilibrio de una Partícula (2D)',
    formula: 'ΣFx = 0, ΣFy = 0',
    description: 'Para que una partícula esté en equilibrio, la suma de todas las fuerzas que actúan sobre ella en cada eje debe ser cero.',
    variables: [
      { symbol: 'ΣFx', name: 'Suma de componentes de fuerza en el eje X', unit: 'N' },
      { symbol: 'ΣFy', name: 'Suma de componentes de fuerza en el eje Y', unit: 'N' }
    ]
  },
  {
    id: 'descomposicion_fuerzas',
    title: 'Descomposición de Fuerzas (2D)',
    formula: 'Fx = F * cos(θ), Fy = F * sin(θ)',
    description: 'Calcula las componentes rectangulares (Fx, Fy) de una fuerza F dada su magnitud y ángulo θ con la horizontal.',
    variables: [
      { symbol: 'Fx, Fy', name: 'Componentes de la fuerza', unit: 'N' },
      { symbol: 'F', name: 'Magnitud de la fuerza', unit: 'N' },
      { symbol: 'θ', name: 'Ángulo con el eje x positivo', unit: 'grados' }
    ]
  }
];