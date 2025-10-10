import { formatNumber } from '../../../utils/formatNumber';

const PI = Math.PI;
const G = 9.81; // Aceleración gravitatoria estándar

export const calculators = [
  // --- Grupo 1: Fundamentos (Resortes y Energía) ---
  {
    id: 'oscilaciones-fuerza-hooke',
    title: 'Fuerza de Resorte (Ley de Hooke)',
    formula: 'F = -kx',
    variables: [
      { symbol: 'k', label: 'Constante del Resorte (k)', unit: 'N/m', example: '100' },
      { symbol: 'x', label: 'Desplazamiento (x)', unit: 'm', example: '0.2' }
    ],
    output: { symbol: 'F', label: 'Fuerza Restauradora (F)', unit: 'N' },
    resolve: ({ k, x }) => {
      const F = -k * x;
      return { result: { F }, steps: [`F = -(${k} * ${x}) = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'oscilaciones-energia-potencial-elastica',
    title: 'Energía Potencial Elástica (Ue)',
    formula: 'Ue = ½kx²',
    variables: [
      { symbol: 'k', label: 'Constante del Resorte (k)', unit: 'N/m', example: '100' },
      { symbol: 'x', label: 'Desplazamiento (x)', unit: 'm', example: '0.2' }
    ],
    output: { symbol: 'Ue', label: 'Energía Potencial (Ue)', unit: 'J' },
    resolve: ({ k, x }) => {
      const Ue = 0.5 * k * x**2;
      return { result: { Ue }, steps: [`Ue = 0.5 * ${k} * ${x}² = ${formatNumber(Ue)} J`] };
    }
  },
  {
    id: 'oscilaciones-energia-total',
    title: 'Energía Total en MAS',
    formula: 'E = ½kA²',
    variables: [
      { symbol: 'k', label: 'Constante del Resorte (k)', unit: 'N/m', example: '100' },
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm', example: '0.3' }
    ],
    output: { symbol: 'E', label: 'Energía Total (E)', unit: 'J' },
    resolve: ({ k, A }) => {
      const E = 0.5 * k * A**2;
      return { result: { E }, steps: [`E = 0.5 * ${k} * ${A}² = ${formatNumber(E)} J`] };
    }
  },

  // --- Grupo 2: MAS - Sistema Masa-Resorte ---
  {
    id: 'mas-resorte-periodo',
    title: 'Período (T) - Masa-Resorte',
    formula: 'T = 2π√(m/k)',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '0.5' },
      { symbol: 'k', label: 'Constante (k)', unit: 'N/m', example: '50' }
    ],
    output: { symbol: 'T', label: 'Período (T)', unit: 's' },
    resolve: ({ m, k }) => {
      if (k === 0) return { error: "La constante k no puede ser cero." };
      const T = 2 * PI * Math.sqrt(m / k);
      return { result: { T }, steps: [`T = 2π * √(${m}/${k}) = ${formatNumber(T)} s`] };
    }
  },
  {
    id: 'mas-resorte-frecuencia-angular',
    title: 'Frecuencia Angular (ω) - Masa-Resorte',
    formula: 'ω = √(k/m)',
    variables: [
        { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '0.5' },
        { symbol: 'k', label: 'Constante (k)', unit: 'N/m', example: '50' }
    ],
    output: { symbol: 'ω', label: 'Frecuencia Angular (ω)', unit: 'rad/s' },
    resolve: ({ m, k }) => {
        if (m === 0) return { error: "La masa m no puede ser cero." };
        const ω = Math.sqrt(k/m);
        return { result: { ω }, steps: [`ω = √(${k}/${m}) = ${formatNumber(ω)} rad/s`] };
    }
  },

  // --- Grupo 3: MAS - Péndulo Simple ---
  {
    id: 'pendulo-simple-periodo',
    title: 'Período (T) - Péndulo Simple',
    formula: 'T = 2π√(L/g)',
    variables: [
      { symbol: 'L', label: 'Longitud de la cuerda (L)', unit: 'm', example: '1' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'T', label: 'Período (T)', unit: 's' },
    resolve: ({ L, g = G }) => {
      if (g === 0) return { error: "La gravedad g no puede ser cero." };
      const T = 2 * PI * Math.sqrt(L / g);
      return { result: { T }, steps: [`T = 2π * √(${L}/${g}) = ${formatNumber(T)} s`] };
    }
  },
  {
    id: 'pendulo-simple-longitud',
    title: 'Longitud (L) - Péndulo Simple',
    formula: 'L = g(T/2π)²',
    variables: [
      { symbol: 'T', label: 'Período (T)', unit: 's', example: '2' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'L', label: 'Longitud (L)', unit: 'm' },
    resolve: ({ T, g = G }) => {
      const L = g * (T / (2 * PI))**2;
      return { result: { L }, steps: [`L = ${g} * (${T}/2π)² = ${formatNumber(L)} m`] };
    }
  },

  // --- Grupo 4: Cinemática del MAS ---
  {
    id: 'mas-cinematica-posicion',
    title: 'Posición x(t) en MAS',
    formula: 'x(t) = Acos(ωt + φ)',
    variables: [
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm', example: '0.5' },
      { symbol: 'ω', label: 'Frec. Angular (ω)', unit: 'rad/s', example: '1.57' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '1' },
      { symbol: 'phi', label: 'Fase Inicial (φ)', unit: 'rad', example: '0', isOptional: true }
    ],
    output: { symbol: 'x', label: 'Posición (x)', unit: 'm' },
    resolve: ({ A, ω, t, phi = 0 }) => {
      const x = A * Math.cos(ω * t + phi);
      return { result: { x }, steps: [`x = ${A}cos(${ω}*${t} + ${phi}) = ${formatNumber(x)} m`] };
    }
  },
  {
    id: 'mas-cinematica-velocidad',
    title: 'Velocidad v(x) en MAS',
    formula: 'v = ±ω√(A² - x²)',
    variables: [
      { symbol: 'ω', label: 'Frec. Angular (ω)', unit: 'rad/s', example: '10' },
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm', example: '0.5' },
      { symbol: 'x', label: 'Posición (x)', unit: 'm', example: '0.3' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ ω, A, x }) => {
      if (A**2 - x**2 < 0) return { error: "La posición |x| no puede ser mayor que la amplitud A." };
      const v = ω * Math.sqrt(A**2 - x**2);
      return { result: { v }, steps: [`v = ±${ω}√(${A}² - ${x}²) = ±${formatNumber(v)} m/s`] };
    }
  },

  // --- Grupo 5: Oscilaciones Amortiguadas ---
  {
    id: 'oscilaciones-amortiguadas-frecuencia',
    title: 'Frecuencia Angular Amortiguada (ω\')',
    formula: "ω' = √(ω₀² - β²), donde β = b/2m",
    variables: [
      { symbol: 'k', label: 'Constante Resorte (k)', unit: 'N/m', example: '100' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '1' },
      { symbol: 'b', label: 'Coef. Amortiguamiento (b)', unit: 'kg/s', example: '5' }
    ],
    output: { symbol: 'ω_prime', label: 'Frecuencia Amortiguada (ω\')', unit: 'rad/s' },
    resolve: ({ k, m, b }) => {
      if (m === 0) return { error: "La masa m no puede ser cero." };
      const ω0_sq = k / m;
      const beta = b / (2 * m);
      const ω_prime_sq = ω0_sq - beta**2;
      if (ω_prime_sq < 0) return { error: "Sistema sobreamortiguado o críticamente amortiguado. No oscila." };
      const ω_prime = Math.sqrt(ω_prime_sq);
      return { result: { ω_prime }, steps: [`ω' = √(${k}/${m} - (${b}/(2*${m}))²) = ${formatNumber(ω_prime)} rad/s`] };
    }
  }
];
