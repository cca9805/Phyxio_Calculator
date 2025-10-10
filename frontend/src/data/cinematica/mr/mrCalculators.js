import { formatNumber } from '../../../utils/formatNumber';

export const calculators = [
  // --- Grupo 1: Movimiento Relativo en 1D ---
  {
    id: 'mr-posicion-relativa-1d',
    title: 'Posición Relativa (1D)',
    formula: 'xₐᵦ = xₐ - xᵦ',
    variables: [
      { symbol: 'xa', label: 'Posición de A (xₐ)', unit: 'm', example: '100' },
      { symbol: 'xb', label: 'Posición de B (xᵦ)', unit: 'm', example: '30' }
    ],
    output: { symbol: 'xab', label: 'Posición de A respecto a B (xₐᵦ)', unit: 'm' },
    resolve: ({ xa, xb }) => {
      const xab = xa - xb;
      return { result: { xab }, steps: [`xₐᵦ = ${xa} - ${xb} = ${formatNumber(xab)} m`] };
    }
  },
  {
    id: 'mr-despeje-xa-posicion-1d',
    title: 'Calcular xₐ (Posición Relativa 1D)',
    formula: 'xₐ = xₐᵦ + xᵦ',
    variables: [
      { symbol: 'xab', label: 'Posición de A respecto a B (xₐᵦ)', unit: 'm', example: '70' },
      { symbol: 'xb', label: 'Posición de B (xᵦ)', unit: 'm', example: '30' }
    ],
    output: { symbol: 'xa', label: 'Posición de A (xₐ)', unit: 'm' },
    resolve: ({ xab, xb }) => {
      const xa = xab + xb;
      return { result: { xa }, steps: [`xₐ = ${xab} + ${xb} = ${formatNumber(xa)} m`] };
    }
  },
  {
    id: 'mr-velocidad-relativa-1d',
    title: 'Velocidad Relativa (1D)',
    formula: 'vₐᵦ = vₐ - vᵦ',
    variables: [
      { symbol: 'va', label: 'Velocidad de A (vₐ)', unit: 'm/s', example: '20' },
      { symbol: 'vb', label: 'Velocidad de B (vᵦ)', unit: 'm/s', example: '-5' }
    ],
    output: { symbol: 'vab', label: 'Velocidad de A respecto a B (vₐᵦ)', unit: 'm/s' },
    resolve: ({ va, vb }) => {
      const vab = va - vb;
      return { result: { vab }, steps: [`vₐᵦ = ${va} - (${vb}) = ${formatNumber(vab)} m/s`] };
    }
  },
  {
    id: 'mr-despeje-va-velocidad-1d',
    title: 'Calcular vₐ (Velocidad Relativa 1D)',
    formula: 'vₐ = vₐᵦ + vᵦ',
    variables: [
      { symbol: 'vab', label: 'Velocidad de A respecto a B (vₐᵦ)', unit: 'm/s', example: '25' },
      { symbol: 'vb', label: 'Velocidad de B (vᵦ)', unit: 'm/s', example: '-5' }
    ],
    output: { symbol: 'va', label: 'Velocidad de A (vₐ)', unit: 'm/s' },
    resolve: ({ vab, vb }) => {
      const va = vab + vb;
      return { result: { va }, steps: [`vₐ = ${vab} + (${vb}) = ${formatNumber(va)} m/s`] };
    }
  },

  // --- Grupo 2: Transformada de Galileo (1D) ---
  {
    id: 'mr-galileo-posicion',
    title: "Posición en Sistema Fijo S",
    formula: "x = x' + V*t",
    description: "Convierte la posición de un sistema en movimiento (S') a un sistema fijo (S).",
    variables: [
      { symbol: 'xp', label: "Posición en S' (x')", unit: 'm', example: '10' },
      { symbol: 'V', label: "Velocidad de S' respecto a S (V)", unit: 'm/s', example: '5' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '4' }
    ],
    output: { symbol: 'x', label: 'Posición en S (x)', unit: 'm' },
    resolve: ({ xp, V, t }) => {
      const x = xp + V * t;
      return { result: { x }, steps: [`x = ${xp} + ${V} * ${t} = ${formatNumber(x)} m`] };
    }
  },
    {
    id: 'mr-galileo-posicion-prima',
    title: "Posición en Sistema Móvil S'",
    formula: "x' = x - V*t",
    variables: [
      { symbol: 'x', label: "Posición en S (x)", unit: 'm', example: '30' },
      { symbol: 'V', label: "Velocidad de S' respecto a S (V)", unit: 'm/s', example: '5' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '4' }
    ],
    output: { symbol: 'xp', label: "Posición en S' (x')", unit: 'm' },
    resolve: ({ x, V, t }) => {
      const xp = x - V * t;
      return { result: { xp }, steps: [`x' = ${x} - ${V} * ${t} = ${formatNumber(xp)} m`] };
    }
  },
  {
    id: 'mr-galileo-velocidad',
    title: "Velocidad en Sistema Fijo S",
    formula: "v = v' + V",
    variables: [
      { symbol: 'vp', label: "Velocidad en S' (v')", unit: 'm/s', example: '2' },
      { symbol: 'V', label: "Velocidad de S' respecto a S (V)", unit: 'm/s', example: '5' }
    ],
    output: { symbol: 'v', label: 'Velocidad en S (v)', unit: 'm/s' },
    resolve: ({ vp, V }) => {
      const v = vp + V;
      return { result: { v }, steps: [`v = ${vp} + ${V} = ${formatNumber(v)} m/s`] };
    }
  },

  // --- Grupo 3: Encuentro en 1D ---
  {
    id: 'mr-tiempo-encuentro-1d',
    title: 'Tiempo de Encuentro (1D)',
    formula: 't = (xᵦ₀ - xₐ₀) / (vₐ - vᵦ)',
    variables: [
      { symbol: 'xa0', label: 'Posición inicial de A (xₐ₀)', unit: 'm', example: '0' },
      { symbol: 'va', label: 'Velocidad de A (vₐ)', unit: 'm/s', example: '20' },
      { symbol: 'xb0', label: 'Posición inicial de B (xᵦ₀)', unit: 'm', example: '100' },
      { symbol: 'vb', label: 'Velocidad de B (vᵦ)', unit: 'm/s', example: '-10' },
    ],
    output: { symbol: 't_enc', label: 'Tiempo de encuentro (t)', unit: 's' },
    resolve: ({ xa0, va, xb0, vb }) => {
      const delta_v = va - vb;
      if (delta_v === 0) return { error: 'La velocidad relativa es cero, no se encontrarán.' };
      const t = (xb0 - xa0) / delta_v;
      if (t < 0) return { error: `El encuentro ocurrió en el pasado (t=${formatNumber(t)} s).` };
      const x_enc = xa0 + va * t;
      return { result: { t_enc: t }, steps: [`t = (${xb0} - ${xa0}) / (${va} - (${vb})) = ${formatNumber(t)} s`, `Posición de encuentro: x = ${xa0} + (${va})*${formatNumber(t)} = ${formatNumber(x_enc)} m`] };
    }
  },

  // --- Grupo 4: Operaciones Vectoriales en 2D ---
  {
    id: 'mr-suma-vectores-2d',
    title: 'Suma de Vectores 2D (Componentes)',
    formula: 'R = A + B = (Ax+Bx, Ay+By)',
    variables: [
        { symbol: 'ax', label: 'Componente Ax', unit: '', example: '3' },
        { symbol: 'ay', label: 'Componente Ay', unit: '', example: '4' },
        { symbol: 'bx', label: 'Componente Bx', unit: '', example: '1' },
        { symbol: 'by', label: 'Componente By', unit: '', example: '-2' },
    ],
    output: { symbol: 'R', label: 'Vector Resultante R', unit: '' },
    resolve: ({ ax, ay, bx, by }) => {
        const rx = ax + bx;
        const ry = ay + by;
        const mag = Math.sqrt(Math.pow(rx, 2) + Math.pow(ry, 2));
        const angle = Math.atan2(ry, rx) * (180 / Math.PI);
        return { result: { R: `(${formatNumber(rx)}, ${formatNumber(ry)})` }, steps: [`Rx = ${ax} + ${bx} = ${formatNumber(rx)}`, `Ry = ${ay} + ${by} = ${formatNumber(ry)}`, `Magnitud |R| = √(${rx}² + ${ry}²) = ${formatNumber(mag)}`, `Ángulo θ = ${formatNumber(angle)}°`] };
    }
  },
  {
    id: 'mr-resta-vectores-2d',
    title: 'Resta de Vectores 2D (Componentes)',
    formula: 'R = A - B = (Ax-Bx, Ay-By)',
    variables: [
        { symbol: 'ax', label: 'Componente Ax', unit: '', example: '3' },
        { symbol: 'ay', label: 'Componente Ay', unit: '', example: '4' },
        { symbol: 'bx', label: 'Componente Bx', unit: '', example: '1' },
        { symbol: 'by', label: 'Componente By', unit: '', example: '-2' },
    ],
    output: { symbol: 'R', label: 'Vector Resultante R', unit: '' },
    resolve: ({ ax, ay, bx, by }) => {
        const rx = ax - bx;
        const ry = ay - by;
        const mag = Math.sqrt(Math.pow(rx, 2) + Math.pow(ry, 2));
        const angle = Math.atan2(ry, rx) * (180 / Math.PI);
        return { result: { R: `(${formatNumber(rx)}, ${formatNumber(ry)})` }, steps: [`Rx = ${ax} - ${bx} = ${formatNumber(rx)}`, `Ry = ${ay} - ${by} = ${formatNumber(ry)}`, `Magnitud |R| = √(${rx}² + ${ry}²) = ${formatNumber(mag)}`, `Ángulo θ = ${formatNumber(angle)}°`] };
    }
  },

  // --- Grupo 5: Velocidad Relativa en 2D ---
  {
    id: 'mr-velocidad-relativa-2d',
    title: 'Velocidad Relativa (2D)',
    description: 'Calcula la velocidad de A respecto a B en 2D (vₐᵦ = vₐ - vᵦ).',
    formula: 'vₐᵦ = vₐ - vᵦ',
    variables: [
      { symbol: 'vax', label: 'Velocidad vₐ (componente x)', unit: 'm/s', example: '10' },
      { symbol: 'vay', label: 'Velocidad vₐ (componente y)', unit: 'm/s', example: '5' },
      { symbol: 'vbx', label: 'Velocidad vᵦ (componente x)', unit: 'm/s', example: '3' },
      { symbol: 'vby', label: 'Velocidad vᵦ (componente y)', unit: 'm/s', example: '8' },
    ],
    output: { symbol: 'vab', label: 'Velocidad Relativa vₐᵦ', unit: 'm/s' },
    resolve: ({ vax, vay, vbx, vby }) => {
      const vabx = vax - vbx;
      const vaby = vay - vby;
      const mag = Math.sqrt(Math.pow(vabx, 2) + Math.pow(vaby, 2));
      const angle = Math.atan2(vaby, vabx) * (180 / Math.PI);
      return { result: { vab: `(${formatNumber(vabx)}, ${formatNumber(vaby)})` }, steps: [`vₐᵦₓ = ${vax} - ${vbx} = ${formatNumber(vabx)}`, `vₐᵦᵧ = ${vay} - ${vby} = ${formatNumber(vaby)}`, `|vₐᵦ| = √(${vabx}² + ${vaby}²) = ${formatNumber(mag)} m/s`, `Ángulo θ = ${formatNumber(angle)}°`] };
    }
  },
  {
    id: 'mr-composicion-velocidades-2d',
    title: 'Composición de Velocidades (2D)',
    description: 'Calcula la velocidad respecto a un sistema fijo (vₐₑ = vₐᵦ + vᵦₑ).',
    formula: 'vₐₑ = vₐᵦ + vᵦₑ',
    variables: [
      { symbol: 'vabx', label: 'vₐᵦ (componente x)', unit: 'm/s', example: '15' }, // Ej: Velocidad de un bote respecto al agua
      { symbol: 'vaby', label: 'vₐᵦ (componente y)', unit: 'm/s', example: '0' },
      { symbol: 'vbex', label: 'vᵦₑ (componente x)', unit: 'm/s', example: '0' },   // Ej: Velocidad del agua (río) respecto a la tierra
      { symbol: 'vbey', label: 'vᵦₑ (componente y)', unit: 'm/s', example: '4' },
    ],
    output: { symbol: 'vae', label: 'Velocidad Resultante vₐₑ', unit: 'm/s' },
    resolve: ({ vabx, vaby, vbex, vbey }) => {
      const vaex = vabx + vbex;
      const vaey = vaby + vbey;
      const mag = Math.sqrt(Math.pow(vaex, 2) + Math.pow(vaey, 2));
      const angle = Math.atan2(vaey, vaex) * (180 / Math.PI);
      return { result: { vae: `(${formatNumber(vaex)}, ${formatNumber(vaey)})` }, steps: [`vₐₑₓ = ${vabx} + ${vbex} = ${formatNumber(vaex)}`, `vₐₑᵧ = ${vaby} + ${vbey} = ${formatNumber(vaey)}`, `|vₐₑ| = √(${vaex}² + ${vaey}²) = ${formatNumber(mag)} m/s`, `Ángulo θ = ${formatNumber(angle)}°`] };
    }
  }
];
