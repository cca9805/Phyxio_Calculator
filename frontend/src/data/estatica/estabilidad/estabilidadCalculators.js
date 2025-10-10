
import { formatNumber } from '../../../utils/formatNumber';

export const calculators = [
  {
    id: 'condicion-estabilidad',
    title: 'Condición de Estabilidad',
    description: "Verifica si un objeto es estable comprobando si su centro de gravedad (C.G.) se encuentra dentro de su base de apoyo.",
    formula: 'x_base_min ≤ x_cg ≤ x_base_max',
    variables: [
      { symbol: 'x_cg', label: 'Posición del C.G. (x_cg)', unit: 'm', example: '0.25' },
      { symbol: 'x_base_min', label: 'Límite izquierdo de la base (x_base_min)', unit: 'm', example: '0' },
      { symbol: 'x_base_max', label: 'Límite derecho de la base (x_base_max)', unit: 'm', example: '0.5' }
    ],
    output: { symbol: 'estable', label: 'Resultado', unit: '' },
    resolve: (args) => {
      try {
        const x_cg = Number(args.x_cg);
        const x_base_min = Number(args.x_base_min);
        const x_base_max = Number(args.x_base_max);

        if (isNaN(x_cg) || isNaN(x_base_min) || isNaN(x_base_max)) {
          return { error: 'Por favor, introduzca valores numéricos válidos.' };
        }

        if (x_base_min > x_base_max) {
          return { error: 'El límite izquierdo de la base no puede ser mayor que el límite derecho.' };
        }

        const isStable = x_cg >= x_base_min && x_cg <= x_base_max;
        const resultText = isStable ? "Estable" : "No Estable";
        
        const steps = [
            'Principio: Para que un objeto sea estable, la proyección vertical de su centro de gravedad (C.G.) debe caer dentro de su base de apoyo.',
            `Comprobación: ${formatNumber(x_base_min)} m ≤ ${formatNumber(x_cg)} m ≤ ${formatNumber(x_base_max)} m`,
            `Resultado: La condición ${isStable ? 'se cumple' : 'no se cumple'}. El objeto es ${resultText}.`
        ];
        
        return { result: resultText, steps };
      } catch (e) {
        return { error: e.message };
      }
    }
  }
];
