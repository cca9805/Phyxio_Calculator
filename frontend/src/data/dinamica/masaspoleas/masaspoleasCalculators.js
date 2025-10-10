import { formatNumber } from '../../../utils/formatNumber';

const G = 9.81; // Aceleración gravitatoria estándar
const toRadians = (degrees) => degrees * (Math.PI / 180);

export const calculators = [
  // --- Grupo 1: Máquina de Atwood (Sistema Vertical) ---
  {
    id: 'atwood-aceleracion',
    title: 'Aceleración (Máquina de Atwood)',
    formula: 'a = g(m₁ - m₂) / (m₁ + m₂)',
    variables: [
      { symbol: 'm1', label: 'Masa 1 (más pesada)', unit: 'kg', example: '5' },
      { symbol: 'm2', label: 'Masa 2 (más ligera)', unit: 'kg', example: '3' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ m1, m2 }) => {
      const massSum = m1 + m2;
      if (massSum === 0) return { error: "La suma de las masas no puede ser cero." };
      const a = G * (m1 - m2) / massSum;
      return { result: { a }, steps: [`a = ${G}(${m1} - ${m2}) / (${m1} + ${m2}) = ${formatNumber(a)} m/s²`] };
    }
  },
  {
    id: 'atwood-tension',
    title: 'Tensión (Máquina de Atwood)',
    formula: 'T = 2gm₁m₂ / (m₁ + m₂)',
    variables: [
      { symbol: 'm1', label: 'Masa 1', unit: 'kg', example: '5' },
      { symbol: 'm2', label: 'Masa 2', unit: 'kg', example: '3' }
    ],
    output: { symbol: 'T', label: 'Tensión (T)', unit: 'N' },
    resolve: ({ m1, m2 }) => {
      const massSum = m1 + m2;
      if (massSum === 0) return { error: "La suma de las masas no puede ser cero." };
      const T = (2 * G * m1 * m2) / massSum;
      return { result: { T }, steps: [`T = (2*${G}*${m1}*${m2}) / (${m1}+${m2}) = ${formatNumber(T)} N`] };
    }
  },
  {
    id: 'atwood-tension-desde-a',
    title: 'Tensión (Atwood, desde a)',
    formula: 'T = m₁(g - a) o T = m₂(g + a)',
    variables: [
      { symbol: 'm', label: 'Masa (m₁ o m₂)', unit: 'kg', example: '5' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²', example: '2.45' }
    ],
    output: { symbol: 'T', label: 'Tensión (T)', unit: 'N' },
    resolve: ({ m, a }) => {
      // Asume que si a > 0, m es la masa que baja (m1). Si a < 0, m es la que sube.
      const T = (a > 0) ? m * (G - a) : m * (G + Math.abs(a));
      return { result: { T }, steps: [`T = ${m}(${G} - ${a}) = ${formatNumber(T)} N`] };
    }
  },

  // --- Grupo 2: Sistema Mesa Horizontal ---
  {
    id: 'mesa-aceleracion-ideal',
    title: 'Aceleración (Mesa, sin fricción)',
    formula: 'a = m₂g / (m₁ + m₂)',
    variables: [
      { symbol: 'm1', label: 'Masa en mesa (m₁)', unit: 'kg', example: '10' },
      { symbol: 'm2', label: 'Masa colgante (m₂)', unit: 'kg', example: '5' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ m1, m2 }) => {
      const massSum = m1 + m2;
      if (massSum === 0) return { error: "La suma de masas no puede ser cero." };
      const a = (m2 * G) / massSum;
      return { result: { a }, steps: [`a = (${m2}*${G}) / (${m1}+${m2}) = ${formatNumber(a)} m/s²`] };
    }
  },
  {
    id: 'mesa-aceleracion-friccion',
    title: 'Aceleración (Mesa, con fricción)',
    formula: 'a = g(m₂ - μm₁) / (m₁ + m₂)',
    variables: [
      { symbol: 'm1', label: 'Masa en mesa (m₁)', unit: 'kg', example: '10' },
      { symbol: 'm2', label: 'Masa colgante (m₂)', unit: 'kg', example: '5' },
      { symbol: 'mu', label: 'Coef. Fricción (μ)', unit: '', example: '0.2' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ m1, m2, mu }) => {
      const massSum = m1 + m2;
      if (massSum === 0) return { error: "La suma de masas no puede ser cero." };
      const numerator = G * (m2 - mu * m1);
      if (numerator < 0) return { result: {a: 0}, error: "La fricción estática es mayor que la fuerza de tracción. El sistema no se mueve." };
      const a = numerator / massSum;
      return { result: { a }, steps: [`a = ${G}(${m2} - ${mu}*${m1}) / (${m1}+${m2}) = ${formatNumber(a)} m/s²`] };
    }
  },
  {
    id: 'mesa-tension',
    title: 'Tensión (Mesa, desde a)',
    formula: 'T = m₁a  (ideal)  o  T = m₁(a + μg)',
    variables: [
        { symbol: 'm1', label: 'Masa en mesa (m₁)', unit: 'kg', example: '10' },
        { symbol: 'a', label: 'Aceleración del sistema (a)', unit: 'm/s²', example: '2.5' },
        { symbol: 'mu', label: 'Coef. Fricción (μ)', unit: '', example: '0.2', isOptional: true }
    ],
    output: { symbol: 'T', label: 'Tensión (T)', unit: 'N' },
    resolve: ({m1, a, mu = 0}) => {
        const T = m1 * (a + mu * G);
        return { result: { T }, steps: [`T = ${m1}(${a} + ${mu}*${G}) = ${formatNumber(T)} N` ] };
    }
  },

  // --- Grupo 3: Sistema en Plano Inclinado ---
  {
    id: 'plano-aceleracion-ideal',
    title: 'Aceleración (Plano Inclinado, sin fricción)',
    formula: 'a = g(m₂ - m₁sinθ) / (m₁ + m₂)',
    variables: [
      { symbol: 'm1', label: 'Masa en plano (m₁)', unit: 'kg', example: '6' },
      { symbol: 'm2', label: 'Masa colgante (m₂)', unit: 'kg', example: '4' },
      { symbol: 'theta', label: 'Ángulo del plano (θ)', unit: 'grados', example: '30' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ m1, m2, theta }) => {
      const massSum = m1 + m2;
      if (massSum === 0) return { error: "La suma de masas no puede ser cero." };
      const a = G * (m2 - m1 * Math.sin(toRadians(theta))) / massSum;
      const direction = a > 0 ? "hacia m₂" : "hacia m₁";
      return { result: { a }, steps: [`a = ${G}(${m2} - ${m1}sin${theta}°) / (${m1}+${m2}) = ${formatNumber(a)} m/s² (${direction})`] };
    }
  },
  {
    id: 'plano-aceleracion-friccion',
    title: 'Aceleración (Plano Inclinado, con fricción)',
    formula: 'a = g(m₂ - m₁sinθ - μm₁cosθ) / (m₁ + m₂)',
    variables: [
      { symbol: 'm1', label: 'Masa en plano (m₁)', unit: 'kg', example: '6' },
      { symbol: 'm2', label: 'Masa colgante (m₂)', unit: 'kg', example: '5' },
      { symbol: 'theta', label: 'Ángulo del plano (θ)', unit: 'grados', example: '30' },
      { symbol: 'mu', label: 'Coef. Fricción (μ)', unit: '', example: '0.1' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ m1, m2, theta, mu }) => {
      const massSum = m1 + m2;
      if (massSum === 0) return { error: "La suma de masas no puede ser cero." };
      const numerator = G * (m2 - m1 * Math.sin(toRadians(theta)) - mu * m1 * Math.cos(toRadians(theta)));
      if (numerator < 0) return { result: {a: 0}, error: "La fricción y componente del peso superan la tracción. El sistema no acelera en esta dirección." };
      const a = numerator / massSum;
      return { result: { a }, steps: [`a = ${G}(${m2} - ${m1}sin${theta}° - ${mu}${m1}cos${theta}°) / (${m1}+${m2}) = ${formatNumber(a)} m/s²`] };
    }
  }
];
