
import { formatNumber } from "../../../utils/formatNumber";

const degToRad = deg => deg * (Math.PI / 180);
const radToDeg = rad => rad * (180 / Math.PI);

export const calculators = [
  {
    id: 'suma_vectores_componentes',
    title: 'Suma de Vectores (por Componentes)',
    description: 'Calcula el vector resultante (R) de la suma de dos vectores (A y B) usando sus componentes.',
    formula: 'R_x = A_x + B_x \\ R_y = A_y + B_y',
    variables: [
      { symbol: 'A_x', label: 'Componente Ax', unit: 'N', example: '10' },
      { symbol: 'A_y', label: 'Componente Ay', unit: 'N', example: '5' },
      { symbol: 'B_x', label: 'Componente Bx', unit: 'N', example: '-3' },
      { symbol: 'B_y', label: 'Componente By', unit: 'N', example: '8' },
    ],
    output: { symbol: 'R_x, R_y', label: 'Componentes del Vector Resultante', unit: 'N' },
    resolve: (args) => {
      const Ax = Number(args['A_x']), Ay = Number(args['A_y']), Bx = Number(args['B_x']), By = Number(args['B_y']);
      if ([Ax, Ay, Bx, By].some(isNaN)) return { error: 'Valores inválidos.' };
      const Rx = Ax + Bx;
      const Ry = Ay + By;
      return { 
        result: { 
          'R_x': formatNumber(Rx), 
          'R_y': formatNumber(Ry) 
        }, 
        steps: [
        `R_x = A_x + B_x = ${formatNumber(Ax)} + (${formatNumber(Bx)}) = ${formatNumber(Rx)}\\text{ N}`,
        `R_y = A_y + B_y = ${formatNumber(Ay)} + ${formatNumber(By)} = ${formatNumber(Ry)}\\text{ N}`
      ] };
    }
  },
  {
    id: 'equilibrio_particula',
    title: 'Fuerza de Equilibrio (2 Fuerzas)',
    description: 'Dadas dos fuerzas, calcula la tercera fuerza (magnitud y ángulo) necesaria para mantener el equilibrio (ΣF=0).',
    formula: '\\Sigma \\vec{F} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0',
    variables: [
      { symbol: 'F_1', label: 'Magnitud Fuerza 1', unit: 'N', example: '100' },
      { symbol: '\\theta_1', label: 'Ángulo Fuerza 1', unit: '°', example: '30' },
      { symbol: 'F_2', label: 'Magnitud Fuerza 2', unit: 'N', example: '150' },
      { symbol: '\\theta_2', label: 'Ángulo Fuerza 2', unit: '°', example: '120' },
    ],
    output: { symbol: 'F_3, \\theta_3', label: 'Fuerza de Equilibrio', unit: 'N, °' },
    resolve: (args) => {
      const F1 = Number(args['F_1']), th1 = Number(args['\\theta_1']), F2 = Number(args['F_2']), th2 = Number(args['\\theta_2']);
      if ([F1, th1, F2, th2].some(isNaN)) return { error: 'Valores inválidos.' };
      
      const F1x = F1 * Math.cos(degToRad(th1));
      const F1y = F1 * Math.sin(degToRad(th1));
      const F2x = F2 * Math.cos(degToRad(th2));
      const F2y = F2 * Math.sin(degToRad(th2));
      
      const Rx = F1x + F2x;
      const Ry = F1y + F2y;

      const F3x = -Rx;
      const F3y = -Ry;
      
      const F3 = Math.sqrt(F3x**2 + F3y**2);
      const th3 = radToDeg(Math.atan2(F3y, F3x));
      
      const steps = [
        `F_{1x} = F_1 \\cdot \\cos(\\theta_1) = ${formatNumber(F1)} \\cdot \\cos(${th1}^{\\circ}) = ${formatNumber(F1x)}\\text{ N}`,
        `F_{1y} = F_1 \\cdot \\sin(\\theta_1) = ${formatNumber(F1)} \\cdot \\sin(${th1}^{\\circ}) = ${formatNumber(F1y)}\\text{ N}`,
        `F_{2x} = F_2 \\cdot \\cos(\\theta_2) = ${formatNumber(F2)} \\cdot \\cos(${th2}^{\\circ}) = ${formatNumber(F2x)}\\text{ N}`,
        `F_{2y} = F_2 \\cdot \\sin(\\theta_2) = ${formatNumber(F2)} \\cdot \\sin(${th2}^{\\circ}) = ${formatNumber(F2y)}\\text{ N}`,
        `R_x = F_{1x} + F_{2x} = ${formatNumber(F1x)} + ${formatNumber(F2x)} = ${formatNumber(Rx)}\\text{ N}`,
        `R_y = F_{1y} + F_{2y} = ${formatNumber(F1y)} + ${formatNumber(F2y)} = ${formatNumber(Ry)}\\text{ N}`,
        `F_{3x} = -R_x = ${formatNumber(F3x)}\\text{ N}`,
        `F_{3y} = -R_y = ${formatNumber(F3y)}\\text{ N}`,
        `F_3 = \\sqrt{F_{3x}^2 + F_{3y}^2} = \\sqrt{(${formatNumber(F3x)})^2 + (${formatNumber(F3y)})^2} = ${formatNumber(F3)}\\text{ N}`,
        `\\theta_3 = \\arctan\\left(\\frac{F_{3y}}{F_{3x}}\\right) = \\arctan\\left(\\frac{${formatNumber(F3y)}}{${formatNumber(F3x)}} \\right) = ${formatNumber(th3)}^{\\circ}`
      ];

      return { result: { 'F_3': formatNumber(F3), '\\theta_3': formatNumber(th3) }, steps };
    }
  },
  {
    id: 'descomposicion_fuerzas',
    title: 'Descomposición de una Fuerza',
    description: 'Calcula las componentes rectangulares (Fx, Fy) de una fuerza dada su magnitud y ángulo.',
    formula: 'F_x = F \\cdot \\cos(\\theta) \\ F_y = F \\cdot \\sin(\\theta)',
    variables: [
      { symbol: 'F', label: 'Magnitud de la Fuerza', unit: 'N', example: '200' },
      { symbol: '\\theta', label: 'Ángulo con la horizontal', unit: '°', example: '60' },
    ],
    output: { symbol: 'F_x, F_y', label: 'Componentes de la Fuerza', unit: 'N' },
    resolve: (args) => {
      const F = Number(args['F']), theta = Number(args['\\theta']);
      if ([F, theta].some(isNaN)) return { error: 'Valores inválidos.' };
      const Fx = F * Math.cos(degToRad(theta));
      const Fy = F * Math.sin(degToRad(theta));
      return { 
        result: { 
          'F_x': formatNumber(Fx), 
          'F_y': formatNumber(Fy) 
        }, 
        steps: [
        `F_x = F \\cdot \\cos(\\theta) = ${formatNumber(F)} \\cdot \\cos(${theta}°) = ${formatNumber(Fx)}\\text{ N}`,
        `F_y = F \\cdot \\sin(\\theta) = ${formatNumber(F)} \\cdot \\sin(${theta}°) = ${formatNumber(Fy)}\\text{ N}`
      ] };
    }
  }
];
