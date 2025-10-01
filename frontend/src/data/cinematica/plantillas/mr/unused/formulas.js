export default [
  {
    name: 'Velocidad Relativa (misma dirección)',
    expression: 'v_rel = v₁ - v₂',
    variables: [
      { symbol: 'v_rel', name: 'Velocidad relativa', unit: 'm/s' },
      { symbol: 'v₁', name: 'Velocidad 1', unit: 'm/s' },
      { symbol: 'v₂', name: 'Velocidad 2', unit: 'm/s' }
    ],
    description: 'Velocidad de un objeto vista desde otro en la misma dirección.'
  },
  {
    name: 'Tiempo de Encuentro',
    expression: 't = d / (v₁ + v₂)',
    variables: [
      { symbol: 't', name: 'Tiempo', unit: 's' },
      { symbol: 'd', name: 'Distancia inicial', unit: 'm' },
      { symbol: 'v₁', name: 'Velocidad 1', unit: 'm/s' },
      { symbol: 'v₂', name: 'Velocidad 2', unit: 'm/s' }
    ],
    description: 'Tiempo para que dos móviles que se aproximan se encuentren.'
  },
  {
    name: 'Velocidad Resultante (ángulo θ)',
    expression: 'v_R = √(v₁² + v₂² + 2 v₁ v₂ cos θ)',
    variables: [
      { symbol: 'v_R', name: 'Velocidad resultante', unit: 'm/s' },
      { symbol: 'v₁', name: 'Velocidad 1', unit: 'm/s' },
      { symbol: 'v₂', name: 'Velocidad 2', unit: 'm/s' },
      { symbol: 'θ', name: 'Ángulo', unit: '°' }
    ],
    description: 'Composición de velocidades con ángulo.'
  }
];
