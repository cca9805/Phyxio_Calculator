import { formatNumber } from "../../../../utils/formatNumber";

const k = 8.99e9;
const epsilon0 = 8.85e-12;

export const calculators = [
  {
    id: 'campo_definicion',
    title: 'Intensidad de Campo Eléctrico',
    formula: 'E = F / q',
    variables: [
      { symbol: 'F_intensidad', label: 'Fuerza F', unit: 'N', example: '0.02' },
      { symbol: 'q_intensidad', label: 'Carga q', unit: 'C', example: '1e-6' }
    ],
    output: { symbol: 'E_intensidad', label: 'Campo E', unit: 'N/C' },
    resolve: (args) => {
        const F = Number(args.F_intensidad);
        const q = Number(args.q_intensidad);
        if (isNaN(F) || isNaN(q) || q === 0) return { error: 'Valores inválidos. La carga no puede ser cero.' };
        const result = F / q;
        return {
            result: { E_intensidad: result },
            steps: [
                `$\text{Fórmula: } E = \\frac{F}{q}$`,
                `$\text{Sustituyendo: } E = \\frac{${formatNumber(F)}}{${formatNumber(q)}}$`,
                `$\text{Resultado: } E = ${formatNumber(result)}\text{ N/C}$`
            ]
        };
    }
  },
  {
    id: 'campo_puntual_vectorial',
    title: 'Campo de Carga Puntual (Magnitud)',
    formula: 'E = k \\cdot \\frac{|q|}{r^2}',
    variables: [
      { symbol: 'q_punto', label: 'Carga q', unit: 'C', example: '5e-9' },
      { symbol: 'r_punto', label: 'Distancia r', unit: 'm', example: '0.1' }
    ],
    output: { symbol: 'E_punto', label: 'Campo E', unit: 'N/C' },
    resolve: (args) => {
        const q = Number(args.q_punto);
        const r = Number(args.r_punto);
        if (isNaN(q) || isNaN(r) || r <= 0) return { error: 'Valores inválidos. La distancia r debe ser positiva.' };
        const result = k * Math.abs(q) / (r**2);
        return {
            result: { E_punto: result },
            steps: [
                `$\text{Fórmula: } E = k \\cdot \\frac{|q|}{r^2}$`,
                `$\text{Sustituyendo: } E = (8.99 \\times 10^9) \\cdot \\frac{|${formatNumber(q)}|}{(${formatNumber(r)})^2}$`,
                `$\text{Resultado: } E = ${formatNumber(result)}\text{ N/C}$`
            ]
        };
    }
  },
  {
    id: 'superposicion_campos',
    title: 'Principio de Superposición de Campos',
    formula: 'E_neto = Σ E_i',
    info: 'El Principio de Superposición establece que el campo eléctrico neto en un punto es la suma vectorial de los campos creados por cada carga individual. Este cálculo requiere manejar componentes vectoriales (x, y, z) y depende de la geometría específica del problema, por lo que no se ajusta a un formulario simple.'
  },
  {
    id: 'ley_gauss',
    title: 'Ley de Gauss',
    formula: 'Φ = Q_interior / ε₀',
    info: 'El cálculo del flujo eléctrico mediante la Ley de Gauss requiere la definición de una superficie gaussiana y la resolución de una integral de superficie. Su aplicación es conceptual y para casos con alta simetría, por lo que no se presta a una calculadora de formulario simple.'
  },
  {
    id: 'aceleracion_carga',
    title: 'Aceleración de Partícula Cargada',
    formula: 'a = q * E / m',
    variables: [
      { symbol: 'q_aceleracion', label: 'Carga q', unit: 'C', example: '1.6e-19' },
      { symbol: 'E_aceleracion', label: 'Campo E', unit: 'N/C', example: '2000' },
      { symbol: 'm_aceleracion', label: 'Masa m', unit: 'kg', example: '9.11e-31' }
    ],
    output: { symbol: 'a_aceleracion', label: 'Aceleración a', unit: 'm/s²' },
    resolve: (args) => {
        const q = Number(args.q_aceleracion);
        const E = Number(args.E_aceleracion);
        const m = Number(args.m_aceleracion);
        if (isNaN(q) || isNaN(E) || isNaN(m) || m === 0) return { error: 'Valores inválidos. La masa no puede ser cero.' };
        const result = (q * E) / m;
        return {
            result: { a_aceleracion: result },
            steps: [
                `$\text{Fórmula: } a = \\frac{q \\cdot E}{m}$`,
                `$\text{Sustituyendo: } a = \\frac{(${formatNumber(q)}) \\cdot (${formatNumber(E)})}{${formatNumber(m)}}$`,
                `$\text{Resultado: } a = ${formatNumber(result)}\text{ m/s²}$`
            ]
        };
    }
  },
  {
    id: 'campo_hilo_infinito',
    title: 'Campo Hilo Recto Infinito',
    formula: 'E = \\frac{λ}{2 \\cdot \\pi \\cdot ε₀ \\cdot r}',
    variables: [
      { symbol: 'lambda_hilo', label: 'Densidad Lineal λ', unit: 'C/m', example: '1e-9' },
      { symbol: 'r_hilo', label: 'Distancia r', unit: 'm', example: '0.01' }
    ],
    output: { symbol: 'E_hilo', label: 'Campo E', unit: 'N/C' },
    resolve: (args) => {
        const lambda = Number(args.lambda_hilo);
        const r = Number(args.r_hilo);
        if (isNaN(lambda) || isNaN(r) || r <= 0) return { error: 'Valores inválidos. La distancia r debe ser positiva.' };
        const result = lambda / (2 * Math.PI * epsilon0 * r);
        return {
            result: { E_hilo: result },
            steps: [
                `$\text{Fórmula: } E = \\frac{λ}{2 \\cdot \\pi \\cdot ε₀ \\cdot r}$`,
                `$\text{Sustituyendo: } E = \\frac{${formatNumber(lambda)}}{2 \\cdot \\pi \\cdot (8.85 \\times 10^{-12}) \\cdot ${formatNumber(r)}}$`,
                `$\text{Resultado: } E = ${formatNumber(result)}\text{ N/C}$`
            ]
        };
    }
  }
];