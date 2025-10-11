export const formulas = [
  {
    id: 'centro_masa_particulas',
    title: 'Centro de Masa (Sistema de Partículas)',
    formula: 'R_cm = (Σ r_i * m_i) / Σ m_i',
    description: 'Calcula el vector de posición del centro de masa para un sistema de partículas discretas.',
    variables: [
      { symbol: 'R_cm', name: 'Vector de posición del centro de masa', unit: 'm' },
      { symbol: 'r_i', name: 'Vector de posición de la partícula i', unit: 'm' },
      { symbol: 'm_i', name: 'Masa de la partícula i', unit: 'kg' },
    ]
  },
  {
    id: 'centro_gravedad_particulas',
    title: 'Centro de Gravedad (Sistema de Partículas)',
    formula: 'R_cg = (Σ r_i * W_i) / Σ W_i',
    description: 'Calcula la posición del centro de gravedad, el punto de aplicación de la fuerza gravitacional neta.',
    variables: [
      { symbol: 'R_cg', name: 'Vector de posición del centro de gravedad', unit: 'm' },
      { symbol: 'r_i', name: 'Vector de posición de la partícula i', unit: 'm' },
      { symbol: 'W_i', name: 'Peso de la partícula i', unit: 'N' },
    ]
  },
  {
    id: 'centroide_linea_compuesta',
    title: 'Centroide de Líneas Compuestas',
    formula: 'X_c = Σ(x_i*L_i)/Σ(L_i), Y_c = Σ(y_i*L_i)/Σ(L_i)',
    description: 'Calcula el centroide de una figura compuesta por varias líneas o alambres.',
    variables: [
      { symbol: 'X_c, Y_c', name: 'Coordenadas del centroide', unit: 'm' },
      { symbol: 'x_i, y_i', name: 'Centroide de la línea i', unit: 'm' },
      { symbol: 'L_i', name: 'Longitud de la línea i', unit: 'm' }
    ]
  },
  {
    id: 'centroide_area_compuesta',
    title: 'Centroide de Áreas Compuestas',
    formula: 'X_c = Σ(x_i*A_i)/Σ(A_i), Y_c = Σ(y_i*A_i)/Σ(A_i)',
    description: 'Calcula el centroide de un área compuesta dividiéndola en formas simples.',
    variables: [
      { symbol: 'X_c, Y_c', name: 'Coordenadas del centroide', unit: 'm' },
      { symbol: 'x_i, y_i', name: 'Centroide del área i', unit: 'm' },
      { symbol: 'A_i', name: 'Área de la forma i', unit: 'm²' }
    ]
  },
  {
    id: 'centroide_volumen_compuesto',
    title: 'Centroide de Volúmenes Compuestos',
    formula: 'X_c = Σ(x_i*V_i)/Σ(V_i), Y_c = Σ(y_i*V_i)/Σ(V_i)',
    description: 'Calcula el centroide de un cuerpo compuesto por varios volúmenes.',
    variables: [
      { symbol: 'X_c, Y_c', name: 'Coordenadas del centroide', unit: 'm' },
      { symbol: 'x_i, y_i', name: 'Centroide del volumen i', unit: 'm' },
      { symbol: 'V_i', name: 'Volumen de la forma i', unit: 'm³' }
    ]
  },
  {
    id: 'centroide_linea_integral',
    title: 'Centroide de una Línea (Integral)',
    formula: 'X_c = (1/L) * ∫x dL',
    description: 'Define la coordenada del centroide de una línea mediante integración.',
    variables: [
      { symbol: 'X_c', name: 'Coordenada X del centroide', unit: 'm' },
      { symbol: 'L', name: 'Longitud total', unit: 'm' },
      { symbol: 'x', name: 'Coordenada x de un elemento diferencial', unit: 'm' },
      { symbol: 'dL', name: 'Elemento diferencial de longitud', unit: 'm' }
    ]
  },
  {
    id: 'centroide_area_integral',
    title: 'Centroide de un Área (Integral)',
    formula: 'X_c = (1/A) * ∫x dA',
    description: 'Define la coordenada del centroide de un área mediante integración.',
    variables: [
      { symbol: 'X_c', name: 'Coordenada X del centroide', unit: 'm' },
      { symbol: 'A', name: 'Área total', unit: 'm²' },
      { symbol: 'x', name: 'Coordenada x de un elemento diferencial', unit: 'm' },
      { symbol: 'dA', name: 'Elemento diferencial de área', unit: 'm²' }
    ]
  },
  {
    id: 'centroide_volumen_integral',
    title: 'Centroide de un Volumen (Integral)',
    formula: 'X_c = (1/V) * ∫x dV',
    description: 'Define la coordenada del centroide de un volumen mediante integración.',
    variables: [
      { symbol: 'X_c', name: 'Coordenada X del centroide', unit: 'm' },
      { symbol: 'V', name: 'Volumen total', unit: 'm³' },
      { symbol: 'x', name: 'Coordenada x de un elemento diferencial', unit: 'm' },
      { symbol: 'dV', name: 'Elemento diferencial de volumen', unit: 'm³' }
    ]
  }
];