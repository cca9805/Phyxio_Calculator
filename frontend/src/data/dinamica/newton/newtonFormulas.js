export const formulas = [
  {
    id: 'newton-1',
    title: 'Primera Ley de Newton (Inercia)',
    formula: 'ΣF = 0',
    latex: 'ΣF = 0',
    description: 'Si la suma de fuerzas sobre un cuerpo es cero, permanece en reposo o en movimiento rectilíneo uniforme.',
    variables: [
      { symbol: 'ΣF', name: 'Suma de fuerzas', unit: 'N' }
    ]
  },
  {
    id: 'newton-2',
    title: 'Segunda Ley de Newton',
    formula: 'F = m \\cdot a',
    latex: 'F = m \\cdot a',
    description: 'La aceleración de un cuerpo es proporcional a la fuerza neta aplicada e inversamente proporcional a su masa.',
    variables: [
      { symbol: 'F', name: 'Fuerza neta', unit: 'N' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'a', name: 'Aceleración', unit: 'm/s²' }
    ]
  },
  {
    id: 'newton-3',
    title: 'Tercera Ley de Newton (Acción y reacción)',
    formula: 'F_{12} = -F_{21}',
    latex: 'F_{12} = -F_{21}',
    description: 'Por cada acción existe una reacción igual y opuesta. Las fuerzas actúan sobre cuerpos distintos.',
    variables: [
      { symbol: 'F_{12}', name: 'Fuerza que el cuerpo 1 ejerce sobre el 2', unit: 'N' },
      { symbol: 'F_{21}', name: 'Fuerza que el cuerpo 2 ejerce sobre el 1', unit: 'N' }
    ]
  },
  {
    id: 'peso',
    title: 'Fuerza de peso',
    formula: 'P = m \\cdot g',
    latex: 'P = m \\cdot g',
    description: 'La fuerza gravitatoria que la Tierra ejerce sobre un cuerpo.',
    variables: [
      { symbol: 'P', name: 'Peso', unit: 'N' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'g', name: 'Aceleración gravitatoria', unit: 'm/s²' }
    ]
  },
  {
    id: 'plano-inclinado',
    title: 'Componentes de la fuerza en plano inclinado',
    formula: 'F_{\\parallel} = m \\cdot g \\cdot \\sin\\theta \\quad N = m \\cdot g \\cdot \\cos\\theta',
    latex: 'F_{\\parallel} = m \\cdot g \\cdot \\sin\\theta \\qquad N = m \\cdot g \\cdot \\cos\\theta',
    description: 'Descomposición de la fuerza de gravedad en un plano inclinado.',
    variables: [
      { symbol: 'F_{\\parallel}', name: 'Componente paralela', unit: 'N' },
      { symbol: 'N', name: 'Fuerza normal', unit: 'N' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'g', name: 'Aceleración gravitatoria', unit: 'm/s²' },
      { symbol: '\\theta', name: 'Ángulo del plano', unit: 'rad' }
    ]
  }
];

export default formulas;
