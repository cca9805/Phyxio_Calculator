// filepath: src/data/dinamica/${subId}/${subId}Formulas.js
export const formulas = [
  {
    id: 'cantidad-movimiento',
    title: 'Cantidad de movimiento (Momentum)',
    formula: 'p = m \\cdot v',
    latex: 'p = m \\cdot v',
    description: 'La cantidad de movimiento de un objeto es el producto de su masa por su velocidad.',
    variables: [
      { symbol: 'p', name: 'Cantidad de movimiento', unit: 'kg·m/s' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'v', name: 'Velocidad', unit: 'm/s' }
    ]
  },
  {
    id: 'impulso',
    title: 'Impulso',
    formula: 'J = F \\cdot \\Delta t',
    latex: 'J = F \\cdot \\Delta t',
    description: 'El impulso es el producto de la fuerza promedio aplicada y el intervalo de tiempo durante el cual actúa.',
    variables: [
      { symbol: 'J', name: 'Impulso', unit: 'N·s' },
      { symbol: 'F', name: 'Fuerza promedio', unit: 'N' },
      { symbol: '\\Delta t', name: 'Intervalo de tiempo', unit: 's' }
    ]
  },
  {
    id: 'teorema-impulso',
    title: 'Teorema del impulso y cantidad de movimiento',
    formula: 'J = \\Delta p = m \\cdot (v_f - v_i)',
    latex: 'J = \\Delta p = m \\cdot \\left( v_f - v_i \\right)',
    description: 'El impulso aplicado a un cuerpo es igual al cambio en su cantidad de movimiento.',
    variables: [
      { symbol: 'J', name: 'Impulso', unit: 'kg·m/s' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'v_f', name: 'Velocidad final', unit: 'm/s' },
      { symbol: 'v_i', name: 'Velocidad inicial', unit: 'm/s' }
    ]
  },
  {
    id: 'conservacion-momentum',
    title: 'Conservación de la cantidad de movimiento',
    formula: '\\sum p_{inicial} = \\sum p_{final}',
    latex: '\\sum p_{inicial} = \\sum p_{final}',
    description: 'En un sistema aislado, la cantidad de movimiento total se conserva antes y después de una interacción.',
    variables: [
      { symbol: 'p_{inicial}', name: 'Cantidad de movimiento inicial', unit: 'kg·m/s' },
      { symbol: 'p_{final}', name: 'Cantidad de movimiento final', unit: 'kg·m/s' }
    ]
  }
];

export default formulas;
