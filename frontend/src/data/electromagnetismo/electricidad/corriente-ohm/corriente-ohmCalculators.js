import { formatNumber } from "../../../../utils/formatNumber";

export const calculators = [
  {
    id: 'corriente_definicion',
    title: 'Definición de Corriente',
    formula: 'I = ΔQ / Δt',
    variables: [
      { symbol: 'dQ', label: 'Carga (ΔQ)', unit: 'C', example: '10' },
      { symbol: 'dt', label: 'Tiempo (Δt)', unit: 's', example: '5' }
    ],
    output: { symbol: 'I', label: 'Corriente (I)', unit: 'A' },
    resolve: (args) => {
        const dQ = Number(args.dQ);
        const dt = Number(args.dt);
        if (isNaN(dQ) || isNaN(dt) || dt <= 0) { return { error: 'Valores inválidos. El tiempo debe ser positivo.' }; }
        const result = dQ / dt;
        return {
            result: { I: result },
            steps: [
                `$\text{Fórmula: } I = \\frac{\\Delta Q}{\\Delta t}$`,
                `$\text{Sustituyendo: } I = \\frac{${formatNumber(dQ)}}{${formatNumber(dt)}}$`,
                `$\text{Resultado: } I = ${formatNumber(result)}\text{ A}$`
            ]
        };
    }
  },
  {
    id: 'ley_ohm',
    title: 'Ley de Ohm',
    formula: 'V = I ⋅ R',
    variables: [
      { symbol: 'V_ohm', label: 'Voltaje (V)', unit: 'V', example: '12' },
      { symbol: 'R_ohm', label: 'Resistencia (R)', unit: 'Ω', example: '24' }
    ],
    output: { symbol: 'I', label: 'Corriente (I)', unit: 'A' },
    resolve: (args) => {
        const V = Number(args.V_ohm);
        const R = Number(args.R_ohm);
        if (isNaN(V) || isNaN(R) || R === 0) { return { error: 'Valores inválidos. La resistencia no puede ser cero.' }; }
        const result = V / R;
        return {
            result: { I: result },
            steps: [
                `$\text{Fórmula: } I = \\frac{V}{R}$`,
                `$\text{Sustituyendo: } I = \\frac{${formatNumber(V)}}{${formatNumber(R)}}$`,
                `$\text{Resultado: } I = ${formatNumber(result)}\text{ A}$`
            ]
        };
    }
  },
  {
    id: 'resistencia_geometria',
    title: 'Resistencia por Geometría',
    formula: 'R = ρ ⋅ L / A',
    variables: [
      { symbol: 'rho_geo', label: 'Resistividad (ρ)', unit: 'Ω·m', example: '1.68e-8' },
      { symbol: 'L_geo', label: 'Longitud (L)', unit: 'm', example: '10' },
      { symbol: 'A_geo', label: 'Área (A)', unit: 'm²', example: '1e-6' }
    ],
    output: { symbol: 'R', label: 'Resistencia (R)', unit: 'Ω' },
    resolve: (args) => {
        const rho = Number(args.rho_geo);
        const L = Number(args.L_geo);
        const A = Number(args.A_geo);
        if (isNaN(rho) || isNaN(L) || isNaN(A) || A <= 0) { return { error: 'Valores inválidos. El área debe ser positiva.' }; }
        const result = (rho * L) / A;
        return {
            result: { R: result },
            steps: [
                `$\text{Fórmula: } R = ρ ⋅ \\frac{L}{A}$`,
                `$\text{Sustituyendo: } R = ${formatNumber(rho)} ⋅ \\frac{${formatNumber(L)}}{${formatNumber(A)}}$`,
                `$\text{Resultado: } R = ${formatNumber(result)}\text{ Ω}$`
            ]
        };
    }
  },
  {
    id: 'potencia_electrica',
    title: 'Potencia Eléctrica (Ley de Joule)',
    description: 'Calcula la potencia a partir de dos de las tres magnitudes: Voltaje (V), Corriente (I) o Resistencia (R).',
    variables: [
      { symbol: 'V_p', label: 'Voltaje (V)', unit: 'V', example: '12', optional: true },
      { symbol: 'I_p', label: 'Corriente (I)', unit: 'A', example: '0.5', optional: true },
      { symbol: 'R_p', label: 'Resistencia (R)', unit: 'Ω', example: '24', optional: true }
    ],
    output: { symbol: 'P', label: 'Potencia (P)', unit: 'W' },
    resolve: (args) => {
        const V = args.V_p ? Number(args.V_p) : null;
        const I = args.I_p ? Number(args.I_p) : null;
        const R = args.R_p ? Number(args.R_p) : null;
        
        if (V !== null && I !== null) {
            const P = V * I;
            return { result: { P }, steps: [`$P = V ⋅ I = ${formatNumber(V)} ⋅ ${formatNumber(I)} = ${formatNumber(P)} W$`] };
        }
        if (I !== null && R !== null) {
            const P = I**2 * R;
            return { result: { P }, steps: [`$P = I^2 ⋅ R = (${formatNumber(I)})^2 ⋅ ${formatNumber(R)} = ${formatNumber(P)} W$`] };
        }
        if (V !== null && R !== null) {
            if (R === 0) return { error: 'La resistencia no puede ser cero.' };
            const P = V**2 / R;
            return { result: { P }, steps: [`$P = V^2 / R = (${formatNumber(V)})^2 / ${formatNumber(R)} = ${formatNumber(P)} W$`] };
        }
        return { error: 'Por favor, ingrese exactamente dos de los tres valores.' };
    }
  },
  {
    id: 'ley_ohm_vectorial',
    title: 'Ley de Ohm (Vectorial)',
    formula: 'J = σ ⋅ E',
    info: 'La Ley de Ohm en su forma vectorial relaciona magnitudes vectoriales (densidad de corriente y campo eléctrico) en un punto del material. Su aplicación es conceptual y no se presta a una calculadora de formulario simple.'
  },
  {
    id: 'densidad_corriente_microscopica',
    title: 'Densidad de Corriente (Microscópica)',
    formula: 'J = q ⋅ n ⋅ vd',
    variables: [
      { symbol: 'q_micro', label: 'Carga del portador (q)', unit: 'C', example: '1.6e-19' },
      { symbol: 'n_micro', label: 'Densidad de portadores (n)', unit: 'm⁻³', example: '8.5e28' },
      { symbol: 'vd_micro', label: 'Velocidad de deriva (vd)', unit: 'm/s', example: '1e-4' }
    ],
    output: { symbol: 'J', label: 'Densidad de Corriente (J)', unit: 'A/m²' },
    resolve: (args) => {
        const q = Number(args.q_micro);
        const n = Number(args.n_micro);
        const vd = Number(args.vd_micro);
        if (isNaN(q) || isNaN(n) || isNaN(vd)) { return { error: 'Valores numéricos inválidos.' }; }
        const result = q * n * vd;
        return {
            result: { J: result },
            steps: [
                `$\text{Fórmula: } J = q ⋅ n ⋅ v_d$`,
                `$\text{Sustituyendo: } J = ${formatNumber(q)} ⋅ ${formatNumber(n)} ⋅ ${formatNumber(vd)}$`,
                `$\text{Resultado: } J = ${formatNumber(result)}\text{ A/m²}$`
            ]
        };
    }
  }
];