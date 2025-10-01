// filepath: src/data/dinamica/${subId}/${subId}Formulas.js
export const formulas = [
  {
    id: 'trabajo',
    title: 'Trabajo de una fuerza constante',
    formula: 'W = F \\cdot d \\cdot \\cos(\\theta)',
    latex: 'W = F \\cdot d \\cdot \\cos(\\theta)',
    description: 'El trabajo realizado por una fuerza constante sobre un objeto que se desplaza una distancia d en la dirección de la fuerza.',
    variables: [
      { symbol: 'W', name: 'Trabajo', unit: 'J' },
      { symbol: 'F', name: 'Fuerza', unit: 'N' },
      { symbol: 'd', name: 'Desplazamiento', unit: 'm' },
      { symbol: '\\theta', name: 'Ángulo entre fuerza y desplazamiento', unit: 'rad' }
    ]
  },
  {
    id: 'energia-cinetica',
    title: 'Energía cinética',
    formula: 'E_k = \\frac{1}{2} m v^2',
    latex: 'E_k = \\frac{1}{2} m v^2',
    description: 'La energía asociada al movimiento de un objeto.',
    variables: [
      { symbol: 'E_k', name: 'Energía cinética', unit: 'J' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'v', name: 'Velocidad', unit: 'm/s' }
    ]
  },
  {
    id: 'energia-potencial-gravitatoria',
    title: 'Energía potencial gravitatoria',
    formula: 'E_p = m \\cdot g \\cdot h',
    latex: 'E_p = m \\cdot g \\cdot h',
    description: 'La energía almacenada por un objeto debido a su posición en un campo gravitatorio.',
    variables: [
      { symbol: 'E_p', name: 'Energía potencial', unit: 'J' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'g', name: 'Aceleración gravitatoria', unit: 'm/s^2' },
      { symbol: 'h', name: 'Altura', unit: 'm' }
    ]
  },
  {
    id: 'energia-potencial-elastica',
    title: 'Energía potencial elástica',
    formula: 'E_{pe} = \\frac{1}{2} k x^2',
    latex: 'E_{pe} = \\frac{1}{2} k x^2',
    description: 'La energía almacenada en un resorte o material elástico cuando se deforma.',
    variables: [
      { symbol: 'E_{pe}', name: 'Energía potencial elástica', unit: 'J' },
      { symbol: 'k', name: 'Constante del resorte', unit: 'N/m' },
      { symbol: 'x', name: 'Deformación', unit: 'm' }
    ]
  },
  {
    id: 'potencia',
    title: 'Potencia',
    formula: 'P = \\frac{W}{t}',
    latex: 'P = \\frac{W}{t}',
    description: 'La rapidez con la que se realiza trabajo o se transfiere energía.',
    variables: [
      { symbol: 'P', name: 'Potencia', unit: 'W' },
      { symbol: 'W', name: 'Trabajo', unit: 'J' },
      { symbol: 't', name: 'Tiempo', unit: 's' }
    ]
  },
  {
    id: 'conservacion-energia',
    title: 'Conservación de la energía mecánica',
    formula: 'E_{mec, inicial} + W_{nc} = E_{mec, final}',
    latex: 'E_{mec, inicial} + W_{nc} = E_{mec, final}',
    description: 'La energía mecánica total se conserva si solo actúan fuerzas conservativas. Si hay fuerzas no conservativas, se suma el trabajo realizado por ellas.',
    variables: [
      { symbol: 'E_{mec, inicial}', name: 'Energía mecánica inicial', unit: 'J' },
      { symbol: 'W_{nc}', name: 'Trabajo de fuerzas no conservativas', unit: 'J' },
      { symbol: 'E_{mec, final}', name: 'Energía mecánica final', unit: 'J' }
    ]
  }
];

export default formulas;
