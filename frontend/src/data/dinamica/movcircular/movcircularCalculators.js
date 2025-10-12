import { formatNumber } from '../../../utils/formatNumber';

const PI = Math.PI;

export const calculators = [
  // --- Grupo 1: Parámetros de Movimiento ---
  {
    id: 'movcircular-periodo-desde-frecuencia',
    title: 'Calcular Período (T)',
    formula: 'T = 1 / f',
    variables: [{ symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz', example: '5' }],
    output: { symbol: 'T', label: 'Período (T)', unit: 's' },
    resolve: ({ f }) => {
      if (f === 0) return { error: 'La frecuencia no puede ser cero.' };
      const T = 1 / f;
      return { result: { T }, steps: [`T = 1 / ${f} = ${formatNumber(T)} s`] };
    }
  },
  {
    id: 'movcircular-frecuencia-desde-periodo',
    title: 'Calcular Frecuencia (f)',
    formula: 'f = 1 / T',
    variables: [{ symbol: 'T', label: 'Período (T)', unit: 's', example: '0.2' }],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: ({ T }) => {
      if (T === 0) return { error: 'El período no puede ser cero.' };
      const f = 1 / T;
      return { result: { f }, steps: [`f = 1 / ${T} = ${formatNumber(f)} Hz`] };
    }
  },

  // --- Grupo 2: Velocidad Angular (ω) ---
  {
    id: 'movcircular-omega-desde-periodo',
    title: 'Vel. Angular (desde Período)',
    formula: 'ω = 2π / T',
    variables: [{ symbol: 'T', label: 'Período (T)', unit: 's', example: '0.5' }],
    output: { symbol: 'omega', label: 'Velocidad Angular (ω)', unit: 'rad/s' },
    resolve: ({ T }) => {
      if (T === 0) return { error: 'El período no puede ser cero.' };
      const omega = (2 * PI) / T;
      return { result: { omega }, steps: [`ω = 2π / ${T} = ${formatNumber(omega)} rad/s`] };
    }
  },
  {
    id: 'movcircular-omega-desde-frecuencia',
    title: 'Vel. Angular (desde Frecuencia)',
    formula: 'ω = 2π * f',
    variables: [{ symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz', example: '2' }],
    output: { symbol: 'omega', label: 'Velocidad Angular (ω)', unit: 'rad/s' },
    resolve: ({ f }) => {
      const omega = 2 * PI * f;
      return { result: { omega }, steps: [`ω = 2π * ${f} = ${formatNumber(omega)} rad/s`] };
    }
  },
  {
    id: 'movcircular-periodo-desde-omega',
    title: 'Período (desde Vel. Angular)',
    formula: 'T = 2π / ω',
    variables: [{ symbol: 'omega', label: 'Velocidad Angular (ω)', unit: 'rad/s', example: '12.57' }],
    output: { symbol: 'T', label: 'Período (T)', unit: 's' },
    resolve: ({ omega }) => {
      if (omega === 0) return { error: 'La velocidad angular no puede ser cero.' };
      const T = (2 * PI) / omega;
      return { result: { T }, steps: [`T = 2π / ${omega} = ${formatNumber(T)} s`] };
    }
  },

  // --- Grupo 3: Velocidad Tangencial (v) ---
  {
    id: 'movcircular-v-desde-omega-r',
    title: 'Vel. Tangencial (v = ωr)',
    formula: 'v = ω * r',
    variables: [
        { symbol: 'omega', label: 'Velocidad Angular (ω)', unit: 'rad/s', example: '10' },
        { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '0.5' }
    ],
    output: { symbol: 'v', label: 'Velocidad Tangencial (v)', unit: 'm/s' },
    resolve: ({ omega, r }) => {
      const v = omega * r;
      return { result: { v }, steps: [`v = ${omega} * ${r} = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'movcircular-v-desde-periodo-r',
    title: 'Vel. Tangencial (v = 2πr/T)',
    formula: 'v = (2π * r) / T',
    variables: [
        { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '0.5' },
        { symbol: 'T', label: 'Período (T)', unit: 's', example: '0.314' }
    ],
    output: { symbol: 'v', label: 'Velocidad Tangencial (v)', unit: 'm/s' },
    resolve: ({ r, T }) => {
      if (T === 0) return { error: 'El período no puede ser cero.' };
      const v = (2 * PI * r) / T;
      return { result: { v }, steps: [`v = (2π * ${r}) / ${T} = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'movcircular-r-desde-v-omega',
    title: 'Radio (desde v y ω)',
    formula: 'r = v / ω',
    variables: [
        { symbol: 'v', label: 'Velocidad Tangencial (v)', unit: 'm/s', example: '5' },
        { symbol: 'omega', label: 'Velocidad Angular (ω)', unit: 'rad/s', example: '10' }
    ],
    output: { symbol: 'r', label: 'Radio (r)', unit: 'm' },
    resolve: ({ v, omega }) => {
      if (omega === 0) return { error: 'La velocidad angular no puede ser cero.' };
      const r = v / omega;
      return { result: { r }, steps: [`r = ${v} / ${omega} = ${formatNumber(r)} m`] };
    }
  },

  // --- Grupo 4: Aceleración Centrípeta (ac) ---
  {
    id: 'movcircular-ac-desde-v-r',
    title: 'Acel. Centrípeta (ac = v²/r)',
    formula: 'ac = v² / r',
    variables: [
        { symbol: 'v', label: 'Velocidad Tangencial (v)', unit: 'm/s', example: '10' },
        { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '2' }
    ],
    output: { symbol: 'ac', label: 'Aceleración Centrípeta (ac)', unit: 'm/s²' },
    resolve: ({ v, r }) => {
      if (r === 0) return { error: 'El radio no puede ser cero.' };
      const ac = Math.pow(v, 2) / r;
      return { result: { ac }, steps: [`ac = ${v}² / ${r} = ${formatNumber(ac)} m/s²`] };
    }
  },
  {
    id: 'movcircular-ac-desde-omega-r',
    title: 'Acel. Centrípeta (ac = ω²r)',
    formula: 'ac = ω² * r',
    variables: [
        { symbol: 'omega', label: 'Velocidad Angular (ω)', unit: 'rad/s', example: '5' },
        { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '2' }
    ],
    output: { symbol: 'ac', label: 'Aceleración Centrípeta (ac)', unit: 'm/s²' },
    resolve: ({ omega, r }) => {
      const ac = Math.pow(omega, 2) * r;
      return { result: { ac }, steps: [`ac = ${omega}² * ${r} = ${formatNumber(ac)} m/s²`] };
    }
  },
  {
    id: 'movcircular-v-desde-ac-r',
    title: 'Vel. Tangencial (desde ac)',
    formula: 'v = √(ac * r)',
    variables: [
        { symbol: 'ac', label: 'Aceleración Centrípeta (ac)', unit: 'm/s²', example: '50' },
        { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '2' }
    ],
    output: { symbol: 'v', label: 'Velocidad Tangencial (v)', unit: 'm/s' },
    resolve: ({ ac, r }) => {
      const v = Math.sqrt(ac * r);
      return { result: { v }, steps: [`v = √(${ac} * ${r}) = ${formatNumber(v)} m/s`] };
    }
  },

  // --- Grupo 5: Fuerza Centrípeta (Fc) ---
  {
    id: 'movcircular-fc-desde-v',
    title: 'Fuerza Centrípeta (Fc = mv²/r)',
    formula: 'Fc = m * v² / r',
    variables: [
        { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '3' },
        { symbol: 'v', label: 'Vel. Tangencial (v)', unit: 'm/s', example: '10' },
        { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '2' }
    ],
    output: { symbol: 'Fc', label: 'Fuerza Centrípeta (Fc)', unit: 'N' },
    resolve: ({ m, v, r }) => {
      if (r === 0) return { error: 'El radio no puede ser cero.' };
      const Fc = m * Math.pow(v, 2) / r;
      return { result: { Fc }, steps: [`Fc = ${m} * ${v}² / ${r} = ${formatNumber(Fc)} N`] };
    }
  },
  {
    id: 'movcircular-fc-desde-omega',
    title: 'Fuerza Centrípeta (Fc = mω²r)',
    formula: 'Fc = m * ω² * r',
    variables: [
        { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '3' },
        { symbol: 'omega', label: 'Vel. Angular (ω)', unit: 'rad/s', example: '5' },
        { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '2' }
    ],
    output: { symbol: 'Fc', label: 'Fuerza Centrípeta (Fc)', unit: 'N' },
    resolve: ({ m, omega, r }) => {
      const Fc = m * Math.pow(omega, 2) * r;
      return { result: { Fc }, steps: [`Fc = ${m} * ${omega}² * ${r} = ${formatNumber(Fc)} N`] };
    }
  },
  {
    id: 'movcircular-m-desde-fc-v',
    title: 'Masa (desde Fc y v)',
    formula: 'm = (Fc * r) / v²',
    variables: [
        { symbol: 'Fc', label: 'Fuerza Centrípeta (Fc)', unit: 'N', example: '150' },
        { symbol: 'v', label: 'Vel. Tangencial (v)', unit: 'm/s', example: '10' },
        { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '2' }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ Fc, v, r }) => {
      const v_sq = Math.pow(v, 2);
      if (v_sq === 0) return { error: 'La velocidad no puede ser cero.' };
      const m = (Fc * r) / v_sq;
      return { result: { m }, steps: [`m = (${Fc} * ${r}) / ${v}² = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'movcircular-v-desde-fc',
    title: 'Vel. Tangencial (desde Fc)',
    formula: 'v = √((Fc * r) / m)',
    variables: [
        { symbol: 'Fc', label: 'Fuerza Centrípeta (Fc)', unit: 'N', example: '150' },
        { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '3' },
        { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '2' }
    ],
    output: { symbol: 'v', label: 'Velocidad Tangencial (v)', unit: 'm/s' },
    resolve: ({ Fc, m, r }) => {
      if (m === 0) return { error: 'La masa no puede ser cero.' };
      const ratio = (Fc * r) / m;
      if(ratio < 0) return { error: "El radicando no puede ser negativo" };
      const v = Math.sqrt(ratio);
      return { result: { v }, steps: [`v = √((${Fc} * ${r}) / ${m}) = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'movcircular-r-desde-fc-v',
    title: 'Radio (desde Fc y v)',
    formula: 'r = (m * v²) / Fc',
    variables: [
        { symbol: 'Fc', label: 'Fuerza Centrípeta (Fc)', unit: 'N', example: '150' },
        { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '3' },
        { symbol: 'v', label: 'Vel. Tangencial (v)', unit: 'm/s', example: '10' }
    ],
    output: { symbol: 'r', label: 'Radio (r)', unit: 'm' },
    resolve: ({ Fc, m, v }) => {
      if (Fc === 0) return { error: 'La fuerza centrípeta no puede ser cero.' };
      const r = (m * Math.pow(v, 2)) / Fc;
      return { result: { r }, steps: [`r = (${m} * ${v}²) / ${Fc} = ${formatNumber(r)} m`] };
    }
  }
];
