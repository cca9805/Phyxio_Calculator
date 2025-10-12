
import { formatNumber } from "../../../utils/formatNumber";

export const calculators = [
  {
    id: 'centro_masa_particulas',
    title: 'Centro de Masa (2 Partículas, 1D)',
    description: "Calcula el centro de masa para un sistema simple de dos partículas en una dimensión.",
    formula: "X_{cm} = \\frac{m_1x_1 + m_2x_2}{m_1 + m_2}",
    variables: [
      { symbol: 'm_1', label: 'Masa 1', unit: 'kg', example: '2' },
      { symbol: 'x_1', label: 'Posición 1', unit: 'm', example: '1' },
      { symbol: 'm_2', label: 'Masa 2', unit: 'kg', example: '3' },
      { symbol: 'x_2', label: 'Posición 2', unit: 'm', example: '5' },
    ],
    output: { symbol: 'X_{cm}', label: 'Posición del CM', unit: 'm' },
    resolve: (args) => {
      const m1 = Number(args['m_1']), x1 = Number(args['x_1']), m2 = Number(args['m_2']), x2 = Number(args['x_2']);
      if ([m1, x1, m2, x2].some(isNaN) || (m1 + m2 === 0)) return { error: 'Valores inválidos. La masa total no puede ser cero.' };
      const X_cm = (m1 * x1 + m2 * x2) / (m1 + m2);
      return { 
        result: { 'X_{cm}': formatNumber(X_cm) }, 
        steps: [`X_{cm} = \\frac{m_1x_1+m_2x_2}{m_1+m_2} = \\frac{${formatNumber(m1)} \\cdot ${formatNumber(x1)}+${formatNumber(m2)} \\cdot ${formatNumber(x2)}}{${formatNumber(m1)}+${formatNumber(m2)}} = ${formatNumber(X_cm)}\\text{ m}`] 
      };
    }
  },
  {
    id: 'centro_gravedad_particulas',
    title: 'Centro de Gravedad (2 Partículas, 1D)',
    description: "Calcula el centro de gravedad para un sistema de dos partículas en una dimensión.",
    formula: "X_{cg} = \\frac{W_1x_1 + W_2x_2}{W_1 + W_2}",
    variables: [
      { symbol: 'W_1', label: 'Peso 1', unit: 'N', example: '20' },
      { symbol: 'x_1', label: 'Posición 1', unit: 'm', example: '1' },
      { symbol: 'W_2', label: 'Peso 2', unit: 'N', example: '30' },
      { symbol: 'x_2', label: 'Posición 2', unit: 'm', example: '5' },
    ],
    output: { symbol: 'X_{cg}', label: 'Posición del CG', unit: 'm' },
    resolve: (args) => {
      const W1 = Number(args['W_1']), x1 = Number(args['x_1']), W2 = Number(args['W_2']), x2 = Number(args['x_2']);
      if ([W1, x1, W2, x2].some(isNaN) || (W1 + W2 === 0)) return { error: 'Valores inválidos. El peso total no puede ser cero.' };
      const X_cg = (W1 * x1 + W2 * x2) / (W1 + W2);
      return { 
        result: { 'X_{cg}': formatNumber(X_cg) }, 
        steps: [`X_{cg} = \\frac{W_1x_1+W_2x_2}{W_1+W_2} = \\frac{${formatNumber(W1)} \\cdot ${formatNumber(x1)}+${formatNumber(W2)} \\cdot ${formatNumber(x2)}}{${formatNumber(W1)}+${formatNumber(W2)}} = ${formatNumber(X_cg)}\\text{ m}`] 
      };
    }
  },
  {
    id: 'centroide_linea_compuesta',
    title: 'Centroide de Líneas Compuestas (2 Segmentos, 2D)',
    description: "Calcula el centroide para un cuerpo compuesto por múltiples segmentos de línea.",
    formula: "X_c = \\frac{\\Sigma L_i x_i}{\\Sigma L_i} \\quad Y_c = \\frac{\\Sigma L_i y_i}{\\Sigma L_i}",
    variables: [
      { symbol: 'L_1', label: 'Longitud L1', unit: 'm', example: '10' },
      { symbol: 'x_1', label: 'Centroide x1', unit: 'm', example: '5' },
      { symbol: 'y_1', label: 'Centroide y1', unit: 'm', example: '0' },
      { symbol: 'L_2', label: 'Longitud L2', unit: 'm', example: '8' },
      { symbol: 'x_2', label: 'Centroide x2', unit: 'm', example: '10' },
      { symbol: 'y_2', label: 'Centroide y2', unit: 'm', example: '4' },
    ],
    output: { symbol: 'X_c, Y_c', label: 'Coordenadas del Centroide', unit: 'm' },
    resolve: (args) => {
      const L1 = Number(args['L_1']), x1 = Number(args['x_1']), y1 = Number(args['y_1']), L2 = Number(args['L_2']), x2 = Number(args['x_2']), y2 = Number(args['y_2']);
      if ([L1, x1, y1, L2, x2, y2].some(isNaN) || L1 + L2 === 0) return { error: 'Valores inválidos. La longitud total no puede ser cero.' };
      const Xc = (L1*x1 + L2*x2) / (L1+L2);
      const Yc = (L1*y1 + L2*y2) / (L1+L2);
      return { 
        result: { 'X_c': formatNumber(Xc), 'Y_c': formatNumber(Yc) }, 
        steps: [
        `X_c = \\frac{L_1x_1+L_2x_2}{L_1+L_2} = \\frac{${formatNumber(L1)} \\cdot ${formatNumber(x1)}+${formatNumber(L2)} \\cdot ${formatNumber(x2)}}{${formatNumber(L1)}+${formatNumber(L2)}} = ${formatNumber(Xc)}\\text{ m}`,
        `Y_c = \\frac{L_1y_1+L_2y_2}{L_1+L_2} = \\frac{${formatNumber(L1)} \\cdot ${formatNumber(y1)}+${formatNumber(L2)} \\cdot ${formatNumber(y2)}}{${formatNumber(L1)}+${formatNumber(L2)}} = ${formatNumber(Yc)}\\text{ m}`
      ] };
    }
  },
  {
    id: 'centroide_area_compuesta',
    title: 'Centroide de Áreas Compuestas (2 Áreas, 2D)',
    description: "Para agujeros, ingrese un valor de área negativo.",
    formula: "X_c = \\frac{\\Sigma A_i x_i}{\\Sigma A_i} \\quad Y_c = \\frac{\\Sigma A_i y_i}{\\Sigma A_i}",
    variables: [
      { symbol: 'A_1', label: 'Área A1', unit: 'm²', example: '20' },
      { symbol: 'x_1', label: 'Centroide x1', unit: 'm', example: '2' },
      { symbol: 'y_1', label: 'Centroide y1', unit: 'm', example: '5' },
      { symbol: 'A_2', label: 'Área A2', unit: 'm²', example: '-5' },
      { symbol: 'x_2', label: 'Centroide x2', unit: 'm', example: '2.5' },
      { symbol: 'y_2', label: 'Centroide y2', unit: 'm', example: '5' },
    ],
    output: { symbol: 'X_c, Y_c', label: 'Coordenadas del Centroide', unit: 'm' },
    resolve: (args) => {
      const A1 = Number(args['A_1']), x1 = Number(args['x_1']), y1 = Number(args['y_1']), A2 = Number(args['A_2']), x2 = Number(args['x_2']), y2 = Number(args['y_2']);
      if ([A1, x1, y1, A2, x2, y2].some(isNaN) || A1 + A2 === 0) return { error: 'Valores inválidos. El área total no puede ser cero.' };
      const Xc = (A1*x1 + A2*x2) / (A1+A2);
      const Yc = (A1*y1 + A2*y2) / (A1+A2);
      return { 
        result: { 'X_c': formatNumber(Xc), 'Y_c': formatNumber(Yc) }, 
        steps: [
        `X_c = \\frac{A_1x_1+A_2x_2}{A_1+A_2} = \\frac{${formatNumber(A1)} \\cdot ${formatNumber(x1)}+${formatNumber(A2)} \\cdot ${formatNumber(x2)}}{${formatNumber(A1)}+${formatNumber(A2)}} = ${formatNumber(Xc)}\\text{ m}`,
        `Y_c = \\frac{A_1y_1+A_2y_2}{A_1+A_2} = \\frac{${formatNumber(A1)} \\cdot ${formatNumber(y1)}+${formatNumber(A2)} \\cdot ${formatNumber(y2)}}{${formatNumber(A1)}+${formatNumber(A2)}} = ${formatNumber(Yc)}\\text{ m}`
      ] };
    }
  },
  {
    id: 'centroide_volumen_compuesto',
    title: 'Centroide de Volúmenes Compuestos (2 Volúmenes, 2D)',
    description: "Para huecos, ingrese un valor de volumen negativo.",
    formula: "X_c = \\frac{\\Sigma V_i x_i}{\\Sigma V_i} \\quad Y_c = \\frac{\\Sigma V_i y_i}{\\Sigma V_i}",
    variables: [
      { symbol: 'V_1', label: 'Volumen V1', unit: 'm³', example: '10' },
      { symbol: 'x_1', label: 'Centroide x1', unit: 'm', example: '1' },
      { symbol: 'y_1', label: 'Centroide y1', unit: 'm', example: '2' },
      { symbol: 'V_2', label: 'Volumen V2', unit: 'm³', example: '5' },
      { symbol: 'x_2', label: 'Centroide x2', unit: 'm', example: '3' },
      { symbol: 'y_2', label: 'Centroide y2', unit: 'm', example: '4' },
    ],
    output: { symbol: 'X_c, Y_c', label: 'Coordenadas del Centroide', unit: 'm' },
    resolve: (args) => {
      const V1 = Number(args['V_1']), x1 = Number(args['x_1']), y1 = Number(args['y_1']), V2 = Number(args['V_2']), x2 = Number(args['x_2']), y2 = Number(args['y_2']);
      if ([V1, x1, y1, V2, x2, y2].some(isNaN) || V1 + V2 === 0) return { error: 'Valores inválidos. El volumen total no puede ser cero.' };
      const Xc = (V1*x1 + V2*x2) / (V1+V2);
      const Yc = (V1*y1 + V2*y2) / (V1+V2);
      return { 
        result: { 'X_c': formatNumber(Xc), 'Y_c': formatNumber(Yc) }, 
        steps: [
        `X_c = \\frac{V_1x_1+V_2x_2}{V_1+V_2} = \\frac{${formatNumber(V1)} \\cdot ${formatNumber(x1)}+${formatNumber(V2)} \\cdot ${formatNumber(x2)}}{${formatNumber(V1)}+${formatNumber(V2)}} = ${formatNumber(Xc)}\\text{ m}`,
        `Y_c = \\frac{V_1y_1+V_2y_2}{V_1+V_2} = \\frac{${formatNumber(V1)} \\cdot ${formatNumber(y1)}+${formatNumber(V2)} \\cdot ${formatNumber(y2)}}{${formatNumber(V1)}+${formatNumber(V2)}} = ${formatNumber(Yc)}\\text{ m}`
      ] };
    }
  },
  {
    id: 'centroide_linea_integral',
    title: 'Centroide de una Línea (Integral)',
    description: 'Calcula el centroide de una línea definida por una función matemática a través de la integración.',
    formula: "X_c = \\frac{1}{L} \\int x \\, dl \\quad Y_c = \\frac{1}{L} \\int y \\, dl",
    variables: [],
    output: {},
    resolve: () => ({ error: "El cálculo del centroide por integración es específico para cada función y no se adapta a una calculadora de formulario. Esta función no está implementada." })
  },
  {
    id: 'centroide_area_integral',
    title: 'Centroide de un Área (Integral)',
    description: 'Calcula el centroide de un área definida por límites a través de la integración.',
    formula: "X_c = \\frac{1}{A} \\int x \\, dA \\quad Y_c = \\frac{1}{A} \\int y \\, dA",
    variables: [],
    output: {},
    resolve: () => ({ error: "El cálculo del centroide de un área por integración es específico para cada geometría y no se adapta a una calculadora de formulario. Esta función no está implementada." })
  },
  {
    id: 'centroide_volumen_integral',
    title: 'Centroide de un Volumen (Integral)',
    description: 'Calcula el centroide de un volumen definido por límites a través de la integración.',
    formula: "X_c = \\frac{1}{V} \\int x \\, dV \\quad Y_c = \\frac{1}{V} \\int y \\, dV",
    variables: [],
    output: {},
    resolve: () => ({ error: "El cálculo del centroide de un volumen por integración es altamente dependiente de la forma y no se adapta a una calculadora de formulario. Esta función no está implementada." })
  }
];
