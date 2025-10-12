import { formatNumber } from '../../../../utils/formatNumber';

export const calculators = [
  {
    id: 'fuerza-lorentz',
    title: 'Calcular Fuerza de Lorentz',
    formula: 'F = q * v * B * sin(θ)',
    description: "Calcula la magnitud de la fuerza sobre una carga en movimiento dentro de un campo magnético.",
    variables: [
      { symbol: 'q', label: 'Carga (q)', unit: 'C', example: '1.6e-19' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '1e6' },
      { symbol: 'B', label: 'Campo Magnético (B)', unit: 'T', example: '0.5' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '90' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ q, v, B, theta }) => {
      const thetaRad = theta * (Math.PI / 180);
      const F = q * v * B * Math.sin(thetaRad);
      const steps = [
        `Convertir ángulo a radianes: θ_rad = ${theta}° * (π / 180) = ${formatNumber(thetaRad)} rad`,
        `F = ${q} * ${v} * ${B} * sin(${formatNumber(thetaRad)})`,
        `F = ${formatNumber(F)} N`
      ];
      return { result: { F }, steps };
    }
  },
  {
    id: 'fuerza-conductor',
    title: 'Calcular Fuerza sobre Conductor',
    formula: 'F = I * L * B * sin(θ)',
    description: "Calcula la magnitud de la fuerza sobre un conductor rectilíneo con corriente en un campo magnético.",
    variables: [
      { symbol: 'I', label: 'Corriente (I)', unit: 'A', example: '2' },
      { symbol: 'L', label: 'Longitud (L)', unit: 'm', example: '0.5' },
      { symbol: 'B', label: 'Campo Magnético (B)', unit: 'T', example: '0.1' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '90' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ I, L, B, theta }) => {
      const thetaRad = theta * (Math.PI / 180);
      const F = I * L * B * Math.sin(thetaRad);
      const steps = [
        `Convertir ángulo a radianes: θ_rad = ${theta}° * (π / 180) = ${formatNumber(thetaRad)} rad`,
        `F = ${I} * ${L} * ${B} * sin(${formatNumber(thetaRad)})`,
        `F = ${formatNumber(F)} N`
      ];
      return { result: { F }, steps };
    }
  }
];