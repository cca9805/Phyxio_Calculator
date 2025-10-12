
import { formatNumber } from "../../../utils/formatNumber";

const degToRad = deg => deg * (Math.PI / 180);

export const calculators = [
  {
    id: 'momento-de-fuerza-formula',
    title: 'Momento de una Fuerza (Torque)',
    description: 'Calcula el momento o torque (M) generado por una fuerza (F) aplicada a una distancia (r) de un punto de giro, con un ángulo (θ) entre el vector de fuerza y el brazo de palanca.',
    formula: 'M = F \\cdot r \\cdot \\sin(\\theta)',
    variables: [
      { symbol: 'F', label: 'Magnitud de la Fuerza', unit: 'N', example: '50' },
      { symbol: 'r', label: 'Distancia al Punto de Giro', unit: 'm', example: '2' },
      { symbol: '\\theta', label: 'Ángulo entre Fuerza y Brazo', unit: '°', example: '90' },
    ],
    output: { symbol: 'M', label: 'Momento (Torque)', unit: 'N·m' },
    resolve: (args) => {
      const F = Number(args.F), r = Number(args.r), theta = Number(args['\\theta']);
      if ([F, r, theta].some(isNaN)) return { error: 'Valores inválidos.' };
      const M = F * r * Math.sin(degToRad(theta));
      return { 
        result: { 'M': formatNumber(M) }, 
        steps: [
        `M = F \\cdot r \\cdot \\sin(\\theta) = ${formatNumber(F)} \\cdot ${formatNumber(r)} \\cdot \\sin(${theta}°) = ${formatNumber(M)}\\text{ N·m}`
      ] };
    }
  },
  {
    id: 'teorema-varignon-formula',
    title: 'Momento por Componentes (Varignon)',
    description: 'Calcula el momento de una fuerza respecto al origen (O) usando sus componentes (Fx, Fy) aplicadas en un punto (x, y). La convención antihoraria es positiva.',
    formula: 'M_O = (F_y \\cdot x) - (F_x \\cdot y)',
    variables: [
      { symbol: 'F_x', label: 'Componente Fx de la Fuerza', unit: 'N', example: '30' },
      { symbol: 'F_y', label: 'Componente Fy de la Fuerza', unit: 'N', example: '40' },
      { symbol: 'x', label: 'Coordenada x del Punto de Aplicación', unit: 'm', example: '2' },
      { symbol: 'y', label: 'Coordenada y del Punto de Aplicación', unit: 'm', example: '1' },
    ],
    output: { symbol: 'M_O', label: 'Momento respecto al Origen', unit: 'N·m' },
    resolve: (args) => {
      const Fx = Number(args['F_x']), Fy = Number(args['F_y']), x = Number(args.x), y = Number(args.y);
      if ([Fx, Fy, x, y].some(isNaN)) return { error: 'Valores inválidos.' };
      const M_O = (Fy * x) - (Fx * y);
      return { 
        result: { 'M_O': formatNumber(M_O) }, 
        steps: [
        `M_O = (F_y \\cdot x) - (F_x \\cdot y) = (${formatNumber(Fy)} \\cdot ${formatNumber(x)}) - (${formatNumber(Fx)} \\cdot ${formatNumber(y)})`,
        `M_O = ${formatNumber(Fy * x)} - ${formatNumber(Fx * y)} = ${formatNumber(M_O)}\\text{ N·m}`
      ] };
    }
  },
  {
    id: 'momento-neto-formula',
    isInfoCard: true,
    title: 'Condición de Equilibrio Rotacional',
    description: 'Para que un objeto esté en equilibrio rotacional (no gire), la suma de todos los momentos (torques) que actúan sobre él debe ser igual a cero. Se asigna un signo positivo a los momentos que tienden a causar una rotación antihoraria y un signo negativo a los que causan una rotación horaria.',
    formula: '\\Sigma M = M_1 + M_2 + ... = 0'
  }
];
