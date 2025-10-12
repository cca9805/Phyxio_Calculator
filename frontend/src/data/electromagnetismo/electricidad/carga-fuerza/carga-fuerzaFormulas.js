export const formulas = [
    {
      id: 'ley_coulomb_escalar',
      title: 'Ley de Coulomb (Magnitud)',
      formula: 'F = k * |q1 * q2| / r²',
      description: 'Magnitud de la fuerza entre dos cargas puntuales.',
      variables: [
        { symbol: 'F', name: 'Fuerza electrostática', unit: 'N' },
        { symbol: 'k', name: 'Constante de Coulomb', unit: 'N·m²/C²' },
        { symbol: 'q1, q2', name: 'Cargas puntuales', unit: 'C' },
        { symbol: 'r', name: 'Distancia', unit: 'm' }
      ]
    },
    {
      id: 'ley_coulomb_vectorial',
      title: 'Ley de Coulomb (Vectorial)',
      formula: 'F₁₂ = k * q₁ * q₂ * (r₂ - r₁) / |r₂ - r₁|³',
      description: 'Fuerza vectorial ejercida por la carga q₁ sobre q₂.',
      variables: [
        { symbol: 'F₁₂', name: 'Fuerza vectorial', unit: 'N' }
      ]
    },
    {
        id: 'fuerza_superposicion',
        title: 'Fuerza Neta por Superposición',
        formula: 'F_neta = Σ F_i',
        description: 'La fuerza neta es la suma vectorial de las fuerzas individuales.',
        variables: [
          { symbol: 'F_neta', name: 'Fuerza neta', unit: 'N' },
          { symbol: 'F_i', name: 'Fuerza de la carga i', unit: 'N' }
        ]
      },
      {
        id: 'cuantizacion_carga',
        title: 'Cuantización de la Carga',
        formula: 'Q = n * e',
        description: 'La carga eléctrica es un múltiplo entero de la carga elemental e.',
        variables: [
          { symbol: 'Q', name: 'Carga total', unit: 'C' },
          { symbol: 'n', name: 'Número de cargas elementales', unit: 'Entero' },
          { symbol: 'e', name: 'Carga elemental (1.602e-19 C)', unit: 'C' }
        ]
      },
    {
        id: 'densidad_lineal',
        title: 'Densidad de Carga Lineal (λ)',
        formula: 'λ = Q / L',
        description: 'Carga por unidad de longitud.',
        variables: [
          { symbol: 'λ', name: 'Densidad de carga lineal', unit: 'C/m' },
          { symbol: 'Q', name: 'Carga total', unit: 'C' },
          { symbol: 'L', name: 'Longitud', unit: 'm' }
        ]
      },
      {
        id: 'densidad_superficial',
        title: 'Densidad de Carga Superficial (σ)',
        formula: 'σ = Q / A',
        description: 'Carga por unidad de área.',
        variables: [
          { symbol: 'σ', name: 'Densidad de carga superficial', unit: 'C/m²' },
          { symbol: 'Q', name: 'Carga total', unit: 'C' },
          { symbol: 'A', name: 'Área', unit: 'm²' }
        ]
      },
      {
        id: 'densidad_volumetrica',
        title: 'Densidad de Carga Volumétrica (ρ)',
        formula: 'ρ = Q / V',
        description: 'Carga por unidad de volumen.',
        variables: [
          { symbol: 'ρ', name: 'Densidad de carga volumétrica', unit: 'C/m³' },
          { symbol: 'Q', name: 'Carga total', unit: 'C' },
          { symbol: 'V', name: 'Volumen', unit: 'm³' }
        ]
      }
  ];