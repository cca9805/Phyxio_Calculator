import { formatNumber } from '../../../utils/formatNumber';

export const calculators = [
  {
    id: 'presion-hidrostatica',
    title: 'Presión Hidrostática',
    latex: 'P = \\rho \\cdot g \\cdot h',
    variables: [
      { symbol: 'rho', label: 'Densidad del fluido (ρ)', unit: 'kg/m³', example: '1000' },
      { symbol: 'g', label: 'Aceleración gravitatoria (g)', unit: 'm/s²', example: '9.8' },
      { symbol: 'h', label: 'Profundidad (h)', unit: 'm', example: '10' }
    ],
    output: { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
    resolve: (args) => {
        const { rho, g, h } = args;
        const result = rho * g * h;
        return {
            result,
            steps: [
                'La presión hidrostática es la presión que ejerce un fluido en reposo sobre un cuerpo sumergido.',
                `$$P = \\rho \\cdot g \\cdot h = ${formatNumber(rho)} \\cdot ${formatNumber(g)} \\cdot ${formatNumber(h)}$$`,
                `$$P = ${formatNumber(result)}\\text{ Pa}$$`
            ]
        };
    }
  }
];