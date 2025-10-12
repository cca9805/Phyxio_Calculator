import { formatNumber } from '../../../utils/formatNumber';

export const calculators = [
  {
    id: 'primera-ley-termodinamica',
    title: 'Primera Ley de la Termodinámica',
    latex: '\\Delta U = Q - W',
    variables: [
      { symbol: 'Q', label: 'Calor añadido (Q)', unit: 'J', example: '1000' },
      { symbol: 'W', label: 'Trabajo realizado (W)', unit: 'J', example: '500' }
    ],
    output: { name: 'deltaU', label: 'Cambio en la energía interna (ΔU)', unit: 'J' },
    expr: 'args.Q - args.W',
    resolveSteps: (args) => {
        const { Q, W } = args;
        const deltaU = Q - W;
        return [
            'La primera ley de la termodinámica es una versión de la ley de conservación de la energía.',
            `$$ \\Delta U = Q - W = ${formatNumber(Q)} - ${formatNumber(W)} $$`,
            `$$ \\Delta U = ${formatNumber(deltaU)}\\text{ J} $$`
        ];
    }
  }
];