import { formatNumber } from '../../../utils/formatNumber';

export const calculators = [
  {
    id: 'ecuacion-continuidad',
    title: 'Ecuación de Continuidad',
    latex: 'A_1 v_1 = A_2 v_2',
    variables: [
      { symbol: 'A1', label: 'Área 1 (A₁)', unit: 'm²', example: '0.5' },
      { symbol: 'v1', label: 'Velocidad 1 (v₁)', unit: 'm/s', example: '10' },
      { symbol: 'A2', label: 'Área 2 (A₂)', unit: 'm²', example: '0.25' }
    ],
    output: { symbol: 'v2', label: 'Velocidad 2 (v₂)', unit: 'm/s' },
    resolve: (args) => {
        const { A1, v1, A2 } = args;
        const result = (A1 * v1) / A2;
        return {
            result,
            steps: [
                'La ecuación de continuidad establece que el caudal (Q = A·v) se conserva en un fluido incompresible.',
                `$$A_1 v_1 = A_2 v_2$$`,
                `$$v_2 = \\frac{A_1 v_1}{A_2} = \\frac{${formatNumber(A1)} \\cdot ${formatNumber(v1)}}{${formatNumber(A2)}}$$`,
                `$$v_2 = ${formatNumber(result)}\\text{ m/s}$$`
            ]
        };
    }
  }
];