
import { formatNumber } from "../../../utils/formatNumber";

export const calculators = [
  {
    id: 'centro_masa_particulas',
    title: 'Centro de Masa (2 Partículas, 1D)',
    description: "Calcula el centro de masa para un sistema simple de dos partículas en una dimensión.",
    variables: [
      { symbol: 'm1', label: 'Masa 1', unit: 'kg', example: '2' },
      { symbol: 'x1', label: 'Posición 1', unit: 'm', example: '1' },
      { symbol: 'm2', label: 'Masa 2', unit: 'kg', example: '3' },
      { symbol: 'x2', label: 'Posición 2', unit: 'm', example: '5' },
    ],
    output: [{ symbol: 'X_cm', label: 'Posición del CM', unit: 'm' }],
    resolve: (args) => {
      const m1 = Number(args.m1), x1 = Number(args.x1), m2 = Number(args.m2), x2 = Number(args.x2);
      if ([m1, x1, m2, x2].some(isNaN) || (m1 + m2 === 0)) return { error: 'Valores inválidos. La masa total no puede ser cero.' };
      const X_cm = (m1 * x1 + m2 * x2) / (m1 + m2);
      return { result: { X_cm }, steps: [`$X_{cm} = \\frac{m_1x_1+m_2x_2}{m_1+m_2} = \\frac{${formatNumber(m1)}⋅${formatNumber(x1)}+${formatNumber(m2)}⋅${formatNumber(x2)}}{${formatNumber(m1)}+${formatNumber(m2)}} = ${formatNumber(X_cm)} m$`] };
    }
  },
  {
    id: 'centro_gravedad_particulas',
    title: 'Centro de Gravedad (2 Partículas, 1D)',
    description: "Calcula el centro de gravedad para un sistema de dos partículas en una dimensión.",
    variables: [
      { symbol: 'W1', label: 'Peso 1', unit: 'N', example: '20' },
      { symbol: 'x1', label: 'Posición 1', unit: 'm', example: '1' },
      { symbol: 'W2', label: 'Peso 2', unit: 'N', example: '30' },
      { symbol: 'x2', label: 'Posición 2', unit: 'm', example: '5' },
    ],
    output: [{ symbol: 'X_cg', label: 'Posición del CG', unit: 'm' }],
    resolve: (args) => {
      const W1 = Number(args.W1), x1 = Number(args.x1), W2 = Number(args.W2), x2 = Number(args.x2);
      if ([W1, x1, W2, x2].some(isNaN) || (W1 + W2 === 0)) return { error: 'Valores inválidos. El peso total no puede ser cero.' };
      const X_cg = (W1 * x1 + W2 * x2) / (W1 + W2);
      return { result: { X_cg }, steps: [`$X_{cg} = \\frac{W_1x_1+W_2x_2}{W_1+W_2} = \\frac{${formatNumber(W1)}⋅${formatNumber(x1)}+${formatNumber(W2)}⋅${formatNumber(x2)}}{${formatNumber(W1)}+${formatNumber(W2)}} = ${formatNumber(X_cg)} m$`] };
    }
  },
  {
    id: 'centroide_linea_compuesta',
    title: 'Centroide de Líneas Compuestas (2 Segmentos, 2D)',
    variables: [
      { symbol: 'L1', label: 'Longitud L1', unit: 'm', example: '10' },
      { symbol: 'x1', label: 'Centroide x1', unit: 'm', example: '5' },
      { symbol: 'y1', label: 'Centroide y1', unit: 'm', example: '0' },
      { symbol: 'L2', label: 'Longitud L2', unit: 'm', example: '8' },
      { symbol: 'x2', label: 'Centroide x2', unit: 'm', example: '10' },
      { symbol: 'y2', label: 'Centroide y2', unit: 'm', example: '4' },
    ],
    output: [
      { symbol: 'Xc', label: 'Coordenada X del Centroide', unit: 'm' },
      { symbol: 'Yc', label: 'Coordenada Y del Centroide', unit: 'm' },
    ],
    resolve: (args) => {
      const L1 = Number(args.L1), x1 = Number(args.x1), y1 = Number(args.y1), L2 = Number(args.L2), x2 = Number(args.x2), y2 = Number(args.y2);
      if ([L1, x1, y1, L2, x2, y2].some(isNaN) || L1 + L2 === 0) return { error: 'Valores inválidos. La longitud total no puede ser cero.' };
      const Xc = (L1*x1 + L2*x2) / (L1+L2);
      const Yc = (L1*y1 + L2*y2) / (L1+L2);
      return { result: { Xc, Yc }, steps: [
        `$X_c = \\frac{L_1x_1+L_2x_2}{L_1+L_2} = \\frac{${formatNumber(L1)}⋅${formatNumber(x1)}+${formatNumber(L2)}⋅${formatNumber(x2)}}{${formatNumber(L1)}+${formatNumber(L2)}} = ${formatNumber(Xc)} m$`,
        `$Y_c = \\frac{L_1y_1+L_2y_2}{L_1+L_2} = \\frac{${formatNumber(L1)}⋅${formatNumber(y1)}+${formatNumber(L2)}⋅${formatNumber(y2)}}{${formatNumber(L1)}+${formatNumber(L2)}} = ${formatNumber(Yc)} m$`
      ] };
    }
  },
  {
    id: 'centroide_area_compuesta',
    title: 'Centroide de Áreas Compuestas (2 Áreas, 2D)',
    description: "Para agujeros, ingrese un valor de área negativo.",
    variables: [
      { symbol: 'A1', label: 'Área A1', unit: 'm²', example: '20' },
      { symbol: 'x1', label: 'Centroide x1', unit: 'm', example: '2' },
      { symbol: 'y1', label: 'Centroide y1', unit: 'm', example: '5' },
      { symbol: 'A2', label: 'Área A2', unit: 'm²', example: '-5' },
      { symbol: 'x2', label: 'Centroide x2', unit: 'm', example: '2.5' },
      { symbol: 'y2', label: 'Centroide y2', unit: 'm', example: '5' },
    ],
    output: [
        { symbol: 'Xc', label: 'Coordenada X del Centroide', unit: 'm' },
        { symbol: 'Yc', label: 'Coordenada Y del Centroide', unit: 'm' },
    ],
    resolve: (args) => {
      const A1 = Number(args.A1), x1 = Number(args.x1), y1 = Number(args.y1), A2 = Number(args.A2), x2 = Number(args.x2), y2 = Number(args.y2);
      if ([A1, x1, y1, A2, x2, y2].some(isNaN) || A1 + A2 === 0) return { error: 'Valores inválidos. El área total no puede ser cero.' };
      const Xc = (A1*x1 + A2*x2) / (A1+A2);
      const Yc = (A1*y1 + A2*y2) / (A1+A2);
      return { result: { Xc, Yc }, steps: [
        `$X_c = \\frac{A_1x_1+A_2x_2}{A_1+A_2} = \\frac{${formatNumber(A1)}⋅${formatNumber(x1)}+${formatNumber(A2)}⋅${formatNumber(x2)}}{${formatNumber(A1)}+${formatNumber(A2)}} = ${formatNumber(Xc)} m$`,
        `$Y_c = \\frac{A_1y_1+A_2y_2}{A_1+A_2} = \\frac{${formatNumber(A1)}⋅${formatNumber(y1)}+${formatNumber(A2)}⋅${formatNumber(y2)}}{${formatNumber(A1)}+${formatNumber(A2)}} = ${formatNumber(Yc)} m$`
      ] };
    }
  },
  {
    id: 'centroide_volumen_compuesto',
    title: 'Centroide de Volúmenes Compuestos (2 Volúmenes, 2D)',
    description: "Para huecos, ingrese un valor de volumen negativo.",
    variables: [
      { symbol: 'V1', label: 'Volumen V1', unit: 'm³', example: '10' },
      { symbol: 'x1', label: 'Centroide x1', unit: 'm', example: '1' },
      { symbol: 'y1', label: 'Centroide y1', unit: 'm', example: '2' },
      { symbol: 'V2', label: 'Volumen V2', unit: 'm³', example: '5' },
      { symbol: 'x2', label: 'Centroide x2', unit: 'm', example: '3' },
      { symbol: 'y2', label: 'Centroide y2', unit: 'm', example: '4' },
    ],
    output: [
        { symbol: 'Xc', label: 'Coordenada X del Centroide', unit: 'm' },
        { symbol: 'Yc', label: 'Coordenada Y del Centroide', unit: 'm' },
    ],
    resolve: (args) => {
      const V1 = Number(args.V1), x1 = Number(args.x1), y1 = Number(args.y1), V2 = Number(args.V2), x2 = Number(args.x2), y2 = Number(args.y2);
      if ([V1, x1, y1, V2, x2, y2].some(isNaN) || V1 + V2 === 0) return { error: 'Valores inválidos. El volumen total no puede ser cero.' };
      const Xc = (V1*x1 + V2*x2) / (V1+V2);
      const Yc = (V1*y1 + V2*y2) / (V1+V2);
      return { result: { Xc, Yc }, steps: [
        `$X_c = \\frac{V_1x_1+V_2x_2}{V_1+V_2} = \\frac{${formatNumber(V1)}⋅${formatNumber(x1)}+${formatNumber(V2)}⋅${formatNumber(x2)}}{${formatNumber(V1)}+${formatNumber(V2)}} = ${formatNumber(Xc)} m$`,
        `$Y_c = \\frac{V_1y_1+V_2y_2}{V_1+V_2} = \\frac{${formatNumber(V1)}⋅${formatNumber(y1)}+${formatNumber(V2)}⋅${formatNumber(y2)}}{${formatNumber(V1)}+${formatNumber(V2)}} = ${formatNumber(Yc)} m$`
      ] };
    }
  },
  {
    id: 'centroide_linea_integral',
    title: 'Centroide de una Línea (Integral)',
    info: "El cálculo del centroide por integración requiere definir la función que describe la línea y resolver una integral específica. Este proceso es demasiado complejo para una calculadora de formulario y se aborda en la sección de ejemplos y ejercicios resueltos."
  },
  {
    id: 'centroide_area_integral',
    title: 'Centroide de un Área (Integral)',
    info: "El cálculo del centroide de un área por integración requiere definir los límites de la forma y resolver una integral doble. Este proceso es específico para cada geometría y no se adapta a una calculadora de formulario."
  },
  {
    id: 'centroide_volumen_integral',
    title: 'Centroide de un Volumen (Integral)',
    info: "El cálculo del centroide de un volumen por integración requiere el uso de integrales triples y es altamente dependiente de la forma del objeto. Se trata en problemas y ejemplos específicos."
  }
];
