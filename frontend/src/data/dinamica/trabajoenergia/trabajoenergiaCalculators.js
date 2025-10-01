// filepath: src/data/dinamica/${subId}/${subId}Calculators.js
export const calculators = [
  {
    id: 'trabajo',
    title: 'Calculadora de Trabajo',
    expr: 'W = F \\cdot d \\cdot \\cos(\\theta)',
    latex: 'W = F \\cdot d \\cdot \\cos(\\theta)',
    vars: [
      { name: 'F', label: 'Fuerza (F)', unit: 'N', example: '20' },
      { name: 'd', label: 'Desplazamiento (d)', unit: 'm', example: '4' },
      { name: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '30' }
    ],
    output: { name: 'W', label: 'Trabajo', unit: 'J' }
  },
  {
    id: 'energia-cinetica',
    title: 'Calculadora de Energía Cinética',
    expr: 'E_k = 0.5 \\cdot m \\cdot v^2',
    latex: 'E_k = \\frac{1}{2} m v^2',
    vars: [
      { name: 'm', label: 'Masa (m)', unit: 'kg', example: '3' },
      { name: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '5' }
    ],
    output: { name: 'E_k', label: 'Energía cinética', unit: 'J' }
  },
  {
    id: 'energia-potencial-gravitatoria',
    title: 'Calculadora de Energía Potencial Gravitatoria',
    expr: 'E_p = m \\cdot g \\cdot h',
    latex: 'E_p = m \\cdot g \\cdot h',
    vars: [
      { name: 'm', label: 'Masa (m)', unit: 'kg', example: '2' },
      { name: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.8' },
      { name: 'h', label: 'Altura (h)', unit: 'm', example: '1.5' }
    ],
    output: { name: 'E_p', label: 'Energía potencial', unit: 'J' }
  },
  {
    id: 'energia-potencial-elastica',
    title: 'Calculadora de Energía Potencial Elástica',
    expr: 'E_{pe} = 0.5 \\cdot k \\cdot x^2',
    latex: 'E_{pe} = \\frac{1}{2} k x^2',
    vars: [
      { name: 'k', label: 'Constante del resorte (k)', unit: 'N/m', example: '200' },
      { name: 'x', label: 'Deformación (x)', unit: 'm', example: '0.1' }
    ],
    output: { name: 'E_{pe}', label: 'Energía potencial elástica', unit: 'J' }
  },
  {
    id: 'potencia',
    title: 'Calculadora de Potencia',
    expr: 'P = W / t',
    latex: 'P = \\frac{W}{t}',
    vars: [
      { name: 'W', label: 'Trabajo (W)', unit: 'J', example: '150' },
      { name: 't', label: 'Tiempo (t)', unit: 's', example: '10' }
    ],
    output: { name: 'P', label: 'Potencia', unit: 'W' }
  },
  {
    id: 'conservacion-energia',
    title: 'Calculadora de Conservación de la Energía Mecánica',
    expr: 'E_mec_final = E_mec_inicial + W_nc',
    latex: 'E_{mec, final} = E_{mec, inicial} + W_{nc}',
    vars: [
      { name: 'E_mec_inicial', label: 'Energía mecánica inicial', unit: 'J', example: '40' },
      { name: 'W_nc', label: 'Trabajo de fuerzas no conservativas', unit: 'J', example: '-5' }
    ],
    output: { name: 'E_mec_final', label: 'Energía mecánica final', unit: 'J' }
  }
];

export default calculators;
