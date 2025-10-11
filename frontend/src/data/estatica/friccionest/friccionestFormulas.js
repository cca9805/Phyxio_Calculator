export const formulas = [
  {
    id: 'friccion_estatica_maxima',
    title: 'Fricción Estática Máxima',
    formula: 'fs_max = μs * N',
    description: 'Calcula la fuerza máxima de fricción estática que se debe superar para iniciar el movimiento de un objeto.',
    variables: [
      { symbol: 'fs_max', name: 'Fuerza de fricción estática máxima', unit: 'N' },
      { symbol: 'μs', name: 'Coeficiente de fricción estática', unit: 'adimensional' },
      { symbol: 'N', name: 'Fuerza normal', unit: 'N' }
    ]
  },
  {
    id: 'friccion_cinetica',
    title: 'Fricción Cinética',
    formula: 'fk = μk * N',
    description: 'Calcula la fuerza de fricción que actúa sobre un objeto mientras está en movimiento.',
    variables: [
      { symbol: 'fk', name: 'Fuerza de fricción cinética', unit: 'N' },
      { symbol: 'μk', name: 'Coeficiente de fricción cinética', unit: 'adimensional' },
      { symbol: 'N', name: 'Fuerza normal', unit: 'N' }
    ]
  },
  {
    id: 'fuerza_normal_plano_inclinado',
    title: 'Fuerza Normal (Plano Inclinado)',
    formula: 'N = W * cos(θ) = m * g * cos(θ)',
    description: 'Calcula la fuerza normal sobre un objeto en un plano inclinado sin otras fuerzas verticales.',
    variables: [
      { symbol: 'N', name: 'Fuerza normal', unit: 'N' },
      { symbol: 'm', name: 'Masa del objeto', unit: 'kg' },
      { symbol: 'g', name: 'Aceleración de la gravedad', unit: 'm/s²' },
      { symbol: 'θ', name: 'Ángulo de inclinación del plano', unit: 'grados' }
    ]
  }
];