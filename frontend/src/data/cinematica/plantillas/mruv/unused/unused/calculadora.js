export default [
  {
    titulo: "Calculadora de Velocidad Angular Final",
    inputs: [
      { nombre: 'velocidadAngularInicial', etiqueta: 'Velocidad Angular Inicial', unidad: 'rad/s', requerido: true, min: 0 },
      { nombre: 'aceleracionAngular', etiqueta: 'Aceleración Angular', unidad: 'rad/s²', requerido: true, min: 0 },
      { nombre: 'tiempo', etiqueta: 'Tiempo', unidad: 's', requerido: true, min: 0 }
    ],
    calcular: (valores) => valores.velocidadAngularInicial + valores.aceleracionAngular * valores.tiempo,
    unidadResultado: 'rad/s',
  },
  // Legacy calculadora fusionada
  {
    title: "Calculadora de Velocidad Angular Final",
    description: "ω = ω₀ + αt",
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
  }
];
