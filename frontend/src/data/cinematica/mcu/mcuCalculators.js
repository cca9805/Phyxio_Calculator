import { formatNumber } from '../../../utils/formatNumber';

const PI = Math.PI;

export const calculators = [

  // --- Grupo 1: Frecuencia (f) y Período (T) ---
  {
    id: 'mcu-frecuencia-desde-periodo',
    title: 'Calcular Frecuencia (desde Período)',
    formula: 'f = 1 / T',
    variables: [
      { symbol: 'T', label: 'Período (T)', unit: 's', example: '0.5' }
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: ({ T }) => {
      if (T === 0) return { error: "El período no puede ser cero." };
      const f = 1 / T;
      return { result: { f }, steps: [`f = 1 / ${T} = ${formatNumber(f)} Hz`] };
    }
  },
  {
    id: 'mcu-periodo-desde-frecuencia',
    title: 'Calcular Período (desde Frecuencia)',
    formula: 'T = 1 / f',
    variables: [
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz', example: '2' }
    ],
    output: { symbol: 'T', label: 'Período (T)', unit: 's' },
    resolve: ({ f }) => {
      if (f === 0) return { error: "La frecuencia no puede ser cero." };
      const T = 1 / f;
      return { result: { T }, steps: [`T = 1 / ${f} = ${formatNumber(T)} s`] };
    }
  },

  // --- Grupo 2: Velocidad Angular (ω) ---
  {
    id: 'mcu-omega-desde-desplazamiento',
    title: 'Calcular Velocidad Angular (ω)',
    formula: 'ω = Δθ / t',
    variables: [
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad', example: '6.28' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '2' }
    ],
    output: { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
    resolve: ({ d_th, t }) => {
      if (t === 0) return { error: "El tiempo no puede ser cero." };
      const w = d_th / t;
      return { result: { w }, steps: [`ω = ${d_th} / ${t} = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mcu-desplazamiento-angular',
    title: 'Calcular Desplazamiento Angular',
    formula: 'Δθ = ω * t',
    variables: [
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '3.14' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '2' }
    ],
    output: { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' },
    resolve: ({ w, t }) => {
      const d_th = w * t;
      return { result: { d_th }, steps: [`Δθ = ${w} * ${t} = ${formatNumber(d_th)} rad`] };
    }
  },
  {
    id: 'mcu-tiempo-desde-desplazamiento',
    title: 'Calcular Tiempo (desde Desplazamiento)',
    formula: 't = Δθ / ω',
    variables: [
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad', example: '6.28' },
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '3.14' },
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ d_th, w }) => {
      if (w === 0) return { error: "La velocidad angular no puede ser cero." };
      const t = d_th / w;
      return { result: { t }, steps: [`t = ${d_th} / ${w} = ${formatNumber(t)} s`] };
    }
  },
  {
    id: 'mcu-omega-desde-frecuencia',
    title: 'Calcular ω (desde Frecuencia)',
    formula: 'ω = 2πf',
    variables: [
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz', example: '2' }
    ],
    output: { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
    resolve: ({ f }) => {
      const w = 2 * PI * f;
      return { result: { w }, steps: [`ω = 2π * ${f} = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mcu-frecuencia-desde-omega',
    title: 'Calcular Frecuencia (desde ω)',
    formula: 'f = ω / 2π',
    variables: [
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '12.56' },
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: ({ w }) => {
      const f = w / (2 * PI);
      return { result: { f }, steps: [`f = ${w} / 2π = ${formatNumber(f)} Hz`] };
    }
  },
  {
    id: 'mcu-omega-desde-periodo',
    title: 'Calcular ω (desde Período)',
    formula: 'ω = 2π / T',
    variables: [
      { symbol: 'T', label: 'Período (T)', unit: 's', example: '0.5' }
    ],
    output: { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
    resolve: ({ T }) => {
      if (T === 0) return { error: "El período no puede ser cero." };
      const w = (2 * PI) / T;
      return { result: { w }, steps: [`ω = 2π / ${T} = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mcu-periodo-desde-omega',
    title: 'Calcular Período (desde ω)',
    formula: 'T = 2π / ω',
    variables: [
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '12.56' },
    ],
    output: { symbol: 'T', label: 'Período (T)', unit: 's' },
    resolve: ({ w }) => {
      if (w === 0) return { error: "La velocidad angular no puede ser cero." };
      const T = (2 * PI) / w;
      return { result: { T }, steps: [`T = 2π / ${w} = ${formatNumber(T)} s`] };
    }
  },

  // --- Grupo 3: Velocidad Tangencial (v) ---
  {
    id: 'mcu-velocidad-tangencial',
    title: 'Calcular Velocidad Tangencial',
    formula: 'v = ω * r',
    variables: [
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '4' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '0.5' }
    ],
    output: { symbol: 'v', label: 'Velocidad tangencial (v)', unit: 'm/s' },
    resolve: ({ w, r }) => {
      const v = w * r;
      return { result: { v }, steps: [`v = ${w} * ${r} = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'mcu-omega-desde-tangencial',
    title: 'Calcular ω (desde Vel. Tangencial)',
    formula: 'ω = v / r',
    variables: [
      { symbol: 'v', label: 'Velocidad tangencial (v)', unit: 'm/s', example: '2' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '0.5' }
    ],
    output: { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
    resolve: ({ v, r }) => {
      if (r === 0) return { error: "El radio no puede ser cero." };
      const w = v / r;
      return { result: { w }, steps: [`ω = ${v} / ${r} = ${formatNumber(w)} rad/s`] };
    }
  },
  {
    id: 'mcu-radio-desde-tangencial',
    title: 'Calcular Radio (desde Vel. Tangencial)',
    formula: 'r = v / ω',
    variables: [
      { symbol: 'v', label: 'Velocidad tangencial (v)', unit: 'm/s', example: '2' },
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '4' }
    ],
    output: { symbol: 'r', label: 'Radio (r)', unit: 'm' },
    resolve: ({ v, w }) => {
      if (w === 0) return { error: "La velocidad angular no puede ser cero." };
      const r = v / w;
      return { result: { r }, steps: [`r = ${v} / ${w} = ${formatNumber(r)} m`] };
    }
  },

  // --- Grupo 4: Aceleración Centrípeta (ac) ---
  {
    id: 'mcu-aceleracion-desde-velocidad',
    title: 'Calcular Acel. Centrípeta (desde v)',
    formula: 'ac = v² / r',
    variables: [
      { symbol: 'v', label: 'Velocidad tangencial (v)', unit: 'm/s', example: '10' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '2' }
    ],
    output: { symbol: 'ac', label: 'Aceleración centrípeta (ac)', unit: 'm/s²' },
    resolve: ({ v, r }) => {
      if (r === 0) return { error: "El radio no puede ser cero." };
      const ac = v**2 / r;
      return { result: { ac }, steps: [`ac = ${v}² / ${r} = ${formatNumber(ac)} m/s²`] };
    }
  },
  {
    id: 'mcu-velocidad-desde-aceleracion',
    title: 'Calcular Velocidad (desde Acel. Centrípeta)',
    formula: 'v = √(ac * r)',
    variables: [
      { symbol: 'ac', label: 'Aceleración centrípeta (ac)', unit: 'm/s²', example: '50' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '2' }
    ],
    output: { symbol: 'v', label: 'Velocidad tangencial (v)', unit: 'm/s' },
    resolve: ({ ac, r }) => {
      const v_sq = ac * r;
      if (v_sq < 0) return { error: "El producto de aceleración y radio debe ser positivo." };
      const v = Math.sqrt(v_sq);
      return { result: { v }, steps: [`v = √(${ac} * ${r}) = ${formatNumber(v)} m/s`] };
    }
  },
    {
    id: 'mcu-radio-desde-aceleracion',
    title: 'Calcular Radio (desde Acel. Centrípeta)',
    formula: 'r = v² / ac',
    variables: [
      { symbol: 'v', label: 'Velocidad tangencial (v)', unit: 'm/s', example: '10' },
      { symbol: 'ac', label: 'Aceleración centrípeta (ac)', unit: 'm/s²', example: '50' },
    ],
    output: { symbol: 'r', label: 'Radio (r)', unit: 'm' },
    resolve: ({ v, ac }) => {
      if (ac === 0) return { error: "La aceleración centrípeta no puede ser cero." };
      const r = v**2 / ac;
      return { result: { r }, steps: [`r = ${v}² / ${ac} = ${formatNumber(r)} m`] };
    }
  },
  {
    id: 'mcu-aceleracion-desde-omega',
    title: 'Calcular Acel. Centrípeta (desde ω)',
    formula: 'ac = ω² * r',
    variables: [
      { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s', example: '5' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '2' }
    ],
    output: { symbol: 'ac', label: 'Aceleración centrípeta (ac)', unit: 'm/s²' },
    resolve: ({ w, r }) => {
      const ac = w**2 * r;
      return { result: { ac }, steps: [`ac = ${w}² * ${r} = ${formatNumber(ac)} m/s²`] };
    }
  },
  {
    id: 'mcu-omega-desde-aceleracion',
    title: 'Calcular ω (desde Acel. Centrípeta)',
    formula: 'ω = √(ac / r)',
    variables: [
      { symbol: 'ac', label: 'Aceleración centrípeta (ac)', unit: 'm/s²', example: '50' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '2' }
    ],
    output: { symbol: 'w', label: 'Velocidad angular (ω)', unit: 'rad/s' },
    resolve: ({ ac, r }) => {
      if (r === 0) return { error: "El radio no puede ser cero." };
      const w_sq = ac / r;
      if (w_sq < 0) return { error: "El cociente de aceleración y radio debe ser positivo." };
      const w = Math.sqrt(w_sq);
      return { result: { w }, steps: [`ω = √(${ac} / ${r}) = ${formatNumber(w)} rad/s`] };
    }
  }
];
