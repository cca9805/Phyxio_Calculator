export const calculators = [
  {
    id: 'centro-masa-x',
    title: 'Calculadora de centro de masa (1D)',
    expr: 'x_cm = (m1 * x1 + m2 * x2) / (m1 + m2)',
    latex: 'x_{cm} = \\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}',
    vars: [
      { name: 'm1', label: 'Masa 1 (kg)', unit: 'kg', example: '2' },
      { name: 'x1', label: 'Posición 1 (m)', unit: 'm', example: '0' },
      { name: 'm2', label: 'Masa 2 (kg)', unit: 'kg', example: '3' },
      { name: 'x2', label: 'Posición 2 (m)', unit: 'm', example: '4' }
    ],
    output: { name: 'x_cm', label: 'Centro de masa (x)', unit: 'm' }
  },
  {
    id: 'centro-masa-2d',
    title: 'Calculadora de centro de masa (2D, 3 partículas)',
    expr: 'x_cm = (m1*x1 + m2*x2 + m3*x3)/(m1+m2+m3); y_cm = (m1*y1 + m2*y2 + m3*y3)/(m1+m2+m3)',
    latex: 'x_{cm} = \\frac{m_1 x_1 + m_2 x_2 + m_3 x_3}{m_1 + m_2 + m_3}, \\quad y_{cm} = \\frac{m_1 y_1 + m_2 y_2 + m_3 y_3}{m_1 + m_2 + m_3}',
    vars: [
      { name: 'm1', label: 'Masa 1 (kg)', unit: 'kg', example: '1' },
      { name: 'x1', label: 'Posición x1 (m)', unit: 'm', example: '0' },
      { name: 'y1', label: 'Posición y1 (m)', unit: 'm', example: '0' },
      { name: 'm2', label: 'Masa 2 (kg)', unit: 'kg', example: '2' },
      { name: 'x2', label: 'Posición x2 (m)', unit: 'm', example: '2' },
      { name: 'y2', label: 'Posición y2 (m)', unit: 'm', example: '0' },
      { name: 'm3', label: 'Masa 3 (kg)', unit: 'kg', example: '3' },
      { name: 'x3', label: 'Posición x3 (m)', unit: 'm', example: '0' },
      { name: 'y3', label: 'Posición y3 (m)', unit: 'm', example: '3' }
    ],
    output: { name: 'x_cm', label: 'Centro de masa (x)', unit: 'm' }
    // y_cm también se calcula, puedes mostrar ambos en tu componente
  }
];

export default calculators;
