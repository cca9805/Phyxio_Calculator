export const calculators = [
  {
    id: 'normal-caja',
    title: 'Calculadora de fuerza normal en DCL',
    expr: 'N = m * g',
    latex: 'N = m \\cdot g',
    vars: [
      { name: 'm', label: 'Masa de la caja (kg)', unit: 'kg', example: '5' },
      { name: 'g', label: 'Aceleración gravitatoria (m/s²)', unit: 'm/s²', example: '9.8' }
    ],
    output: { name: 'N', label: 'Fuerza normal', unit: 'N' }
  }
];

export default calculators;
