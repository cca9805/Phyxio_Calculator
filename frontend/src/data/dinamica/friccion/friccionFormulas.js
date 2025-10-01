
export const formulas = [
  {
    id: 'friccion-estatica',
    title: 'Fricción estática máxima',
    formula: 'F_{fe,max} = \\mu_e \\cdot N',
    latex: 'F_{fe,max} = \\mu_e \\cdot N',
    description: 'La máxima fuerza de fricción antes de que el objeto comience a moverse.',
    variables: [
      { symbol: 'F_{fe,max}', name: 'Fricción estática máxima', unit: 'N' },
      { symbol: '\\mu_e', name: 'Coeficiente de fricción estática', unit: '' },
      { symbol: 'N', name: 'Fuerza normal', unit: 'N' }
    ]
  },
  {
    id: 'friccion-cinetica',
    title: 'Fricción cinética',
    formula: 'F_{fc} = \\mu_c \\cdot N',
    latex: 'F_{fc} = \\mu_c \\cdot N',
    description: 'La fuerza de fricción cuando el objeto está en movimiento.',
    variables: [
      { symbol: 'F_{fc}', name: 'Fricción cinética', unit: 'N' },
      { symbol: '\\mu_c', name: 'Coeficiente de fricción cinética', unit: '' },
      { symbol: 'N', name: 'Fuerza normal', unit: 'N' }
    ]
  },
  {
    id: 'normal',
    title: 'Fuerza normal',
    formula: 'N = m \\cdot g',
    latex: 'N = m \\cdot g',
    description: 'La fuerza perpendicular a la superficie de contacto.',
    variables: [
      { symbol: 'N', name: 'Fuerza normal', unit: 'N' },
      { symbol: 'm', name: 'Masa', unit: 'kg' },
      { symbol: 'g', name: 'Aceleración gravitatoria', unit: 'm/s^2' }
    ]
  }
];

export default formulas;
