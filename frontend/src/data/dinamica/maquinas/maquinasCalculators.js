import { formatNumber } from '../../../utils/formatNumber';

const toRadians = (degrees) => degrees * (Math.PI / 180);

export const calculators = [
  // --- Grupo 1: Conceptos Generales de Máquinas ---
  {
    id: 'maquinas-vm',
    title: 'Ventaja Mecánica (VM)',
    formula: 'VM = F_resistencia / F_esfuerzo',
    variables: [
      { symbol: 'Fr', label: 'Fuerza de Resistencia (Fr)', unit: 'N', example: '100' },
      { symbol: 'Fe', label: 'Fuerza de Esfuerzo (Fe)', unit: 'N', example: '25' }
    ],
    output: { symbol: 'VM', label: 'Ventaja Mecánica (VM)', unit: '' },
    resolve: ({ Fr, Fe }) => {
      if (Fe === 0) return { error: "La fuerza de esfuerzo no puede ser cero." };
      const VM = Fr / Fe;
      return { result: { VM }, steps: [`VM = ${Fr} / ${Fe} = ${formatNumber(VM)}`] };
    }
  },
  {
    id: 'maquinas-vmi',
    title: 'Ventaja Mecánica Ideal (VMI)',
    formula: 'VMI = d_esfuerzo / d_resistencia',
    variables: [
      { symbol: 'de', label: 'Distancia de Esfuerzo (de)', unit: 'm', example: '1.0' },
      { symbol: 'dr', label: 'Distancia de Resistencia (dr)', unit: 'm', example: '0.2' }
    ],
    output: { symbol: 'VMI', label: 'Ventaja Mecánica Ideal (VMI)', unit: '' },
    resolve: ({ de, dr }) => {
      if (dr === 0) return { error: "La distancia de resistencia no puede ser cero." };
      const VMI = de / dr;
      return { result: { VMI }, steps: [`VMI = ${de} / ${dr} = ${formatNumber(VMI)}`] };
    }
  },
  {
    id: 'maquinas-eficiencia-trabajo',
    title: 'Eficiencia (η) por Trabajo',
    formula: 'η = (W_útil / W_suministrado) * 100',
    variables: [
      { symbol: 'Wu', label: 'Trabajo Útil (W_útil)', unit: 'J', example: '80' },
      { symbol: 'Ws', label: 'Trabajo Suministrado (W_sum)', unit: 'J', example: '100' }
    ],
    output: { symbol: 'eta', label: 'Eficiencia (η)', unit: '%' },
    resolve: ({ Wu, Ws }) => {
      if (Ws === 0) return { error: "El trabajo suministrado no puede ser cero." };
      const eta = (Wu / Ws) * 100;
      return { result: { eta }, steps: [`η = (${Wu} / ${Ws}) * 100 = ${formatNumber(eta)} %`] };
    }
  },
  {
    id: 'maquinas-eficiencia-vm',
    title: 'Eficiencia (η) por Ventajas Mecánicas',
    formula: 'η = (VM / VMI) * 100',
    variables: [
      { symbol: 'VM', label: 'Ventaja Mecánica (VM)', unit: '', example: '4' },
      { symbol: 'VMI', label: 'Ventaja Mecánica Ideal (VMI)', unit: '', example: '5' }
    ],
    output: { symbol: 'eta', label: 'Eficiencia (η)', unit: '%' },
    resolve: ({ VM, VMI }) => {
      if (VMI === 0) return { error: "La VMI no puede ser cero." };
      const eta = (VM / VMI) * 100;
      return { result: { eta }, steps: [`η = (${VM} / ${VMI}) * 100 = ${formatNumber(eta)} %`] };
    }
  },

  // --- Grupo 2: Palanca ---
  {
    id: 'palanca-equilibrio-unificada',
    title: 'Ley de la Palanca (Resolver 1 incógnita)',
    description: 'En Fₑdₑ = Fᵣdᵣ, deja un campo vacío para resolverlo.',
    formula: 'Fₑ * dₑ = Fᵣ * dᵣ',
    variables: [
      { symbol: 'Fe', label: 'Fuerza Esfuerzo (Fₑ)', unit: 'N', isOptional: true },
      { symbol: 'de', label: 'Distancia Esfuerzo (dₑ)', unit: 'm', isOptional: true },
      { symbol: 'Fr', label: 'Fuerza Resistencia (Fᵣ)', unit: 'N', isOptional: true },
      { symbol: 'dr', label: 'Distancia Resistencia (dᵣ)', unit: 'm', isOptional: true }
    ],
    output: { symbol: 'unknown', label: 'Valor desconocido', unit: '' },
    resolve: ({ Fe, de, Fr, dr }) => {
      const inputs = { Fe, de, Fr, dr };
      const undefinedVars = Object.keys(inputs).filter(k => inputs[k] === undefined || inputs[k] === '');
      if (undefinedVars.length !== 1) return { error: "Debe dejar exactamente un campo vacío." };
      const unknownVar = undefinedVars[0];

      if (unknownVar === 'Fe') {
        if (de === 0) return { error: "La distancia de esfuerzo (dₑ) no puede ser cero." };
        const Fe_calc = (Fr * dr) / de;
        return { result: { unknown: Fe_calc, symbol: 'Fₑ' }, steps: [`Fₑ = (${Fr} * ${dr}) / ${de} = ${formatNumber(Fe_calc)} N`] };
      } else if (unknownVar === 'de') {
        if (Fe === 0) return { error: "La fuerza de esfuerzo (Fₑ) no puede ser cero." };
        const de_calc = (Fr * dr) / Fe;
        return { result: { unknown: de_calc, symbol: 'dₑ' }, steps: [`dₑ = (${Fr} * ${dr}) / ${Fe} = ${formatNumber(de_calc)} m`] };
      } else if (unknownVar === 'Fr') {
        if (dr === 0) return { error: "La distancia de resistencia (dᵣ) no puede ser cero." };
        const Fr_calc = (Fe * de) / dr;
        return { result: { unknown: Fr_calc, symbol: 'Fᵣ' }, steps: [`Fᵣ = (${Fe} * ${de}) / ${dr} = ${formatNumber(Fr_calc)} N`] };
      } else if (unknownVar === 'dr') {
        if (Fr === 0) return { error: "La fuerza de resistencia (Fᵣ) no puede ser cero." };
        const dr_calc = (Fe * de) / Fr;
        return { result: { unknown: dr_calc, symbol: 'dᵣ' }, steps: [`dᵣ = (${Fe} * ${de}) / ${Fr} = ${formatNumber(dr_calc)} m`] };
      }
      return { error: "Error inesperado." };
    }
  },

  // --- Grupo 3: Plano Inclinado ---
  {
    id: 'plano-inclinado-vmi',
    title: 'VMI de Plano Inclinado',
    formula: 'VMI = longitud / altura',
    variables: [
      { symbol: 'l', label: 'Longitud del plano (l)', unit: 'm', example: '5' },
      { symbol: 'h', label: 'Altura del plano (h)', unit: 'm', example: '1' }
    ],
    output: { symbol: 'VMI', label: 'Ventaja Mecánica Ideal (VMI)', unit: '' },
    resolve: ({ l, h }) => {
        if (h === 0) return { error: "La altura no puede ser cero." };
        const VMI = l / h;
        return { result: { VMI }, steps: [`VMI = ${l} / ${h} = ${formatNumber(VMI)}`] };
    }
  },
  {
    id: 'plano-inclinado-fe',
    title: 'Fuerza de Esfuerzo (Plano Inclinado)',
    formula: 'Fₑ = Fᵣ * sin(θ)',
    variables: [
      { symbol: 'Fr', label: 'Fuerza de Resistencia (Peso)', unit: 'N', example: '1000' },
      { symbol: 'theta', label: 'Ángulo de inclinación (θ)', unit: 'grados', example: '30' }
    ],
    output: { symbol: 'Fe', label: 'Fuerza de Esfuerzo (Fₑ)', unit: 'N' },
    resolve: ({ Fr, theta }) => {
        const Fe = Fr * Math.sin(toRadians(theta));
        return { result: { Fe }, steps: [`Fₑ = ${Fr} * sin(${theta}°) = ${formatNumber(Fe)} N`] };
    }
  },

  // --- Grupo 4: Poleas ---
  {
    id: 'poleas-vmi',
    title: 'VMI de Sistema de Poleas',
    formula: 'VMI = n',
    variables: [
      { symbol: 'n', label: 'Nº de segmentos de cuerda que soportan la carga', unit: '', example: '4' }
    ],
    output: { symbol: 'VMI', label: 'Ventaja Mecánica Ideal (VMI)', unit: '' },
    resolve: ({ n }) => {
      return { result: { VMI: n }, steps: [`La VMI es igual al número de segmentos que soportan la carga: ${n}`] };
    }
  },
  {
    id: 'poleas-fe',
    title: 'Fuerza de Esfuerzo (Sistema de Poleas)',
    formula: 'Fₑ = Fᵣ / VMI',
    variables: [
      { symbol: 'Fr', label: 'Fuerza de Resistencia (Carga)', unit: 'N', example: '200' },
      { symbol: 'VMI', label: 'Ventaja Mecánica Ideal (n)', unit: '', example: '4' }
    ],
    output: { symbol: 'Fe', label: 'Fuerza de Esfuerzo (Fₑ)', unit: 'N' },
    resolve: ({ Fr, VMI }) => {
      if (VMI === 0) return { error: "La VMI no puede ser cero." };
      const Fe = Fr / VMI;
      return { result: { Fe }, steps: [`Fₑ = ${Fr} / ${VMI} = ${formatNumber(Fe)} N`] };
    }
  }
];
