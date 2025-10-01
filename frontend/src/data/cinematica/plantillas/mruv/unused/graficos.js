export default [
  {
    nombre: "Velocidad Final",
    expresion: "v = v₀ + at",
    variables: [
      { simbolo: "v", nombre: "Velocidad Final", unidad: "m/s" },
      { simbolo: "v₀", nombre: "Velocidad Inicial", unidad: "m/s" },
      { simbolo: "a", nombre: "Aceleración", unidad: "m/s²" },
      { simbolo: "t", nombre: "Tiempo", unidad: "s" }
    ],
    descripcion: "Velocidad final en MRUV"
  },
  {
    nombre: "Posición",
    expresion: "x = x₀ + v₀t + ½at²",
    variables: [
      { simbolo: "x", nombre: "Posición Final", unidad: "m" },
      { simbolo: "x₀", nombre: "Posición Inicial", unidad: "m" },
      { simbolo: "v₀", nombre: "Velocidad Inicial", unidad: "m/s" },
      { simbolo: "t", nombre: "Tiempo", unidad: "s" },
      { simbolo: "a", nombre: "Aceleración", unidad: "m/s²" }
    ],
    descripcion: "Posición final en MRUV"
  }
];
