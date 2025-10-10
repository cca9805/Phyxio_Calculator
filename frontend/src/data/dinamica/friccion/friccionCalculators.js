import { formatNumber } from '../../../utils/formatNumber';

const G = 9.81;
const PI = Math.PI;

export const calculators = [
  // --- Grupo 1: Fricción Estática ---
  {
    id: 'friccion-estatica-maxima',
    title: 'Fricción Estática Máxima (ƒs,max)',
    formula: 'ƒs,max = µs * N',
    variables: [
      { symbol: 'mus', label: 'Coeficiente Estático (µs)', unit: '', example: '0.4' },
      { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N', example: '98.1' }
    ],
    output: { symbol: 'fs_max', label: 'Fuerza de Fricción Estática Máxima (ƒs,max)', unit: 'N' },
    resolve: ({ mus, N }) => {
      const fs_max = mus * N;
      return { result: { fs_max }, steps: [`ƒs,max = ${mus} * ${N} = ${formatNumber(fs_max)} N`] };
    }
  },
  {
    id: 'friccion-coeficiente-estatico',
    title: 'Coeficiente Estático (µs)',
    formula: 'µs = ƒs,max / N',
    variables: [
      { symbol: 'fs_max', label: 'Fricción Estática Máxima (ƒs,max)', unit: 'N', example: '39.24' },
      { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N', example: '98.1' }
    ],
    output: { symbol: 'mus', label: 'Coeficiente Estático (µs)', unit: '' },
    resolve: ({ fs_max, N }) => {
      if (N === 0) return { error: "La Fuerza Normal no puede ser cero." };
      const mus = fs_max / N;
      return { result: { mus }, steps: [`µs = ${fs_max} / ${N} = ${formatNumber(mus)}`] };
    }
  },

  // --- Grupo 2: Fricción Cinética ---
  {
    id: 'friccion-cinetica-fuerza',
    title: 'Fuerza de Fricción Cinética (ƒk)',
    formula: 'ƒk = µk * N',
    variables: [
      { symbol: 'muk', label: 'Coeficiente Cinético (µk)', unit: '', example: '0.25' },
      { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N', example: '98.1' }
    ],
    output: { symbol: 'fk', label: 'Fuerza de Fricción Cinética (ƒk)', unit: 'N' },
    resolve: ({ muk, N }) => {
      const fk = muk * N;
      return { result: { fk }, steps: [`ƒk = ${muk} * ${N} = ${formatNumber(fk)} N`] };
    }
  },
  {
    id: 'friccion-coeficiente-cinetico',
    title: 'Coeficiente Cinético (µk)',
    formula: 'µk = ƒk / N',
    variables: [
      { symbol: 'fk', label: 'Fricción Cinética (ƒk)', unit: 'N', example: '24.53' },
      { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N', example: '98.1' }
    ],
    output: { symbol: 'muk', label: 'Coeficiente Cinético (µk)', unit: '' },
    resolve: ({ fk, N }) => {
      if (N === 0) return { error: "La Fuerza Normal no puede ser cero." };
      const muk = fk / N;
      return { result: { muk }, steps: [`µk = ${fk} / ${N} = ${formatNumber(muk)}`] };
    }
  },
  {
    id: 'friccion-normal-desde-fuerza',
    title: 'Fuerza Normal (desde Fricción)',
    formula: 'N = ƒ / µ',
    variables: [
      { symbol: 'f', label: 'Fuerza de fricción (ƒ)', unit: 'N', example: '30' },
      { symbol: 'mu', label: 'Coeficiente de fricción (µ)', unit: '', example: '0.3' }
    ],
    output: { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N' },
    resolve: ({ f, mu }) => {
      if (mu === 0) return { error: "El coeficiente de fricción no puede ser cero." };
      const N = f / mu;
      return { result: { N }, steps: [`N = ${f} / ${mu} = ${formatNumber(N)} N`] };
    }
  },

  // --- Grupo 3: Aceleración con Fricción (Plano Horizontal) ---
  {
    id: 'friccion-aceleracion-horizontal',
    title: 'Aceleración Resultante (Horizontal)',
    formula: 'a = (F_apl - µk * mg) / m',
    variables: [
      { symbol: 'F_apl', label: 'Fuerza Aplicada (F_apl)', unit: 'N', example: '50' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '10' },
      { symbol: 'muk', label: 'Coeficiente Cinético (µk)', unit: '', example: '0.25' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ F_apl, m, muk, g = G }) => {
      if (m === 0) return { error: "La masa no puede ser cero." };
      const N = m * g;
      const fk = muk * N;
      if (F_apl < fk) return { error: `La fuerza aplicada (${F_apl} N) es menor que la fricción (${formatNumber(fk)} N). No hay aceleración.` };
      const a = (F_apl - fk) / m;
      return { result: { a }, steps: [`Fuerza Neta: F_apl - ƒk = ${F_apl} - ${formatNumber(fk)} = ${formatNumber(F_apl - fk)} N`, `a = F_neta / m = ${formatNumber(a)} m/s²`] };
    }
  },

  // --- Grupo 4: Fricción en Plano Inclinado ---
  {
    id: 'friccion-aceleracion-plano-inclinado',
    title: 'Aceleración Neta (Plano Inclinado)',
    formula: 'a = g * (sin(θ) - µk * cos(θ))',
    variables: [
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '30' },
      { symbol: 'muk', label: 'Coeficiente Cinético (µk)', unit: '', example: '0.2' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ theta, muk, g = G }) => {
      const theta_rad = theta * (PI / 180);
      const sin_theta = Math.sin(theta_rad);
      const cos_theta = Math.cos(theta_rad);
      const a = g * (sin_theta - muk * cos_theta);
      const F_paralela = g * sin_theta;
      const F_friccion = g * muk * cos_theta;
      const steps = [
        `Componente Gravitacional Paralela: g*sin(${theta}) = ${formatNumber(F_paralela)} m/s²`,
        `Componente de Fricción: g*µk*cos(${theta}) = ${formatNumber(F_friccion)} m/s²`,
        `Aceleración neta: a = ${formatNumber(F_paralela)} - ${formatNumber(F_friccion)} = ${formatNumber(a)} m/s²`,
        a < 0 ? 'La fricción es mayor que la componente del peso, el objeto no se desliza hacia abajo por sí solo.' : ''
      ].filter(Boolean);
      return { result: { a }, steps };
    }
  },
  {
    id: 'friccion-angulo-equilibrio',
    title: 'Ángulo de Reposo (Equilibrio)',
    formula: 'θ = atan(µs)',
    variables: [
        { symbol: 'mus', label: 'Coeficiente Estático (µs)', unit: '', example: '0.4' }
    ],
    output: { symbol: 'theta', label: 'Ángulo de Reposo (θ)', unit: 'grados' },
    resolve: ({ mus }) => {
        const theta_rad = Math.atan(mus);
        const theta = theta_rad * (180 / PI);
        return { result: { theta }, steps: [`En el ángulo de reposo, tan(θ) = µs.`, `θ = atan(${mus}) = ${formatNumber(theta)}°`] };
    }
  }
];
