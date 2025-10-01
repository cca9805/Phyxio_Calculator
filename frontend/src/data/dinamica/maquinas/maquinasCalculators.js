// filepath: src/data/dinamica/${subId}/${subId}Calculators.js
export const calculators = [
  {
    id: 'ventaja-mecanica',
    title: 'Calculadora de ventaja mecánica',
    expr: 'VM = F_resistencia / F_esfuerzo',
    latex: 'VM = \\frac{F_{resistencia}}{F_{esfuerzo}}',
    vars: [
      { name: 'F_resistencia', label: 'Fuerza de resistencia (N)', unit: 'N', example: '100' },
      { name: 'F_esfuerzo', label: 'Fuerza de esfuerzo (N)', unit: 'N', example: '25' }
    ],
    output: { name: 'VM', label: 'Ventaja mecánica', unit: '' }
  },
  {
    id: 'eficiencia',
    title: 'Calculadora de eficiencia',
    expr: 'Eficiencia = (Trabajo_util / Trabajo_suministrado) * 100',
    latex: '\\text{Eficiencia} = \\frac{\\text{Trabajo útil}}{\\text{Trabajo suministrado}} \\times 100\\%',
    vars: [
      { name: 'Trabajo_util', label: 'Trabajo útil (J)', unit: 'J', example: '200' },
      { name: 'Trabajo_suministrado', label: 'Trabajo suministrado (J)', unit: 'J', example: '250' }
    ],
    output: { name: 'Eficiencia', label: 'Eficiencia', unit: '%' }
  },
  {
    id: 'palanca-equilibrio',
    title: 'Calculadora de equilibrio de palanca',
    expr: 'F_esfuerzo = F_resistencia * d_resistencia / d_esfuerzo',
    latex: 'F_{esfuerzo} = \\frac{F_{resistencia} \\cdot d_{resistencia}}{d_{esfuerzo}}',
    vars: [
      { name: 'F_resistencia', label: 'Fuerza de resistencia (N)', unit: 'N', example: '80' },
      { name: 'd_resistencia', label: 'Distancia de resistencia (m)', unit: 'm', example: '0.2' },
      { name: 'd_esfuerzo', label: 'Distancia de esfuerzo (m)', unit: 'm', example: '0.5' }
    ],
    output: { name: 'F_esfuerzo', label: 'Fuerza de esfuerzo', unit: 'N' }
  }
];

export default calculators;
