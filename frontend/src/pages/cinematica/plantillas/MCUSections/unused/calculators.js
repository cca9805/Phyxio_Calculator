const calculators = [
  {
    title: 'Calculadora de Velocidad Angular',
    description: 'ω = θ / t',
    inputs: [
      { name: 'angle', label: 'Ángulo', unit: 'rad', type: 'number', required: true, min: 0.0001 },
      { name: 'time', label: 'Tiempo', unit: 's', type: 'number', required: true, min: 0.0001 },
    ],
    calculateFunction: (values) => {
      const th = parseFloat(values.angle)
      const t = parseFloat(values.time)
      if (!isFinite(th) || !isFinite(t) || t === 0) return '—'
      return (th / t).toFixed(4)
    },
    resultUnit: 'rad/s',
  },
  {
    title: 'Calculadora de Velocidad Tangencial',
    description: 'v = r · ω',
    inputs: [
      { name: 'radius', label: 'Radio', unit: 'm', type: 'number', required: true, min: 0.0001 },
      { name: 'angularVelocity', label: 'Velocidad Angular', unit: 'rad/s', type: 'number', required: true, min: 0 },
    ],
    calculateFunction: (values) => {
      const r = parseFloat(values.radius)
      const w = parseFloat(values.angularVelocity)
      if (!isFinite(r) || !isFinite(w)) return '—'
      return (r * w).toFixed(4)
    },
    resultUnit: 'm/s',
  },
  {
    title: 'Calculadora de Período',
    description: 'T = 2π / ω',
    inputs: [
      { name: 'angularVelocity', label: 'Velocidad Angular', unit: 'rad/s', type: 'number', required: true, min: 0.0001 },
    ],
    calculateFunction: (values) => {
      const w = parseFloat(values.angularVelocity)
      if (!isFinite(w) || w === 0) return '—'
      return ((2 * Math.PI) / w).toFixed(4)
    },
    resultUnit: 's',
  },
  {
    title: 'Calculadora de Frecuencia',
    description: 'f = 1 / T',
    inputs: [
      { name: 'period', label: 'Período', unit: 's', type: 'number', required: true, min: 0.0001 },
    ],
    calculateFunction: (values) => {
      const T = parseFloat(values.period)
      if (!isFinite(T) || T === 0) return '—'
      return (1 / T).toFixed(4)
    },
    resultUnit: 'Hz',
  },
]

export default calculators
