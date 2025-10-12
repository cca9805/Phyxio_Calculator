
import { formatNumber } from "../../../utils/formatNumber";

const degToRad = deg => deg * (Math.PI / 180);

export const calculators = [
  {
    id: 'friccion_estatica_maxima',
    title: 'Fricción Estática Máxima',
    description: 'Calcula la fuerza máxima de fricción estática (fs,max) que un objeto puede experimentar antes de empezar a moverse.',
    formula: 'f_{s,max} = \\mu_s \\cdot N',
    variables: [
      { symbol: '\\mu_s', label: 'Coeficiente de fricción estática', unit: '', example: '0.4' },
      { symbol: 'N', label: 'Fuerza Normal', unit: 'N', example: '100' }
    ],
    output: { symbol: 'f_{s,max}', label: 'Fuerza de fricción estática máxima', unit: 'N' },
    resolve: (args) => {
      const μs = Number(args['\\mu_s']), N = Number(args.N);
      if ([μs, N].some(isNaN)) return { error: 'Valores inválidos.' };
      const fs_max = μs * N;
      return { 
        result: { 'f_{s,max}': formatNumber(fs_max) }, 
        steps: [`f_{s,max} = \\mu_s \\cdot N = ${formatNumber(μs)} \\cdot ${formatNumber(N)} = ${formatNumber(fs_max)}\\text{ N}`] 
      };
    }
  },
  {
    id: 'friccion_cinetica',
    title: 'Fricción Cinética',
    description: 'Calcula la fuerza de fricción (fk) que actúa sobre un objeto que ya está en movimiento.',
    formula: 'f_k = \\mu_k \\cdot N',
    variables: [
      { symbol: '\\mu_k', label: 'Coeficiente de fricción cinética', unit: '', example: '0.3' },
      { symbol: 'N', label: 'Fuerza Normal', unit: 'N', example: '100' }
    ],
    output: { symbol: 'f_k', label: 'Fuerza de fricción cinética', unit: 'N' },
    resolve: (args) => {
      const μk = Number(args['\\mu_k']), N = Number(args.N);
      if ([μk, N].some(isNaN)) return { error: 'Valores inválidos.' };
      const fk = μk * N;
      return { 
        result: { 'f_k': formatNumber(fk) }, 
        steps: [`f_k = \\mu_k \\cdot N = ${formatNumber(μk)} \\cdot ${formatNumber(N)} = ${formatNumber(fk)}\\text{ N}`] 
      };
    }
  },
  {
    id: 'fuerza_normal_plano_inclinado',
    title: 'Fuerza Normal en Plano Inclinado',
    description: 'Calcula la fuerza normal (N) para un objeto de masa (m) en un plano inclinado un ángulo (θ).',
    formula: 'N = m g \\cdot \\cos(\\theta)',
    variables: [
      { symbol: 'm', label: 'Masa del objeto', unit: 'kg', example: '10' },
      { symbol: '\\theta', label: 'Ángulo de inclinación', unit: '°', example: '30' },
      { symbol: 'g', label: 'Aceleración de la gravedad', unit: 'm/s²', example: '9.81', default: 9.81 }
    ],
    output: { symbol: 'N', label: 'Fuerza Normal', unit: 'N' },
    resolve: (args) => {
      const m = Number(args.m), theta = Number(args['\\theta']), g = Number(args.g || 9.81);
      if ([m, theta, g].some(isNaN)) return { error: 'Valores inválidos.' };
      const N = m * g * Math.cos(degToRad(theta));
      return { 
        result: { 'N': formatNumber(N) }, 
        steps: [
        `N = m \\cdot g \\cdot \\cos(\\theta) = ${formatNumber(m)} \\cdot ${formatNumber(g)} \\cdot \\cos(${theta}°) = ${formatNumber(N)}\\text{ N}`
      ] };
    }
  }
];
