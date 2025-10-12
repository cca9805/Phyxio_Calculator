export const formulas = [
  {
    id: 'campo_definicion',
    title: 'Intensidad de Campo Eléctrico',
    formula: 'E = F / q',
    description: 'Fuerza por unidad de carga experimentada por una carga de prueba.',
    variables: [
      { symbol: 'E', label: 'Campo Eléctrico', unit: 'N/C' },
      { symbol: 'F', label: 'Fuerza electrostática', unit: 'N' },
      { symbol: 'q', label: 'Carga de prueba', unit: 'C' }
    ]
  },
  {
    id: 'campo_puntual_vectorial',
    title: 'Campo de Carga Puntual (Vectorial)',
    formula: 'E = k * q₁ * (r₂ - r₁) / |r₂ - r₁|^3',
    description: 'Campo vectorial creado por una única carga q₁.',
    variables: [
      { symbol: 'E', label: 'Campo Eléctrico', unit: 'N/C' },
      { symbol: 'k', label: 'Constante de Coulomb', unit: 'N·m²/C²' },
      { symbol: 'q₁', label: 'Carga fuente', unit: 'C' }
    ]
  },
  {
    id: 'superposicion_campos',
    title: 'Principio de Superposición de Campos',
    formula: 'E_neto = Σ E_i',
    description: 'El campo eléctrico total en un punto es la suma vectorial de los campos creados por cada carga individual.',
    variables: [
        { symbol: 'E_neto', name: 'Campo eléctrico neto', unit: 'N/C' },
        { symbol: 'E_i', name: 'Campo de la carga i', unit: 'N/C' }
    ]
  },
  {
    id: 'ley_gauss',
    title: 'Ley de Gauss',
    formula: 'Φ = Q_interior / ε₀',
    description: 'Relaciona el flujo eléctrico neto a través de una superficie cerrada con la carga interior.',
    variables: [
      { symbol: 'Φ', label: 'Flujo Eléctrico', unit: 'N·m²/C' },
      { symbol: 'Q_int', label: 'Carga encerrada', unit: 'C' },
      { symbol: 'ε₀', label: 'Permitividad del vacío', unit: 'C²/(N·m²)' }
    ]
  },
   {
    id: 'aceleracion_carga',
    title: 'Aceleración de una Partícula Cargada',
    formula: 'a = q * E / m',
    description: 'Aceleración de una partícula de masa m y carga q en un campo eléctrico E.',
    variables: [
      { symbol: 'a', label: 'Aceleración', unit: 'm/s²' },
      { symbol: 'E', label: 'Campo Eléctrico', unit: 'N/C' },
      { symbol: 'm', label: 'Masa', unit: 'Kg' }
    ]
  },
  {
    id: 'campo_hilo_infinito',
    title: 'Campo de un Hilo Recto Infinito',
    formula: 'E = λ / (2 * π * ε₀ * r)',
    description: 'Campo eléctrico generado por un hilo recto e infinito con densidad de carga lineal uniforme.',
    variables: [
      { symbol: 'E', label: 'Campo Eléctrico', unit: 'N/C' },
      { symbol: 'λ', label: 'Densidad de Carga Lineal', unit: 'C/m' },
      { symbol: 'r', label: 'Distancia al Hilo', unit: 'm' },
      { symbol: 'ε₀', label: 'Permitividad del vacío', unit: 'C²/(N·m²)' }
    ]
  }
];