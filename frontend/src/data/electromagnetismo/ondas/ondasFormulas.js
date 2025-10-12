export const formulas = [
    {
        id: "velocidad_luz_vacio",
        title: "Velocidad de la Luz en el Vacío",
        formula: "c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}",
        description: "Velocidad de la luz en el vacío, donde μ₀ es la permeabilidad del vacío y ε₀ es la permitividad del vacío.",
        variables: {
            "c": "Velocidad de la luz",
            "μ₀": "Permeabilidad del vacío",
            "ε₀": "Permitividad del vacío"
        }
    },
    {
        id: "relacion_amplitud_e_b",
        title: "Relación Amplitud Campo Eléctrico y Magnético",
        formula: "E = cB",
        description: "Relación entre la amplitud del campo eléctrico (E) y la amplitud del campo magnético (B) en una onda electromagnética en el vacío.",
        variables: {
            "E": "Amplitud del campo eléctrico",
            "c": "Velocidad de la luz",
            "B": "Amplitud del campo magnético"
        }
    },
    {
        id: "velocidad_luz_medio",
        title: "Velocidad de la Luz en un Medio",
        formula: "v = \\frac{c}{n}",
        description: "Velocidad de la luz (v) en un medio con un índice de refracción (n).",
        variables: {
            "v": "Velocidad en el medio",
            "c": "Velocidad de la luz en el vacío",
            "n": "Índice de refracción"
        }
    },
    {
        id: "vector_poynting",
        title: "Vector de Poynting",
        formula: "\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})",
        description: "El Vector de Poynting (S) representa la densidad de flujo de energía (energía por unidad de área y por unidad de tiempo) de una onda electromagnética.",
        variables: {
            "S": "Vector de Poynting",
            "μ₀": "Permeabilidad del vacío",
            "E": "Campo eléctrico",
            "B": "Campo magnético"
        }
    },
    {
        id: "relacion_onda_frecuencia",
        title: "Relación Fundamental de Onda",
        formula: "c = \\lambda f",
        description: "Relación fundamental entre la velocidad de la onda (c), la longitud de onda (λ) y la frecuencia (f).",
        variables: {
            "c": "Velocidad de la onda",
            "λ": "Longitud de onda",
            "f": "Frecuencia"
        }
    }
];
