import { formatNumber } from "../../../../utils/formatNumber";

export const calculators = [
    {
        id: 'lck_nodo',
        title: 'Ley de Corrientes de Kirchhoff (LCK)',
        formula: 'ΣI_entrada = ΣI_salida',
        info: 'La Ley de Corrientes de Kirchhoff es un principio fundamental para el análisis de circuitos. Su aplicación requiere plantear y resolver un sistema de ecuaciones para las corrientes en los nodos de un circuito, por lo que no se presta a una calculadora de formulario simple.'
    },
    {
        id: 'lvk_malla',
        title: 'Ley de Voltajes de Kirchhoff (LVK)',
        formula: 'ΣV = 0 en una malla',
        info: 'La Ley de Voltajes de Kirchhoff es clave para el análisis de mallas en circuitos. Su aplicación implica definir las mallas, plantear un sistema de ecuaciones para las caídas de voltaje y resolverlo, lo cual es demasiado complejo para una calculadora de formulario simple.'
    },
    {
        id: 'resistencia_serie',
        title: 'Resistencia Equivalente en Serie (R1, R2)',
        formula: 'R_{eq} = R_1 + R_2',
        variables: [
          { symbol: 'R1_serie', label: 'Resistencia R1', unit: 'Ω', example: '100' },
          { symbol: 'R2_serie', label: 'Resistencia R2', unit: 'Ω', example: '50' }
        ],
        output: { symbol: 'Req', label: 'Resistencia Eq.', unit: 'Ω' },
        resolve: (args) => {
            const R1 = Number(args.R1_serie);
            const R2 = Number(args.R2_serie);
            if (isNaN(R1) || isNaN(R2)) { return { error: 'Valores numéricos inválidos.' }; }
            const result = R1 + R2;
            return {
                result: { Req: result },
                steps: [
                    `$\text{Fórmula: } R_{eq} = R_1 + R_2$`,
                    `$\text{Sustituyendo: } R_{eq} = ${formatNumber(R1)} + ${formatNumber(R2)}$`,
                    `$\text{Resultado: } R_{eq} = ${formatNumber(result)}\text{ Ω}$`
                ]
            };
        }
    },
    {
        id: 'resistencia_paralelo',
        title: 'Resistencia Equivalente en Paralelo (R1, R2)',
        formula: 'R_{eq} = \\frac{R_1 ⋅ R_2}{R_1 + R_2}',
        variables: [
          { symbol: 'R1_paralelo', label: 'Resistencia R1', unit: 'Ω', example: '50' },
          { symbol: 'R2_paralelo', label: 'Resistencia R2', unit: 'Ω', example: '50' }
        ],
        output: { symbol: 'Req', label: 'Resistencia Eq.', unit: 'Ω' },
        resolve: (args) => {
            const R1 = Number(args.R1_paralelo);
            const R2 = Number(args.R2_paralelo);
            if (isNaN(R1) || isNaN(R2) || (R1 + R2 === 0)) { return { error: 'La suma de resistencias no puede ser cero.' }; }
            const result = (R1 * R2) / (R1 + R2);
            return {
                result: { Req: result },
                steps: [
                    `$\text{Fórmula: } \\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2}$`,
                    `$\text{Despejando: } R_{eq} = \\frac{R_1 ⋅ R_2}{R_1 + R_2}$`,
                    `$\text{Sustituyendo: } R_{eq} = \\frac{${formatNumber(R1)} ⋅ ${formatNumber(R2)}}{${formatNumber(R1)} + ${formatNumber(R2)}}$`,
                    `$\text{Resultado: } R_{eq} = ${formatNumber(result)}\text{ Ω}$`
                ]
            };
        }
    },
    {
        id: 'divisor_voltaje',
        title: 'Divisor de Voltaje',
        formula: 'V_2 = V_{total} ⋅ \\frac{R_2}{R_1 + R_2}',
        variables: [
          { symbol: 'V_total_div', label: 'Voltaje Total', unit: 'V', example: '12' },
          { symbol: 'R1_div', label: 'Resistencia R1', unit: 'Ω', example: '100' },
          { symbol: 'R2_div', label: 'Resistencia R2', unit: 'Ω', example: '200' }
        ],
        output: { symbol: 'V2', label: 'Voltaje V₂', unit: 'V' },
        resolve: (args) => {
            const V_total = Number(args.V_total_div);
            const R1 = Number(args.R1_div);
            const R2 = Number(args.R2_div);
            if (isNaN(V_total) || isNaN(R1) || isNaN(R2) || (R1 + R2 === 0)) { return { error: 'La suma de resistencias no puede ser cero.' }; }
            const result = V_total * (R2 / (R1 + R2));
            return {
                result: { V2: result },
                steps: [
                    `$\text{Fórmula: } V_2 = V_{total} ⋅ \\frac{R_2}{R_1 + R_2}$`,
                    `$\text{Sustituyendo: } V_2 = ${formatNumber(V_total)} ⋅ \\frac{${formatNumber(R2)}}{${formatNumber(R1)} + ${formatNumber(R2)}}$`,
                    `$\text{Resultado: } V_2 = ${formatNumber(result)}\text{ V}$`
                ]
            };
        }
    },
    {
        id: 'constante_tiempo_rc',
        title: 'Constante de Tiempo RC (τ)',
        formula: 'τ = R ⋅ C',
        variables: [
          { symbol: 'R_tau', label: 'Resistencia (R)', unit: 'Ω', example: '10000' },
          { symbol: 'C_tau', label: 'Capacidad (C)', unit: 'F', example: '1e-6' }
        ],
        output: { symbol: 'tau', label: 'Constante de tiempo (τ)', unit: 's' },
        resolve: (args) => {
            const R = Number(args.R_tau);
            const C = Number(args.C_tau);
            if (isNaN(R) || isNaN(C) || R <= 0 || C <= 0) { return { error: 'Valores inválidos. R y C deben ser positivos.' }; }
            const result = R * C;
            return {
                result: { tau: result },
                steps: [
                    `$\text{Fórmula: } τ = R ⋅ C$`,
                    `$\text{Sustituyendo: } τ = ${formatNumber(R)} ⋅ ${formatNumber(C)}$`,
                    `$\text{Resultado: } τ = ${formatNumber(result)}\text{ s}$`
                ]
            };
        }
    },
    {
        id: 'carga_capacitor_rc',
        title: 'Carga de un Capacitor (Circuito RC)',
        formula: 'q(t) = Q_f ⋅ (1 - e^{-t/τ})',
        variables: [
          { symbol: 'Q_f_carga', label: 'Carga final (Q_f)', unit: 'C', example: '1e-3' },
          { symbol: 'tau_carga', label: 'Constante de tiempo (τ)', unit: 's', example: '1' },
          { symbol: 't_carga', label: 'Tiempo (t)', unit: 's', example: '1' }
        ],
        output: { symbol: 'q_t', label: 'Carga q(t)', unit: 'C' },
        resolve: (args) => {
            const Q_f = Number(args.Q_f_carga);
            const tau = Number(args.tau_carga);
            const t = Number(args.t_carga);
            if (isNaN(Q_f) || isNaN(tau) || isNaN(t) || tau <= 0) { return { error: 'Valores inválidos. τ debe ser positivo.' }; }
            const result = Q_f * (1 - Math.exp(-t / tau));
            return {
                result: { q_t: result },
                steps: [
                    `$\text{Fórmula: } q(t) = Q_f ⋅ (1 - e^{-t/τ})$`,
                    `$\text{Sustituyendo: } q(t) = ${formatNumber(Q_f)} ⋅ (1 - e^{-${formatNumber(t)} / ${formatNumber(tau)}})$`,
                    `$\text{Resultado: } q(t) = ${formatNumber(result)}\text{ C}$`
                ]
            };
        }
    },
    {
        id: 'descarga_capacitor_rc',
        title: 'Descarga de un Capacitor (Circuito RC)',
        formula: 'q(t) = Q_0 ⋅ e^{-t/τ}',
        variables: [
          { symbol: 'Q_0_descarga', label: 'Carga inicial (Q₀)', unit: 'C', example: '1e-3' },
          { symbol: 'tau_descarga', label: 'Constante de tiempo (τ)', unit: 's', example: '1' },
          { symbol: 't_descarga', label: 'Tiempo (t)', unit: 's', example: '1' }
        ],
        output: { symbol: 'q_t', label: 'Carga q(t)', unit: 'C' },
        resolve: (args) => {
            const Q_0 = Number(args.Q_0_descarga);
            const tau = Number(args.tau_descarga);
            const t = Number(args.t_descarga);
            if (isNaN(Q_0) || isNaN(tau) || isNaN(t) || tau <= 0) { return { error: 'Valores inválidos. τ debe ser positivo.' }; }
            const result = Q_0 * Math.exp(-t / tau);
            return {
                result: { q_t: result },
                steps: [
                    `$\text{Fórmula: } q(t) = Q_0 ⋅ e^{-t/τ}$`,
                    `$\text{Sustituyendo: } q(t) = ${formatNumber(Q_0)} ⋅ e^{-${formatNumber(t)} / ${formatNumber(tau)}}$`,
                    `$\text{Resultado: } q(t) = ${formatNumber(result)}\text{ C}$`
                ]
            };
        }
    }
];