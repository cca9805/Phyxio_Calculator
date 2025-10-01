// filepath: src/data/dinamica/${subId}/${subId}Formulas.js
export const formulas = [
  {
    id: 'velocidad-angular',
    title: 'Velocidad angular',
    formula: '\\omega = \\frac{d\\theta}{dt}',
    latex: '\\omega = \\frac{d\\theta}{dt}',
    description: 'La velocidad angular es el cambio de ángulo por unidad de tiempo.',
    variables: [
      { symbol: '\\omega', name: 'Velocidad angular', unit: 'rad/s' },
      { symbol: '\\theta', name: 'Ángulo', unit: 'rad' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  {
    id: 'aceleracion-angular',
    title: 'Aceleración angular',
    formula: '\\alpha = \\frac{d\\omega}{dt}',
    latex: '\\alpha = \\frac{d\\omega}{dt}',
    description: 'La aceleración angular es el cambio de velocidad angular por unidad de tiempo.',
    variables: [
      { symbol: '\\alpha', name: 'Aceleración angular', unit: 'rad/s²' },
      { symbol: '\\omega', name: 'Velocidad angular', unit: 'rad/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  {
    id: 'momento-inercia',
    title: 'Momento de inercia',
    formula: 'I = \\sum m_i r_i^2',
    latex: 'I = \\sum m_i r_i^2',
    description: 'El momento de inercia mide la resistencia de un cuerpo a cambiar su estado de rotación.',
    variables: [
      { symbol: 'I', name: 'Momento de inercia', unit: 'kg·m²' },
      { symbol: 'm_i', name: 'Masa de cada punto', unit: 'kg' },
      { symbol: 'r_i', name: 'Distancia al eje', unit: 'm' }
    ]
  },
  {
    id: 'torque-rotacional',
    title: 'Segunda ley de la rotación',
    formula: '\\tau = I \\cdot \\alpha',
    latex: '\\tau = I \\cdot \\alpha',
    description: 'El torque produce aceleración angular en un cuerpo.',
    variables: [
      { symbol: '\\tau', name: 'Torque', unit: 'N·m' },
      { symbol: 'I', name: 'Momento de inercia', unit: 'kg·m²' },
      { symbol: '\\alpha', name: 'Aceleración angular', unit: 'rad/s²' }
    ]
  },
  {
    id: 'energia-cinetica-rotacional',
    title: 'Energía cinética rotacional',
    formula: 'E_{rot} = 0.5 I \\omega^2',
    latex: 'E_{rot} = \\frac{1}{2} I \\omega^2',
    description: 'La energía cinética asociada al movimiento de rotación.',
    variables: [
      { symbol: 'E_{rot}', name: 'Energía cinética rotacional', unit: 'J' },
      { symbol: 'I', name: 'Momento de inercia', unit: 'kg·m²' },
      { symbol: '\\omega', name: 'Velocidad angular', unit: 'rad/s' }
    ]
  }
];

export default formulas;
