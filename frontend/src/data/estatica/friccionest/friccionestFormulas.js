export const formulas = [
  {
    id: 'friccion-estatica-maxima',
    title: 'Fricción estática máxima',
    formula: 'F_{fe,max} = \\mu_e \\cdot N',
    latex: 'F_{fe,max} = \\mu_e \\cdot N',
    description: 'La máxima fuerza de fricción antes de que el objeto comience a moverse.',
    variables: [
      { symbol: 'F_{fe,max}', name: 'Fricción estática máxima', unit: 'N' },
      { symbol: '\\mu_e', name: 'Coeficiente de fricción estática', unit: '' },
      { symbol: 'N', name: 'Fuerza normal', unit: 'N' }
    ]
  },
  {
    id: 'condicion-equilibrio-friccion',
    title: 'Condición de equilibrio con fricción',
    formula: 'F_{aplicada} \\leq F_{fe,max}',
    latex: 'F_{aplicada} \\leq F_{fe,max}',
    description: 'Para que el cuerpo no deslice, la fuerza aplicada debe ser menor o igual a la fricción estática máxima.',
    variables: [
      { symbol: 'F_{aplicada}', name: 'Fuerza aplicada', unit: 'N' },
      { symbol: 'F_{fe,max}', name: 'Fricción estática máxima', unit: 'N' }
    ]
  }
];

export default formulas;
