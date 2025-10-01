// Formato correcto de ejemplos que espera el componente de ejemplos
const exampleItems = [
  {
    id: "mcu-example-1",  // Añadir ID único
    title: "Rueda de bicicleta",
    description: "Una rueda de bicicleta de 60 cm de diámetro gira a 120 rpm. Calcula la velocidad lineal de un punto en el borde de la rueda.",
    solution: [
      "Convertir rpm a rad/s: ω = 120 rpm = (120 · 2π)/60 = 4π rad/s",
      "Radio de la rueda: r = 30 cm = 0.3 m",
      "Aplicar la relación fundamental: v = ω·r",
      "Sustituir valores: v = 4π · 0.3",
      "Calcular: v = 1.2π ≈ 3.77 m/s"
    ],
    result: "3.77 m/s"
  },
  {
    id: "mcu-example-2",  // Añadir ID único
    title: "Satélite en órbita",
    description: "Un satélite orbita la Tierra a 200 km de altura siguiendo una órbita circular. Si completa una vuelta cada 90 minutos, ¿cuál es su velocidad angular?",
    solution: [
      "Convertir periodo a segundos: T = 90 min = 5400 s",
      "Calcular velocidad angular: ω = 2π/T",
      "Sustituir: ω = 2π/5400",
      "Calcular: ω ≈ 0.00116 rad/s"
    ],
    result: "0.00116 rad/s"
  },
  {
    id: "mcu-example-3",  // Añadir ID único
    title: "Aceleración centrípeta",
    description: "Un coche da una curva de 50 m de radio a una velocidad constante de 72 km/h. ¿Cuál es la aceleración centrípeta?",
    solution: [
      "Convertir velocidad a m/s: v = 72 km/h = 20 m/s",
      "Identificar variables: v = 20 m/s, r = 50 m",
      "Aplicar la fórmula: a_c = v²/r",
      "Sustituir: a_c = 20²/50",
      "Calcular: a_c = 400/50 = 8 m/s²"
    ],
    result: "8 m/s²"
  }
];

export default exampleItems;