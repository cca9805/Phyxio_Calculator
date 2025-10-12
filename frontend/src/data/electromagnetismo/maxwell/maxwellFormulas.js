export const formulas = [
    {
      id: 'ley-gauss-electrico',
      title: 'Ley de Gauss para el campo eléctrico',
      formula: '∮ E ⋅ dA = Q_enc / ε₀',
      description: 'El flujo eléctrico a través de una superficie cerrada es proporcional a la carga encerrada.',
      variables: [
        { symbol: 'E', name: 'Campo eléctrico', unit: 'N/C' },
        { symbol: 'A', name: 'Vector de área', unit: 'm²' },
        { symbol: 'Q_enc', name: 'Carga encerrada', unit: 'C' },
        { symbol: 'ε₀', name: 'Permitividad del vacío', unit: 'F/m' }
      ]
    },
    {
      id: 'ley-gauss-magnetico',
      title: 'Ley de Gauss para el campo magnético',
      formula: '∮ B ⋅ dA = 0',
      description: 'No existen monopolos magnéticos; las líneas de campo magnético son siempre cerradas.',
      variables: [
        { symbol: 'B', name: 'Campo magnético', unit: 'T' },
        { symbol: 'A', name: 'Vector de área', unit: 'm²' }
      ]
    },
    {
      id: 'ley-faraday-lenz',
      title: 'Ley de Faraday-Lenz',
      formula: '∮ E ⋅ dl = -dΦ_B/dt',
      description: 'Un campo magnético variable en el tiempo induce un campo eléctrico.',
      variables: [
        { symbol: 'E', name: 'Campo eléctrico', unit: 'N/C' },
        { symbol: 'l', name: 'Elemento de longitud', unit: 'm' },
        { symbol: 'Φ_B', name: 'Flujo magnético', unit: 'Wb' },
        { symbol: 't', name: 'Tiempo', unit: 's' }
      ]
    },
    {
      id: 'ley-ampere-maxwell',
      title: 'Ley de Ampère-Maxwell',
      formula: '∮ B ⋅ dl = μ₀ * (I_enc + ε₀ * dΦ_E/dt)',
      description: 'La circulación de un campo magnético en un bucle cerrado es proporcional a la corriente eléctrica y al cambio en el flujo eléctrico.',
      variables: [
        { symbol: 'B', name: 'Campo magnético', unit: 'T' },
        { symbol: 'l', name: 'Elemento de longitud', unit: 'm' },
        { symbol: 'μ₀', name: 'Permeabilidad del vacío', unit: 'H/m' },
        { symbol: 'I_enc', name: 'Corriente encerrada', unit: 'A' },
        { symbol: 'ε₀', name: 'Permitividad del vacío', unit: 'F/m' },
        { symbol: 'Φ_E', name: 'Flujo eléctrico', unit: 'N·m²/C' },
        { symbol: 't', name: 'Tiempo', unit: 's' }
      ]
    }
  ];