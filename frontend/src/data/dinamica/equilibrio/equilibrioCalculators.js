import { formatNumber } from '../../../utils/formatNumber';

const toRadians = (degrees) => degrees * (Math.PI / 180);
const toDegrees = (radians) => radians * (180 / Math.PI);

export const calculators = [
  // --- Grupo 1: Torque (Momento de Fuerza) ---
  {
    id: 'torque-calculo',
    title: 'Calcular Torque (τ)',
    formula: 'τ = r * F * sin(θ)',
    variables: [
      { symbol: 'r', label: 'Brazo de palanca (r)', unit: 'm', example: '2' },
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N', example: '10' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '90', isOptional: true }
    ],
    output: { symbol: 'tau', label: 'Torque (τ)', unit: 'N·m' },
    resolve: ({ r, F, theta = 90 }) => {
      const tau = r * F * Math.sin(toRadians(theta));
      return { result: { tau }, steps: [`τ = ${r} * ${F} * sin(${theta}°) = ${formatNumber(tau)} N·m`] };
    }
  },
  {
    id: 'torque-fuerza',
    title: 'Calcular Fuerza (desde τ)',
    formula: 'F = τ / (r * sin(θ))',
    variables: [
      { symbol: 'tau', label: 'Torque (τ)', unit: 'N·m', example: '20' },
      { symbol: 'r', label: 'Brazo de palanca (r)', unit: 'm', example: '2' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '90', isOptional: true }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ tau, r, theta = 90 }) => {
      const divisor = r * Math.sin(toRadians(theta));
      if (divisor === 0) return { error: "El denominador no puede ser cero." };
      const F = tau / divisor;
      return { result: { F }, steps: [`F = ${tau} / (${r} * sin(${theta}°)) = ${formatNumber(F)} N`] };
    }
  },

  // --- Grupo 2: Ley de la Palanca (Στ = 0) ---
  {
    id: 'palanca-fuerza-1',
    title: 'Ley de Palanca - Calcular F₁',
    formula: 'F₁ = (F₂ * r₂) / r₁',
    variables: [
      { symbol: 'F2', label: 'Fuerza 2 (F₂)', unit: 'N', example: '25' },
      { symbol: 'r2', label: 'Distancia 2 (r₂)', unit: 'm', example: '0.3' },
      { symbol: 'r1', label: 'Distancia 1 (r₁)', unit: 'm', example: '0.5' }
    ],
    output: { symbol: 'F1', label: 'Fuerza 1 (F₁)', unit: 'N' },
    resolve: ({ F2, r2, r1 }) => {
        if (r1 === 0) return { error: "La distancia r₁ no puede ser cero." };
        const F1 = (F2 * r2) / r1;
        return { result: { F1 }, steps: [`F₁ = (${F2}*${r2})/${r1} = ${formatNumber(F1)} N`] };
    }
  },
  {
    id: 'palanca-distancia-1',
    title: 'Ley de Palanca - Calcular r₁',
    formula: 'r₁ = (F₂ * r₂) / F₁',
    variables: [
      { symbol: 'F1', label: 'Fuerza 1 (F₁)', unit: 'N', example: '15' },
      { symbol: 'F2', label: 'Fuerza 2 (F₂)', unit: 'N', example: '25' },
      { symbol: 'r2', label: 'Distancia 2 (r₂)', unit: 'm', example: '0.3' }
    ],
    output: { symbol: 'r1', label: 'Distancia 1 (r₁)', unit: 'm' },
    resolve: ({ F1, F2, r2 }) => {
        if (F1 === 0) return { error: "La fuerza F₁ no puede ser cero." };
        const r1 = (F2 * r2) / F1;
        return { result: { r1 }, steps: [`r₁ = (${F2}*${r2})/${F1} = ${formatNumber(r1)} m`] };
    }
  },
  {
    id: 'palanca-fuerza-2',
    title: 'Ley de Palanca - Calcular F₂',
    formula: 'F₂ = (F₁ * r₁) / r₂',
    variables: [
        { symbol: 'F1', label: 'Fuerza 1 (F₁)', unit: 'N', example: '15' },
        { symbol: 'r1', label: 'Distancia 1 (r₁)', unit: 'm', example: '0.5' },
        { symbol: 'r2', label: 'Distancia 2 (r₂)', unit: 'm', example: '0.3' }
    ],
    output: { symbol: 'F2', label: 'Fuerza 2 (F₂)', unit: 'N' },
    resolve: ({ F1, r1, r2 }) => {
        if (r2 === 0) return { error: "La distancia r₂ no puede ser cero." };
        const F2 = (F1 * r1) / r2;
        return { result: { F2 }, steps: [`F₂ = (${F1}*${r1})/${r2} = ${formatNumber(F2)} N`] };
    }
  },
  {
    id: 'palanca-distancia-2',
    title: 'Ley de Palanca - Calcular r₂',
    formula: 'r₂ = (F₁ * r₁) / F₂',
    variables: [
        { symbol: 'F1', label: 'Fuerza 1 (F₁)', unit: 'N', example: '15' },
        { symbol: 'r1', label: 'Distancia 1 (r₁)', unit: 'm', example: '0.5' },
        { symbol: 'F2', label: 'Fuerza 2 (F₂)', unit: 'N', example: '25' }
    ],
    output: { symbol: 'r2', label: 'Distancia 2 (r₂)', unit: 'm' },
    resolve: ({ F1, r1, F2 }) => {
        if (F2 === 0) return { error: "La fuerza F₂ no puede ser cero." };
        const r2 = (F1 * r1) / F2;
        return { result: { r2 }, steps: [`r₂ = (${F1}*${r1})/${F2} = ${formatNumber(r2)} m`] };
    }
  },

  // --- Grupo 3: Primera Condición de Equilibrio (ΣF = 0) ---
  {
    id: 'fuerza-componentes',
    title: 'Descomposición de una Fuerza',
    formula: 'Fx = Fcos(θ), Fy = Fsin(θ)',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N', example: '100' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '30' }
    ],
    outputs: [
        { symbol: 'Fx', label: 'Componente X (Fx)', unit: 'N' },
        { symbol: 'Fy', label: 'Componente Y (Fy)', unit: 'N' }
    ],
    resolve: ({ F, theta }) => {
        const theta_rad = toRadians(theta);
        const Fx = F * Math.cos(theta_rad);
        const Fy = F * Math.sin(theta_rad);
        return { result: { Fx, Fy }, steps: [`Fx = ${F}cos(${theta}°) = ${formatNumber(Fx)} N`, `Fy = ${F}sin(${theta}°) = ${formatNumber(Fy)} N`] };
    }
  },
  {
    id: 'fuerza-equilibrante',
    title: 'Fuerza Equilibrante (2 Fuerzas)',
    formula: 'Fe = - (F₁ + F₂)',
    variables: [
      { symbol: 'F1', label: 'Fuerza 1 (F₁)', unit: 'N', example: '50' },
      { symbol: 'theta1', label: 'Ángulo 1 (θ₁)', unit: 'grados', example: '30' },
      { symbol: 'F2', label: 'Fuerza 2 (F₂)', unit: 'N', example: '70' },
      { symbol: 'theta2', label: 'Ángulo 2 (θ₂)', unit: 'grados', example: '135' }
    ],
    outputs: [
      { symbol: 'Fe', label: 'Magnitud Equilibrante (Fe)', unit: 'N' },
      { symbol: 'theta_e', label: 'Ángulo Equilibrante (θe)', unit: 'grados' }
    ],
    resolve: ({ F1, theta1, F2, theta2 }) => {
      const F1x = F1 * Math.cos(toRadians(theta1));
      const F1y = F1 * Math.sin(toRadians(theta1));
      const F2x = F2 * Math.cos(toRadians(theta2));
      const F2y = F2 * Math.sin(toRadians(theta2));
      const Rx = F1x + F2x;
      const Ry = F1y + F2y;
      const Fe = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
      let theta_e = toDegrees(Math.atan2(Ry, Rx)) + 180;
      theta_e = theta_e % 360;
      return { result: { Fe, theta_e }, steps: [`Resultante (Rx, Ry): (${formatNumber(Rx)}, ${formatNumber(Ry)})`, `Equilibrante: ${formatNumber(Fe)} N a ${formatNumber(theta_e)}°`] };
    }
  },
  {
    id: 'viga-equilibrio',
    title: 'Equilibrio en Viga (3 Fuerzas)',
    formula: 'F₁r₁ + F₂r₂ = F₃r₃',
    variables: [
      { symbol: 'F1', label: 'Fuerza 1', unit: 'N', example: '20' },
      { symbol: 'r1', label: 'Distancia 1', unit: 'm', example: '1.5' },
      { symbol: 'F2', label: 'Fuerza 2', unit: 'N', example: '30' },
      { symbol: 'r2', label: 'Distancia 2', unit: 'm', example: '2.5' },
      { symbol: 'r3', label: 'Distancia 3', unit: 'm', example: '5' }
    ],
    output: { symbol: 'F3', label: 'Fuerza 3 (F₃)', unit: 'N' },
    resolve: ({ F1, r1, F2, r2, r3 }) => {
        if (r3 === 0) return { error: "La distancia r₃ no puede ser cero." };
        const F3 = (F1 * r1 + F2 * r2) / r3;
        return { result: { F3 }, steps: [`F₃ = (${F1}*${r1} + ${F2}*${r2}) / ${r3} = ${formatNumber(F3)} N`] };
    }
  }
];
