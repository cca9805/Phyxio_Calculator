// filepath: src/data/cinematica/mas/masFormulas.js
export const formulas = [
  {
    id: 'f-mas-1',
    title: 'Frecuencia Angular (ω)',
    formula: ' \\omega = \\sqrt{\\frac{k}{m}} ',
    description: 'Relación entre la frecuencia angular, constante elástica y masa.',
    variables: [
      { symbol: 'k', name: 'Constante elástica', unit: 'N/m' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'ω', name: 'Frecuencia angular', unit: 'rad/s', output: true }
    ]
  },
  {
    id: 'f-mas-2',
    title: 'Velocidad en función del tiempo (v(t))',
    formula: ' v(t) = - A \\omega \\sin(\\omega t + \\phi) ',
    description: 'Velocidad en función del tiempo.',
    variables: [
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'ω', name: 'Frecuencia angular', unit: 'rad/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: 'φ', name: 'Fase inicial', unit: 'rad' },
      { symbol: 'v(t)', name: 'Velocidad', unit: 'm/s', output: true }
    ]
  },
  {
    id: 'f-mas-3',
    title: 'Posición en función del tiempo (x(t))',
    formula: ' x(t) = A \\cos(\\omega t + \\phi) ',
    description: 'Posición en función del tiempo.',
    variables: [
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'ω', name: 'Frecuencia angular', unit: 'rad/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: 'φ', name: 'Fase inicial', unit: 'rad' },
      { symbol: 'x(t)', name: 'Posición', unit: 'm', output: true }
    ]
  },
  {
    id: 'f-mas-4',
    title: 'Energía Potencial (Ep)',
    formula: ' E_{p} = \\frac{1}{2} k x^{2} ',
    description: 'Energía potencial elástica.',
    variables: [
      { symbol: 'k', name: 'Constante elástica', unit: 'N/m' },
      { symbol: 'x', name: 'Posición', unit: 'm' },
      { symbol: 'Ep', name: 'Energía potencial', unit: 'J', output: true }
    ]
  },
  {
    id: 'f-mas-5',
    title: 'Energía Mecánica Total (E) en función de la amplitud',
    formula: ' E = \\frac{1}{2} k A^{2} ',
    description: 'Energía total del sistema oscilante.',
    variables: [
      { symbol: 'k', name: 'Constante elástica', unit: 'N/m' },
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'E', name: 'Energía total', unit: 'J', output: true }
    ]
  },
  {
    id: 'f-mas-5b',
    title: 'Energía Mecánica Total (E) en función de la masa y frecuencia angular',
    formula: ' E = \\frac{1}{2} m \\omega^{2} A^{2} ',
    description: 'Energía total del sistema oscilante.',
    variables: [
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'ω', name: 'Frecuencia angular', unit: 'rad/s' },
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'E', name: 'Energía total', unit: 'J', output: true }
    ]
  },
  {
    id: 'f-mas-6',
    title: 'Energía Cinética (Ec) en función de la velocidad',
    formula: ' E_{c} = \\frac{1}{2} m v^{2} ',
    description: 'Energía cinética en función de la velocidad o posición.',
    variables: [
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'v', name: 'Velocidad', unit: 'm/s' },
      { symbol: 'Ec', name: 'Energía cinética', unit: 'J', output: true }
    ]
  },
  {
    id: 'f-mas-6b',
    title: 'Energía Cinética (Ec) en función de la posición',
    formula: ' E_{c} = \\frac{1}{2} k (A^{2} - x^{2}) ',
    description: 'Energía cinética en función de la velocidad o posición.',
    variables: [
      { symbol: 'k', name: 'Constante elástica', unit: 'N/m' },
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'x', name: 'Posición', unit: 'm' },
      { symbol: 'Ec', name: 'Energía cinética', unit: 'J', output: true }
    ]
  },
  
  {
    id: 'f-mas-7',
    title: 'Cálculo del período (T) desde la frecuencia angular',
    formula: ' T = \\frac{2\\pi}{\\omega} ',
    description: 'Tiempo para completar una oscilación completa.',
    variables: [
      { symbol: 'ω', name: 'Frecuencia angular', unit: 'rad/s' },
      { symbol: 'T', name: 'Periodo', unit: 's', output: true }
    ]
  },
  {
    id: 'f-mas-7b',
    title: 'Cálculo del período (T) desde masa y constante elástica',
    formula: ' T = 2\\pi\\sqrt{\\frac{m}{k}} ',
    description: 'Tiempo para completar una oscilación completa.',
    variables: [
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'k', name: 'Constante elástica', unit: 'N/m' },
      { symbol: 'T', name: 'Periodo', unit: 's', output: true }
    ]
  },
  {
    id: 'f-mas-8',
    title: 'Aceleración en función del tiempo (a(t))',
    formula: ' a(t) = - A \\omega^{2} \\cos(\\omega t + \\phi ) ',
    description: 'Aceleración en función del tiempo.',
    variables: [
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'ω', name: 'Frecuencia angular', unit: 'rad/s' },
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: 'φ', name: 'Fase inicial', unit: 'rad' },
      { symbol: 'a(t)', name: 'Aceleración', unit: 'm/s²', output: true }
    ]
  },
  {
    id: 'f-mas-8b',
    title: 'Aceleración en función de la posición (a(x))',
    formula: ' a(x) = -\\omega^{2} x ',
    description: 'Aceleración en función de la posición.',
    variables: [
      { symbol: 'ω', name: 'Frecuencia angular', unit: 'rad/s' },
      { symbol: 'x', name: 'Posición', unit: 'm' },
      { symbol: 'a(x)', name: 'Aceleración', unit: 'm/s²', output: true }
    ]
  },
  {
    id: 'f-mas-9',
    title: 'Fuerza Restauradora (F) en función de la posición',
    formula: ' F = - k x ',
    description: 'Ley de Hooke y segunda ley de Newton',
    variables: [
      { symbol: 'k', name: 'Constante elástica', unit: 'N/m' },
      { symbol: 'x', name: 'Posición', unit: 'm' },
      { symbol: 'F', name: 'Fuerza', unit: 'N', output: true },
    ]
  },
  {
    id: 'f-mas-9b',
    title: 'Fuerza Restauradora (F) en función de la aceleración',
    formula: ' F = m a ',
    description: 'Ley de Hooke y segunda ley de Newton',
    variables: [
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'a', name: 'Aceleración', unit: 'm/s²' },
      { symbol: 'F', name: 'Fuerza', unit: 'N', output: true }
    ]
  },
  {
    id: 'f-mas-10',
    title: 'Velocidad Máxima (v_max) desde la frecuencia angular',
    formula: ' v_{\\mathrm{max}}= A \\omega ',
    description: 'Máxima velocidad del oscilador.',
    variables: [
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'ω', name: 'Frecuencia angular', unit: 'rad/s' },
      { symbol: 'v_max', name: 'Velocidad máxima', unit: 'm/s', output: true }
    ]
  },
  {
    id: 'f-mas-10b',
    title: 'Velocidad Máxima (v_max) desde la masa y constante elástica',
    formula: ' v_{\\mathrm{max}}= A \\sqrt{\\frac{k}{m}}  ',
    description: 'Máxima velocidad del oscilador.',
    variables: [
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'k', name: 'Constante elástica', unit: 'N/m' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'v_max', name: 'Velocidad máxima', unit: 'm/s', output: true }
    ]
  },
  {
    id: 'f-mas-11',
    title: 'Aceleración Máxima (a_max) en función de la frecuencia angular',
    formula: ' a_{\\mathrm{max}} = A \\omega^{2} ',
    description: 'Máxima aceleración del oscilador.',
    variables: [
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'ω', name: 'Frecuencia angular', unit: 'rad/s' },
      { symbol: 'a_max', name: 'Aceleración máxima', unit: 'm/s²', output: true }
    ]
  },
  {
    id: 'f-mas-11b',
    title: 'Aceleración Máxima (a_max) en función de la masa y constante elástica',
    formula: ' a_{\\mathrm{max}} = A \\frac{k}{m} ',
    description: 'Máxima aceleración del oscilador.',
    variables: [
      { symbol: 'A', name: 'Amplitud', unit: 'm' },
      { symbol: 'k', name: 'Constante elástica', unit: 'N/m' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'a_{max}', name: 'Aceleración máxima', unit: 'm/s²', output: true }
    ]
  }
];

export default formulas;
