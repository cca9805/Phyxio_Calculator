import { formatNumber } from '../../../utils/formatNumber';

export const calculators = [
  // --- Grupo 1: Cantidad de Movimiento (Momentum) ---
  {
    id: 'momentum-calculo',
    title: 'Calcular Cantidad de Movimiento (p)',
    formula: 'p = m * v',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '10' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '5' }
    ],
    output: { symbol: 'p', label: 'Cantidad de Movimiento (p)', unit: 'kg·m/s' },
    resolve: ({ m, v }) => {
      const p = m * v;
      return { result: { p }, steps: [`p = ${m} * ${v} = ${formatNumber(p)} kg·m/s`] };
    }
  },
  {
    id: 'momentum-masa',
    title: 'Calcular Masa (desde p)',
    formula: 'm = p / v',
    variables: [
      { symbol: 'p', label: 'Cantidad de Movimiento (p)', unit: 'kg·m/s', example: '50' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '5' }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ p, v }) => {
      if (v === 0) return { error: 'La velocidad no puede ser cero.' };
      const m = p / v;
      return { result: { m }, steps: [`m = ${p} / ${v} = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'momentum-velocidad',
    title: 'Calcular Velocidad (desde p)',
    formula: 'v = p / m',
    variables: [
      { symbol: 'p', label: 'Cantidad de Movimiento (p)', unit: 'kg·m/s', example: '50' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '10' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ p, m }) => {
      if (m === 0) return { error: 'La masa no puede ser cero.' };
      const v = p / m;
      return { result: { v }, steps: [`v = ${p} / ${m} = ${formatNumber(v)} m/s`] };
    }
  },

  // --- Grupo 2: Impulso ---
  {
    id: 'impulso-calculo',
    title: 'Calcular Impulso (J = FΔt)',
    formula: 'J = F * Δt',
    variables: [
      { symbol: 'F', label: 'Fuerza Promedio (F)', unit: 'N', example: '100' },
      { symbol: 'deltaT', label: 'Intervalo de Tiempo (Δt)', unit: 's', example: '0.5' }
    ],
    output: { symbol: 'J', label: 'Impulso (J)', unit: 'N·s' },
    resolve: ({ F, deltaT }) => {
      const J = F * deltaT;
      return { result: { J }, steps: [`J = ${F} * ${deltaT} = ${formatNumber(J)} N·s`] };
    }
  },
  {
    id: 'impulso-fuerza',
    title: 'Calcular Fuerza (desde J)',
    formula: 'F = J / Δt',
    variables: [
      { symbol: 'J', label: 'Impulso (J)', unit: 'N·s', example: '50' },
      { symbol: 'deltaT', label: 'Intervalo de Tiempo (Δt)', unit: 's', example: '0.5' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ J, deltaT }) => {
      if (deltaT === 0) return { error: 'El intervalo de tiempo no puede ser cero.' };
      const F = J / deltaT;
      return { result: { F }, steps: [`F = ${J} / ${deltaT} = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'impulso-tiempo',
    title: 'Calcular Tiempo (desde J)',
    formula: 'Δt = J / F',
    variables: [
      { symbol: 'J', label: 'Impulso (J)', unit: 'N·s', example: '50' },
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N', example: '100' }
    ],
    output: { symbol: 'deltaT', label: 'Intervalo de Tiempo (Δt)', unit: 's' },
    resolve: ({ J, F }) => {
      if (F === 0) return { error: 'La fuerza no puede ser cero.' };
      const deltaT = J / F;
      return { result: { deltaT }, steps: [`Δt = ${J} / ${F} = ${formatNumber(deltaT)} s`] };
    }
  },

  // --- Grupo 3: Teorema Impulso-Momentum ---
  {
    id: 'teorema-impulso-calculo',
    title: 'Calcular Impulso (J = Δp)',
    formula: 'J = m(vf - vi)',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '2' },
      { symbol: 'vi', label: 'Velocidad Inicial (vi)', unit: 'm/s', example: '10' },
      { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s', example: '30' }
    ],
    output: { symbol: 'J', label: 'Impulso (J)', unit: 'kg·m/s' },
    resolve: ({ m, vf, vi }) => {
      const J = m * (vf - vi);
      return { result: { J }, steps: [`J = ${m} * (${vf} - ${vi}) = ${formatNumber(J)} kg·m/s`] };
    }
  },
  {
    id: 'teorema-impulso-vf',
    title: 'Velocidad Final (desde J)',
    formula: 'vf = vi + J/m',
    variables: [
      { symbol: 'J', label: 'Impulso (J)', unit: 'kg·m/s', example: '40' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '2' },
      { symbol: 'vi', label: 'Velocidad Inicial (vi)', unit: 'm/s', example: '10' }
    ],
    output: { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s' },
    resolve: ({ J, m, vi }) => {
      if (m === 0) return { error: 'La masa no puede ser cero.' };
      const vf = vi + (J / m);
      return { result: { vf }, steps: [`vf = ${vi} + (${J} / ${m}) = ${formatNumber(vf)} m/s`] };
    }
  },
  {
    id: 'teorema-impulso-vi',
    title: 'Velocidad Inicial (desde J)',
    formula: 'vi = vf - J/m',
    variables: [
      { symbol: 'J', label: 'Impulso (J)', unit: 'kg·m/s', example: '40' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg', example: '2' },
      { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s', example: '30' }
    ],
    output: { symbol: 'vi', label: 'Velocidad Inicial (vi)', unit: 'm/s' },
    resolve: ({ J, m, vf }) => {
      if (m === 0) return { error: 'La masa no puede ser cero.' };
      const vi = vf - (J / m);
      return { result: { vi }, steps: [`vi = ${vf} - (${J} / ${m}) = ${formatNumber(vi)} m/s`] };
    }
  },
  {
    id: 'teorema-impulso-masa',
    title: 'Masa (desde J y Δv)',
    formula: 'm = J / (vf - vi)',
    variables: [
      { symbol: 'J', label: 'Impulso (J)', unit: 'kg·m/s', example: '40' },
      { symbol: 'vi', label: 'Velocidad Inicial (vi)', unit: 'm/s', example: '10' },
      { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s', example: '30' }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ J, vf, vi }) => {
        const deltaV = vf - vi;
        if (deltaV === 0) return { error: 'El cambio de velocidad no puede ser cero.' };
        const m = J / deltaV;
        return { result: { m }, steps: [`m = ${J} / (${vf} - ${vi}) = ${formatNumber(m)} kg`] };
    }
  },

  // --- Grupo 4: Conservación del Momentum (Colisiones) ---
  {
    id: 'colision-inelastica-vf',
    title: 'Vel. Final (Colisión Inelástica)',
    formula: 'vf = (m₁vᵢ₁ + m₂vᵢ₂) / (m₁ + m₂)',
    variables: [
      { symbol: 'm1', label: 'Masa 1 (m₁)', unit: 'kg', example: '2' },
      { symbol: 'vi1', label: 'Vel. Inicial 1 (vᵢ₁)', unit: 'm/s', example: '10' },
      { symbol: 'm2', label: 'Masa 2 (m₂)', unit: 'kg', example: '3' },
      { symbol: 'vi2', label: 'Vel. Inicial 2 (vᵢ₂)', unit: 'm/s', example: '0' }
    ],
    output: { symbol: 'vf', label: 'Velocidad Final Común (vf)', unit: 'm/s' },
    resolve: ({ m1, vi1, m2, vi2 }) => {
      const massSum = m1 + m2;
      if (massSum === 0) return { error: 'La suma de masas no puede ser cero.' };
      const vf = (m1 * vi1 + m2 * vi2) / massSum;
      return { result: { vf }, steps: [`vf = (${m1}*${vi1} + ${m2}*${vi2}) / (${m1}+${m2}) = ${formatNumber(vf)} m/s`] };
    }
  },
  {
    id: 'colision-inelastica-m1',
    title: 'Masa 1 (Colisión Inelástica)',
    formula: 'm₁ = m₂(vf - vᵢ₂) / (vᵢ₁ - vf)',
    variables: [
      { symbol: 'm2', label: 'Masa 2 (m₂)', unit: 'kg', example: '3' },
      { symbol: 'vi1', label: 'Vel. Inicial 1 (vᵢ₁)', unit: 'm/s', example: '10' },
      { symbol: 'vi2', label: 'Vel. Inicial 2 (vᵢ₂)', unit: 'm/s', example: '0' },
      { symbol: 'vf', label: 'Velocidad Final Común (vf)', unit: 'm/s', example: '4' }
    ],
    output: { symbol: 'm1', label: 'Masa 1 (m₁)', unit: 'kg' },
    resolve: ({ m2, vi1, vi2, vf }) => {
      const divisor = vi1 - vf;
      if (divisor === 0) return { error: "La velocidad inicial de la masa 1 no puede ser igual a la velocidad final."};
      const m1 = m2 * (vf-vi2)/divisor;
      return { result: { m1 }, steps: [`m₁ = ${m2}(${vf} - ${vi2}) / (${vi1} - ${vf}) = ${formatNumber(m1)} kg`] };
    }
  },
  {
    id: 'colision-elastica-vfs',
    title: 'Vels. Finales (Colisión Elástica 1D)',
    formula: 'vf₁, vf₂',
    variables: [
        { symbol: 'm1', label: 'Masa 1', unit: 'kg', example: '5' },
        { symbol: 'vi1', label: 'Velocidad Inicial 1', unit: 'm/s', example: '10' },
        { symbol: 'm2', label: 'Masa 2', unit: 'kg', example: '5' },
        { symbol: 'vi2', label: 'Velocidad Inicial 2', unit: 'm/s', example: '0' }
    ],
    outputs: [
      { symbol: 'vf1', label: 'Velocidad Final 1 (vf₁)', unit: 'm/s' },
      { symbol: 'vf2', label: 'Velocidad Final 2 (vf₂)', unit: 'm/s' }
    ],
    resolve: ({ m1, vi1, m2, vi2 }) => {
      const m_sum = m1 + m2;
      if (m_sum === 0) return { error: 'La suma de las masas no puede ser cero.' };
      const vf1 = ((m1 - m2) / m_sum) * vi1 + ((2 * m2) / m_sum) * vi2;
      const vf2 = ((2 * m1) / m_sum) * vi1 + ((m2 - m1) / m_sum) * vi2;
      return { result: { vf1, vf2 }, steps: [`vf₁ = ${formatNumber(vf1)} m/s`, `vf₂ = ${formatNumber(vf2)} m/s`] };
    }
  },
  {
    id: 'coeficiente-restitucion',
    title: 'Coeficiente de Restitución (e)',
    formula: 'e = (vf₂ - vf₁) / (vᵢ₁ - vᵢ₂)',
    variables: [
      { symbol: 'vi1', label: 'Vel. Inicial 1 (vᵢ₁)', unit: 'm/s', example: '10' },
      { symbol: 'vi2', label: 'Vel. Inicial 2 (vᵢ₂)', unit: 'm/s', example: '0' },
      { symbol: 'vf1', label: 'Vel. Final 1 (vf₁)', unit: 'm/s', example: '2.5' },
      { symbol: 'vf2', label: 'Vel. Final 2 (vf₂)', unit: 'm/s', example: '7.5' }
    ],
    output: { symbol: 'e', label: 'Coeficiente de Restitución (e)', unit: '' },
    resolve: ({ vi1, vi2, vf1, vf2 }) => {
      const delta_vi = vi1 - vi2;
      if (delta_vi === 0) return { error: "La velocidad relativa inicial no puede ser cero." };
      const e = (vf2 - vf1) / delta_vi;
      return { result: { e }, steps: [`e = (${vf2} - ${vf1}) / (${vi1} - ${vi2}) = ${formatNumber(e)}`] };
    }
  }
];
