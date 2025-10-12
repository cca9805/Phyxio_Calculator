
import { formatNumber } from "../../../utils/formatNumber";

const radToDeg = rad => rad * (180 / Math.PI);

export const calculators = [
  {
    id: "vector-magnitud-3d",
    title: "Magnitud y Dirección de Vector 3D",
    description: "Calcula la magnitud y los ángulos directores (α, β, γ) de un vector a partir de sus componentes 3D.",
    formula: "|V| = \\sqrt{V_x^2 + V_y^2 + V_z^2}",
    variables: [
      { symbol: "V_x", label: "Componente en X (Vx)", unit: "unidades", example: "10" },
      { symbol: "V_y", label: "Componente en Y (Vy)", unit: "unidades", example: "20" },
      { symbol: "V_z", label: "Componente en Z (Vz)", unit: "unidades", example: "-5" },
    ],
    output: { symbol: "|V|, \\alpha, \\beta, \\gamma", label: "Magnitud y Ángulos Directores", unit: "unidades, °" },
    resolve: (args) => {
      const Vx = Number(args['V_x']);
      const Vy = Number(args['V_y']);
      const Vz = Number(args['V_z']);

      if (isNaN(Vx) || isNaN(Vy) || isNaN(Vz)) {
        return { error: "Por favor, introduzca valores numéricos válidos para las componentes." };
      }

      const V = Math.sqrt(Vx**2 + Vy**2 + Vz**2);
      if (V === 0) {
        return { error: "La magnitud del vector no puede ser cero para calcular los ángulos directores." };
      }

      const alpha = radToDeg(Math.acos(Vx / V));
      const beta = radToDeg(Math.acos(Vy / V));
      const gamma = radToDeg(Math.acos(Vz / V));
      
      return {
        result: { 
          '|V|': formatNumber(V),
          '\\alpha': formatNumber(alpha),
          '\\beta': formatNumber(beta),
          '\\gamma': formatNumber(gamma)
        },
        steps: [
          `|V| = \\sqrt{V_x^2 + V_y^2 + V_z^2} = \\sqrt{${formatNumber(Vx)}^2 + ${formatNumber(Vy)}^2 + (${formatNumber(Vz)})^2} = ${formatNumber(V)}\\text{ unidades}`,
          `\\alpha = \\arccos(\\frac{V_x}{|V|}) = \\arccos(\\frac{${formatNumber(Vx)}}{${formatNumber(V)}}) = ${formatNumber(alpha)}°`,
          `\\beta = \\arccos(\\frac{V_y}{|V|}) = \\arccos(\\frac{${formatNumber(Vy)}}{${formatNumber(V)}}) = ${formatNumber(beta)}°`,
          `\\gamma = \\arccos(\\frac{V_z}{|V|}) = \\arccos(\\frac{${formatNumber(Vz)}}{${formatNumber(V)}}) = ${formatNumber(gamma)}°`,
        ],
      };
    },
  },
  {
    id: "suma-vectores-3d",
    title: "Suma de Vectores 3D",
    description: "Suma dos vectores en 3D (A y B) para obtener un vector resultante R.",
    formula: "\\vec{R} = \\vec{A} + \\vec{B}",
    variables: [
      { type: 'divider', label: 'Vector A' },
      { symbol: "A_x", label: "Componente X de A (Ax)", unit: "", example: "5" },
      { symbol: "A_y", label: "Componente Y de A (Ay)", unit: "", example: "2" },
      { symbol: "A_z", label: "Componente Z de A (Az)", unit: "", example: "-3" },
      { type: 'divider', label: 'Vector B' },
      { symbol: "B_x", label: "Componente X de B (Bx)", unit: "", example: "3" },
      { symbol: "B_y", label: "Componente Y de B (By)", unit: "", example: "4" },
      { symbol: "B_z", label: "Componente Z de B (Bz)", unit: "", example: "1" },
    ],
    output: { symbol: "R_x, R_y, R_z", label: "Componentes del Vector Resultante", unit: "" },
    resolve: (args) => {
      const Ax = Number(args['A_x']); const Ay = Number(args['A_y']); const Az = Number(args['A_z']);
      const Bx = Number(args['B_x']); const By = Number(args['B_y']); const Bz = Number(args['B_z']);

      if ([Ax, Ay, Az, Bx, By, Bz].some(isNaN)) {
        return { error: "Por favor, introduzca valores numéricos para todas las componentes." };
      }

      const Rx = Ax + Bx;
      const Ry = Ay + By;
      const Rz = Az + Bz;
      
      return {
        result: { 
          'R_x': formatNumber(Rx),
          'R_y': formatNumber(Ry),
          'R_z': formatNumber(Rz)
        },
        steps: [
          `R_x = A_x + B_x = ${formatNumber(Ax)} + ${formatNumber(Bx)} = ${formatNumber(Rx)}`,
          `R_y = A_y + B_y = ${formatNumber(Ay)} + ${formatNumber(By)} = ${formatNumber(Ry)}`,
          `R_z = A_z + B_z = ${formatNumber(Az)} + ${formatNumber(Bz)} = ${formatNumber(Rz)}`,
          `\\vec{R} = ${formatNumber(Rx)}\\hat{i} + ${formatNumber(Ry)}\\hat{j} + ${formatNumber(Rz)}\\hat{k}`
        ],
      };
    },
  },
  {
    id: "producto-escalar-3d",
    title: "Producto Escalar (Producto Punto) 3D",
    description: "Calcula el producto escalar de dos vectores 3D. El resultado es una magnitud escalar.",
    formula: "A \\cdot B = A_x B_x + A_y B_y + A_z B_z",
    variables: [
      { type: 'divider', label: 'Vector A' },
      { symbol: "A_x", label: "Componente X de A (Ax)", unit: "", example: "2" },
      { symbol: "A_y", label: "Componente Y de A (Ay)", unit: "", example: "3" },
      { symbol: "A_z", label: "Componente Z de A (Az)", unit: "", example: "4" },
      { type: 'divider', label: 'Vector B' },
      { symbol: "B_x", label: "Componente X de B (Bx)", unit: "", example: "5" },
      { symbol: "B_y", label: "Componente Y de B (By)", unit: "", example: "6" },
      { symbol: "B_z", label: "Componente Z de B (Bz)", unit: "", example: "7" },
    ],
    output: { symbol: "A \\cdot B", label: "Producto Escalar", unit: "unidades²" },
    resolve: (args) => {
      const Ax = Number(args['A_x']); const Ay = Number(args['A_y']); const Az = Number(args['A_z']);
      const Bx = Number(args['B_x']); const By = Number(args['B_y']); const Bz = Number(args['B_z']);

      if ([Ax, Ay, Az, Bx, By, Bz].some(isNaN)) {
        return { error: "Por favor, introduzca valores numéricos para todas las componentes." };
      }

      const dotProduct = Ax * Bx + Ay * By + Az * Bz;
      return {
        result: { 'A \\cdot B': formatNumber(dotProduct) },
        steps: [
          `A \\cdot B = (A_x)(B_x) + (A_y)(B_y) + (A_z)(B_z)`,
          `A \\cdot B = (${formatNumber(Ax)})(${formatNumber(Bx)}) + (${formatNumber(Ay)})(${formatNumber(By)}) + (${formatNumber(Az)})(${formatNumber(Bz)})`,
          `A \\cdot B = ${formatNumber(Ax * Bx)} + ${formatNumber(Ay * By)} + ${formatNumber(Az * Bz)} = ${formatNumber(dotProduct)}\\text{ unidades²}`,
        ],
      };
    },
  },
  {
    id: "producto-vectorial-3d",
    title: "Producto Vectorial (Producto Cruz) 3D",
    description: "Calcula el producto vectorial de dos vectores 3D (A x B), resultando en un nuevo vector C perpendicular a ambos.",
    formula: "\\vec{C} = \\vec{A} \\times \\vec{B}",
    variables: [
      { type: 'divider', label: 'Vector A' },
      { symbol: "A_x", label: "Componente X de A (Ax)", unit: "", example: "2" },
      { symbol: "A_y", label: "Componente Y de A (Ay)", unit: "", example: "3" },
      { symbol: "A_z", label: "Componente Z de A (Az)", unit: "", example: "4" },
      { type: 'divider', label: 'Vector B' },
      { symbol: "B_x", label: "Componente X de B (Bx)", unit: "", example: "5" },
      { symbol: "B_y", label: "Componente Y de B (By)", unit: "", example: "6" },
      { symbol: "B_z", label: "Componente Z de B (Bz)", unit: "", example: "7" },
    ],
    output: { symbol: "C_x, C_y, C_z", label: "Componentes del Vector Resultante", unit: "" },
    resolve: (args) => {
      const Ax = Number(args['A_x']); const Ay = Number(args['A_y']); const Az = Number(args['A_z']);
      const Bx = Number(args['B_x']); const By = Number(args['B_y']); const Bz = Number(args['B_z']);

       if ([Ax, Ay, Az, Bx, By, Bz].some(isNaN)) {
        return { error: "Por favor, introduzca valores numéricos para todas las componentes." };
      }

      const Cx = Ay * Bz - Az * By;
      const Cy = Az * Bx - Ax * Bz;
      const Cz = Ax * By - Ay * Bx;
      
      return {
        result: { 
          'C_x': formatNumber(Cx),
          'C_y': formatNumber(Cy),
          'C_z': formatNumber(Cz)
        },
        steps: [
          `C_x = (A_y)(B_z) - (A_z)(B_y) = (${formatNumber(Ay)})(${formatNumber(Bz)}) - (${formatNumber(Az)})(${formatNumber(By)}) = ${formatNumber(Cx)}`,
          `C_y = (A_z)(B_x) - (A_x)(B_z) = (${formatNumber(Az)})(${formatNumber(Bx)}) - (${formatNumber(Ax)})(${formatNumber(Bz)}) = ${formatNumber(Cy)}`,
          `C_z = (A_x)(B_y) - (A_y)(B_x) = (${formatNumber(Ax)})(${formatNumber(By)}) - (${formatNumber(Ay)})(${formatNumber(Bx)}) = ${formatNumber(Cz)}`,
          `\\vec{C} = ${formatNumber(Cx)}\\hat{i} + ${formatNumber(Cy)}\\hat{j} + ${formatNumber(Cz)}\\hat{k}`
        ],
      };
    },
  },
];
