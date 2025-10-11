import { formatNumber } from "../../../utils/formatNumber";

const degToRad = deg => deg * (Math.PI / 180);

export const calculators = [
  {
    id: 'friccion_estatica_maxima',
    title: 'Fricción Estática Máxima',
    description: 'Calcula la fuerza máxima de fricción estática (fs_max) que un objeto puede experimentar antes de empezar a moverse.',
    formula: 'fs,max = μs · N',
    variables: [
      { symbol: 'μs', label: 'Coeficiente de fricción estática', unit: '', example: '0.4' },
      { symbol: 'N', label: 'Fuerza Normal', unit: 'N', example: '100' }
    ],
    output: { symbol: 'fs_max', label: 'Fuerza de fricción estática máxima', unit: 'N' },
    resolve: (args) => {
      const μs = Number(args.μs), N = Number(args.N);
      if ([μs, N].some(isNaN)) return { error: 'Valores inválidos.' };
      const fs_max = μs * N;
      return { result: { fs_max }, steps: [`$f_{s,max} = \\mu_s \\cdot N = ${formatNumber(μs)} \\cdot ${formatNumber(N)} = ${formatNumber(fs_max)} N$`] };
    }
  },
  {
    id: 'friccion_cinetica',
    title: 'Fricción Cinética',
    description: 'Calcula la fuerza de fricción (fk) que actúa sobre un objeto que ya está en movimiento.',
    formula: 'fk = μk · N',
    variables: [
      { symbol: 'μk', label: 'Coeficiente de fricción cinética', unit: '', example: '0.3' },
      { symbol: 'N', label: 'Fuerza Normal', unit: 'N', example: '100' }
    ],
    output: { symbol: 'fk', label: 'Fuerza de fricción cinética', unit: 'N' },
    resolve: (args) => {
      const μk = Number(args.μk), N = Number(args.N);
      if ([μk, N].some(isNaN)) return { error: 'Valores inválidos.' };
      const fk = μk * N;
      return { result: { fk }, steps: [`$f_k = \\mu_k \\cdot N = ${formatNumber(μk)} \\cdot ${formatNumber(N)} = ${formatNumber(fk)} N$`] };
    }
  },
  {
    id: 'fuerza_normal_plano_inclinado',
    title: 'Fuerza Normal en Plano Inclinado',
    description: 'Calcula la fuerza normal (N) para un objeto de masa (m) en un plano inclinado un ángulo (θ).',
    formula: 'N = mg·cos(θ)',
    variables: [
      { symbol: 'm', label: 'Masa del objeto', unit: 'kg', example: '10' },
      { symbol: 'theta', label: 'Ángulo de inclinación', unit: '°', example: '30' },
      { symbol: 'g', label: 'Aceleración de la gravedad', unit: 'm/s²', example: '9.81', default: 9.81 }
    ],
    output: { symbol: 'N', label: 'Fuerza Normal', unit: 'N' },
    resolve: (args) => {
      const m = Number(args.m), theta = Number(args.theta), g = Number(args.g || 9.81);
      if ([m, theta, g].some(isNaN)) return { error: 'Valores inválidos.' };
      const N = m * g * Math.cos(degToRad(theta));
      return { result: { N }, steps: [
        `$N = m \\cdot g \\cdot \\cos(\\theta) = ${formatNumber(m)} \\cdot ${formatNumber(g)} \\cdot \\cos(${theta}°) = ${formatNumber(N)} N$`
      ] };
    }
  }
];