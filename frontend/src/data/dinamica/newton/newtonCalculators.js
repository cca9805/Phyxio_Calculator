export const calculators = [
  {
    id: 'fuerza-segunda-ley',
    title: 'Calculadora de Fuerza (Segunda Ley de Newton)',
    expr: 'F = m \\cdot a',
    latex: 'F = m \\cdot a',
    vars: [
      { name: 'm', label: 'Masa', unit: 'kg', example: '2' },
      { name: 'a', label: 'Aceleración', unit: 'm/s²', example: '3' }
    ],
    output: { name: 'F', label: 'Fuerza', unit: 'N' }
  },
  {
    id: 'peso',
    title: 'Calculadora de Peso',
    expr: 'P = m \\cdot g',
    latex: 'P = m \\cdot g',
    vars: [
      { name: 'm', label: 'Masa', unit: 'kg', example: '5' },
      { name: 'g', label: 'Gravedad', unit: 'm/s²', example: '9.8' }
    ],
    output: { name: 'P', label: 'Peso', unit: 'N' }
  },
  {
    id: 'plano-inclinado',
    title: 'Fuerza paralela y normal en plano inclinado',
    expr: [
      'F_{paralela} = m \\cdot g \\cdot \\sin(\\theta)',
      'N = m \\cdot g \\cdot \\cos(\\theta)'
    ],
    latex: [
      'F_{paralela} = m \\cdot g \\cdot \\sin(\\theta)',
      'N = m \\cdot g \\cdot \\cos(\\theta)'
    ],
    vars: [
      { name: 'm', label: 'Masa', unit: 'kg', example: '3' },
      { name: 'g', label: 'Gravedad', unit: 'm/s²', example: '9.8' },
      { name: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '30' }
    ],
    output: [
      { name: 'F_paralela', label: 'Fuerza paralela', unit: 'N' },
      { name: 'N', label: 'Fuerza normal', unit: 'N' }
    ]
  }
];

export default calculators;
