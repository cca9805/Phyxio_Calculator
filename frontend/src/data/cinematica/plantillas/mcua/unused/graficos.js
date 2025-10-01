export default [
  {
    nombre: "Velocidad Angular Final",
    expresion: "ω = ω₀ + αt",
    variables: [
      { simbolo: "ω", nombre: "Velocidad Angular Final", unidad: "rad/s" },
      { simbolo: "ω₀", nombre: "Velocidad Angular Inicial", unidad: "rad/s" },
      { simbolo: "α", nombre: "Aceleración Angular", unidad: "rad/s²" },
      { simbolo: "t", nombre: "Tiempo", unidad: "s" }
    ],
    descripcion: "Velocidad angular final en MCUA"
  },
  {
    nombre: "Posición Angular",
    expresion: "θ = θ₀ + ω₀t + ½αt²",
    variables: [
      { simbolo: "θ", nombre: "Posición Angular Final", unidad: "rad" },
      { simbolo: "θ₀", nombre: "Posición Angular Inicial", unidad: "rad" },
      { simbolo: "ω₀", nombre: "Velocidad Angular Inicial", unidad: "rad/s" },
      { simbolo: "t", nombre: "Tiempo", unidad: "s" },
      { simbolo: "α", nombre: "Aceleración Angular", unidad: "rad/s²" }
    ],
    descripcion: "Posición angular final en MCUA"
  }
];
