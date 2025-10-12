import { formatNumber } from "../../../utils/formatNumber";

const C = 299792458; // Velocidad de la luz en el vacío (m/s)

export const calculators = [
  {
    id: 'longitud_onda_desde_frecuencia',
    title: 'Calcular Longitud de Onda (λ)',
    formula: 'λ = c / f',
    constants: [
      { symbol: 'c', label: 'Velocidad de la luz', value: C, unit: 'm/s' }
    ],
    variables: [
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz', example: '1e8' },
    ],
    output: { symbol: 'lambda', label: 'Longitud de Onda (λ)', unit: 'm' },
    resolve: (args) => {
      const f = Number(args.f);
      if (isNaN(f) || f <= 0) return { error: 'La frecuencia debe ser un número positivo.' };
      const result = C / f;
      return {
        result: { lambda: result },
        steps: [
          `Fórmula: $$\lambda = \\frac{c}{f}$$`,
          `Sustituyendo: $$\lambda = \\frac{${formatNumber(C)}}{${formatNumber(f)}}$$`,
          `Resultado: $$\lambda = ${formatNumber(result)}$$ m`
        ]
      };
    }
  },
  {
    id: 'frecuencia_desde_longitud_onda',
    title: 'Calcular Frecuencia (f)',
    formula: 'f = c / λ',
    constants: [
        { symbol: 'c', label: 'Velocidad de la luz', value: C, unit: 'm/s' }
    ],
    variables: [
      { symbol: 'lambda', label: 'Longitud de Onda (λ)', unit: 'm', example: '3' },
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    resolve: (args) => {
      const lambda = Number(args.lambda);
      if (isNaN(lambda) || lambda <= 0) return { error: 'La longitud de onda debe ser un número positivo.' };
      const result = C / lambda;
      return {
        result: { f: result },
        steps: [
          `Fórmula: $$f = \\frac{c}{\\lambda}$$`,
          `Sustituyendo: $$f = \\frac{${formatNumber(C)}}{${formatNumber(lambda)}}$$`,
          `Resultado: $$f = ${formatNumber(result)}$$ Hz`
        ]
      };
    }
  },
  {
    id: 'amplitud_campo_electrico',
    title: 'Calcular Amplitud de Campo Eléctrico (E)',
    formula: 'E = c ⋅ B',
    constants: [
        { symbol: 'c', label: 'Velocidad de la luz', value: C, unit: 'm/s' }
    ],
    variables: [
      { symbol: 'B', label: 'Amplitud del Campo Magnético (B)', unit: 'T', example: '1e-6' },
    ],
    output: { symbol: 'E', label: 'Amplitud del Campo Eléctrico (E)', unit: 'N/C' },
    resolve: (args) => {
      const B = Number(args.B);
      if (isNaN(B)) return { error: 'El valor del campo magnético debe ser un número.' };
      const result = C * B;
      return {
        result: { E: result },
        steps: [
          `Fórmula: $$E = c \\cdot B$$`,
          `Sustituyendo: $$E = ${formatNumber(C)} \\cdot ${formatNumber(B)}$$`,
          `Resultado: $$E = ${formatNumber(result)}$$ N/C`
        ]
      };
    }
  },
  {
    id: 'amplitud_campo_magnetico',
    title: 'Calcular Amplitud de Campo Magnético (B)',
    formula: 'B = E / c',
    constants: [
        { symbol: 'c', label: 'Velocidad de la luz', value: C, unit: 'm/s' }
    ],
    variables: [
      { symbol: 'E', label: 'Amplitud del Campo Eléctrico (E)', unit: 'N/C', example: '300' },
    ],
    output: { symbol: 'B', label: 'Amplitud del Campo Magnético (B)', unit: 'T' },
    resolve: (args) => {
      const E = Number(args.E);
      if (isNaN(E)) return { error: 'El valor del campo eléctrico debe ser un número.' };
      const result = E / C;
      return {
        result: { B: result },
        steps: [
          `Fórmula: $$B = \\frac{E}{c}$$`,
          `Sustituyendo: $$B = \\frac{${formatNumber(E)}}{${formatNumber(C)}}$$`,
          `Resultado: $$B = ${formatNumber(result)}$$ T`
        ]
      };
    }
  },
  {
    id: 'velocidad_propagacion_medio',
    title: 'Velocidad de Propagación en un Medio',
    formula: 'v = 1 / sqrt(ε ⋅ μ)',
    variables: [
      { symbol: 'epsilon', label: 'Permitividad (ε)', unit: 'F/m', example: '8.854e-12' },
      { symbol: 'mu', label: 'Permeabilidad (μ)', unit: 'H/m', example: '1.257e-6' },
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: (args) => {
      const epsilon = Number(args.epsilon);
      const mu = Number(args.mu);
      if (isNaN(epsilon) || isNaN(mu) || epsilon <= 0 || mu <= 0) {
        return { error: 'La permitividad y la permeabilidad deben ser números positivos.' };
      }
      const result = 1 / Math.sqrt(epsilon * mu);
      return {
        result: { v: result },
        steps: [
          `Fórmula: $$v = \\frac{1}{\\{sqrt}{\\epsilon \\cdot \\mu}}$$$`,
          `Sustituyendo: $$v = \\frac{1}{\\{sqrt}{${formatNumber(epsilon)} \\cdot ${formatNumber(mu)}}}$$`,
          `Resultado: $$v = ${formatNumber(result)}$$ m/s`
        ]
      };
    }
  }
];
