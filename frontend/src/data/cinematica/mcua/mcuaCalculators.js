import { formatNumber } from '../../../utils/formatNumber';

const PI = Math.PI;

export const calculators = [

  // --- Grupo 1: ωf = ω₀ + αt ---
  {
    id: 'mcua-velocidad-angular-final',
    title: 'Calcular Velocidad Angular Final',
    formula: 'ωf = ω₀ + αt',
    variables: [
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '0.5' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '4' }
    ],
    output: { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' },
    resolve: ({ w0, a, t }) => {
      const wf = w0 + a * t;
      return { result: { wf }, steps: [`ωf = ${w0} + ${a}*${t} = ${formatNumber(wf)} rad/s`] };
    }
  },
  {
    id: 'mcua-velocidad-angular-inicial',
    title: 'Calcular Velocidad Angular Inicial',
    formula: 'ω₀ = ωf - αt',
    variables: [
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s', example: '4' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '0.5' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '4' }
    ],
    output: { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
    resolve: ({ wf, a, t }) => {
      const w0 = wf - a * t;
      return { result: { w0 }, steps: [`ω₀ = ${wf} - ${a}*${t} = ${formatNumber(w0)} rad/s`] };
    }
  },
  {
    id: 'mcua-aceleracion-angular',
    title: 'Calcular Aceleración Angular',
    formula: 'α = (ωf - ω₀) / t',
    variables: [
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s', example: '4' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '4' }
    ],
    output: { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' },
    resolve: ({ wf, w0, t }) => {
      if (t === 0) return { error: "El tiempo no puede ser cero." };
      const a = (wf - w0) / t;
      return { result: { a }, steps: [`α = (${wf} - ${w0}) / ${t} = ${formatNumber(a)} rad/s²`] };
    }
  },
  {
    id: 'mcua-tiempo',
    title: 'Calcular Tiempo',
    formula: 't = (ωf - ω₀) / α',
    variables: [
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s', example: '4' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '0.5' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ wf, w0, a }) => {
      if (a === 0) return { error: "La aceleración no puede ser cero." };
      const t = (wf - w0) / a;
      return { result: { t }, steps: [`t = (${wf} - ${w0}) / ${a} = ${formatNumber(t)} s`] };
    }
  },

  // --- Grupo 2: θf = θ₀ + ω₀t + ½αt² ---
  {
    id: 'mcua-posicion-angular-final',
    title: 'Calcular Posición Angular Final',
    formula: 'θf = θ₀ + ω₀t + ½αt²',
    variables: [
      { symbol: 'th0', label: 'Posición angular inicial (θ₀)', unit: 'rad', example: '1' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '4' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '0.5' }
    ],
    output: { symbol: 'thf', label: 'Posición angular final (θf)', unit: 'rad' },
    resolve: ({ th0, w0, t, a }) => {
      const thf = th0 + w0 * t + 0.5 * a * Math.pow(t, 2);
      return { result: { thf }, steps: [`θf = ${th0} + ${w0}*${t} + 0.5*${a}*${t}² = ${formatNumber(thf)} rad`] };
    }
  },
  {
    id: 'mcua-posicion-angular-inicial',
    title: 'Calcular Posición Angular Inicial',
    formula: 'θ₀ = θf - ω₀t - ½αt²',
    variables: [
      { symbol: 'thf', label: 'Posición angular final (θf)', unit: 'rad', example: '13' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '4' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '0.5' }
    ],
    output: { symbol: 'th0', label: 'Posición angular inicial (θ₀)', unit: 'rad' },
    resolve: ({ thf, w0, t, a }) => {
      const th0 = thf - w0 * t - 0.5 * a * Math.pow(t, 2);
      return { result: { th0 }, steps: [`θ₀ = ${thf} - ${w0}*${t} - 0.5*${a}*${t}² = ${formatNumber(th0)} rad`] };
    }
  },
  {
    id: 'mcua-velocidad-inicial-desde-posicion',
    title: 'Calcular ω₀ (desde Posición)',
    formula: 'ω₀ = (θf - θ₀ - ½αt²) / t',
    variables: [
      { symbol: 'thf', label: 'Posición angular final (θf)', unit: 'rad', example: '13' },
      { symbol: 'th0', label: 'Posición angular inicial (θ₀)', unit: 'rad', example: '1' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '4' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '0.5' }
    ],
    output: { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
    resolve: ({ thf, th0, t, a }) => {
      if (t === 0) return { error: "El tiempo no puede ser cero." };
      const w0 = (thf - th0 - 0.5 * a * Math.pow(t, 2)) / t;
      return { result: { w0 }, steps: [`ω₀ = (${thf} - ${th0} - 0.5*${a}*${t}²) / ${t} = ${formatNumber(w0)} rad/s`] };
    }
  },
  {
    id: 'mcua-aceleracion-desde-posicion',
    title: 'Calcular α (desde Posición)',
    formula: 'α = 2(θf - θ₀ - ω₀t) / t²',
    variables: [
      { symbol: 'thf', label: 'Posición angular final (θf)', unit: 'rad', example: '13' },
      { symbol: 'th0', label: 'Posición angular inicial (θ₀)', unit: 'rad', example: '1' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '4' }
    ],
    output: { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' },
    resolve: ({ thf, th0, w0, t }) => {
      if (t === 0) return { error: "El tiempo no puede ser cero." };
      const a = 2 * (thf - th0 - w0 * t) / Math.pow(t, 2);
      return { result: { a }, steps: [`α = 2(${thf} - ${th0} - ${w0}*${t}) / ${t}² = ${formatNumber(a)} rad/s²`] };
    }
  },
  {
    id: 'mcua-tiempo-cuadratica',
    title: 'Calcular Tiempo (Fórmula Cuadrática)',
    formula: 't = [-ω₀ ± √(ω₀² - 4(½α)(θ₀-θf))] / α',
    variables: [
      { symbol: 'th0', label: 'Posición angular inicial (θ₀)', unit: 'rad', example: '0' },
      { symbol: 'thf', label: 'Posición angular final (θf)', unit: 'rad', example: '20' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '3' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ th0, thf, w0, a }) => {
      if (a === 0) return { error: "La aceleración no puede ser cero." };
      const C = th0 - thf;
      const B = w0;
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

  // --- Grupo 3: ωf² = ω₀² + 2αΔθ ---
  {
    id: 'mcua-velocidad-final-torricelli',
    title: 'Calcular ωf (sin tiempo)',
    formula: 'ωf = √(ω₀² + 2αΔθ)',
    variables: [
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '3' },
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad', example: '4' }
    ],
    output: { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' },
    resolve: ({ w0, a, d_th }) => {
      const wf_sq = Math.pow(w0, 2) + 2 * a * d_th;
      if (wf_sq < 0) return { error: "Resultado imaginario (ωf² < 0)." };
      const wf = Math.sqrt(wf_sq);
      return { result: { wf }, steps: [`ωf = √(${w0}² + 2*${a}*${d_th}) = ${formatNumber(wf)} rad/s`] };
    }
  },
  {
    id: 'mcua-velocidad-inicial-torricelli',
    title: 'Calcular ω₀ (sin tiempo)',
    formula: 'ω₀ = √(ωf² - 2αΔθ)',
    variables: [
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s', example: '5.29' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '3' },
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad', example: '4' }
    ],
    output: { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
    resolve: ({ wf, a, d_th }) => {
      const w0_sq = Math.pow(wf, 2) - 2 * a * d_th;
      if (w0_sq < 0) return { error: "Resultado imaginario (ω₀² < 0)." };
      const w0 = Math.sqrt(w0_sq);
      return { result: { w0 }, steps: [`ω₀ = √(${wf}² - 2*${a}*${d_th}) = ${formatNumber(w0)} rad/s`] };
    }
  },
  {
    id: 'mcua-aceleracion-torricelli',
    title: 'Calcular α (sin tiempo)',
    formula: 'α = (ωf² - ω₀²) / 2Δθ',
    variables: [
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s', example: '5.29' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' },
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad', example: '4' }
    ],
    output: { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²' },
    resolve: ({ wf, w0, d_th }) => {
      if (d_th === 0) return { error: "El desplazamiento angular no puede ser cero." };
      const a = (Math.pow(wf, 2) - Math.pow(w0, 2)) / (2 * d_th);
      return { result: { a }, steps: [`α = (${wf}² - ${w0}²) / (2*${d_th}) = ${formatNumber(a)} rad/s²`] };
    }
  },
  {
    id: 'mcua-desplazamiento-torricelli',
    title: 'Calcular Δθ (sin tiempo)',
    formula: 'Δθ = (ωf² - ω₀²) / 2α',
    variables: [
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s', example: '5.29' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' },
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '3' }
    ],
    output: { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' },
    resolve: ({ wf, w0, a }) => {
      if (a === 0) return { error: "La aceleración no puede ser cero." };
      const d_th = (Math.pow(wf, 2) - Math.pow(w0, 2)) / (2 * a);
      return { result: { d_th }, steps: [`Δθ = (${wf}² - ${w0}²) / (2*${a}) = ${formatNumber(d_th)} rad`] };
    }
  },

  // --- Grupo 4: Δθ = ½(ω₀ + ωf)t ---
  {
    id: 'mcua-desplazamiento-media',
    title: 'Calcular Δθ (con Vel. Media)',
    formula: 'Δθ = ½(ω₀ + ωf)t',
    variables: [
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' },
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s', example: '4' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '5' }
    ],
    output: { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad' },
    resolve: ({ w0, wf, t }) => {
      const d_th = 0.5 * (w0 + wf) * t;
      return { result: { d_th }, steps: [`Δθ = 0.5*(${w0} + ${wf})*${t} = ${formatNumber(d_th)} rad`] };
    }
  },
  {
    id: 'mcua-tiempo-media',
    title: 'Calcular Tiempo (con Vel. Media)',
    formula: 't = 2Δθ / (ω₀ + ωf)',
    variables: [
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad', example: '15' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' },
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s', example: '4' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ d_th, w0, wf }) => {
      if (w0 + wf === 0) return { error: "La suma de velocidades no puede ser cero." };
      const t = (2 * d_th) / (w0 + wf);
      return { result: { t }, steps: [`t = (2*${d_th}) / (${w0} + ${wf}) = ${formatNumber(t)} s`] };
    }
  },
  {
    id: 'mcua-velocidad-final-media',
    title: 'Calcular ωf (con Vel. Media)',
    formula: 'ωf = (2Δθ / t) - ω₀',
    variables: [
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad', example: '15' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '5' },
      { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s', example: '2' }
    ],
    output: { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s' },
    resolve: ({ d_th, t, w0 }) => {
      if (t === 0) return { error: "El tiempo no puede ser cero." };
      const wf = (2 * d_th / t) - w0;
      return { result: { wf }, steps: [`ωf = (2*${d_th}/${t}) - ${w0} = ${formatNumber(wf)} rad/s`] };
    }
  },
  {
    id: 'mcua-velocidad-inicial-media',
    title: 'Calcular ω₀ (con Vel. Media)',
    formula: 'ω₀ = (2Δθ / t) - ωf',
    variables: [
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad', example: '15' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '5' },
      { symbol: 'wf', label: 'Velocidad angular final (ωf)', unit: 'rad/s', example: '4' }
    ],
    output: { symbol: 'w0', label: 'Velocidad angular inicial (ω₀)', unit: 'rad/s' },
    resolve: ({ d_th, t, wf }) => {
      if (t === 0) return { error: "El tiempo no puede ser cero." };
      const w0 = (2 * d_th / t) - wf;
      return { result: { w0 }, steps: [`ω₀ = (2*${d_th}/${t}) - ${wf} = ${formatNumber(w0)} rad/s`] };
    }
  },
  
  // --- Grupo 5: Relaciones Tangenciales y Centrípeta ---
  {
    id: 'mcua-aceleracion-tangencial',
    title: 'Calcular Aceleración Tangencial',
    formula: 'at = α * r',
    variables: [
      { symbol: 'a', label: 'Aceleración angular (α)', unit: 'rad/s²', example: '0.5' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '0.8' }
    ],
    output: { symbol: 'at', label: 'Aceleración tangencial (at)', unit: 'm/s²' },
    resolve: ({ a, r }) => {
      const at = a * r;
      return { result: { at }, steps: [`at = ${a} * ${r} = ${formatNumber(at)} m/s²`] };
    }
  },
  {
    id: 'mcua-aceleracion-total',
    title: 'Calcular Aceleración Total',
    formula: 'a_total = √(at² + ac²)',
    variables: [
      { symbol: 'at', label: 'Aceleración tangencial (at)', unit: 'm/s²', example: '0.4' },
      { symbol: 'ac', label: 'Aceleración centrípeta (ac)', unit: 'm/s²', example: '5.12' }
    ],
    output: { symbol: 'a_total', label: 'Aceleración total (a)', unit: 'm/s²' },
    resolve: ({ at, ac }) => {
      const a_total = Math.sqrt(Math.pow(at, 2) + Math.pow(ac, 2));
      return { result: { a_total }, steps: [`a = √(${at}² + ${ac}²) = ${formatNumber(a_total)} m/s²`] };
    }
  },
  
  // --- Grupo 6: Conceptos Adicionales ---
  {
    id: 'mcua-numero-vueltas',
    title: 'Calcular Número de Vueltas',
    formula: 'N = Δθ / (2π)',
    variables: [
      { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad', example: '31.41' }
    ],
    output: { symbol: 'N', label: 'Número de vueltas (N)', unit: 'vueltas' },
    resolve: ({ d_th }) => {
      const N = d_th / (2 * PI);
      return { result: { N }, steps: [`N = ${d_th} / 2π = ${formatNumber(N)} vueltas`] };
    }
  },
  {
    id: 'mcua-desplazamiento-lineal',
    title: 'Calcular Desplazamiento Lineal (Arco)',
    formula: 's = Δθ * r',
    variables: [
        { symbol: 'd_th', label: 'Desplazamiento angular (Δθ)', unit: 'rad', example: '15' },
        { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '0.8' }
    ],
    output: { symbol: 's', label: 'Desplazamiento lineal (s)', unit: 'm' },
    resolve: ({ d_th, r }) => {
        const s = d_th * r;
        return { result: { s }, steps: [`s = ${d_th} * ${r} = ${formatNumber(s)} m`] };
    }
  }
];
