const calculators = [
  {
    title: 'Velocidad relativa (misma/opuesta)',
    inputs: [
      { name: 'v1', label: 'v₁', unit: 'm/s', required: true, min: 0 },
      { name: 'v2', label: 'v₂', unit: 'm/s', required: true, min: 0 },
      { name: 'direction', label: 'Dirección', unit: 'misma/opuesta', required: true }
    ],
    calculateFunction: (values) => {
      if (String(values.direction).toLowerCase().startsWith('m')) return Math.abs(values.v1 - values.v2)
      return values.v1 + values.v2
    },
    resultUnit: 'm/s',
    color: 'teal'
  },
  {
    title: 'Tiempo de encuentro',
    inputs: [
      { name: 'distance', label: 'd', unit: 'm', required: true, min: 0 },
      { name: 'v1', label: 'v₁', unit: 'm/s', required: true, min: 0 },
      { name: 'v2', label: 'v₂', unit: 'm/s', required: true, min: 0 }
    ],
    calculateFunction: (values) => values.distance / (values.v1 + values.v2),
    resultUnit: 's',
    color: 'teal'
  },
  {
    title: 'Velocidad resultante (ángulo)',
    inputs: [
      { name: 'v1', label: 'v₁', unit: 'm/s', required: true, min: 0 },
      { name: 'v2', label: 'v₂', unit: 'm/s', required: true, min: 0 },
      { name: 'angle', label: 'θ', unit: '°', required: true, min: 0, max: 180 }
    ],
    calculateFunction: (values) => {
      const a = (values.angle * Math.PI) / 180
      return Math.sqrt(values.v1*values.v1 + values.v2*values.v2 + 2*values.v1*values.v2*Math.cos(a))
    },
    resultUnit: 'm/s',
    color: 'teal'
  }
]

export default calculators
