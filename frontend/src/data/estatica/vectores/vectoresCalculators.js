
import { formatNumber } from "../../../utils/formatNumber";

const radToDeg = rad => rad * (180 / Math.PI);

export const calculators = [
  {
    id: "vector-magnitud-3d",
    title: "Magnitud y Dirección de Vector 3D",
    description: "Calcula la magnitud y los ángulos directores (α, β, γ) de un vector a partir de sus componentes 3D.",
    formula: "|V| = √(Vx² + Vy² + Vz²)",
    variables: [
      { symbol: "Vx", label: "Componente en X (Vx)", unit: "unidades", example: "10" },
      { symbol: "Vy", label: "Componente en Y (Vy)", unit: "unidades", example: "20" },
      { symbol: "Vz", label: "Componente en Z (Vz)", unit: "unidades", example: "-5" },
    ],
    output: [
      { symbol: "V", label: "Magnitud |V|", unit: "unidades" },
      { symbol: "alpha", label: "Ángulo α (vs eje X)", unit: "°" },
      { symbol: "beta", label: "Ángulo β (vs eje Y)", unit: "°" },
      { symbol: "gamma", label: "Ángulo γ (vs eje Z)", unit: "°" },
    ],
    resolve: (args) => {
      const Vx = Number(args.Vx);
      const Vy = Number(args.Vy);
      const Vz = Number(args.Vz);

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
        result: { V, alpha, beta, gamma },
        steps: [
          `1. Calcular la Magnitud |V|:`,
          `   |V| = √(${formatNumber(Vx)}² + ${formatNumber(Vy)}² + ${formatNumber(Vz)}²) = ${formatNumber(V)} unidades`,
          `2. Calcular Ángulos Directores:`,
          `   α = arccos(${formatNumber(Vx)} / ${formatNumber(V)}) = ${formatNumber(alpha)}°`,
          `   β = arccos(${formatNumber(Vy)} / ${formatNumber(V)}) = ${formatNumber(beta)}°`,
          `   γ = arccos(${formatNumber(Vz)} / ${formatNumber(V)}) = ${formatNumber(gamma)}°`,
        ],
      };
    },
  },
  {
    id: "suma-vectores-3d",
    title: "Suma de Vectores 3D",
    description: "Suma dos vectores en 3D (A y B) para obtener un vector resultante R.",
    formula: "R = A + B = (Ax+Bx)î + (Ay+By)ĵ + (Az+Bz)k̂",
    variables: [
      { type: 'divider', label: 'Vector A' },
      { symbol: "Ax", label: "Componente X de A (Ax)", unit: "", example: "5" },
      { symbol: "Ay", label: "Componente Y de A (Ay)", unit: "", example: "2" },
      { symbol: "Az", label: "Componente Z de A (Az)", unit: "", example: "-3" },
      { type: 'divider', label: 'Vector B' },
      { symbol: "Bx", label: "Componente X de B (Bx)", unit: "", example: "3" },
      { symbol: "By", label: "Componente Y de B (By)", unit: "", example: "4" },
      { symbol: "Bz", label: "Componente Z de B (Bz)", unit: "", example: "1" },
    ],
    output: [
      { symbol: "Rx", label: "Componente X Resultante (Rx)", unit: "" },
      { symbol: "Ry", label: "Componente Y Resultante (Ry)", unit: "" },
      { symbol: "Rz", label: "Componente Z Resultante (Rz)", unit: "" },
    ],
    resolve: (args) => {
      const Ax = Number(args.Ax); const Ay = Number(args.Ay); const Az = Number(args.Az);
      const Bx = Number(args.Bx); const By = Number(args.By); const Bz = Number(args.Bz);

      if ([Ax, Ay, Az, Bx, By, Bz].some(isNaN)) {
        return { error: "Por favor, introduzca valores numéricos para todas las componentes." };
      }

      const Rx = Ax + Bx;
      const Ry = Ay + By;
      const Rz = Az + Bz;
      
      return {
        result: { Rx, Ry, Rz },
        steps: [
          `Rx = ${formatNumber(Ax)} + ${formatNumber(Bx)} = ${formatNumber(Rx)}`,
          `Ry = ${formatNumber(Ay)} + ${formatNumber(By)} = ${formatNumber(Ry)}`,
          `Rz = ${formatNumber(Az)} + ${formatNumber(Bz)} = ${formatNumber(Rz)}`,
          `Vector Resultante: R = ${formatNumber(Rx)}î + ${formatNumber(Ry)}ĵ + ${formatNumber(Rz)}k̂`
        ],
      };
    },
  },
  {
    id: "producto-escalar-3d",
    title: "Producto Escalar (Producto Punto) 3D",
    description: "Calcula el producto escalar de dos vectores 3D. El resultado es una magnitud escalar.",
    formula: "A · B = Ax*Bx + Ay*By + Az*Bz",
    variables: [
      { type: 'divider', label: 'Vector A' },
      { symbol: "Ax", label: "Componente X de A (Ax)", unit: "", example: "2" },
      { symbol: "Ay", label: "Componente Y de A (Ay)", unit: "", example: "3" },
      { symbol: "Az", label: "Componente Z de A (Az)", unit: "", example: "4" },
      { type: 'divider', label: 'Vector B' },
      { symbol: "Bx", label: "Componente X de B (Bx)", unit: "", example: "5" },
      { symbol: "By", label: "Componente Y de B (By)", unit: "", example: "6" },
      { symbol: "Bz", label: "Componente Z de B (Bz)", unit: "", example: "7" },
    ],
    output: { symbol: "dotProduct", label: "Producto Escalar (A · B)", unit: "unidades²" },
    resolve: (args) => {
      const Ax = Number(args.Ax); const Ay = Number(args.Ay); const Az = Number(args.Az);
      const Bx = Number(args.Bx); const By = Number(args.By); const Bz = Number(args.Bz);

      if ([Ax, Ay, Az, Bx, By, Bz].some(isNaN)) {
        return { error: "Por favor, introduzca valores numéricos para todas las componentes." };
      }

      const dotProduct = Ax * Bx + Ay * By + Az * Bz;
      return {
        result: { dotProduct },
        steps: [
          `A · B = (${formatNumber(Ax)} * ${formatNumber(Bx)}) + (${formatNumber(Ay)} * ${formatNumber(By)}) + (${formatNumber(Az)} * ${formatNumber(Bz)})`,
          `Resultado = ${formatNumber(Ax * Bx)} + ${formatNumber(Ay * By)} + ${formatNumber(Az * Bz)} = ${formatNumber(dotProduct)} unidades²`,
        ],
      };
    },
  },
  {
    id: "producto-vectorial-3d",
    title: "Producto Vectorial (Producto Cruz) 3D",
    description: "Calcula el producto vectorial de dos vectores 3D (A x B), resultando en un nuevo vector C perpendicular a ambos.",
    formula: "C = A x B",
    variables: [
      { type: 'divider', label: 'Vector A' },
      { symbol: "Ax", label: "Componente X de A (Ax)", unit: "", example: "2" },
      { symbol: "Ay", label: "Componente Y de A (Ay)", unit: "", example: "3" },
      { symbol: "Az", label: "Componente Z de A (Az)", unit: "", example: "4" },
      { type: 'divider', label: 'Vector B' },
      { symbol: "Bx", label: "Componente X de B (Bx)", unit: "", example: "5" },
      { symbol: "By", label: "Componente Y de B (By)", unit: "", example: "6" },
      { symbol: "Bz", label: "Componente Z de B (Bz)", unit: "", example: "7" },
    ],
    output: [
      { symbol: "Cx", label: "Componente X Resultante (Cx)", unit: "" },
      { symbol: "Cy", label: "Componente Y Resultante (Cy)", unit: "" },
      { symbol: "Cz", label: "Componente Z Resultante (Cz)", unit: "" },
    ],
    resolve: (args) => {
      const Ax = Number(args.Ax); const Ay = Number(args.Ay); const Az = Number(args.Az);
      const Bx = Number(args.Bx); const By = Number(args.By); const Bz = Number(args.Bz);

       if ([Ax, Ay, Az, Bx, By, Bz].some(isNaN)) {
        return { error: "Por favor, introduzca valores numéricos para todas las componentes." };
      }

      const Cx = Ay * Bz - Az * By;
      const Cy = Az * Bx - Ax * Bz;
      const Cz = Ax * By - Ay * Bx;
      
      return {
        result: { Cx, Cy, Cz },
        steps: [
          `1. Calcular Componente Cx:`,
          `   Cx = (Ay * Bz) - (Az * By) = (${formatNumber(Ay)} * ${formatNumber(Bz)}) - (${formatNumber(Az)} * ${formatNumber(By)}) = ${formatNumber(Cx)}`,
          `2. Calcular Componente Cy:`,
          `   Cy = (Az * Bx) - (Ax * Bz) = (${formatNumber(Az)} * ${formatNumber(Bx)}) - (${formatNumber(Ax)} * ${formatNumber(Bz)}) = ${formatNumber(Cy)}`,
          `3. Calcular Componente Cz:`,
          `   Cz = (Ax * By) - (Ay * Bx) = (${formatNumber(Ax)} * ${formatNumber(By)}) - (${formatNumber(Ay)} * ${formatNumber(Bx)}) = ${formatNumber(Cz)}`,
          `Vector Resultante: C = ${formatNumber(Cx)}î + ${formatNumber(Cy)}ĵ + ${formatNumber(Cz)}k̂`
        ],
      };
    },
  },
];
