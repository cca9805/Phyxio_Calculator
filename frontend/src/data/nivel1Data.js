export const nivel1Data = {
  title: "Phyxio Calculator",
  intro: "La física general estudia los principios fundamentales que rigen el universo, desde el movimiento de los cuerpos hasta la estructura de la materia y la energía. Elige una rama para comenzar:",
  cards: [
    {
      title: "Física Clásica",
      description: "Estudia el movimiento, fuerzas, energía, ondas, fluidos y más.",
      onClick: () => window.location.href = '/clasica'
    },
    {
      title: "Física Moderna",
      description: "Explora la física cuántica, relatividad y descubrimientos recientes.",
      onClick: () => window.location.href = '/moderna'
    }
    
  ]
};
