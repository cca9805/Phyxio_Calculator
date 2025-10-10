import { formatNumber } from '../../../utils/formatNumber';

export const calculators = [
  // --- Fórmula Básica: v = Δx / t ---
  {
    id: 'velocidad-mru',
    title: 'Calcular Velocidad',
    formula: 'v = Δx / t',
    description: "Calcula la velocidad constante a partir del desplazamiento y el tiempo.",
    variables: [
      { symbol: 'dx', label: 'Desplazamiento (Δx)', unit: 'm', example: '100' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '10' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ dx, t }) => {
      if (t === 0) return { error: "El tiempo no puede ser cero." };
      const v = dx / t;
      return { result: { v }, steps: [`v = ${dx} / ${t} = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'distancia-mru',
    title: 'Calcular Distancia',
    formula: 'Δx = v * t',
    description: "Calcula la distancia recorrida a una velocidad constante durante un tiempo determinado.",
    variables: [
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '10' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '10' }
    ],
    output: { symbol: 'dx', label: 'Distancia (Δx)', unit: 'm' },
    resolve: ({ v, t }) => {
      const dx = v * t;
      return { result: { dx }, steps: [`Δx = ${v} * ${t} = ${formatNumber(dx)} m`] };
    }
  },
  {
    id: 'tiempo-mru',
    title: 'Calcular Tiempo',
    formula: 't = Δx / v',
    description: "Calcula el tiempo necesario para recorrer una distancia a una velocidad constante.",
    variables: [
      { symbol: 'dx', label: 'Distancia (Δx)', unit: 'm', example: '100' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '10' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ dx, v }) => {
      if (v === 0) return { error: "La velocidad no puede ser cero." };
      const t = dx / v;
      return { result: { t }, steps: [`t = ${dx} / ${v} = ${formatNumber(t)} s`] };
    }
  },

  // --- Fórmula de Posición: xf = x₀ + v*t ---
  {
    id: 'posicion-final-mru',
    title: 'Calcular Posición Final',
    formula: 'xf = x₀ + v * t',
    description: "Calcula la posición final de un objeto, basándose en su posición inicial, velocidad y tiempo.",
    variables: [
      { symbol: 'x0', label: 'Posición Inicial (x₀)', unit: 'm', example: '10' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '20' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '5' }
    ],
    output: { symbol: 'xf', label: 'Posición Final (xf)', unit: 'm' },
    resolve: ({ x0, v, t }) => {
      const xf = x0 + v * t;
      return { result: { xf }, steps: [`xf = ${x0} + ${v} * ${t} = ${formatNumber(xf)} m`] };
    }
  },
  {
    id: 'posicion-inicial-mru',
    title: 'Calcular Posición Inicial',
    formula: 'x₀ = xf - v * t',
    description: "Calcula la posición inicial a partir de la posición final, la velocidad y el tiempo.",
    variables: [
      { symbol: 'xf', label: 'Posición Final (xf)', unit: 'm', example: '110' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '20' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '5' }
    ],
    output: { symbol: 'x0', label: 'Posición Inicial (x₀)', unit: 'm' },
    resolve: ({ xf, v, t }) => {
      const x0 = xf - v * t;
      return { result: { x0 }, steps: [`x₀ = ${xf} - ${v} * ${t} = ${formatNumber(x0)} m`] };
    }
  },
  {
    id: 'velocidad-desde-posiciones-mru',
    title: 'Calcular Velocidad (con Posiciones)',
    formula: 'v = (xf - x₀) / t',
    description: "Calcula la velocidad a partir de las posiciones inicial y final, y el tiempo.",
    variables: [
      { symbol: 'xf', label: 'Posición Final (xf)', unit: 'm', example: '110' },
      { symbol: 'x0', label: 'Posición Inicial (x₀)', unit: 'm', example: '10' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '5' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ xf, x0, t }) => {
      if (t === 0) return { error: "El tiempo no puede ser cero." };
      const v = (xf - x0) / t;
      return { result: { v }, steps: [`v = (${xf} - ${x0}) / ${t} = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'tiempo-desde-posiciones-mru',
    title: 'Calcular Tiempo (con Posiciones)',
    formula: 't = (xf - x₀) / v',
    description: "Calcula el tiempo a partir de las posiciones inicial y final, y la velocidad.",
    variables: [
      { symbol: 'xf', label: 'Posición Final (xf)', unit: 'm', example: '110' },
      { symbol: 'x0', label: 'Posición Inicial (x₀)', unit: 'm', example: '10' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s', example: '20' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ xf, x0, v }) => {
      if (v === 0) return { error: "La velocidad no puede ser cero." };
      const t = (xf - x0) / v;
      return { result: { t }, steps: [`t = (${xf} - ${x0}) / ${v} = ${formatNumber(t)} s`] };
    }
  }
];
