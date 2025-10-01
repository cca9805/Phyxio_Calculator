export default [
  {
    nombre: "Posición",
    expresion: "x(t) = A cos(ωt + φ)",
    variables: [
      { simbolo: "x", nombre: "Posición", unidad: "m" },
      { simbolo: "A", nombre: "Amplitud", unidad: "m" },
      { simbolo: "ω", nombre: "Frecuencia Angular", unidad: "rad/s" },
      { simbolo: "t", nombre: "Tiempo", unidad: "s" },
      { simbolo: "φ", nombre: "Fase Inicial", unidad: "rad" }
    ],
    descripcion: "Posición en función del tiempo en MAS"
  }
];
