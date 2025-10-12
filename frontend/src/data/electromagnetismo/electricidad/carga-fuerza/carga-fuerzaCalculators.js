import { formatNumber } from "../../../../utils/formatNumber";

const k = 8.99e9;
const e = 1.602176634e-19;

export const calculators = [
  {
    id: 'ley_coulomb_escalar',
    title: 'Fuerza Eléctrica (Ley de Coulomb)',
    formula: 'F = k ⋅ \\frac{|q₁ ⋅ q₂|}{r²}',
    variables: [
      { symbol: 'q1_fuerza', label: 'Carga q₁', unit: 'C', example: '1e-6' },
      { symbol: 'q2_fuerza', label: 'Carga q₂', unit: 'C', example: '-2e-6' },
      { symbol: 'r_fuerza', label: 'Distancia (r)', unit: 'm', example: '0.03' },
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: (args) => {
      const q1 = Number(args.q1_fuerza);
      const q2 = Number(args.q2_fuerza);
      const r = Number(args.r_fuerza);
      if (isNaN(q1) || isNaN(q2) || isNaN(r) || r <= 0) {
        return { error: 'Valores inválidos. La distancia r debe ser positiva.' };
      }
      const F = (k * Math.abs(q1 * q2)) / (r ** 2);
      const nature = q1 * q2 > 0 ? 'repulsiva' : 'atractiva';
      return {
        result: { F: F },
        steps: [
          `$\text{Fórmula: } F = k ⋅ \\frac{|q₁ ⋅ q₂|}{r²}$`,
          `$\text{Sustituyendo: } F = (8.99 × 10^9) ⋅ \\frac{|${formatNumber(q1)} ⋅ ${formatNumber(q2)}|}{(${formatNumber(r)})²}$`,
          `$\text{La fuerza es ${nature}.}$`,
          `$\text{Resultado: } F = ${formatNumber(F)}\text{ N}$`,
        ],
      };
    },
  },
  {
    id: 'ley_coulomb_vectorial',
    title: 'Ley de Coulomb (Vectorial)',
    formula: 'F₁₂ = k * q₁ * q₂ * (r₂ - r₁) / |r₂ - r₁|³',
    info: 'La forma vectorial de la Ley de Coulomb describe la fuerza en magnitud, dirección y sentido. Requiere el manejo de coordenadas y vectores de posición, lo cual no se adapta a un formulario simple y depende de la geometría específica del problema.'
  },
  {
    id: 'fuerza_superposicion',
    title: 'Fuerza Neta por Superposición',
    formula: '\\vec{F}_{neta} = \\sum_i \\vec{F}_i',
    info: 'El Principio de Superposición establece que la fuerza neta es una suma vectorial. Su cálculo requiere sumar vectores de fuerza individuales, lo que implica manejar componentes (x, y, z) y no se ajusta a un formulario simple. Cada problema de superposición es único.'
  },
  {
    id: 'cuantizacion_carga',
    title: 'Cuantización de la Carga',
    formula: 'Q = n ⋅ e',
    variables: [
        { symbol: 'n_cuant', label: 'Número de cargas elementales (n)', unit: '', example: '1e12' }
    ],
    output: { symbol: 'Q', label: 'Carga Total (Q)', unit: 'C' },
    resolve: (args) => {
        const n = Number(args.n_cuant);
        if (isNaN(n)) return { error: 'Por favor, introduzca un número válido.' };
        const result = n * e;
        return {
            result: { Q: result },
            steps: [
                `$\text{Fórmula: } Q = n ⋅ e$`,
                `$\text{Sustituyendo: } Q = ${formatNumber(n)} ⋅ (1.602 × 10^{-19})$`,
                `$\text{Resultado: } Q = ${formatNumber(result)}\text{ C}$`
            ]
        };
    }
  },
  {
    id: 'densidad_lineal',
    title: 'Densidad de Carga Lineal',
    formula: 'λ = \\frac{Q}{L}',
    variables: [
      { symbol: 'Q_lineal', label: 'Carga Total (Q)', unit: 'C', example: '1e-9' },
      { symbol: 'L_lineal', label: 'Longitud (L)', unit: 'm', example: '2' },
    ],
    output: { symbol: 'lambda', label: 'Densidad Lineal (λ)', unit: 'C/m' },
    resolve: (args) => {
      const Q = Number(args.Q_lineal);
      const L = Number(args.L_lineal);
      if (isNaN(Q) || isNaN(L) || L <= 0) return { error: 'Valores inválidos. L debe ser positivo.' };
      const result = Q / L;
      return {
        result: { lambda: result },
        steps: [
          `$\text{Fórmula: } λ = \\frac{Q}{L}$`,
          `$\text{Sustituyendo: } λ = \\frac{${formatNumber(Q)}}{${formatNumber(L)}}$`,
          `$\text{Resultado: } λ = ${formatNumber(result)}\text{ C/m}$`,
        ],
      };
    },
  },
  {
    id: 'densidad_superficial',
    title: 'Densidad de Carga Superficial',
    formula: 'σ = \\frac{Q}{A}',
    variables: [
      { symbol: 'Q_superficial', label: 'Carga Total (Q)', unit: 'C', example: '1e-6' },
      { symbol: 'A_superficial', label: 'Área (A)', unit: 'm²', example: '0.5' },
    ],
    output: { symbol: 'sigma', label: 'Densidad Superficial (σ)', unit: 'C/m²' },
    resolve: (args) => {
      const Q = Number(args.Q_superficial);
      const A = Number(args.A_superficial);
      if (isNaN(Q) || isNaN(A) || A <= 0) return { error: 'Valores inválidos. A debe ser positiva.' };
      const result = Q / A;
      return {
        result: { sigma: result },
        steps: [
          `$\text{Fórmula: } σ = \\frac{Q}{A}$`,
          `$\text{Sustituyendo: } σ = \\frac{${formatNumber(Q)}}{${formatNumber(A)}}$`,
          `$\text{Resultado: } σ = ${formatNumber(result)}\text{ C/m²}$`,
        ],
      };
    },
  },
  {
    id: 'densidad_volumetrica',
    title: 'Densidad de Carga Volumétrica',
    formula: 'ρ = \\frac{Q}{V}',
    variables: [
      { symbol: 'Q_volumetrica', label: 'Carga Total (Q)', unit: 'C', example: '1e-3' },
      { symbol: 'V_volumetrica', label: 'Volumen (V)', unit: 'm³', example: '0.1' },
    ],
    output: { symbol: 'rho', label: 'Densidad Volumétrica (ρ)', unit: 'C/m³' },
    resolve: (args) => {
      const Q = Number(args.Q_volumetrica);
      const V = Number(args.V_volumetrica);
      if (isNaN(V) || isNaN(Q) || V <= 0) return { error: 'Valores inválidos. V debe ser positivo.' };
      const result = Q / V;
      return {
        result: { rho: result },
        steps: [
          `$\text{Fórmula: } ρ = \\frac{Q}{V}$`,
          `$\text{Sustituyendo: } ρ = \\frac{${formatNumber(Q)}}{${formatNumber(V)}}$`,
          `$\text{Resultado: } ρ = ${formatNumber(result)}\text{ C/m³}$`,
        ],
      };
    },
  },
];