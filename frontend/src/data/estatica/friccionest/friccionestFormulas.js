export const formulas = [
  {
    id: 'friccion-estatica-maxima',
    title: 'Fricción Estática Máxima',
    formula: 'f_{s,max} = \\mu_s \\cdot N',
    description: 'La máxima fuerza de fricción que puede existir entre dos superficies antes de que comience el movimiento.',
    variables: [
      { symbol: 'f_{s,max}', name: 'Fricción estática máxima', unit: 'N' },
      { symbol: '\\mu_s', name: 'Coeficiente de fricción estática', unit: '' },
      { symbol: 'N', name: 'Fuerza normal', unit: 'N' }
    ]
  },
  {
    id: 'friccion-cinetica-formula',
    title: 'Fricción Cinética',
    formula: 'f_k = \\mu_k \\cdot N',
    description: 'La fuerza de fricción que actúa sobre un objeto una vez que está en movimiento.',
    variables: [
      { symbol: 'f_k', name: 'Fricción cinética', unit: 'N' },
      { symbol: '\\mu_k', name: 'Coeficiente de fricción cinética', unit: '' },
      { symbol: 'N', name: 'Fuerza normal', unit: 'N' }
    ]
  },
  {
    id: 'angulo-friccion-formula',
    title: 'Ángulo de Fricción Estática',
    formula: '\\tan(\\phi_s) = \\mu_s',
    description: 'El ángulo máximo de inclinación de un plano antes de que un objeto comience a deslizar.',
    variables: [
      { symbol: '\\phi_s', name: 'Ángulo de fricción estática', unit: '°' },
      { symbol: '\\mu_s', name: 'Coeficiente de fricción estática', unit: '' }
    ]
  },
  {
    id: 'condicion-equilibrio-friccion',
    title: 'Condición de Equilibrio con Fricción',
    formula: 'f_s \\leq f_{s,max}',
    description: 'Para que un cuerpo no deslice, la fuerza de fricción requerida debe ser menor o igual a la fricción estática máxima.',
    variables: [
      { symbol: 'f_s', name: 'Fuerza de fricción requerida', unit: 'N' },
      { symbol: 'f_{s,max}', name: 'Fricción estática máxima', unit: 'N' }
    ]
  }
];

export default formulas;
