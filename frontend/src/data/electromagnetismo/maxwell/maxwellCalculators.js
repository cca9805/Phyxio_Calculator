import { formatNumber } from "../../../utils/formatNumber";

const E0 = 8.854187817e-12; // Permitividad del vacío (ε₀) F/m
const U0 = 4 * Math.PI * 1e-7;   // Permeabilidad del vacío (μ₀) H/m

export const calculators = [
    {
        id: 'velocidad_luz_vacio',
        title: 'Velocidad de la Luz en el Vacío (c)',
        formula: 'c = 1 / sqrt(ε₀ * μ₀)',
        variables: [], // No variables needed for this calculation
        output: { name: 'c', label: 'Velocidad de la Luz (c)', unit: 'm/s' },
        resolve: () => {
            const product = E0 * U0;
            const sqrtProduct = Math.sqrt(product);
            const result = 1 / sqrtProduct;

            return {
                result: { c: result },
                steps: [
                    `Calcular el producto de la permitividad (ε₀) y la permeabilidad (μ₀) del vacío.`,
                    `ε₀ * μ₀ = ${formatNumber(E0)} * ${formatNumber(U0)} = ${formatNumber(product)}`,
                    `Calcular la raíz cuadrada del producto.`,
                    `sqrt(${formatNumber(product)}) = ${formatNumber(sqrtProduct)}`,
                    `Calcular el inverso de la raíz cuadrada.`,
                    `c = 1 / ${formatNumber(sqrtProduct)} = ${formatNumber(result)} m/s`
                ]
            };
        }
    },
    {
        id: 'info_maxwell',
        title: 'Nota sobre Calculadoras de Maxwell',
        formula: '',
        variables: [],
        output: { name: '', label: '', unit: '' },
        resolve: () => {
            return {
                error: 'Las Ecuaciones de Maxwell en su forma diferencial e integral describen relaciones complejas entre campos vectoriales. No se prestan a calculadoras simples de "conectar y usar" como las leyes de Ohm o Coulomb. Su aplicación requiere cálculo vectorial y la definición de condiciones de contorno específicas para un problema dado.'
            };
        }
    }
];