export const calculators = [
  {
    id: 'friccion-estatica-maxima',
    title: 'Calculadora de fricción estática máxima',
    expr: 'F_fe_max = mu_e * N',
    latex: 'F_{fe,max} = \\mu_e \\cdot N',
    vars: [
      { name: 'mu_e', label: 'Coeficiente de fricción estática (μₑ)', unit: '', example: '0.3' },
      { name: 'N', label: 'Fuerza normal (N)', unit: 'N', example: '78.4' }
    ],
    output: { name: 'F_fe_max', label: 'Fricción estática máxima', unit: 'N' }
  },
  {
    id: 'condicion-equilibrio-friccion',
    title: 'Calculadora de condición de equilibrio con fricción',
    expr: 'equilibrio = F_aplicada <= F_fe_max',
    latex: 'F_{aplicada} \\leq F_{fe,max}',
    vars: [
      { name: 'F_aplicada', label: 'Fuerza aplicada (N)', unit: 'N', example: '20' },
      { name: 'F_fe_max', label: 'Fricción estática máxima (N)', unit: 'N', example: '23.52' }
    ],
    output: { name: 'equilibrio', label: '¿Permanece en equilibrio?', unit: '' }
  }
];

export default calculators;
