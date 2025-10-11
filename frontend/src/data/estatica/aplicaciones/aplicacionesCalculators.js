import { formatNumber } from "../../../utils/formatNumber";

const degToRad = deg => deg * (Math.PI / 180);
const radToDeg = rad => rad * (180 / Math.PI);

export const calculators = [
  {
    id: 'suma_vectores_componentes',
    title: 'Suma de Vectores (por Componentes)',
    description: 'Calcula el vector resultante (R) de la suma de dos vectores (A y B) usando sus componentes.',
    formula: 'Rx = Ax + Bx; Ry = Ay + By',
    variables: [
      { symbol: 'Ax', label: 'Componente Ax', unit: 'N', example: '10' },
      { symbol: 'Ay', label: 'Componente Ay', unit: 'N', example: '5' },
      { symbol: 'Bx', label: 'Componente Bx', unit: 'N', example: '-3' },
      { symbol: 'By', label: 'Componente By', unit: 'N', example: '8' },
    ],
    output: { symbol: 'Rx, Ry', label: 'Componentes del Vector Resultante', unit: 'N' },
    resolve: (args) => {
      const Ax = Number(args.Ax), Ay = Number(args.Ay), Bx = Number(args.Bx), By = Number(args.By);
      if ([Ax, Ay, Bx, By].some(isNaN)) return { error: 'Valores inválidos.' };
      const Rx = Ax + Bx;
      const Ry = Ay + By;
      return { result: { Rx, Ry }, steps: [
        `$R_x = A_x + B_x = ${formatNumber(Ax)} + (${formatNumber(Bx)}) = ${formatNumber(Rx)} N$`, 
        `$R_y = A_y + B_y = ${formatNumber(Ay)} + ${formatNumber(By)} = ${formatNumber(Ry)} N$`
      ] };
    }
  },
  {
    id: 'equilibrio_particula',
    title: 'Fuerza de Equilibrio (2 Fuerzas)',
    description: 'Dadas dos fuerzas, calcula la tercera fuerza (magnitud y ángulo) necesaria para mantener el equilibrio (ΣF=0).',
    formula: 'ΣF = F₁ + F₂ + F₃ = 0',
    variables: [
      { symbol: 'F1', label: 'Magnitud Fuerza 1', unit: 'N', example: '100' },
      { symbol: 'th1', label: 'Ángulo Fuerza 1', unit: '°', example: '30' },
      { symbol: 'F2', label: 'Magnitud Fuerza 2', unit: 'N', example: '150' },
      { symbol: 'th2', label: 'Ángulo Fuerza 2', unit: '°', example: '120' },
    ],
    output: { symbol: 'F3, θ3', label: 'Fuerza de Equilibrio', unit: 'N, °' },
    resolve: (args) => {
      const F1 = Number(args.F1), th1 = Number(args.th1), F2 = Number(args.F2), th2 = Number(args.th2);
      if ([F1, th1, F2, th2].some(isNaN)) return { error: 'Valores inválidos.' };
      const F1x = F1 * Math.cos(degToRad(th1));
      const F1y = F1 * Math.sin(degToRad(th1));
      const F2x = F2 * Math.cos(degToRad(th2));
      const F2y = F2 * Math.sin(degToRad(th2));
      const F3x = -(F1x + F2x);
      const F3y = -(F1y + F2y);
      const F3 = Math.sqrt(F3x**2 + F3y**2);
      const th3 = radToDeg(Math.atan2(F3y, F3x));
      return { result: { F3, th3 }, steps: [
        `1. Descomponer fuerzas: $F_{1x}=${formatNumber(F1x)}, F_{1y}=${formatNumber(F1y)}$ y $F_{2x}=${formatNumber(F2x)}, F_{2y}=${formatNumber(F2y)}$`,
        `2. Sumar componentes para la resultante: $R_x = F_{1x} + F_{2x} = ${formatNumber(F1x+F2x)}$, $R_y = F_{1y} + F_{2y} = ${formatNumber(F1y+F2y)}$`,
        `3. La fuerza de equilibrio es opuesta: $F_{3x}=${formatNumber(F3x)}, F_{3y}=${formatNumber(F3y)}$`,
        `4. Magnitud: $F_3 = \\sqrt{F_{3x}^2 + F_{3y}^2} = ${formatNumber(F3)}$ N`,
        `5. Ángulo: $\\theta_3 = \\arctan(\\frac{F_{3y}}{F_{3x}}) = ${formatNumber(th3)}°$`
      ] };
    }
  },
  {
    id: 'descomposicion_fuerzas',
    title: 'Descomposición de una Fuerza',
    description: 'Calcula las componentes rectangulares (Fx, Fy) de una fuerza dada su magnitud y ángulo.',
    formula: 'Fx = F·cos(θ); Fy = F·sin(θ)',
    variables: [
      { symbol: 'F', label: 'Magnitud de la Fuerza', unit: 'N', example: '200' },
      { symbol: 'theta', label: 'Ángulo con la horizontal', unit: '°', example: '60' },
    ],
    output: { symbol: 'Fx, Fy', label: 'Componentes de la Fuerza', unit: 'N' },
    resolve: (args) => {
      const F = Number(args.F), theta = Number(args.theta);
      if ([F, theta].some(isNaN)) return { error: 'Valores inválidos.' };
      const Fx = F * Math.cos(degToRad(theta));
      const Fy = F * Math.sin(degToRad(theta));
      return { result: { Fx, Fy }, steps: [
        `$F_x = F \\cdot \\cos(\\theta) = ${formatNumber(F)} \\cdot \\cos(${theta}°) = ${formatNumber(Fx)} N$`, 
        `$F_y = F \\cdot \\sin(\\theta) = ${formatNumber(F)} \\cdot \\sin(${theta}°) = ${formatNumber(Fy)} N$`
      ] };
    }
  }
];