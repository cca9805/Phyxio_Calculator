import { formatNumber } from '../../../utils/formatNumber';

const G = 9.81;
const PI = Math.PI;

export const calculators = [
  // --- Grupo 1: Trabajo Mecánico ---
  {
    id: 'trabajo-mecanico',
    title: 'Calcular Trabajo (W)',
    formula: 'W = F * d * cos(θ)',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N', example: '20' },
      { symbol: 'd', label: 'Desplazamiento (d)', unit: 'm', example: '5' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '0', isOptional: true }
    ],
    output: { symbol: 'W', label: 'Trabajo (W)', unit: 'J' },
    resolve: ({ F, d, theta = 0 }) => {
      const theta_rad = theta * (PI / 180);
      const W = F * d * Math.cos(theta_rad);
      return { result: { W }, steps: [`W = ${F} * ${d} * cos(${theta}°) = ${formatNumber(W)} J`] };
    }
  },
  {
    id: 'trabajo-fuerza',
    title: 'Calcular Fuerza (desde W)',
    formula: 'F = W / (d * cos(θ))',
    variables: [
      { symbol: 'W', label: 'Trabajo (W)', unit: 'J', example: '100' },
      { symbol: 'd', label: 'Desplazamiento (d)', unit: 'm', example: '5' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '0', isOptional: true }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ W, d, theta = 0 }) => {
      const theta_rad = theta * (PI / 180);
      const divisor = d * Math.cos(theta_rad);
      if (divisor === 0) return { error: "El denominador (d*cos(θ)) no puede ser cero." };
      const F = W / divisor;
      return { result: { F }, steps: [`F = ${W} / (${d} * cos(${theta}°)) = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'trabajo-desplazamiento',
    title: 'Calcular Desplazamiento (desde W)',
    formula: 'd = W / (F * cos(θ))',
    variables: [
      { symbol: 'W', label: 'Trabajo (W)', unit: 'J', example: '100' },
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N', example: '20' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '0', isOptional: true }
    ],
    output: { symbol: 'd', label: 'Desplazamiento (d)', unit: 'm' },
    resolve: ({ W, F, theta = 0 }) => {
      const theta_rad = theta * (PI / 180);
      const divisor = F * Math.cos(theta_rad);
      if (divisor === 0) return { error: "El denominador (F*cos(θ)) no puede ser cero." };
      const d = W / divisor;
      return { result: { d }, steps: [`d = ${W} / (${F} * cos(${theta}°)) = ${formatNumber(d)} m`] };
    }
  },
  {
    id: 'trabajo-angulo',
    title: 'Calcular Ángulo (desde W)',
    formula: 'θ = acos(W / (F*d))',
    variables: [
        { symbol: 'W', label: 'Trabajo (W)', unit: 'J', example: '86.6' },
        { symbol: 'F', label: 'Fuerza (F)', unit: 'N', example: '20' },
        { symbol: 'd', label: 'Desplazamiento (d)', unit: 'm', example: '5' }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    resolve: ({W, F, d}) => {
        const divisor = F * d;
        if (divisor === 0) return { error: "El producto F*d no puede ser cero." };
        const ratio = W / divisor;
        if (ratio < -1 || ratio > 1) return { error: "Argumento de acos() fuera del rango [-1, 1]." };
        const theta_rad = Math.acos(ratio);
        const theta = theta_rad * (180 / PI);
        return { result: {theta}, steps: [`θ = acos(${W} / (${F}*${d})) = ${formatNumber(theta)}°`]};
    }
  },

  // --- Grupo 2: Energía Cinética ---
  {
    id: 'energia-cinetica',
    title: 'Calcular Energía Cinética (Ec)',
    formula: 'Ec = ½ * m * v²',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '2' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '10' }
    ],
    output: { symbol: 'Ec', label: 'Energía Cinética (Ec)', unit: 'J' },
    resolve: ({ m, v }) => {
      const Ec = 0.5 * m * Math.pow(v, 2);
      return { result: { Ec }, steps: [`Ec = 0.5 * ${m} * ${v}² = ${formatNumber(Ec)} J`] };
    }
  },
  {
    id: 'energia-cinetica-masa',
    title: 'Calcular Masa (desde Ec)',
    formula: 'm = 2 * Ec / v²',
    variables: [
      { symbol: 'Ec', label: 'Energía Cinética (Ec)', unit: 'J', example: '100' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '10' }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ Ec, v }) => {
      const v_sq = Math.pow(v, 2);
      if (v_sq === 0) return { error: "La velocidad no puede ser cero." };
      const m = 2 * Ec / v_sq;
      return { result: { m }, steps: [`m = (2 * ${Ec}) / ${v}² = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'energia-cinetica-velocidad',
    title: 'Calcular Velocidad (desde Ec)',
    formula: 'v = √(2 * Ec / m)',
    variables: [
      { symbol: 'Ec', label: 'Energía Cinética (Ec)', unit: 'J', example: '100' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '2' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ Ec, m }) => {
      if (m === 0) return { error: "La masa no puede ser cero." };
      const ratio = 2 * Ec / m;
      if (ratio < 0) return { error: "La energía cinética no puede ser negativa." };
      const v = Math.sqrt(ratio);
      return { result: { v }, steps: [`v = √((2 * ${Ec}) / ${m}) = ${formatNumber(v)} m/s`] };
    }
  },

  // --- Grupo 3: Energía Potencial Gravitatoria ---
  {
    id: 'energia-potencial-gravitatoria',
    title: 'Energía Potencial Gravitatoria (Epg)',
    formula: 'Epg = m * g * h',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '10' },
      { symbol: 'h', label: 'Altura (h)', unit: 'm', example: '5' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'Epg', label: 'E. P. Gravitatoria (Epg)', unit: 'J' },
    resolve: ({ m, h, g = G }) => {
      const Epg = m * g * h;
      return { result: { Epg }, steps: [`Epg = ${m} * ${g} * ${h} = ${formatNumber(Epg)} J`] };
    }
  },
  {
    id: 'energia-potencial-gravitatoria-masa',
    title: 'Calcular Masa (desde Epg)',
    formula: 'm = Epg / (g * h)',
    variables: [
      { symbol: 'Epg', label: 'E. P. Gravitatoria (Epg)', unit: 'J', example: '490.5' },
      { symbol: 'h', label: 'Altura (h)', unit: 'm', example: '5' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ Epg, h, g = G }) => {
      const divisor = g * h;
      if (divisor === 0) return { error: "El producto g*h no puede ser cero." };
      const m = Epg / divisor;
      return { result: { m }, steps: [`m = ${Epg} / (${g} * ${h}) = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'energia-potencial-gravitatoria-altura',
    title: 'Calcular Altura (desde Epg)',
    formula: 'h = Epg / (m * g)',
    variables: [
      { symbol: 'Epg', label: 'E. P. Gravitatoria (Epg)', unit: 'J', example: '490.5' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '10' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'h', label: 'Altura (h)', unit: 'm' },
    resolve: ({ Epg, m, g = G }) => {
      const divisor = m * g;
      if (divisor === 0) return { error: "El producto m*g no puede ser cero." };
      const h = Epg / divisor;
      return { result: { h }, steps: [`h = ${Epg} / (${m} * ${g}) = ${formatNumber(h)} m`] };
    }
  },
  {
    id: 'energia-potencial-gravitatoria-gravedad',
    title: 'Calcular Gravedad (desde Epg)',
    formula: 'g = Epg / (m * h)',
    variables: [
        { symbol: 'Epg', label: 'E. P. Gravitatoria (Epg)', unit: 'J', example: '490.5' },
        { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '10' },
        { symbol: 'h', label: 'Altura (h)', unit: 'm', example: '5' }
    ],
    output: { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²' },
    resolve: ({ Epg, m, h }) => {
        const divisor = m * h;
        if (divisor === 0) return { error: "El producto m*h no puede ser cero." };
        const g = Epg / divisor;
        return { result: { g }, steps: [`g = ${Epg} / (${m} * ${h}) = ${formatNumber(g)} m/s²`] };
    }
  },

  // --- Grupo 4: Energía Potencial Elástica ---
  {
    id: 'energia-potencial-elastica',
    title: 'Energía Potencial Elástica (Epe)',
    formula: 'Epe = ½ * k * x²',
    variables: [
        { symbol: 'k', label: 'Constante del resorte (k)', unit: 'N/m', example: '200' },
        { symbol: 'x', label: 'Deformación (x)', unit: 'm', example: '0.2' }
    ],
    output: { symbol: 'Epe', label: 'E. P. Elástica (Epe)', unit: 'J' },
    resolve: ({ k, x }) => {
        const Epe = 0.5 * k * Math.pow(x, 2);
        return { result: { Epe }, steps: [`Epe = 0.5 * ${k} * ${x}² = ${formatNumber(Epe)} J` ] };
    }
  },
  {
    id: 'energia-potencial-elastica-constante',
    title: 'Calcular Constante de Resorte (k)',
    formula: 'k = 2 * Epe / x²',
    variables: [
      { symbol: 'Epe', label: 'E. P. Elástica (Epe)', unit: 'J', example: '4' },
      { symbol: 'x', label: 'Deformación (x)', unit: 'm', example: '0.2' }
    ],
    output: { symbol: 'k', label: 'Constante (k)', unit: 'N/m' },
    resolve: ({ Epe, x }) => {
      const x_sq = Math.pow(x, 2);
      if (x_sq === 0) return { error: "La deformación no puede ser cero." };
      const k = 2 * Epe / x_sq;
      return { result: { k }, steps: [`k = (2 * ${Epe}) / ${x}² = ${formatNumber(k)} N/m`] };
    }
  },
  {
    id: 'energia-potencial-elastica-deformacion',
    title: 'Calcular Deformación (x)',
    formula: 'x = √(2 * Epe / k)',
    variables: [
      { symbol: 'Epe', label: 'E. P. Elástica (Epe)', unit: 'J', example: '4' },
      { symbol: 'k', label: 'Constante (k)', unit: 'N/m', example: '200' }
    ],
    output: { symbol: 'x', label: 'Deformación (x)', unit: 'm' },
    resolve: ({ Epe, k }) => {
      if (k === 0) return { error: "La constante del resorte no puede ser cero." };
      const ratio = 2 * Epe / k;
      if (ratio < 0) return { error: "La energía no puede ser negativa." };
      const x = Math.sqrt(ratio);
      return { result: { x }, steps: [`x = √((2 * ${Epe}) / ${k}) = ${formatNumber(x)} m`] };
    }
  },

  // --- Grupo 5: Potencia Mecánica ---
  {
    id: 'potencia-desde-trabajo',
    title: 'Calcular Potencia (P = W/t)',
    formula: 'P = W / t',
    variables: [
        { symbol: 'W', label: 'Trabajo (W)', unit: 'J', example: '1000' },
        { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '10' }
    ],
    output: { symbol: 'P', label: 'Potencia (P)', unit: 'W' },
    resolve: ({ W, t }) => {
        if (t === 0) return { error: "El tiempo no puede ser cero." };
        const P = W / t;
        return { result: { P }, steps: [`P = ${W} / ${t} = ${formatNumber(P)} W`] };
    }
  },
  {
    id: 'potencia-trabajo',
    title: 'Calcular Trabajo (W = Pt)',
    formula: 'W = P * t',
    variables: [
      { symbol: 'P', label: 'Potencia (P)', unit: 'W', example: '100' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '10' }
    ],
    output: { symbol: 'W', label: 'Trabajo (W)', unit: 'J' },
    resolve: ({ P, t }) => {
      const W = P * t;
      return { result: { W }, steps: [`W = ${P} * ${t} = ${formatNumber(W)} J`] };
    }
  },
  {
    id: 'potencia-tiempo',
    title: 'Calcular Tiempo (t = W/P)',
    formula: 't = W / P',
    variables: [
      { symbol: 'W', label: 'Trabajo (W)', unit: 'J', example: '1000' },
      { symbol: 'P', label: 'Potencia (P)', unit: 'W', example: '100' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ W, P }) => {
      if (P === 0) return { error: "La potencia no puede ser cero." };
      const t = W / P;
      return { result: { t }, steps: [`t = ${W} / ${P} = ${formatNumber(t)} s`] };
    }
  },
  {
    id: 'potencia-desde-fuerza-velocidad',
    title: 'Calcular Potencia (P = Fv)',
    formula: 'P = F * v',
    variables: [
        { symbol: 'F', label: 'Fuerza (F)', unit: 'N', example: '50' },
        { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '2' }
    ],
    output: { symbol: 'P', label: 'Potencia (P)', unit: 'W' },
    resolve: ({ F, v }) => {
        const P = F * v;
        return { result: { P }, steps: [`P = ${F} * ${v} = ${formatNumber(P)} W`] };
    }
  },
  {
    id: 'potencia-fuerza',
    title: 'Calcular Fuerza (F = P/v)',
    formula: 'F = P / v',
    variables: [
      { symbol: 'P', label: 'Potencia (P)', unit: 'W', example: '100' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '2' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ P, v }) => {
      if (v === 0) return { error: "La velocidad no puede ser cero." };
      const F = P / v;
      return { result: { F }, steps: [`F = ${P} / ${v} = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'potencia-velocidad',
    title: 'Calcular Velocidad (v = P/F)',
    formula: 'v = P / F',
    variables: [
      { symbol: 'P', label: 'Potencia (P)', unit: 'W', example: '100' },
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N', example: '50' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ P, F }) => {
      if (F === 0) return { error: "La fuerza no puede ser cero." };
      const v = P / F;
      return { result: { v }, steps: [`v = ${P} / ${F} = ${formatNumber(v)} m/s`] };
    }
  },

  // --- Grupo 6: Teorema del Trabajo y la Energía ---
  {
    id: 'teorema-trabajo-energia-neto',
    title: 'Trabajo Neto (Teorema Trabajo-Energía)',
    formula: 'W_neto = ΔEc = ½m(vf² - vi²)',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '2' },
      { symbol: 'vi', label: 'Velocidad Inicial (vi)', unit: 'm/s', example: '5' },
      { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s', example: '10' }
    ],
    output: { symbol: 'W_neto', label: 'Trabajo Neto (W_neto)', unit: 'J' },
    resolve: ({ m, vi, vf }) => {
      const W_neto = 0.5 * m * (Math.pow(vf, 2) - Math.pow(vi, 2));
      return { result: { W_neto }, steps: [`W_neto = 0.5 * ${m} * (${vf}² - ${vi}²) = ${formatNumber(W_neto)} J`] };
    }
  },
  {
    id: 'teorema-trabajo-energia-vf',
    title: 'Velocidad Final (desde W_neto)',
    formula: 'vf = √(vi² + 2*W_neto/m)',
    variables: [
      { symbol: 'W_neto', label: 'Trabajo Neto (W_neto)', unit: 'J', example: '75' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '2' },
      { symbol: 'vi', label: 'Velocidad Inicial (vi)', unit: 'm/s', example: '5' }
    ],
    output: { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s' },
    resolve: ({ W_neto, m, vi }) => {
      if (m === 0) return { error: "La masa no puede ser cero." };
      const vf_sq = Math.pow(vi, 2) + (2 * W_neto / m);
      if (vf_sq < 0) return { error: "Velocidad final imaginaria. Revisa los datos." };
      const vf = Math.sqrt(vf_sq);
      return { result: { vf }, steps: [`vf = √(${vi}² + (2*${W_neto})/${m}) = ${formatNumber(vf)} m/s`] };
    }
  },

  // --- Grupo 7: Conservación de la Energía Mecánica ---
  {
    id: 'conservacion-velocidad-caida',
    title: 'Velocidad Final (Caída Libre)',
    formula: 'vf = √(vi² + 2gh)',
    variables: [
      { symbol: 'vi', label: 'Velocidad Inicial (vi)', unit: 'm/s', example: '0' },
      { symbol: 'h', label: 'Altura de caída (h)', unit: 'm', example: '10' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s' },
    resolve: ({ vi, h, g = G }) => {
      const vf_sq = Math.pow(vi, 2) + 2 * g * h;
      if (vf_sq < 0) return { error: "Velocidad final imaginaria. Revisa los datos." };
      const vf = Math.sqrt(vf_sq);
      return { result: { vf }, steps: [`vf = √(${vi}² + 2*${g}*${h}) = ${formatNumber(vf)} m/s`] };
    }
  },
  {
    id: 'conservacion-altura-lanzamiento',
    title: 'Altura Final (Lanzamiento Vertical)',
    formula: 'hf = hi + (vi² - vf²) / (2g)',
    variables: [
      { symbol: 'vi', label: 'Velocidad Inicial (vi)', unit: 'm/s', example: '20' },
      { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s', example: '0' },
      { symbol: 'hi', label: 'Altura Inicial (hi)', unit: 'm', example: '0', isOptional: true },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'hf', label: 'Altura Final (hf)', unit: 'm' },
    resolve: ({ vi, vf, hi = 0, g = G }) => {
      if (g === 0) return { error: "La gravedad no puede ser cero."};
      const hf = hi + (Math.pow(vi, 2) - Math.pow(vf, 2)) / (2 * g);
      return { result: { hf }, steps: [`hf = ${hi} + (${vi}² - ${vf}²) / (2*${g}) = ${formatNumber(hf)} m`] };
    }
  },
  {
    id: 'conservacion-velocidad-resorte',
    title: 'Velocidad (Sistema Masa-Resorte)',
    formula: 'v = √(k*x² / m)',
    variables: [
      { symbol: 'k', label: 'Constante (k)', unit: 'N/m', example: '200' },
      { symbol: 'x', label: 'Compresión/Estiramiento (x)', unit: 'm', example: '0.2' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '0.5' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ k, x, m }) => {
      if (m === 0) return { error: "La masa no puede ser cero." };
      const ratio = (k * Math.pow(x, 2)) / m;
      if (ratio < 0) return { error: "Argumento de raíz cuadrada no puede ser negativo."};
      const v = Math.sqrt(ratio);
      return { result: { v }, steps: [`v = √(${k}*${x}² / ${m}) = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'conservacion-deformacion-resorte',
    title: 'Deformación Resorte (Sistema Masa-Resorte)',
    formula: 'x = √(m*v² / k)',
    variables: [
        { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '0.5' },
        { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '4' },
        { symbol: 'k', label: 'Constante (k)', unit: 'N/m', example: '200' }
    ],
    output: { symbol: 'x', label: 'Deformación (x)', unit: 'm' },
    resolve: ({ m, v, k }) => {
        if (k === 0) return { error: "La constante del resorte no puede ser cero." };
        const ratio = (m * Math.pow(v, 2)) / k;
        if (ratio < 0) return { error: "Argumento de raíz cuadrada no puede ser negativo."};
        const x = Math.sqrt(ratio);
        return { result: { x }, steps: [`x = √(${m}*${v}² / ${k}) = ${formatNumber(x)} m`] };
    }
  }
];
