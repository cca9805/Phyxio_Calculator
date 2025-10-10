export const formulas = [
  {
    id: "reaccion-apoyo-b-viga-simple",
    title: "Reacción en Apoyo B (Rodillo)",
    formula: "R_B = (P * a) / L",
    description: "Calcula la reacción vertical en el apoyo B (generalmente un rodillo) de una viga simplemente apoyada con una carga puntual.",
    variables: [
      { symbol: "R_B", name: "Reacción en B", unit: "N" },
      { symbol: "P", name: "Carga puntual", unit: "N" },
      { symbol: "a", name: "Distancia de la carga al apoyo A", unit: "m" },
      { symbol: "L", name: "Longitud de la viga", unit: "m" }
    ]
  },
  {
    id: "reaccion-apoyo-a-viga-simple",
    title: "Reacción en Apoyo A (Pasador)",
    formula: "R_A = P - R_B",
    description: "Calcula la reacción vertical en el apoyo A (generalmente un pasador) usando la suma de fuerzas verticales, una vez conocida R_B.",
    variables: [
      { symbol: "R_A", name: "Reacción en A", unit: "N" },
      { symbol: "P", name: "Carga puntual total", unit: "N" },
      { symbol: "R_B", name: "Reacción en B", unit: "N" }
    ]
  }
];

export default formulas;
