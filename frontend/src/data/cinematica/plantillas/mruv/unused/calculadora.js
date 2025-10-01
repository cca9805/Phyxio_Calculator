export default [
  {
    titulo: "Calculadora de Velocidad Final",
    inputs: [
      { nombre: 'velocidadInicial', etiqueta: 'Velocidad Inicial', unidad: 'm/s', requerido: true, min: 0 },
      { nombre: 'aceleracion', etiqueta: 'Aceleración', unidad: 'm/s²', requerido: true, min: 0 },
      { nombre: 'tiempo', etiqueta: 'Tiempo', unidad: 's', requerido: true, min: 0 }
    ],
    calcular: (valores) => valores.velocidadInicial + valores.aceleracion * valores.tiempo,
    unidadResultado: 'm/s',
  }
];
