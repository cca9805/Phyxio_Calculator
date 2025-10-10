
export const calculators = [
  {
    id: "identificar-fuerzas-dcl",
    title: "Identificador de Fuerzas para DCL",
    formula: "ΣF = 0 y ΣM = 0",
    variables: [
      {
        symbol: "escenario",
        label: "Selecciona el escenario",
        type: "select",
        options: [
          { value: "caja-horizontal", label: "Caja sobre superficie horizontal" },
          { value: "caja-inclinado", label: "Caja en un plano inclinado" },
          { value: "viga-apoyada", label: "Viga simplemente apoyada con carga" },
          { value: "objeto-colgando", label: "Objeto colgando de dos cuerdas" },
        ],
        defaultValue: "caja-horizontal",
      },
    ],
    output: {
      symbol: "DCL",
      label: "Fuerzas a Considerar",
      type: "markdown",
    },
    resolve: (args) => {
      const { escenario } = args;
      let forces_list, explanation, title;

      switch (escenario) {
        case "caja-horizontal":
          title = "Caja sobre Superficie Horizontal";
          forces_list = [
            "**Peso (P o W):** Fuerza vertical hacia abajo.",
            "**Fuerza Normal (N):** Fuerza perpendicular a la superficie, hacia arriba.",
            "**Fuerza de Fricción (f):** Paralela a la superficie, oponiéndose al movimiento.",
            "**Fuerza Aplicada (F):** Fuerza externa que empuja o tira de la caja."
          ];
          break;
        case "caja-inclinado":
          title = "Caja en un Plano Inclinado";
          forces_list = [
            "**Peso (P o W):** Vertical hacia abajo (se descompone en ejes del plano).",
            "**Fuerza Normal (N):** Perpendicular a la superficie del plano.",
            "**Fuerza de Fricción (f):** Paralela a la superficie, oponiéndose al deslizamiento.",
          ];
          break;
        case "viga-apoyada":
          title = "Viga Simplemente Apoyada";
          forces_list = [
            "**Cargas Externas (P, w):** Fuerzas que actúan sobre la viga.",
            "**Reacción en Apoyo Fijo (R_A):** Una reacción horizontal (R_Ax) y una vertical (R_Ay).",
            "**Reacción en Apoyo Móvil (R_B):** Una única reacción perpendicular a la superficie de apoyo (R_By).",
          ];
          break;
        case "objeto-colgando":
           title = "Objeto Colgando de Cuerdas";
           forces_list = [
            "**Peso del Objeto (P o W):** Vertical hacia abajo.",
            "**Tensión 1 (T1):** Fuerza de tracción a lo largo del primer cable.",
            "**Tensión 2 (T2):** Fuerza de tracción a lo largo del segundo cable.",
          ];
          break;
        default:
          return { error: "Por favor, selecciona un escenario válido." };
      }
      
      const formatted_forces = forces_list.map(force => `- ${force}`).join('\n');
      const result = `### ${title}\n\n${formatted_forces}`;

      return {
        result,
        steps: [
            `Principio de Equilibrio: ΣF = 0 y ΣM = 0`,
            `Análisis del escenario: '${title}'`,
            `Conclusión: Las fuerzas clave a incluir en el DCL son las listadas en el resultado.`
        ],
      };
    },
  },
];
