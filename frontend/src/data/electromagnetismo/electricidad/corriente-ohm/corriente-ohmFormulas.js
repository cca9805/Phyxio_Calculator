export const formulas = [
  {
    id: 'corriente_definicion',
    title: 'Definición de Corriente',
    formula: 'I = ΔQ / Δt',
    description: 'La corriente es el flujo de carga eléctrica por unidad de tiempo.',
    variables: [
      { symbol: 'I', name: 'Corriente', unit: 'A' },
      { symbol: 'ΔQ', name: 'Carga', unit: 'C' },
      { symbol: 'Δt', name: 'Tiempo', unit: 's' }
    ]
  },
  {
    id: 'ley_ohm',
    title: 'Ley de Ohm',
    formula: 'V = I * R',
    description: 'Relaciona voltaje, corriente y resistencia en un conductor óhmico.',
    variables: [
      { symbol: 'V', name: 'Voltaje', unit: 'V' },
      { symbol: 'I', name: 'Corriente', unit: 'A' },
      { symbol: 'R', name: 'Resistencia', unit: 'Ω' }
    ]
  },
  {
    id: 'resistencia_geometria',
    title: 'Resistencia por Geometría',
    formula: 'R = ρ * L / A',
    description: 'Calcula la resistencia de un material según sus dimensiones y resistividad.',
    variables: [
      { symbol: 'R', name: 'Resistencia', unit: 'Ω' },
      { symbol: 'ρ', name: 'Resistividad', unit: 'Ω·m' },
      { symbol: 'L', name: 'Longitud', unit: 'm' },
      { symbol: 'A', name: 'Área de sección transversal', unit: 'm²' }
    ]
  },
  {
    id: 'potencia_electrica',
    title: 'Potencia Eléctrica (Ley de Joule)',
    formula: 'P = V * I = I^2 * R = V^2 / R',
    description: 'Potencia disipada o consumida en un componente eléctrico.',
    variables: [
      { symbol: 'P', name: 'Potencia', unit: 'W' },
      { symbol: 'V', name: 'Voltaje', unit: 'V' },
      { symbol: 'I', name: 'Corriente', unit: 'A' },
      { symbol: 'R', name: 'Resistencia', unit: 'Ω' }
    ]
  },
  {
    id: 'ley_ohm_vectorial',
    title: 'Ley de Ohm (Vectorial)',
    formula: 'J = σ * E',
    description: 'Relaciona la densidad de corriente, la conductividad y el campo eléctrico.',
    variables: [
      { symbol: 'J', name: 'Densidad de Corriente', unit: 'A/m²' },
      { symbol: 'σ', name: 'Conductividad', unit: '(Ω·m)⁻¹' },
      { symbol: 'E', name: 'Campo Eléctrico', unit: 'V/m' }
    ]
  },
  {
    id: 'densidad_corriente_microscopica',
    title: 'Densidad de Corriente (Microscópica)',
    formula: 'J = q * n * vd',
    description: 'Relaciona la densidad de corriente con las propiedades microscópicas del material.',
    variables: [
        { symbol: 'J', name: 'Densidad de Corriente', unit: 'A/m²' },
        { symbol: 'q', name: 'Carga del portador', unit: 'C' },
        { symbol: 'n', name: 'Densidad de portadores', unit: 'm⁻³' },
        { symbol: 'vd', name: 'Velocidad de deriva', unit: 'm/s' }
    ]
  }
];