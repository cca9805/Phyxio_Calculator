import { formatNumber } from '../../../utils/formatNumber';

const PI = Math.PI;
const G = 9.81; // Gravedad estándar

export const calculators = [
  // --- Grupo 1: Parámetros Fundamentales del MAS ---
  {
    id: 'mas-omega-desde-periodo',
    title: 'Calcular ω (desde Período)',
    formula: 'ω = 2π / T',
    variables: [{ symbol: 'T', label: 'Período (T)', unit: 's', example: '0.89' }],
    output: { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
    resolve: ({ T }) => {
      if (T === 0) return { error: 'El período no puede ser cero.' };
      const w = (2 * PI) / T;
      return { result: { w }, steps: [`ω = 2π / ${T} = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mas-periodo-desde-omega',
    title: 'Calcular Período (desde ω)',
    formula: 'T = 2π / ω',
    variables: [{ symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s', example: '7.07' }],
    output: { symbol: 'T', label: 'Período (T)', unit: 's' },
    resolve: ({ w }) => {
      if (w === 0) return { error: 'La frecuencia angular no puede ser cero.' };
      const T = (2 * PI) / w;
      return { result: { T }, steps: [`T = 2π / ${w} = ${formatNumber(T)} s`] };
    }
  },
  {
    id: 'mas-frecuencia-desde-periodo',
    title: 'Calcular Frecuencia (desde Período)',
    formula: 'f = 1 / T',
    variables: [{ symbol: 'T', label: 'Período (T)', unit: 's', example: '0.89' }],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: ({ T }) => {
      if (T === 0) return { error: 'El período no puede ser cero.' };
      const f = 1 / T;
      return { result: { f }, steps: [`f = 1 / ${T} = ${formatNumber(f)} Hz`] };
    }
  },
  {
    id: 'mas-omega-desde-frecuencia',
    title: 'Calcular ω (desde Frecuencia)',
    formula: 'ω = 2πf',
    variables: [{ symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz', example: '1.12' }],
    output: { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
    resolve: ({ f }) => {
      const w = 2 * PI * f;
      return { result: { w }, steps: [`ω = 2π * ${f} = ${formatNumber(w)} rad/s`] };
    }
  },

  // --- Grupo 2: Sistema Masa-Resorte ---
  {
    id: 'mas-omega-resorte',
    title: 'Calcular ω (Masa-Resorte)',
    formula: 'ω = √(k/m)',
    variables: [
      { symbol: 'k', label: 'Constante elástica (k)', unit: 'N/m', example: '100' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '2' }
    ],
    output: { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
    resolve: ({ k, m }) => {
      if (m === 0) return { error: 'La masa no puede ser cero.' };
      const w = Math.sqrt(k / m);
      return { result: { w }, steps: [`ω = √(${k}/${m}) = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mas-k-resorte',
    title: 'Calcular k (Masa-Resorte)',
    formula: 'k = m * ω²',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '2' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s', example: '7.07' }
    ],
    output: { symbol: 'k', label: 'Constante elástica (k)', unit: 'N/m' },
    resolve: ({ m, w }) => {
      const k = m * Math.pow(w, 2);
      return { result: { k }, steps: [`k = ${m} * ${w}² = ${formatNumber(k)} N/m`] };
    }
  },
  {
    id: 'mas-m-resorte',
    title: 'Calcular Masa (Masa-Resorte)',
    formula: 'm = k / ω²',
    variables: [
      { symbol: 'k', label: 'Constante elástica (k)', unit: 'N/m', example: '100' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s', example: '7.07' }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ k, w }) => {
      if (w === 0) return { error: 'La frecuencia angular no puede ser cero.' };
      const m = k / Math.pow(w, 2);
      return { result: { m }, steps: [`m = ${k} / ${w}² = ${formatNumber(m)} kg`] };
    }
  },
  
  // --- Grupo 3: Péndulo Simple ---
  {
    id: 'mas-omega-pendulo',
    title: 'Calcular ω (Péndulo Simple)',
    formula: 'ω = √(g/L)',
    variables: [
      { symbol: 'L', label: 'Longitud (L)', unit: 'm', example: '1' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
    resolve: ({ L, g = G }) => {
      if (L === 0) return { error: 'La longitud no puede ser cero.' };
      const w = Math.sqrt(g / L);
      return { result: { w }, steps: [`ω = √(${g}/${L}) = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mas-L-pendulo',
    title: 'Calcular Longitud (Péndulo Simple)',
    formula: 'L = g / ω²',
    variables: [
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s', example: '3.13' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'L', label: 'Longitud (L)', unit: 'm' },
    resolve: ({ w, g = G }) => {
      if (w === 0) return { error: 'La frecuencia angular no puede ser cero.' };
      const L = g / Math.pow(w, 2);
      return { result: { L }, steps: [`L = ${g} / ${w}² = ${formatNumber(L)} m`] };
    }
  },
  {
    id: 'mas-g-pendulo',
    title: 'Calcular Gravedad (Péndulo Simple)',
    formula: 'g = L * ω²',
    variables: [
      { symbol: 'L', label: 'Longitud (L)', unit: 'm', example: '1' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s', example: '3.13' }
    ],
    output: { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²' },
    resolve: ({ L, w }) => {
      const g = L * Math.pow(w, 2);
      return { result: { g }, steps: [`g = ${L} * ${w}² = ${formatNumber(g)} m/s²`] };
    }
  },

  // --- Grupo 4: Cinemática del MAS ---
  {
    id: 'mas-posicion',
    title: 'Posición x(t)',
    formula: 'x(t) = A * cos(ωt + φ)',
    variables: [
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm', example: '0.5' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s', example: '1.5' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '1.2' },
      { symbol: 'phi', label: 'Fase inicial (φ)', unit: 'rad', example: '0.2', isOptional: true }
    ],
    output: { symbol: 'x', label: 'Posición (x)', unit: 'm' },
    resolve: ({ A, w, t, phi = 0 }) => {
      const x = A * Math.cos(w * t + phi);
      return { result: { x }, steps: [`x(${t}) = ${A}cos(${w}*${t} + ${phi}) = ${formatNumber(x)} m`] };
    }
  },
  {
    id: 'mas-velocidad',
    title: 'Velocidad v(t)',
    formula: 'v(t) = -Aω * sin(ωt + φ)',
    variables: [
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm', example: '0.5' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s', example: '1.5' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '1.2' },
      { symbol: 'phi', label: 'Fase inicial (φ)', unit: 'rad', example: '0.2', isOptional: true }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ A, w, t, phi = 0 }) => {
      const v = -A * w * Math.sin(w * t + phi);
      return { result: { v }, steps: [`v(${t}) = -${A}*${w}*sin(...) = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'mas-aceleracion',
    title: 'Aceleración a(t)',
    formula: 'a(t) = -Aω² * cos(ωt + φ)',
    variables: [
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm', example: '0.5' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s', example: '1.5' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '1.2' },
      { symbol: 'phi', label: 'Fase inicial (φ)', unit: 'rad', example: '0.2', isOptional: true }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ A, w, t, phi = 0 }) => {
      const a = -A * Math.pow(w, 2) * Math.cos(w * t + phi);
      return { result: { a }, steps: [`a(${t}) = -${A}*${w}²*cos(...) = ${formatNumber(a)} m/s²`] };
    }
  },
  {
    id: 'mas-velocidad-maxima',
    title: 'Velocidad Máxima (vₘₐₓ)',
    formula: 'vₘₐₓ = A * ω',
    variables: [
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm', example: '0.5' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s', example: '1.5' }
    ],
    output: { symbol: 'vMax', label: 'Velocidad Máxima (vₘₐₓ)', unit: 'm/s' },
    resolve: ({ A, w }) => {
      const vMax = A * w;
      return { result: { vMax }, steps: [`vₘₐₓ = ${A} * ${w} = ${formatNumber(vMax)} m/s`] };
    }
  },
  {
    id: 'mas-aceleracion-maxima',
    title: 'Aceleración Máxima (aₘₐₓ)',
    formula: 'aₘₐₓ = A * ω²',
    variables: [
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm', example: '0.5' },
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s', example: '1.5' }
    ],
    output: { symbol: 'aMax', label: 'Aceleración Máxima (aₘₐₓ)', unit: 'm/s²' },
    resolve: ({ A, w }) => {
      const aMax = A * Math.pow(w, 2);
      return { result: { aMax }, steps: [`aₘₐₓ = ${A} * ${w}² = ${formatNumber(aMax)} m/s²`] };
    }
  },

  // --- Grupo 5: Dinámica del MAS ---
  {
    id: 'mas-fuerza-hooke',
    title: 'Fuerza (Ley de Hooke)',
    formula: 'F = -k * x',
    variables: [
        { symbol: 'k', label: 'Constante elástica (k)', unit: 'N/m', example: '100' },
        { symbol: 'x', label: 'Posición (x)', unit: 'm', example: '0.25' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ k, x }) => {
      const F = -k * x;
      return { result: { F }, steps: [`F = -${k} * ${x} = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'mas-aceleracion-posicion',
    title: 'Aceleración a(x)',
    formula: 'a(x) = -ω² * x',
    variables: [
      { symbol: 'w', label: 'Frecuencia angular (ω)', unit: 'rad/s', example: '7.07' },
      { symbol: 'x', label: 'Posición (x)', unit: 'm', example: '-0.25' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ w, x }) => {
      const a = -Math.pow(w, 2) * x;
      return { result: { a }, steps: [`a = -${w}² * (${x}) = ${formatNumber(a)} m/s²`] };
    }
  },

  // --- Grupo 6: Energía del MAS ---
  {
    id: 'mas-energia-total',
    title: 'Energía Total (E)',
    formula: 'E = ½kA²',
    variables: [
      { symbol: 'k', label: 'Constante elástica (k)', unit: 'N/m', example: '100' },
      { symbol: 'A', label: 'Amplitud (A)', unit: 'm', example: '0.5' }
    ],
    output: { symbol: 'E', label: 'Energía Total (E)', unit: 'J' },
    resolve: ({ k, A }) => {
      const E = 0.5 * k * Math.pow(A, 2);
      return { result: { E }, steps: [`E = ½ * ${k} * ${A}² = ${formatNumber(E)} J`] };
    }
  },
  {
    id: 'mas-energia-potencial',
    title: 'Energía Potencial Elástica (Eₚ)',
    formula: 'Eₚ = ½kx²',
    variables: [
      { symbol: 'k', label: 'Constante elástica (k)', unit: 'N/m', example: '100' },
      { symbol: 'x', label: 'Posición (x)', unit: 'm', example: '0.2' }
    ],
    output: { symbol: 'Ep', label: 'Energía Potencial (Eₚ)', unit: 'J' },
    resolve: ({ k, x }) => {
      const Ep = 0.5 * k * Math.pow(x, 2);
      return { result: { Ep }, steps: [`Eₚ = ½ * ${k} * ${x}² = ${formatNumber(Ep)} J`] };
    }
  },
  {
    id: 'mas-energia-cinetica',
    title: 'Energía Cinética (Eₖ)',
    formula: 'Eₖ = E - Eₚ',
    variables: [
      { symbol: 'E', label: 'Energía Total (E)', unit: 'J', example: '12.5' },
      { symbol: 'Ep', label: 'Energía Potencial (Eₚ)', unit: 'J', example: '2' }
    ],
    output: { symbol: 'Ek', label: 'Energía Cinética (Eₖ)', unit: 'J' },
    resolve: ({ E, Ep }) => {
      const Ek = E - Ep;
      return { result: { Ek }, steps: [`Eₖ = ${E} - ${Ep} = ${formatNumber(Ek)} J`] };
    }
  },
  {
    id: 'mas-velocidad-desde-energia',
    title: 'Velocidad (desde Energía)',
    formula: 'v = ±√(2Eₖ/m)',
    variables: [
      { symbol: 'Ek', label: 'Energía Cinética (Eₖ)', unit: 'J', example: '10.5' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '2' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ Ek, m }) => {
      if (m === 0) return { error: "La masa no puede ser cero." };
      const v = Math.sqrt(2 * Ek / m);
      return { result: { v: `±${formatNumber(v)}` }, steps: [`v = ±√(2 * ${Ek} / ${m}) = ±${formatNumber(v)} m/s`] };
    }
  }
];
