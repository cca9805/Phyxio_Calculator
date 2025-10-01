const calculators = [
  {
    title: 'Alcance (R)',
    inputs: [
      { name: 'v0', label: 'v₀', unit: 'm/s', required: true, min: 0 },
      { name: 'angle', label: 'θ', unit: '°', required: true, min: 0, max: 90 }
    ],
    calculateFunction: (values) => {
      const angleRad = (values.angle * Math.PI) / 180
      return (values.v0 * values.v0 * Math.sin(2 * angleRad)) / 9.8
    },
    resultUnit: 'm',
    color: 'cyan'
  },
  {
    title: 'Altura máxima (h_max)',
    inputs: [
      { name: 'v0', label: 'v₀', unit: 'm/s', required: true, min: 0 },
      { name: 'angle', label: 'θ', unit: '°', required: true, min: 0, max: 90 }
    ],
    calculateFunction: (values) => {
      const angleRad = (values.angle * Math.PI) / 180
      return (values.v0 * values.v0 * Math.sin(angleRad) * Math.sin(angleRad)) / (2 * 9.8)
    },
    resultUnit: 'm',
    color: 'cyan'
  },
  {
    title: 'Tiempo de vuelo (T)',
    inputs: [
      { name: 'v0', label: 'v₀', unit: 'm/s', required: true, min: 0 },
      { name: 'angle', label: 'θ', unit: '°', required: true, min: 0, max: 90 }
    ],
    calculateFunction: (values) => {
      const angleRad = (values.angle * Math.PI) / 180
      return (2 * values.v0 * Math.sin(angleRad)) / 9.8
    },
    resultUnit: 's',
    color: 'cyan'
  },
  {
    title: 'Posición X (x(t))',
    inputs: [
      { name: 'v0', label: 'v₀', unit: 'm/s', required: true, min: 0 },
      { name: 'angle', label: 'θ', unit: '°', required: true, min: 0, max: 90 },
      { name: 'time', label: 't', unit: 's', required: true, min: 0 }
    ],
    calculateFunction: (values) => {
      const angleRad = (values.angle * Math.PI) / 180
      return values.v0 * Math.cos(angleRad) * values.time
    },
    resultUnit: 'm',
    color: 'cyan'
  }
]

export default calculators
