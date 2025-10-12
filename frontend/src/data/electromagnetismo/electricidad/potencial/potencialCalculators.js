import { formatNumber } from "../../../../utils/formatNumber";

const k = 8.99e9;
const epsilon0 = 8.85e-12;

export const calculators = [
  {
    id: 'potencial_puntual',
    title: 'Potencial de Carga Puntual',
    formula: 'V = k ⋅ q / R',
    variables: [
      { symbol: 'q_pot', label: 'Carga q', unit: 'C', example: '1e-9' },
      { symbol: 'R_pot', label: 'Distancia R', unit: 'm', example: '0.2' }
    ],
    output: { symbol: 'V', label: 'Potencial V', unit: 'V' },
    resolve: (args) => {
        const q = Number(args.q_pot);
        const R = Number(args.R_pot);
        if (isNaN(q) || isNaN(R) || R <= 0) return { error: 'La distancia R debe ser positiva.' };
        const result = k * q / R;
        return { result: { V: result }, steps: [
            `$V = k ⋅ \\frac{q}{R} = (8.99e9) ⋅ \\frac{${formatNumber(q)}}{${formatNumber(R)}} = ${formatNumber(result)} V$`
        ] };
    }
  },
  {
    id: 'energia_potencial_sistema',
    title: 'Energía Potencial de un Sistema de Cargas',
    info: 'El cálculo de la energía de un sistema requiere sumar las contribuciones de cada par de cargas, dependiendo de la geometría específica, por lo que no se adapta a una calculadora simple.'
  },
  {
    id: 'relacion_campo_potencial',
    title: 'Relación Campo-Potencial (Uniforme)',
    formula: 'E = -ΔV / d',
    variables: [
      { symbol: 'dV_rel', label: 'Diferencia de Potencial (ΔV)', unit: 'V', example: '-12' },
      { symbol: 'd_rel', label: 'Distancia (d)', unit: 'm', example: '0.1' }
    ],
    output: { symbol: 'E', label: 'Campo Eléctrico (E)', unit: 'V/m' },
    resolve: (args) => {
        const dV = Number(args.dV_rel);
        const d = Number(args.d_rel);
        if (isNaN(dV) || isNaN(d) || d <= 0) return { error: 'La distancia d debe ser positiva.' };
        const result = -dV / d;
        return { result: { E: result }, steps: [
            `$E = -\\frac{ΔV}{d} = -\\frac{${formatNumber(dV)}}{${formatNumber(d)}} = ${formatNumber(result)} V/m$`
        ] };
    }
  },
  {
    id: 'capacidad_definicion',
    title: 'Definición de Capacidad',
    formula: 'C = Q / V',
    variables: [
        { symbol: 'Q_cap', label: 'Carga Q', unit: 'C', example: '1e-6' },
        { symbol: 'V_cap', label: 'Voltaje V', unit: 'V', example: '12' }
    ],
    output: { symbol: 'C', label: 'Capacidad C', unit: 'F' },
    resolve: (args) => {
        const Q = Number(args.Q_cap);
        const V = Number(args.V_cap);
        if (isNaN(Q) || isNaN(V) || V === 0) return { error: 'El voltaje no puede ser cero.' };
        const result = Q / V;
        return { result: { C: result }, steps: [
            `$C = \\frac{Q}{V} = \\frac{${formatNumber(Q)}}{${formatNumber(V)}} = ${formatNumber(result)} F$`
        ] };
    }
  },
  {
    id: 'capacidad_placas_paralelas',
    title: 'Capacidad de Placas Paralelas (Vacío)',
    formula: 'C = ε₀ ⋅ A / d',
    variables: [
      { symbol: 'A_placas', label: 'Área A', unit: 'm²', example: '0.04' },
      { symbol: 'd_placas', label: 'Separación d', unit: 'm', example: '0.001' }
    ],
    output: { symbol: 'C', label: 'Capacidad C', unit: 'F' },
    resolve: (args) => {
        const A = Number(args.A_placas);
        const d = Number(args.d_placas);
        if (isNaN(A) || isNaN(d) || d <= 0) return { error: 'La separación d debe ser positiva.' };
        const result = epsilon0 * A / d;
        return { result: { C: result }, steps: [
            `$C = ε₀ ⋅ \\frac{A}{d} = (8.85e-12) ⋅ \\frac{${formatNumber(A)}}{${formatNumber(d)}} = ${formatNumber(result)} F$`
        ] };
    }
  },
  {
    id: 'capacidad_con_dielectrico',
    title: 'Capacidad con Dieléctrico',
    formula: 'C = κ ⋅ C₀',
    variables: [
      { symbol: 'kappa', label: 'Constante Dieléctrica (κ)', unit: 'adim.', example: '4.7' },
      { symbol: 'C0_diel', label: 'Capacidad en vacío (C₀)', unit: 'F', example: '1e-9' }
    ],
    output: { symbol: 'C', label: 'Capacidad Final (C)', unit: 'F' },
    resolve: (args) => {
        const kappa = Number(args.kappa);
        const C0 = Number(args.C0_diel);
        if (isNaN(kappa) || isNaN(C0)) return { error: 'Valores numéricos inválidos.' };
        const result = kappa * C0;
        return { result: { C: result }, steps: [
            `$C = κ ⋅ C₀ = ${formatNumber(kappa)} ⋅ ${formatNumber(C0)} = ${formatNumber(result)} F$`
        ] };
    }
  },
  {
    id: 'energia_almacenada_condensador',
    title: 'Energía en Condensador',
    description: 'Calcula la energía almacenada a partir de dos de las tres magnitudes: Carga (Q), Voltaje (V) o Capacidad (C).',
    variables: [
      { symbol: 'Q_e', label: 'Carga (Q)', unit: 'C', optional: true },
      { symbol: 'V_e', label: 'Voltaje (V)', unit: 'V', optional: true },
      { symbol: 'C_e', label: 'Capacidad (C)', unit: 'F', optional: true }
    ],
    output: { symbol: 'U', label: 'Energía (U)', unit: 'J' },
    resolve: (args) => {
        const Q = args.Q_e ? Number(args.Q_e) : null;
        const V = args.V_e ? Number(args.V_e) : null;
        const C = args.C_e ? Number(args.C_e) : null;
        if (C !== null && V !== null) {
            const U = 0.5 * C * V**2;
            return { result: { U }, steps: [`$U = \\frac{1}{2}CV^2 = 0.5 ⋅ ${formatNumber(C)} ⋅ (${formatNumber(V)})^2 = ${formatNumber(U)} J$`] };
        }
        if (Q !== null && C !== null) {
            if (C === 0) return { error: 'La capacidad no puede ser cero.' };
            const U = Q**2 / (2 * C);
            return { result: { U }, steps: [`$U = \\frac{Q^2}{2C} = \\frac{(${formatNumber(Q)})^2}{2 ⋅ ${formatNumber(C)}} = ${formatNumber(U)} J$`] };
        }
        if (Q !== null && V !== null) {
            const U = 0.5 * Q * V;
            return { result: { U }, steps: [`$U = \\frac{1}{2}QV = 0.5 ⋅ ${formatNumber(Q)} ⋅ ${formatNumber(V)} = ${formatNumber(U)} J$`] };
        }
        return { error: 'Por favor, ingrese exactamente dos de los tres valores.' };
    }
  },
  {
    id: 'capacidad_equivalente_serie',
    title: 'Capacidad Equivalente en Serie (C1, C2)',
    formula: 'Ceq = (C1 ⋅ C2) / (C1 + C2)',
    variables: [
      { symbol: 'C1_ser', label: 'Capacidad C1', unit: 'F', example: '3e-6' },
      { symbol: 'C2_ser', label: 'Capacidad C2', unit: 'F', example: '6e-6' }
    ],
    output: { symbol: 'Ceq', label: 'Capacidad Eq.', unit: 'F' },
    resolve: (args) => {
        const C1 = Number(args.C1_ser);
        const C2 = Number(args.C2_ser);
        if (isNaN(C1) || isNaN(C2) || C1 + C2 === 0) return { error: 'La suma no puede ser cero.' };
        const result = (C1 * C2) / (C1 + C2);
        return { result: { Ceq: result }, steps: [
            `$C_{eq} = \\frac{C_1 ⋅ C_2}{C_1 + C_2} = \\frac{${formatNumber(C1)} ⋅ ${formatNumber(C2)}}{${formatNumber(C1)} + ${formatNumber(C2)}} = ${formatNumber(result)} F$`
        ] };
    }
  },
  {
    id: 'capacidad_equivalente_paralelo',
    title: 'Capacidad Equivalente en Paralelo (C1, C2)',
    formula: 'Ceq = C1 + C2',
    variables: [
      { symbol: 'C1_par', label: 'Capacidad C1', unit: 'F', example: '3e-6' },
      { symbol: 'C2_par', label: 'Capacidad C2', unit: 'F', example: '6e-6' }
    ],
    output: { symbol: 'Ceq', label: 'Capacidad Eq.', unit: 'F' },
    resolve: (args) => {
        const C1 = Number(args.C1_par);
        const C2 = Number(args.C2_par);
        if (isNaN(C1) || isNaN(C2)) return { error: 'Valores numéricos inválidos.' };
        const result = C1 + C2;
        return { result: { Ceq: result }, steps: [
            `$C_{eq} = C_1 + C_2 = ${formatNumber(C1)} + ${formatNumber(C2)} = ${formatNumber(result)} F$`
        ] };
    }
  }
];