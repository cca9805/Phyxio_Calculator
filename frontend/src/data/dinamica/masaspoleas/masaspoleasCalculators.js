// filepath: src/data/dinamica/${subId}/${subId}Calculators.js
export const calculators = [
  {
    id: 'aceleracion-masas-polea',
    title: 'Calculadora de aceleración en masas y polea',
    expr: 'a = (m1 * g - m2 * g) / (m1 + m2)',
    latex: 'a = \\frac{m_1 g - m_2 g}{m_1 + m_2}',
    vars: [
      { name: 'm1', label: 'Masa 1 (kg)', unit: 'kg', example: '3' },
      { name: 'm2', label: 'Masa 2 (kg)', unit: 'kg', example: '2' },
      { name: 'g', label: 'Aceleración gravitatoria (m/s²)', unit: 'm/s²', example: '9.8' }
    ],
    output: { name: 'a', label: 'Aceleración', unit: 'm/s²' }
  },
  {
    id: 'tension-cuerda',
    title: 'Calculadora de tensión en la cuerda',
    expr: 'T = m1 * (g - a)',
    latex: 'T = m_1 (g - a)',
    vars: [
      { name: 'm1', label: 'Masa 1 (kg)', unit: 'kg', example: '3' },
      { name: 'g', label: 'Aceleración gravitatoria (m/s²)', unit: 'm/s²', example: '9.8' },
      { name: 'a', label: 'Aceleración (m/s²)', unit: 'm/s²', example: '1.96' }
    ],
    output: { name: 'T', label: 'Tensión', unit: 'N' }
  }
];

export default calculators;
