
export const formulas = [
  {
    "id": "momento-de-fuerza-formula",
    "title": "Momento de una Fuerza (Torque)",
    "formula": "M = F \\cdot r \\cdot \\sin(\\theta)",
    "description": "Calcula el momento (torque) generado por una fuerza, considerando la distancia al punto de giro y el ángulo de aplicación.",
    "variables": [
      { "symbol": "M", "label": "Momento o Torque", "unit": "N·m" },
      { "symbol": "F", "label": "Magnitud de la fuerza", "unit": "N" },
      { "symbol": "r", "label": "Distancia al punto de giro (brazo)", "unit": "m" },
      { "symbol": "\\theta", "label": "Ángulo entre la fuerza y el brazo", "unit": "°" }
    ]
  },
  {
    "id": "momento-neto-formula",
    "title": "Suma de Momentos (Momento Neto)",
    "formula": "M_{neto} = \\sum M_i",
    "description": "La segunda condición de equilibrio establece que el momento neto sobre un objeto debe ser cero para que no haya rotación. Los momentos antihorarios son positivos y los horarios negativos.",
    "variables": [
      { "symbol": "M_{neto}", "label": "Momento neto resultante", "unit": "N·m" },
      { "symbol": "M_i", "label": "Momento individual i", "unit": "N·m" }
    ]
  },
  {
    "id": "teorema-varignon-formula",
    "title": "Momento por Componentes (Varignon)",
    "formula": "M_O = (F_y \\cdot x) - (F_x \\cdot y)",
    "description": "Calcula el momento de una fuerza respecto al origen (O) usando sus componentes cartesianas (Fx, Fy) aplicadas en un punto (x, y).",
    "variables": [
      { "symbol": "M_O", "label": "Momento respecto al origen", "unit": "N·m" },
      { "symbol": "F_x", "label": "Componente x de la fuerza", "unit": "N" },
      { "symbol": "F_y", "label": "Componente y de la fuerza", "unit": "N" },
      { "symbol": "x", "label": "Coordenada x del punto de aplicación", "unit": "m" },
      { "symbol": "y", "label": "Coordenada y del punto de aplicación", "unit": "m" }
    ]
  }
];
