import { formatNumber } from '../../../utils/formatNumber';

const G = 6.6743e-11; // N·m²/kg²
const PI = Math.PI;

// Helper para formatear la constante G en los pasos
const G_STR = G.toExponential(4);

export const calculators = [
  // --- Grupo 1: Ley de Gravitación Universal ---
  {
    id: 'gravitacion-fuerza',
    title: 'Fuerza de Gravitación (F)',
    formula: 'F = G * (m₁ * m₂) / r²',
    variables: [
      { symbol: 'm1', label: 'Masa 1 (m₁)', unit: 'kg', example: '5.972e24' },
      { symbol: 'm2', label: 'Masa 2 (m₂)', unit: 'kg', example: '70' },
      { symbol: 'r', label: 'Distancia (r)', unit: 'm', example: '6.371e6' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ m1, m2, r }) => {
      if (r === 0) return { error: "La distancia no puede ser cero." };
      const r_sq = Math.pow(r, 2);
      const F = (G * m1 * m2) / r_sq;
      return { result: { F }, steps: [`F = ${G_STR} * (${m1} * ${m2}) / ${r}² = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'gravitacion-aceleracion-g',
    title: 'Aceleración Gravitacional (g)',
    formula: 'g = G * M / r²',
    variables: [
      { symbol: 'M', label: 'Masa del cuerpo central (M)', unit: 'kg', example: '5.972e24' },
      { symbol: 'r', label: 'Radio del cuerpo (r)', unit: 'm', example: '6.371e6' }
    ],
    output: { symbol: 'g', label: 'Aceleración gravitacional (g)', unit: 'm/s²' },
    resolve: ({ M, r }) => {
      if (r === 0) return { error: "El radio no puede ser cero." };
      const g = (G * M) / Math.pow(r, 2);
      return { result: { g }, steps: [`g = (${G_STR} * ${M}) / ${r}² = ${formatNumber(g)} m/s²`] };
    }
  },
  
  // --- Grupo 2: Energía Potencial Gravitatoria ---
  {
    id: 'energia-potencial-gravitatoria-u',
    title: 'Energía Potencial Gravitatoria (U)',
    formula: 'U = -G * (m₁ * m₂) / r',
    variables: [
      { symbol: 'm1', label: 'Masa 1 (m₁)', unit: 'kg', example: '5.972e24' },
      { symbol: 'm2', label: 'Masa 2 (m₂)', unit: 'kg', example: '1000' },
      { symbol: 'r', label: 'Distancia (r)', unit: 'm', example: '7e6' }
    ],
    output: { symbol: 'U', label: 'Energía Potencial (U)', unit: 'J' },
    resolve: ({ m1, m2, r }) => {
      if (r === 0) return { error: "La distancia no puede ser cero." };
      const U = (-G * m1 * m2) / r;
      return { result: { U }, steps: [`U = -${G_STR} * (${m1} * ${m2}) / ${r} = ${formatNumber(U)} J`] };
    }
  },

  // --- Grupo 3: Órbitas y Velocidades ---
  {
    id: 'velocidad-orbital',
    title: 'Velocidad Orbital',
    formula: 'v = √(G * M / r)',
    variables: [
      { symbol: 'M', label: 'Masa del cuerpo central (M)', unit: 'kg', example: '5.972e24' },
      { symbol: 'r', label: 'Radio de la órbita (r)', unit: 'm', example: '7e6' }
    ],
    output: { symbol: 'v', label: 'Velocidad Orbital (v)', unit: 'm/s' },
    resolve: ({ M, r }) => {
      if (r === 0) return { error: "El radio no puede ser cero." };
      const ratio = (G * M) / r;
      if (ratio < 0) return { error: "Argumento de raíz no puede ser negativo." };
      const v = Math.sqrt(ratio);
      return { result: { v }, steps: [`v = √(${G_STR} * ${M} / ${r}) = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'velocidad-escape',
    title: 'Velocidad de Escape',
    formula: 'v_esc = √(2 * G * M / r)',
    variables: [
      { symbol: 'M', label: 'Masa del cuerpo (M)', unit: 'kg', example: '5.972e24' },
      { symbol: 'r', label: 'Radio del cuerpo (r)', unit: 'm', example: '6.371e6' }
    ],
    output: { symbol: 'v_esc', label: 'Velocidad de Escape (v_esc)', unit: 'm/s' },
    resolve: ({ M, r }) => {
      if (r === 0) return { error: "El radio no puede ser cero." };
      const ratio = (2 * G * M) / r;
      if (ratio < 0) return { error: "Argumento de raíz no puede ser negativo." };
      const v_esc = Math.sqrt(ratio);
      return { result: { v_esc }, steps: [`v_esc = √(2 * ${G_STR} * ${M} / ${r}) = ${formatNumber(v_esc)} m/s`] };
    }
  },
  
  // --- Grupo 4: Período Orbital (3ª Ley de Kepler) ---
  {
    id: 'periodo-orbital',
    title: 'Período Orbital (T)',
    formula: 'T = √((4π² * r³) / (G * M))',
    variables: [
      { symbol: 'M', label: 'Masa del cuerpo central (M)', unit: 'kg', example: '5.972e24' },
      { symbol: 'r', label: 'Radio de la órbita (r)', unit: 'm', example: '4.2241e8' }
    ],
    output: { symbol: 'T', label: 'Período Orbital (T)', unit: 's' },
    resolve: ({ M, r }) => {
      const GM = G * M;
      if (GM === 0) return { error: "El producto G*M no puede ser cero." };
      const ratio = (4 * Math.pow(PI, 2) * Math.pow(r, 3)) / GM;
      if (ratio < 0) return { error: "Argumento de raíz no puede ser negativo." };
      const T = Math.sqrt(ratio);
      return { result: { T }, steps: [`T = √( (4π² * ${r}³) / (${G_STR} * ${M}) ) = ${formatNumber(T)} s`] };
    }
  },
  {
    id: 'radio-orbital-kepler',
    title: 'Radio Orbital (desde Período)',
    formula: 'r = ∛((G * M * T²) / (4π²))',
    variables: [
      { symbol: 'M', label: 'Masa del cuerpo central (M)', unit: 'kg', example: '5.972e24' },
      { symbol: 'T', label: 'Período Orbital (T)', unit: 's', example: '2360521' } // Aprox 27.32 días
    ],
    output: { symbol: 'r', label: 'Radio de la órbita (r)', unit: 'm' },
    resolve: ({ M, T }) => {
      const numerator = G * M * Math.pow(T, 2);
      const denominator = 4 * Math.pow(PI, 2);
      const r = Math.cbrt(numerator / denominator);
      return { result: { r }, steps: [`r = ∛( (${G_STR} * ${M} * ${T}²) / (4π²) ) = ${formatNumber(r)} m`] };
    }
  }
];
