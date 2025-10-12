import { formatNumber } from '../../../utils/formatNumber';

export const calculators = [
  {
    id: 'ley-gases-ideales',
    title: 'Ley de los Gases Ideales',
    latex: 'PV = nRT',
    variables: [
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa', example: '101325' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³', example: '22.4' },
      { symbol: 'n', label: 'Moles (n)', unit: 'mol', example: '1' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K', example: '273.15' }
    ],
    output: { name: 'R', label: 'Constante de los gases ideales (R)', unit: 'J/(mol·K)' },
    expr: '(args.P * args.V) / (args.n * args.T)',
    resolveSteps: (args) => {
        const { P, V, n, T } = args;
        const R = (P * V) / (n * T);
        return [
            'La ley de los gases ideales describe el comportamiento de los gases hipotéticos o ideales.',
            `$$ PV = nRT $$`,
            `$$ R = \\frac{PV}{nT} = \\frac{${formatNumber(P)} \\cdot ${formatNumber(V)}}{${formatNumber(n)} \\cdot ${formatNumber(T)}} $$`,
            `$$ R \\approx ${formatNumber(R, 4)}\\text{ J/(mol·K)} $$`
        ];
    }
  }
];