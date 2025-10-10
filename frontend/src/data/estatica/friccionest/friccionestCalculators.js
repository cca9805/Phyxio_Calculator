
import { formatNumber } from '../../../utils/formatNumber';

const radToDeg = rad => rad * (180 / Math.PI);

export const calculators = [
  {
    id: 'friccion-estatica-maxima',
    title: 'Fricción Estática Máxima',
    description: "Calcula la fuerza máxima de fricción estática (fs,max) que puede existir entre dos superficies antes de que comience el movimiento.",
    formula: 'f_{s,max} = \\mu_s \\cdot N',
    variables: [
      { symbol: 'mu_s', label: 'Coeficiente de Fricción Estática (μs)', unit: '', example: '0.4' },
      { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N', example: '100' }
    ],
    output: { symbol: 'fs_max', label: 'Fuerza de Fricción Estática Máxima', unit: 'N' },
    resolve: (args) => {
        const mu_s = Number(args.mu_s);
        const N = Number(args.N);

        if (isNaN(mu_s) || isNaN(N)) {
          return { error: 'Por favor, introduzca valores numéricos válidos.' };
        }

        const result = mu_s * N;
        return {
            result: { fs_max: result },
            steps: [
                'Principio: La fricción estática máxima es la fuerza que se debe superar para iniciar el movimiento.',
                `Fórmula: f_{s,max} = \\mu_s \\cdot N`,
                `Cálculo: f_{s,max} = ${formatNumber(mu_s)} \\cdot ${formatNumber(N)} = ${formatNumber(result)} N`
            ]
        };
    }
  },
  {
    id: 'friccion-cinetica',
    title: 'Fricción Cinética',
    description: "Calcula la fuerza de fricción (fk) que actúa entre dos superficies cuando una se desliza sobre la otra.",
    formula: 'f_k = \\mu_k \\cdot N',
    variables: [
      { symbol: 'mu_k', label: 'Coeficiente de Fricción Cinética (μk)', unit: '', example: '0.3' },
      { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N', example: '100' },
    ],
    output: { symbol: 'fk', label: 'Fuerza de Fricción Cinética', unit: 'N' },
    resolve: (args) => {
      const mu_k = Number(args.mu_k);
      const N = Number(args.N);

      if (isNaN(mu_k) || isNaN(N)) {
        return { error: 'Por favor, introduzca valores numéricos válidos.' };
      }

      const result = mu_k * N;
      return {
        result: { fk: result },
        steps: [
          'Principio: La fricción cinética es una fuerza de resistencia que actúa cuando un objeto está en movimiento.',
          `Fórmula: f_k = \\mu_k \\cdot N`,
          `Sustituyendo: f_k = ${formatNumber(mu_k)} \\cdot ${formatNumber(N)} = ${formatNumber(result)} N`,
        ],
      };
    },
  },
  {
    id: 'angulo-de-friccion',
    title: 'Ángulo de Fricción Estática',
    description: "Calcula el ángulo (φs) tal que si el ángulo de la fuerza resultante con la normal es mayor que φs, el objeto se moverá.",
    formula: '\\phi_s = \\text{atan}(\\mu_s)',
    variables: [
      { symbol: 'mu_s', label: 'Coeficiente de Fricción Estática (μs)', unit: '', example: '0.4' },
    ],
    output: { symbol: 'phi_s', label: 'Ángulo de Fricción Estática', unit: '°' },
    resolve: (args) => {
      const mu_s = Number(args.mu_s);

      if (isNaN(mu_s)) {
        return { error: 'Por favor, introduzca un valor numérico válido.' };
      }

      const result = radToDeg(Math.atan(mu_s));
      return {
        result: { phi_s: result },
        steps: [
          `Fórmula: \\phi_s = \\text{atan}(\\mu_s)`,
          `Sustituyendo: \\phi_s = \\text{atan}(${formatNumber(mu_s)})`,
          `Resultado: \\phi_s = ${formatNumber(result)}°`,
        ],
      };
    },
  },
  {
    id: 'condicion-equilibrio-friccion',
    title: 'Equilibrio con Fricción',
    description: "Verifica si un objeto permanecerá en equilibrio estático comparando la fuerza que tiende a moverlo con la fricción estática máxima.",
    formula: 'F_{\\text{aplicada}} \\le f_{s,max}',
    variables: [
      { symbol: 'F_aplicada', label: 'Fuerza aplicada (tangencial)', unit: 'N', example: '20' },
      { symbol: 'fs_max', label: 'Fricción estática máxima (fs,max)', unit: 'N', example: '25' }
    ],
    output: { symbol: 'equilibrio', label: 'Condición de Equilibrio', unit: '' },
    resolve: (args) => {
        const F_aplicada = Number(args.F_aplicada);
        const fs_max = Number(args.fs_max);

        if (isNaN(F_aplicada) || isNaN(fs_max)) {
          return { error: 'Por favor, introduzca valores numéricos válidos.' };
        }

        const inEquilibrium = F_aplicada <= fs_max;
        const resultText = inEquilibrium ? 'En Equilibrio (No se mueve)' : 'En Movimiento';
        const steps = [
            'Principio: Si la fuerza aplicada es menor o igual a la fricción estática máxima, el objeto no se mueve.',
            `Comprobación: ${formatNumber(F_aplicada)} N \\le ${formatNumber(fs_max)} N`,
            `Conclusión: La condición ${inEquilibrium ? 'se cumple' : 'no se cumple'}. El objeto está ${resultText}.`
        ];

        return { result: { equilibrio: resultText }, steps };
    }
  }
];
