import { formatNumber } from '../../../utils/formatNumber';

const PI = Math.PI;

export const calculators = [
  // --- Grupo 1: Cinemática Rotacional y Conexión Lineal ---
  {
    id: 'rotacion-cinematica-wf-desde-t',
    title: 'Velocidad Angular Final (ωf)',
    formula: 'ω_f = ω_i + αt',
    variables: [
      { symbol: 'ωi', label: 'Vel. Angular Inicial (ωi)', unit: 'rad/s', example: '2' },
      { symbol: 'α', label: 'Aceleración Angular (α)', unit: 'rad/s²', example: '4' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '5' }
    ],
    output: { symbol: 'ωf', label: 'Velocidad Angular Final (ωf)', unit: 'rad/s' },
    resolve: ({ ωi, α, t }) => {
        const ωf = ωi + α * t;
        return { result: { ωf }, steps: [`ωf = ${ωi} + ${α}*${t} = ${formatNumber(ωf)} rad/s`] };
    }
  },
  {
    id: 'rotacion-lineal-velocidad',
    title: 'Velocidad Tangencial desde Angular',
    formula: 'v = ωr',
    variables: [
        { symbol: 'ω', label: 'Velocidad Angular (ω)', unit: 'rad/s', example: '10' },
        { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '0.5' }
    ],
    output: { symbol: 'v', label: 'Velocidad Tangencial (v)', unit: 'm/s' },
    resolve: ({ ω, r }) => {
        const v = ω * r;
        return { result: { v }, steps: [`v = ${ω} * ${r} = ${formatNumber(v)} m/s`] };
    }
  },

  // --- Grupo 2: Momento de Inercia (I) ---
  {
    id: 'rotacion-inercia-puntual',
    title: 'Inercia: Masa Puntual',
    formula: 'I = mr²',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '2' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '0.5' }
    ],
    output: { symbol: 'I', label: 'Momento de Inercia (I)', unit: 'kg·m²' },
    resolve: ({ m, r }) => {
      const I = m * r**2;
      return { result: { I }, steps: [`I = ${m} * ${r}² = ${formatNumber(I)} kg·m²`] };
    }
  },
  {
    id: 'rotacion-inercia-cilindro-solido',
    title: 'Inercia: Cilindro Sólido (eje central)',
    formula: 'I = ½mr²',
    variables: [
        { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '10' },
        { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '0.2' }
    ],
    output: { symbol: 'I', label: 'Momento de Inercia (I)', unit: 'kg·m²' },
    resolve: ({ m, r }) => {
        const I = 0.5 * m * r**2;
        return { result: { I }, steps: [`I = 0.5 * ${m} * ${r}² = ${formatNumber(I)} kg·m²`] };
    }
  },
  {
    id: 'rotacion-inercia-esfera-solida',
    title: 'Inercia: Esfera Sólida',
    formula: 'I = (2/5)mr²',
    variables: [
        { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '10' },
        { symbol: 'r', label: 'Radio (r)', unit: 'm', example: '0.2' }
    ],
    output: { symbol: 'I', label: 'Momento de Inercia (I)', unit: 'kg·m²' },
    resolve: ({ m, r }) => {
        const I = (2/5) * m * r**2;
        return { result: { I }, steps: [`I = (2/5) * ${m} * ${r}² = ${formatNumber(I)} kg·m²`] };
    }
  },

  // --- Grupo 3: Dinámica Rotacional (τ = Iα) ---
  {
    id: 'rotacion-torque',
    title: 'Calcular Torque (τ = Iα)',
    formula: 'τ = Iα',
    variables: [
      { symbol: 'I', label: 'Momento de Inercia (I)', unit: 'kg·m²', example: '1.5' },
      { symbol: 'α', label: 'Aceleración Angular (α)', unit: 'rad/s²', example: '4' }
    ],
    output: { symbol: 'τ', label: 'Torque (τ)', unit: 'N·m' },
    resolve: ({ I, α }) => {
      const τ = I * α;
      return { result: { τ }, steps: [`τ = ${I} * ${α} = ${formatNumber(τ)} N·m`] };
    }
  },

  // --- Grupo 4: Trabajo y Energía Rotacional ---
  {
    id: 'rotacion-energia',
    title: 'Energía Cinética Rotacional',
    formula: 'E_rot = ½Iω²',
    variables: [
      { symbol: 'I', label: 'Momento de Inercia (I)', unit: 'kg·m²', example: '1.5' },
      { symbol: 'ω', label: 'Velocidad Angular (ω)', unit: 'rad/s', example: '3' }
    ],
    output: { symbol: 'E_rot', label: 'Energía Rotacional (E_rot)', unit: 'J' },
    resolve: ({ I, ω }) => {
      const E_rot = 0.5 * I * ω**2;
      return { result: { E_rot }, steps: [`E_rot = 0.5 * ${I} * ${ω}² = ${formatNumber(E_rot)} J`] };
    }
  },
  {
    id: 'rotacion-trabajo',
    title: 'Trabajo Rotacional',
    formula: 'W_rot = τΔθ',
    variables: [
        { symbol: 'τ', label: 'Torque (τ)', unit: 'N·m', example: '10' },
        { symbol: 'Δθ', label: 'Desplazamiento Angular (Δθ)', unit: 'rad', example: '6.28' }
    ],
    output: { symbol: 'W_rot', label: 'Trabajo Rotacional (W_rot)', unit: 'J' },
    resolve: ({ τ, Δθ }) => {
        const W_rot = τ * Δθ;
        return { result: { W_rot }, steps: [`W_rot = ${τ} * ${Δθ} = ${formatNumber(W_rot)} J`] };
    }
  },
  {
    id: 'rotacion-energia-total-rodadura',
    title: 'Energía Total de Rodadura',
    formula: 'E_total = ½mv² + ½Iω²',
    variables: [
        { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '2' },
        { symbol: 'v', label: 'Velocidad Lineal (v)', unit: 'm/s', example: '5' },
        { symbol: 'I', label: 'Momento de Inercia (I)', unit: 'kg·m²', example: '0.25' },
        { symbol: 'ω', label: 'Velocidad Angular (ω)', unit: 'rad/s', example: '10' }
    ],
    output: { symbol: 'E_total', label: 'Energía Total (E_total)', unit: 'J' },
    resolve: ({ m, v, I, ω }) => {
        const E_trans = 0.5 * m * v**2;
        const E_rot = 0.5 * I * ω**2;
        const E_total = E_trans + E_rot;
        return { result: { E_total }, steps: [`E_total = (½*${m}*${v}²) + (½*${I}*${ω}²) = ${formatNumber(E_total)} J`] };
    }
  },

  // --- Grupo 5: Momento Angular (L) ---
  {
    id: 'rotacion-momento-angular',
    title: 'Momento Angular (L = Iω)',
    formula: 'L = Iω',
    variables: [
        { symbol: 'I', label: 'Momento de Inercia (I)', unit: 'kg·m²', example: '1.5' },
        { symbol: 'ω', label: 'Velocidad Angular (ω)', unit: 'rad/s', example: '4' }
    ],
    output: { symbol: 'L', label: 'Momento Angular (L)', unit: 'kg·m²/s' },
    resolve: ({ I, ω }) => {
        const L = I * ω;
        return { result: { L }, steps: [`L = ${I} * ${ω} = ${formatNumber(L)} kg·m²/s`] };
    }
  },
  {
    id: 'rotacion-conservacion-momento-angular',
    title: 'Conservación de Momento Angular',
    formula: 'I₁ω₁ = I₂ω₂',
    variables: [
        { symbol: 'I1', label: 'Inercia Inicial (I₁)', unit: 'kg·m²', example: '4' },
        { symbol: 'ω1', label: 'Velocidad Inicial (ω₁)', unit: 'rad/s', example: '2' },
        { symbol: 'I2', label: 'Inercia Final (I₂)', unit: 'kg·m²', example: '1' }
    ],
    output: { symbol: 'ω2', label: 'Velocidad Final (ω₂)', unit: 'rad/s' },
    resolve: ({ I1, ω1, I2 }) => {
        if (I2 === 0) return { error: "El momento de inercia final no puede ser cero." };
        const ω2 = (I1 * ω1) / I2;
        return { result: { ω2 }, steps: [`ω₂ = (${I1} * ${ω1}) / ${I2} = ${formatNumber(ω2)} rad/s`] };
    }
  }
];
