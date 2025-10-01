
export const calculators = [
  {
    id: 'friccion-estatica',
    title: 'Calculadora de fricción estática máxima',
    expr: 'F_fe_max = mu_e * N',
    latex: 'F_{fe,max} = \\mu_e \\cdot N',
    vars: [
      { name: 'mu_e', label: 'Coeficiente de fricción estática (μₑ)', unit: '', example: '0.4' },
      { name: 'N', label: 'Fuerza normal (N)', unit: 'N', example: '98' }
    ],
    output: { name: 'F_fe_max', label: 'Fricción estática máxima', unit: 'N' }
  },
  {
    id: 'friccion-cinetica',
    title: 'Calculadora de fricción cinética',
    expr: 'F_fc = mu_c * N',
    latex: 'F_{fc} = \\mu_c \\cdot N',
    vars: [
      { name: 'mu_c', label: 'Coeficiente de fricción cinética (μc)', unit: '', example: '0.2' },
      { name: 'N', label: 'Fuerza normal (N)', unit: 'N', example: '49' }
    ],
    output: { name: 'F_fc', label: 'Fricción cinética', unit: 'N' }
  },
  {
    id: 'normal',
    title: 'Calculadora de fuerza normal',
    expr: 'N = m * g',
    latex: 'N = m \\cdot g',
    vars: [
      { name: 'm', label: 'Masa (m)', unit: 'kg', example: '12' },
      { name: 'g', label: 'Aceleración gravitatoria (g)', unit: 'm/s²', example: '9.8' }
    ],
    output: { name: 'N', label: 'Fuerza normal', unit: 'N' }
  }
];

export default calculators;
