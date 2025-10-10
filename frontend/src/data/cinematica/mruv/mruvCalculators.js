import { formatNumber } from '../../../utils/formatNumber';

export const calculators = [

  // --- Grupo 1: vf = v₀ + at ---
  {
    id: 'mruv-velocidad-final',
    title: 'Calcular Velocidad Final',
    formula: 'vf = v₀ + at',
    variables: [
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '5' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '3' }
    ],
    output: { symbol: 'vf', label: 'Velocidad final (vf)', unit: 'm/s' },
    resolve: ({ v0, a, t }) => {
      const vf = v0 + a * t;
      return { result: { vf }, steps: [`vf = ${v0} + ${a} * ${t} = ${formatNumber(vf)} m/s`] };
    }
  },
  {
    id: 'mruv-velocidad-inicial',
    title: 'Calcular Velocidad Inicial',
    formula: 'v₀ = vf - at',
    variables: [
      { symbol: 'vf', label: 'Velocidad final (vf)', unit: 'm/s', example: '11' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '3' }
    ],
    output: { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s' },
    resolve: ({ vf, a, t }) => {
      const v0 = vf - a * t;
      return { result: { v0 }, steps: [`v₀ = ${vf} - ${a} * ${t} = ${formatNumber(v0)} m/s`] };
    }
  },
  {
    id: 'mruv-aceleracion',
    title: 'Calcular Aceleración',
    formula: 'a = (vf - v₀) / t',
    variables: [
      { symbol: 'vf', label: 'Velocidad final (vf)', unit: 'm/s', example: '11' },
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '5' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '3' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ vf, v0, t }) => {
      if (t === 0) return { error: "El tiempo no puede ser cero." };
      const a = (vf - v0) / t;
      return { result: { a }, steps: [`a = (${vf} - ${v0}) / ${t} = ${formatNumber(a)} m/s²`] };
    }
  },
  {
    id: 'mruv-tiempo',
    title: 'Calcular Tiempo',
    formula: 't = (vf - v₀) / a',
    variables: [
      { symbol: 'vf', label: 'Velocidad final (vf)', unit: 'm/s', example: '11' },
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '5' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ vf, v0, a }) => {
      if (a === 0) return { error: "La aceleración no puede ser cero." };
      const t = (vf - v0) / a;
      return { result: { t }, steps: [`t = (${vf} - ${v0}) / ${a} = ${formatNumber(t)} s`] };
    }
  },

  // --- Grupo 2: xf = x₀ + v₀t + ½at² ---
  {
    id: 'mruv-posicion-final',
    title: 'Calcular Posición Final',
    formula: 'xf = x₀ + v₀t + ½at²',
    variables: [
      { symbol: 'x0', label: 'Posición inicial (x₀)', unit: 'm', example: '10' },
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '5' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '3' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' }
    ],
    output: { symbol: 'xf', label: 'Posición final (xf)', unit: 'm' },
    resolve: ({ x0, v0, t, a }) => {
      const xf = x0 + v0 * t + 0.5 * a * Math.pow(t, 2);
      return { result: { xf }, steps: [`xf = ${x0} + ${v0}*${t} + 0.5*${a}*${t}² = ${formatNumber(xf)} m`] };
    }
  },
  {
    id: 'mruv-posicion-inicial',
    title: 'Calcular Posición Inicial',
    formula: 'x₀ = xf - v₀t - ½at²',
    variables: [
      { symbol: 'xf', label: 'Posición final (xf)', unit: 'm', example: '34' },
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '5' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '3' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' }
    ],
    output: { symbol: 'x0', label: 'Posición inicial (x₀)', unit: 'm' },
    resolve: ({ xf, v0, t, a }) => {
      const x0 = xf - v0 * t - 0.5 * a * Math.pow(t, 2);
      return { result: { x0 }, steps: [`x₀ = ${xf} - ${v0}*${t} - 0.5*${a}*${t}² = ${formatNumber(x0)} m`] };
    }
  },
  {
    id: 'mruv-velocidad-inicial-desde-posicion',
    title: 'Calcular v₀ (desde Posición)',
    formula: 'v₀ = (xf - x₀ - ½at²) / t',
    variables: [
        { symbol: 'xf', label: 'Posición final (xf)', unit: 'm', example: '34' },
        { symbol: 'x0', label: 'Posición inicial (x₀)', unit: 'm', example: '10' },
        { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '3' },
        { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' }
    ],
    output: { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s' },
    resolve: ({ xf, x0, t, a }) => {
        if (t === 0) return { error: "El tiempo no puede ser cero." };
        const v0 = (xf - x0 - 0.5 * a * Math.pow(t, 2)) / t;
        return { result: { v0 }, steps: [`v₀ = (${xf} - ${x0} - 0.5*${a}*${t}²) / ${t} = ${formatNumber(v0)} m/s`] };
    }
  },
  {
    id: 'mruv-aceleracion-desde-posicion',
    title: 'Calcular a (desde Posición)',
    formula: 'a = 2(xf - x₀ - v₀t) / t²',
    variables: [
        { symbol: 'xf', label: 'Posición final (xf)', unit: 'm', example: '34' },
        { symbol: 'x0', label: 'Posición inicial (x₀)', unit: 'm', example: '10' },
        { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '5' },
        { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '3' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ xf, x0, v0, t }) => {
        if (t === 0) return { error: "El tiempo no puede ser cero." };
        const a = 2 * (xf - x0 - v0 * t) / Math.pow(t, 2);
        return { result: { a }, steps: [`a = 2(${xf} - ${x0} - ${v0}*${t}) / ${t}² = ${formatNumber(a)} m/s²`] };
    }
  },
  {
    id: 'mruv-tiempo-cuadratica',
    title: 'Calcular Tiempo (Fórmula Cuadrática)',
    formula: 't = [-v₀ ± √(v₀² - 4(½a)(x₀-xf))] / a',
    variables: [
        { symbol: 'x0', label: 'Posición inicial (x₀)', unit: 'm', example: '0' },
        { symbol: 'xf', label: 'Posición final (xf)', unit: 'm', example: '50' },
        { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '10' },
        { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '4' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ x0, xf, v0, a }) => {
        if (a === 0) return { error: "La aceleración no puede ser cero." };
        const C = x0 - xf;
        const B = v0;
        const A = 0.5 * a;
        const discriminant = Math.pow(B, 2) - 4 * A * C;
        if (discriminant < 0) return { error: "Sin solución real." };
        const t1 = (-B + Math.sqrt(discriminant)) / (2 * A);
        const t2 = (-B - Math.sqrt(discriminant)) / (2 * A);
        const steps = [
            `Ecuación: ${A}t² + ${B}t + ${C} = 0`,
            `Discriminante: Δ = ${B}² - 4(${A})(${C}) = ${formatNumber(discriminant)}`,
            `t₁ = (-${B} + √Δ) / (2*${A}) = ${formatNumber(t1)} s`,
            `t₂ = (-${B} - √Δ) / (2*${A}) = ${formatNumber(t2)} s`,
            `Se toman las soluciones de tiempo positivas.`
        ];
        const finalResult = {};
        if(t1 >= 0 && t2 >= 0) finalResult.t = `t₁=${formatNumber(t1)}, t₂=${formatNumber(t2)}`;
        else if (t1 >= 0) finalResult.t = formatNumber(t1);
        else if (t2 >= 0) finalResult.t = formatNumber(t2);
        else return { error: "No hay soluciones de tiempo positivas." };
        return { result: finalResult, steps };
    }
  },

  // --- Grupo 3: vf² = v₀² + 2aΔx ---
  {
    id: 'mruv-velocidad-final-torricelli',
    title: 'Calcular vf (sin tiempo)',
    formula: 'vf = √(v₀² + 2aΔx)',
    variables: [
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '5' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' },
      { symbol: 'dx', label: 'Desplazamiento (Δx)', unit: 'm', example: '24' }
    ],
    output: { symbol: 'vf', label: 'Velocidad final (vf)', unit: 'm/s' },
    resolve: ({ v0, a, dx }) => {
      const vf_sq = Math.pow(v0, 2) + 2 * a * dx;
      if (vf_sq < 0) return { error: "Resultado imaginario (vf² < 0)." };
      const vf = Math.sqrt(vf_sq);
      return { result: { vf }, steps: [`vf = √(${v0}² + 2*${a}*${dx}) = ${formatNumber(vf)} m/s`] };
    }
  },
    {
    id: 'mruv-velocidad-inicial-torricelli',
    title: 'Calcular v₀ (sin tiempo)',
    formula: 'v₀ = √(vf² - 2aΔx)',
    variables: [
      { symbol: 'vf', label: 'Velocidad final (vf)', unit: 'm/s', example: '11' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' },
      { symbol: 'dx', label: 'Desplazamiento (Δx)', unit: 'm', example: '24' }
    ],
    output: { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s' },
    resolve: ({ vf, a, dx }) => {
      const v0_sq = Math.pow(vf, 2) - 2 * a * dx;
      if (v0_sq < 0) return { error: "Resultado imaginario (v₀² < 0)." };
      const v0 = Math.sqrt(v0_sq);
      return { result: { v0 }, steps: [`v₀ = √(${vf}² - 2*${a}*${dx}) = ${formatNumber(v0)} m/s`] };
    }
  },
  {
    id: 'mruv-aceleracion-torricelli',
    title: 'Calcular a (sin tiempo)',
    formula: 'a = (vf² - v₀²) / 2Δx',
    variables: [
      { symbol: 'vf', label: 'Velocidad final (vf)', unit: 'm/s', example: '11' },
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '5' },
      { symbol: 'dx', label: 'Desplazamiento (Δx)', unit: 'm', example: '24' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ vf, v0, dx }) => {
      if (dx === 0) return { error: "El desplazamiento no puede ser cero." };
      const a = (Math.pow(vf, 2) - Math.pow(v0, 2)) / (2 * dx);
      return { result: { a }, steps: [`a = (${vf}² - ${v0}²) / (2 * ${dx}) = ${formatNumber(a)} m/s²`] };
    }
  },
  {
    id: 'mruv-desplazamiento-torricelli',
    title: 'Calcular Δx (sin tiempo)',
    formula: 'Δx = (vf² - v₀²) / 2a',
    variables: [
      { symbol: 'vf', label: 'Velocidad final (vf)', unit: 'm/s', example: '11' },
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '5' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2' }
    ],
    output: { symbol: 'dx', label: 'Desplazamiento (Δx)', unit: 'm' },
    resolve: ({ vf, v0, a }) => {
      if (a === 0) return { error: "La aceleración no puede ser cero." };
      const dx = (Math.pow(vf, 2) - Math.pow(v0, 2)) / (2 * a);
      return { result: { dx }, steps: [`Δx = (${vf}² - ${v0}²) / (2 * ${a}) = ${formatNumber(dx)} m`] };
    }
  },

  // --- Grupo 4: Δx = ½(v₀ + vf)t ---
  {
    id: 'mruv-desplazamiento-media',
    title: 'Calcular Δx (con Vel. Media)',
    formula: 'Δx = ½(v₀ + vf)t',
    variables: [
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '5' },
      { symbol: 'vf', label: 'Velocidad final (vf)', unit: 'm/s', example: '11' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '3' }
    ],
    output: { symbol: 'dx', label: 'Desplazamiento (Δx)', unit: 'm' },
    resolve: ({ v0, vf, t }) => {
      const dx = 0.5 * (v0 + vf) * t;
      return { result: { dx }, steps: [`Δx = 0.5 * (${v0} + ${vf}) * ${t} = ${formatNumber(dx)} m`] };
    }
  },
  {
    id: 'mruv-tiempo-media',
    title: 'Calcular Tiempo (con Vel. Media)',
    formula: 't = 2Δx / (v₀ + vf)',
    variables: [
        { symbol: 'dx', label: 'Desplazamiento (Δx)', unit: 'm', example: '24' },
        { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '5' },
        { symbol: 'vf', label: 'Velocidad final (vf)', unit: 'm/s', example: '11' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ dx, v0, vf }) => {
        if (v0 + vf === 0) return { error: "La suma de velocidades no puede ser cero." };
        const t = (2 * dx) / (v0 + vf);
        return { result: { t }, steps: [`t = (2 * ${dx}) / (${v0} + ${vf}) = ${formatNumber(t)} s`] };
    }
  },
  {
    id: 'mruv-velocidad-final-media',
    title: 'Calcular vf (con Vel. Media)',
    formula: 'vf = (2Δx / t) - v₀',
    variables: [
        { symbol: 'dx', label: 'Desplazamiento (Δx)', unit: 'm', example: '24' },
        { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '3' },
        { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '5' }
    ],
    output: { symbol: 'vf', label: 'Velocidad final (vf)', unit: 'm/s' },
    resolve: ({ dx, t, v0 }) => {
        if (t === 0) return { error: "El tiempo no puede ser cero." };
        const vf = (2 * dx / t) - v0;
        return { result: { vf }, steps: [`vf = (2*${dx}/${t}) - ${v0} = ${formatNumber(vf)} m/s`] };
    }
  },
  {
    id: 'mruv-velocidad-inicial-media',
    title: 'Calcular v₀ (con Vel. Media)',
    formula: 'v₀ = (2Δx / t) - vf',
    variables: [
        { symbol: 'dx', label: 'Desplazamiento (Δx)', unit: 'm', example: '24' },
        { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '3' },
        { symbol: 'vf', label: 'Velocidad final (vf)', unit: 'm/s', example: '11' }
    ],
    output: { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s' },
    resolve: ({ dx, t, vf }) => {
        if (t === 0) return { error: "El tiempo no puede ser cero." };
        const v0 = (2 * dx / t) - vf;
        return { result: { v0 }, steps: [`v₀ = (2*${dx}/${t}) - ${vf} = ${formatNumber(v0)} m/s`] };
    }
  }
];
