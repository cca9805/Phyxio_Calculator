// filepath: src/data/dinamica/${subId}/${subId}Calculators.js
export const calculators = [
  {
    id: 'velocidad-angular',
    title: 'Calculadora de velocidad angular',
    expr: 'omega = dtheta / dt',
    latex: '\\omega = \\frac{d\\theta}{dt}',
    vars: [
      { name: 'dtheta', label: 'Ángulo (Δθ, rad)', unit: 'rad', example: '3.14' },
      { name: 'dt', label: 'Tiempo (Δt, s)', unit: 's', example: '2' }
    ],
    output: { name: 'omega', label: 'Velocidad angular', unit: 'rad/s' }
  },
  {
    id: 'aceleracion-angular',
    title: 'Calculadora de aceleración angular',
    expr: 'alpha = domega / dt',
    latex: '\\alpha = \\frac{d\\omega}{dt}',
    vars: [
      { name: 'domega', label: 'Cambio de velocidad angular (Δω, rad/s)', unit: 'rad/s', example: '6.28' },
      { name: 'dt', label: 'Tiempo (Δt, s)', unit: 's', example: '2' }
    ],
    output: { name: 'alpha', label: 'Aceleración angular', unit: 'rad/s²' }
  },
  {
    id: 'momento-inercia',
    title: 'Calculadora de momento de inercia (discreto)',
    expr: 'I = m * r * r',
    latex: 'I = m r^2',
    vars: [
      { name: 'm', label: 'Masa (m)', unit: 'kg', example: '2' },
      { name: 'r', label: 'Distancia al eje (r)', unit: 'm', example: '0.5' }
    ],
    output: { name: 'I', label: 'Momento de inercia', unit: 'kg·m²' }
  },
  {
    id: 'torque-rotacional',
    title: 'Calculadora de torque rotacional',
    expr: 'tau = I * alpha',
    latex: '\\tau = I \\cdot \\alpha',
    vars: [
      { name: 'I', label: 'Momento de inercia (I)', unit: 'kg·m²', example: '1.5' },
      { name: 'alpha', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '4' }
    ],
    output: { name: 'tau', label: 'Torque', unit: 'N·m' }
  },
  {
    id: 'energia-cinetica-rotacional',
    title: 'Calculadora de energía cinética rotacional',
    expr: 'Erot = 0.5 * I * omega * omega',
    latex: 'E_{rot} = \\frac{1}{2} I \\omega^2',
    vars: [
      { name: 'I', label: 'Momento de inercia (I)', unit: 'kg·m²', example: '1.5' },
      { name: 'omega', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '3' }
    ],
    output: { name: 'Erot', label: 'Energía cinética rotacional', unit: 'J' }
  }
];

export default calculators;
