export default [
  {
    titulo: "Calculadora de Alcance Máximo",
    inputs: [
      { nombre: 'velocidadInicial', etiqueta: 'Velocidad Inicial', unidad: 'm/s', requerido: true, min: 0.0001 },
      { nombre: 'angulo', etiqueta: 'Ángulo', unidad: '°', requerido: true, min: 0, max: 90 }
    ],
    calcular: (valores) => {
      const v0 = valores.velocidadInicial;
      const theta = valores.angulo * Math.PI / 180;
      const g = 9.8;
      const v0x = v0 * Math.cos(theta);
      const v0y = v0 * Math.sin(theta);
      const t = 2 * v0y / g;
      return (v0x * t).toFixed(2);
    },
    unidadResultado: 'm',
  },
  // Legacy calculadora fusionada
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
];
