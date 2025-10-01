// filepath: src/data/dinamica/${subId}/${subId}Calculators.js
export const calculators = [
  {
    id: 'cantidad-movimiento',
    title: 'Calculadora de cantidad de movimiento',
    expr: 'p = m * v',
    latex: 'p = m \\cdot v',
    vars: [
      { name: 'm', label: 'Masa (m)', unit: 'kg', example: '1200' },
      { name: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '20' }
    ],
    output: { name: 'p', label: 'Cantidad de movimiento', unit: 'kg·m/s' }
  },
  {
    id: 'impulso',
    title: 'Calculadora de impulso',
    expr: 'J = F * dt',
    latex: 'J = F \\cdot \\Delta t',
    vars: [
      { name: 'F', label: 'Fuerza promedio (F)', unit: 'N', example: '50' },
      { name: 'dt', label: 'Intervalo de tiempo (Δt)', unit: 's', example: '0.2' }
    ],
    output: { name: 'J', label: 'Impulso', unit: 'N·s' }
  },
  {
    id: 'teorema-impulso',
    title: 'Calculadora de teorema del impulso',
    expr: 'J = m * (vf - vi)',
    latex: 'J = m \\cdot \\left( v_f - v_i \\right)',
    vars: [
      { name: 'm', label: 'Masa (m)', unit: 'kg', example: '0.5' },
      { name: 'vf', label: 'Velocidad final (v_f)', unit: 'm/s', example: '6' },
      { name: 'vi', label: 'Velocidad inicial (v_i)', unit: 'm/s', example: '2' }
    ],
    output: { name: 'J', label: 'Impulso', unit: 'kg·m/s' }
  },
  {
    id: 'conservacion-momentum',
    title: 'Calculadora de conservación de la cantidad de movimiento (colisión inelástica)',
    expr: 'vf = (m1 * v1 + m2 * v2) / (m1 + m2)',
    latex: 'v_f = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}',
    vars: [
      { name: 'm1', label: 'Masa 1 (m₁)', unit: 'kg', example: '1' },
      { name: 'v1', label: 'Velocidad 1 (v₁)', unit: 'm/s', example: '3' },
      { name: 'm2', label: 'Masa 2 (m₂)', unit: 'kg', example: '2' },
      { name: 'v2', label: 'Velocidad 2 (v₂)', unit: 'm/s', example: '0' }
    ],
    output: { name: 'vf', label: 'Velocidad final', unit: 'm/s' }
  }
];

export default calculators;
