export default [
  {
    titulo: "Calculadora de Frecuencia Angular",
    inputs: [
      { nombre: 'constanteResorte', etiqueta: 'Constante del resorte (k)', unidad: 'N/m', requerido: true, min: 0.0001 },
      { nombre: 'masa', etiqueta: 'Masa (m)', unidad: 'kg', requerido: true, min: 0.0001 }
    ],
    calcular: (valores) => Math.sqrt(valores.constanteResorte / valores.masa),
    unidadResultado: 'rad/s',
  },
  // Legacy calculadora fusionada
  {
    title: 'Calculadora de Período',
    description: 'T = 2π√(m/k)',
    inputs: [
      { name: 'mass', label: 'Masa', unit: 'kg', type: 'number', required: true, min: 0.0001 },
      { name: 'k', label: 'Constante Elástica', unit: 'N/m', type: 'number', required: true, min: 0.0001 },
    ],
    calculateFunction: (values) => {
      const m = parseFloat(values.mass)
      const k = parseFloat(values.k)
      if (!isFinite(m) || !isFinite(k) || k === 0) return '—'
      return (2 * Math.PI * Math.sqrt(m / k)).toFixed(4)
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
  {
    title: 'Calculadora de Frecuencia Angular',
    description: 'ω = √(k/m)',
    inputs: [
      { name: 'k', label: 'Constante Elástica', unit: 'N/m', type: 'number', required: true, min: 0.0001 },
      { name: 'mass', label: 'Masa', unit: 'kg', type: 'number', required: true, min: 0.0001 },
    ],
    calculateFunction: (values) => {
      const k = parseFloat(values.k)
      const m = parseFloat(values.mass)
      if (!isFinite(k) || !isFinite(m) || m === 0) return '—'
      return Math.sqrt(k / m).toFixed(4)
    },
    resultUnit: 'rad/s',
  },
  {
    title: 'Calculadora de Energía Total',
    description: 'E = ½kA²',
    inputs: [
      { name: 'k', label: 'Constante Elástica', unit: 'N/m', type: 'number', required: true, min: 0.0001 },
      { name: 'amplitude', label: 'Amplitud', unit: 'm', type: 'number', required: true, min: 0.0001 },
    ],
    calculateFunction: (values) => {
      const k = parseFloat(values.k)
      const A = parseFloat(values.amplitude)
      if (!isFinite(k) || !isFinite(A)) return '—'
      return (0.5 * k * A * A).toFixed(4)
    },
    resultUnit: 'J',
  }
];
