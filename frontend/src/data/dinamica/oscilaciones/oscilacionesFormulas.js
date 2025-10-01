
export const formulas = [
  {
    id: 'fuerza-restauradora',
    title: 'Fuerza restauradora en MAS',
    formula: 'F = -k x',
    latex: 'F = -k x',
    description: 'La fuerza restauradora es proporcional y opuesta al desplazamiento.',
    variables: [
      { symbol: 'F', name: 'Fuerza restauradora', unit: 'N' },
      { symbol: 'k', name: 'Constante de resorte', unit: 'N/m' },
      { symbol: 'x', name: 'Desplazamiento', unit: 'm' }
    ]
  },
  {
    id: 'posicion-mas',
    title: 'Posición en MAS',
    formula: 'x(t) = A cos(ω t + φ)',
    latex: 'x(t) = A \\cos(\\omega t + \\phi)',
    description: 'La posición del sistema en función del tiempo.',
    variables: [
      { symbol: 'x(t)', name: 'Posición', unit: 'm' },
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: '\\omega', name: 'Frecuencia angular', unit: 'rad/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: '\\phi', name: 'Fase inicial', unit: 'rad' }
    ]
  },
  {
    id: 'periodo-resorte',
    title: 'Periodo de un resorte',
    formula: 'T = 2π sqrt(m / k)',
    latex: 'T = 2\\pi \\sqrt{\\frac{m}{k}}',
    description: 'El periodo de oscilación de un resorte depende de la masa y la constante.',
    variables: [
      { symbol: 'T', name: 'Periodo', unit: 's' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'k', name: 'Constante de resorte', unit: 'N/m' }
    ]
  },
  {
    id: 'energia-mas',
    title: 'Energía total en MAS',
    formula: 'E = 0.5 k A^2',
    latex: 'E = \\frac{1}{2} k A^2',
    description: 'La energía total en el movimiento armónico simple.',
    variables: [
      { symbol: 'E', name: 'Energía total', unit: 'J' },
      { symbol: 'k', name: 'Constante de resorte', unit: 'N/m' },
      { symbol: 'A', name: 'Amplitud', unit: 'm' }
    ]
  }
];

export default formulas;
