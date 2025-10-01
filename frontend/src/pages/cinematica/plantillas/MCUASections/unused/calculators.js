const calculators = [
  {
    title: 'Velocidad angular final',
    description: 'ω = ω₀ + α·t',
    inputs: [
      { name: 'w0', label: 'ω₀ (rad/s)', type: 'number', placeholder: '0' },
      { name: 'alpha', label: 'α (rad/s²)', type: 'number', placeholder: '2' },
      { name: 't', label: 't (s)', type: 'number', placeholder: '5' },
    ],
    calculateFunction: (values) => {
      const w0 = parseFloat(values.w0)
      const a = parseFloat(values.alpha)
      const t = parseFloat(values.t)
      if (!isFinite(w0) || !isFinite(a) || !isFinite(t)) return '—'
      return (w0 + a * t).toFixed(4)
    },
    resultUnit: 'rad/s',
  },
  {
    title: 'Ángulo recorrido',
    description: 'θ = ω₀·t + ½·α·t²',
    inputs: [
      { name: 'w0', label: 'ω₀ (rad/s)', type: 'number', placeholder: '3' },
      { name: 'alpha', label: 'α (rad/s²)', type: 'number', placeholder: '1.5' },
      { name: 't', label: 't (s)', type: 'number', placeholder: '4' },
    ],
    calculateFunction: (values) => {
      const w0 = parseFloat(values.w0)
      const a = parseFloat(values.alpha)
      const t = parseFloat(values.t)
      if (!isFinite(w0) || !isFinite(a) || !isFinite(t)) return '—'
      return (w0 * t + 0.5 * a * t * t).toFixed(4)
    },
    resultUnit: 'rad',
  },
  {
    title: 'Tiempo (de ω₀ a ω)',
    description: 't = (ω − ω₀)/α',
    inputs: [
      { name: 'w0', label: 'ω₀ (rad/s)', type: 'number', placeholder: '20' },
      { name: 'w', label: 'ω (rad/s)', type: 'number', placeholder: '0' },
      { name: 'alpha', label: 'α (rad/s²)', type: 'number', placeholder: '-3' },
    ],
    calculateFunction: (values) => {
      const w0 = parseFloat(values.w0)
      const w = parseFloat(values.w)
      const a = parseFloat(values.alpha)
      if (!isFinite(w0) || !isFinite(w) || !isFinite(a) || a === 0) return '—'
      return ((w - w0) / a).toFixed(4)
    },
    resultUnit: 's',
  },
  {
    title: 'Aceleración angular',
    description: 'α = (ω² − ω₀²) / (2θ)',
    inputs: [
      { name: 'w0', label: 'ω₀ (rad/s)', type: 'number', placeholder: '8' },
      { name: 'w', label: 'ω (rad/s)', type: 'number', placeholder: '2' },
      { name: 'theta', label: 'θ (rad)', type: 'number', placeholder: '24' },
    ],
    calculateFunction: (values) => {
      const w0 = parseFloat(values.w0)
      const w = parseFloat(values.w)
      const th = parseFloat(values.theta)
      if (!isFinite(w0) || !isFinite(w) || !isFinite(th) || th === 0) return '—'
      return (((w * w) - (w0 * w0)) / (2 * th)).toFixed(4)
    },
    resultUnit: 'rad/s²',
  },
]

export default calculators
