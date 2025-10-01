export default [
  {
    nombre: "Posición Horizontal",
    expresion: "x(t) = v₀x t",
    variables: [
      { simbolo: "x", nombre: "Posición Horizontal", unidad: "m" },
      { simbolo: "v₀x", nombre: "Velocidad Inicial Horizontal", unidad: "m/s" },
      { simbolo: "t", nombre: "Tiempo", unidad: "s" }
    ],
    descripcion: "Posición horizontal en función del tiempo"
  },
  {
    nombre: "Posición Vertical",
    expresion: "y(t) = y₀ + v₀y t - ½gt²",
    variables: [
      { simbolo: "y", nombre: "Posición Vertical", unidad: "m" },
      { simbolo: "y₀", nombre: "Posición Inicial Vertical", unidad: "m" },
      { simbolo: "v₀y", nombre: "Velocidad Inicial Vertical", unidad: "m/s" },
      { simbolo: "t", nombre: "Tiempo", unidad: "s" },
      { simbolo: "g", nombre: "Gravedad", unidad: "m/s²" }
    ],
    descripcion: "Posición vertical en función del tiempo"
  }
];
