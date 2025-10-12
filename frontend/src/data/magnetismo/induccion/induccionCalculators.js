import { formatNumber } from '../../../utils/formatNumber';

export const calculators = [
  {
    id: 'fem-inducida-faraday',
    title: 'Calcular FEM Inducida (Ley de Faraday)',
    formula: 'ε = -N * (ΔΦB / Δt)',
    description: "Calcula la Fuerza Electromotriz (FEM) inducida en una bobina debido a un cambio en el flujo magnético en un intervalo de tiempo.",
    variables: [
      { symbol: 'N', label: 'Número de Espiras (N)', unit: '', example: '100' },
      { symbol: 'deltaPhiB', label: 'Cambio de Flujo Magnético (ΔΦB)', unit: 'Wb', example: '0.05' },
      { symbol: 'deltat', label: 'Intervalo de Tiempo (Δt)', unit: 's', example: '0.1' }
    ],
    output: { symbol: 'ε', label: 'FEM Inducida (ε)', unit: 'V' },
    resolve: ({ N, deltaPhiB, deltat }) => {
      if (deltat === 0) return { error: "El intervalo de tiempo no puede ser cero." };
      const epsilon = -N * (deltaPhiB / deltat);
      const steps = [
        `ε = -${N} * (${deltaPhiB} Wb / ${deltat} s)`,
        `ε = ${formatNumber(epsilon)} V`,
        `El signo negativo indica la dirección de la corriente (Ley de Lenz), oponiéndose al cambio de flujo.`
      ];
      return { result: { epsilon }, steps };
    }
  }
];