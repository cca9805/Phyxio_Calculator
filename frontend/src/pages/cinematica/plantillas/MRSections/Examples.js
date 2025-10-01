const exampleItems = [
  {
    id: "mr-example-1",
    title: "Movimiento relativo en tren",
    description: "Un pasajero camina hacia adelante por el pasillo de un tren a 1.5 m/s. Si el tren se mueve a 20 m/s respecto a tierra, ¿cuál es la velocidad del pasajero respecto a tierra?",
    solution: [
      "Velocidad del pasajero respecto al tren: v_PT = 1.5 m/s",
      "Velocidad del tren respecto a tierra: v_TT = 20 m/s",
      "Aplicar principio de adición de velocidades: v_PT' = v_PT + v_TT",
      "Sustituir valores: v_PT' = 1.5 + 20",
      "Calcular: v_PT' = 21.5 m/s en dirección del tren"
    ],
    result: "21.5 m/s"
  },
  {
    id: "mr-example-2",
    title: "Cruce de barcos",
    description: "Un barco A se mueve hacia el este a 10 km/h, mientras un barco B se mueve hacia el norte a 15 km/h. ¿Cuál es la velocidad relativa entre ambos barcos?",
    solution: [
      "Velocidad del barco A: v_A = 10 km/h (este)",
      "Velocidad del barco B: v_B = 15 km/h (norte)",
      "Usar Pitágoras para calcular la magnitud: v_rel = √(v_A² + v_B²)",
      "Sustituir valores: v_rel = √(10² + 15²)",
      "Calcular: v_rel = √(325) ≈ 18.03 km/h"
    ],
    result: "18.03 km/h"
  },
  {
    id: "mr-example-3",
    title: "Avión con viento",
    description: "Un avión vuela a 500 km/h en aire en calma. Si hay un viento de 100 km/h en dirección perpendicular a la trayectoria del avión, ¿cuál es la velocidad resultante del avión respecto a tierra?",
    solution: [
      "Velocidad del avión respecto al aire: v_A = 500 km/h",
      "Velocidad del viento respecto a tierra: v_V = 100 km/h (perpendicular)",
      "Usar Pitágoras para calcular la magnitud: v_res = √(v_A² + v_V²)",
      "Sustituir valores: v_res = √(500² + 100²)",
      "Calcular: v_res = √(260000) ≈ 509.9 km/h"
    ],
    result: "509.9 km/h"
  }
];

export default exampleItems;
