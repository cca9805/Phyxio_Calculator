export default [
  {
    titulo: 'Caída con aceleración constante',
    descripcion: 'Un objeto parte del reposo y acelera a 2 m/s² durante 5 s. ¿Cuál es su velocidad final y desplazamiento?',
    solucion: [
      'v = v₀ + a t = 0 + 2×5 = 10 m/s',
      'x - x₀ = v₀ t + ½ a t² = 0 + 0.5×2×25 = 25 m'
    ],
    resultado: 'v = 10 m/s, Δx = 25 m'
  },
  {
    titulo: 'Frenado',
    descripcion: 'Un coche a 20 m/s frena con a = -5 m/s². ¿Tiempo hasta detenerse y distancia recorrida?',
    solucion: [
      'v = 0 = v₀ + a t → t = -v₀/a = -20/(-5) = 4 s',
      'Δx = v₀ t + ½ a t² = 20×4 + 0.5×(-5)×16 = 80 - 40 = 40 m'
    ],
    resultado: 't = 4 s, Δx = 40 m'
  },
  {
    titulo: "Auto acelerando",
    descripcion: "Un auto parte del reposo y acelera a 2 m/s² durante 5 segundos. ¿Cuál es su velocidad final?",
    solucion: [
      "Identificar que es MRUV: aceleración constante, trayectoria recta",
      "Aplicar la ecuación: v = v₀ + at",
      "v₀ = 0, a = 2 m/s², t = 5 s",
      "Sustituir valores: v = 0 + 2 × 5",
      "Calcular: v = 10 m/s"
    ],
    resultado: "10 m/s"
  },
  {
    titulo: "Caída libre",
    descripcion: "Una piedra cae desde el reposo y acelera a 9.8 m/s². ¿Qué velocidad tiene después de 3 segundos?",
    solucion: [
      "Identificar que es MRUV: aceleración constante",
      "Aplicar la ecuación: v = v₀ + at",
      "v₀ = 0, a = 9.8 m/s², t = 3 s",
      "Sustituir valores: v = 0 + 9.8 × 3",
      "Calcular: v = 29.4 m/s"
    ],
    resultado: "29.4 m/s"
  }
];
