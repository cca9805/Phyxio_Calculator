import { formatNumber } from '../../../utils/formatNumber';

const G = 9.81; // Valor estándar de la gravedad en m/s²
const PI = Math.PI;

export const calculators = [
  // --- Grupo 1: Segunda Ley de Newton ---
  {
    id: 'newton-fuerza',
    title: 'Calcular Fuerza (F = ma)',
    formula: 'F = m * a',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '10' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ m, a }) => {
      const F = m * a;
      return { result: { F }, steps: [`F = ${m} * ${a} = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'newton-masa',
    title: 'Calcular Masa (m = F/a)',
    formula: 'm = F / a',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N', example: '20' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ F, a }) => {
      if (a === 0) return { error: "La aceleración no puede ser cero." };
      const m = F / a;
      return { result: { m }, steps: [`m = ${F} / ${a} = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'newton-aceleracion',
    title: 'Calcular Aceleración (a = F/m)',
    formula: 'a = F / m',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N', example: '20' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '10' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ F, m }) => {
      if (m === 0) return { error: "La masa no puede ser cero." };
      const a = F / m;
      return { result: { a }, steps: [`a = ${F} / ${m} = ${formatNumber(a)} m/s²`] };
    }
  },

  // --- Grupo 2: Peso y Componentes de Fuerza ---
  {
    id: 'newton-peso',
    title: 'Calcular Peso (P = mg)',
    formula: 'P = m * g',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '5' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'P', label: 'Peso (P)', unit: 'N' },
    resolve: ({ m, g = G }) => {
      const P = m * g;
      return { result: { P }, steps: [`P = ${m} * ${g} = ${formatNumber(P)} N`] };
    }
  },
  {
    id: 'newton-masa-desde-peso',
    title: 'Calcular Masa (m = P/g)',
    formula: 'm = P / g',
    variables: [
      { symbol: 'P', label: 'Peso (P)', unit: 'N', example: '49.05' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ P, g = G }) => {
      if (g === 0) return { error: "La gravedad no puede ser cero." };
      const m = P / g;
      return { result: { m }, steps: [`m = ${P} / ${g} = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'newton-fuerza-paralela',
    title: 'Componente Paralela (F∥)',
    formula: 'F∥ = mg * sin(θ)',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '5' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '30' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'F_par', label: 'Fuerza Paralela (F∥)', unit: 'N' },
    resolve: ({ m, theta, g = G }) => {
      const theta_rad = theta * (PI / 180);
      const F_par = m * g * Math.sin(theta_rad);
      return { result: { F_par }, steps: [`F∥ = ${m} * ${g} * sin(${theta}°) = ${formatNumber(F_par)} N`] };
    }
  },
  {
    id: 'newton-fuerza-normal',
    title: 'Componente Normal (N)',
    formula: 'N = mg * cos(θ)',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '5' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '30' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N' },
    resolve: ({ m, theta, g = G }) => {
      const theta_rad = theta * (PI / 180);
      const N = m * g * Math.cos(theta_rad);
      return { result: { N }, steps: [`N = ${m} * ${g} * cos(${theta}°) = ${formatNumber(N)} N`] };
    }
  },

  // --- Grupo 3: Despejes en Plano Inclinado ---
  {
    id: 'newton-masa-desde-fparalela',
    title: 'Calcular Masa (desde F∥)',
    formula: 'm = F∥ / (g * sin(θ))',
    variables: [
      { symbol: 'F_par', label: 'Fuerza Paralela (F∥)', unit: 'N', example: '24.52' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '30' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ F_par, theta, g = G }) => {
      const theta_rad = theta * (PI / 180);
      const divisor = g * Math.sin(theta_rad);
      if (divisor === 0) return { error: "El denominador (g * sin(θ)) no puede ser cero." };
      const m = F_par / divisor;
      return { result: { m }, steps: [`m = ${F_par} / (${g} * sin(${theta}°)) = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'newton-masa-desde-normal',
    title: 'Calcular Masa (desde N)',
    formula: 'm = N / (g * cos(θ))',
    variables: [
      { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N', example: '42.48' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '30' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ N, theta, g = G }) => {
      const theta_rad = theta * (PI / 180);
      const divisor = g * Math.cos(theta_rad);
      if (divisor === 0) return { error: "El denominador (g * cos(θ)) no puede ser cero." };
      const m = N / divisor;
      return { result: { m }, steps: [`m = ${N} / (${g} * cos(${theta}°)) = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'newton-angulo-desde-fparalela',
    title: 'Calcular Ángulo (desde F∥)',
    formula: 'θ = asin(F∥ / mg)',
    variables: [
      { symbol: 'F_par', label: 'Fuerza Paralela (F∥)', unit: 'N', example: '24.52' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '5' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    resolve: ({ F_par, m, g = G }) => {
      const divisor = m * g;
      if (divisor === 0) return { error: "El producto mg no puede ser cero." };
      const ratio = F_par / divisor;
      if (ratio < -1 || ratio > 1) return { error: "Argumento de asin() fuera de rango [-1, 1]." };
      const theta_rad = Math.asin(ratio);
      const theta = theta_rad * (180 / PI);
      return { result: { theta }, steps: [`θ = asin(${F_par} / (${m}*${g})) = ${formatNumber(theta)}°`] };
    }
  },
  {
    id: 'newton-angulo-desde-normal',
    title: 'Calcular Ángulo (desde N)',
    formula: 'θ = acos(N / mg)',
    variables: [
      { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N', example: '42.48' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '5' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    resolve: ({ N, m, g = G }) => {
      const divisor = m * g;
      if (divisor === 0) return { error: "El producto mg no puede ser cero." };
      const ratio = N / divisor;
      if (ratio < -1 || ratio > 1) return { error: "Argumento de acos() fuera de rango [-1, 1]." };
      const theta_rad = Math.acos(ratio);
      const theta = theta_rad * (180 / PI);
      return { result: { theta }, steps: [`θ = acos(${N} / (${m}*${g})) = ${formatNumber(theta)}°`] };
    }
  }
];
