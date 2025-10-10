
import { formatNumber } from "../../../utils/formatNumber";

export const calculators = [
  {
    id: "reacciones-viga-general-separado",
    title: "Reacciones en Viga Simplemente Apoyada",
    description: "Calcula las reacciones en los apoyos A y B de una viga, considerando una carga distribuida y hasta 3 cargas puntuales. Deje en 0 las cargas que no utilice.",
    formula: "ΣM_A = 0; ΣF_y = 0",
    variables: [
      { symbol: "L", label: "Longitud de la viga (L)", unit: "m", example: "10" },
      { symbol: "w", label: "Carga distribuida uniforme (w)", unit: "N/m", example: "15" },
      
      { type: 'divider', label: 'Carga Puntual 1' },
      { symbol: "P1", label: "Magnitud (P₁)", unit: "N", example: "100" },
      { symbol: "a1", label: "Distancia desde A (a₁)", unit: "m", example: "2" },

      { type: 'divider', label: 'Carga Puntual 2' },
      { symbol: "P2", label: "Magnitud (P₂)", unit: "N", example: "50" },
      { symbol: "a2", label: "Distancia desde A (a₂)", unit: "m", example: "8" },
      
      { type: 'divider', label: 'Carga Puntual 3' },
      { symbol: "P3", label: "Magnitud (P₃)", unit: "N", example: "0" },
      { symbol: "a3", label: "Distancia desde A (a₃)", unit: "m", example: "0" },
    ],
    output: [
      { symbol: "R_A", label: "Reacción vertical en A (R_A)", unit: "N" },
      { symbol: "R_B", label: "Reacción vertical en B (R_B)", unit: "N" },
    ],
    resolve: (args) => {
      try {
        const L = Number(args.L) || 0;
        if (L <= 0) return { error: "La longitud L debe ser mayor que 0." };

        const w = Number(args.w) || 0;
        const cargas = [];
        for (let i = 1; i <= 3; i++) {
          const P = Number(args[`P${i}`]) || 0;
          const a = Number(args[`a${i}`]) || 0;
          if (P !== 0) {
            if (a < 0 || a > L) {
              throw new Error(`La carga P${i} (${P}N) está fuera de la viga (a=${a}m).`);
            }
            cargas.push({ P, a, label: `P${i}` });
          }
        }

        const steps = [];

        // 1. Suma de Momentos en A para encontrar R_B
        steps.push("1. Calcular R_B con ΣM_A = 0 (antihorario +):");
        let sumaMomentosEnA = 0;
        let momentosStr = [];

        // Momento de la carga distribuida
        const cargaDistribuidaTotal = w * L;
        if (w > 0) {
          const momentoDistribuida = cargaDistribuidaTotal * (L / 2);
          sumaMomentosEnA += momentoDistribuida;
          momentosStr.push(`(w*L)*(L/2) = ${formatNumber(momentoDistribuida)}`);
        }

        // Momentos de las cargas puntuales
        cargas.forEach(({ P, a }) => {
          const momentoPuntual = P * a;
          sumaMomentosEnA += momentoPuntual;
          momentosStr.push(`${P}*${a} = ${formatNumber(momentoPuntual)}`);
        });
        
        steps.push(`   R_B*L - Σ(Momentos de Cargas) = 0`);
        if (momentosStr.length > 0) {
            steps.push(`   R_B*${L} - (${momentosStr.join(' + ')}) = 0`);
        }
        const R_B = sumaMomentosEnA / L;
        steps.push(`   R_B = ${formatNumber(sumaMomentosEnA)} / ${L} = ${formatNumber(R_B)} N`);

        // 2. Suma de Fuerzas en Y para encontrar R_A
        steps.push("\n2. Calcular R_A con ΣF_y = 0 (arriba +):");
        let sumaFuerzas = cargaDistribuidaTotal;
        let fuerzasStr = [];
        if (w > 0) fuerzasStr.push(`w*L = ${formatNumber(cargaDistribuidaTotal)}`);
        
        cargas.forEach(({ P }) => {
          sumaFuerzas += P;
          fuerzasStr.push(formatNumber(P));
        });
        
        const totalCargasHaciaAbajo = fuerzasStr.join(' + ');
        steps.push(`   R_A + R_B - Σ(Fuerzas Abajo) = 0`);
        steps.push(`   R_A + ${formatNumber(R_B)} - (${totalCargasHaciaAbajo || '0'}) = 0`);
        const R_A = sumaFuerzas - R_B;
        steps.push(`   R_A = ${formatNumber(sumaFuerzas)} - ${formatNumber(R_B)} = ${formatNumber(R_A)} N`);

        return { result: { R_A, R_B }, steps };
      } catch (e) {
        return { error: e.message };
      }
    },
  },
];
