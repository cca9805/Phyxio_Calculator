import { formatNumber } from '../../../../utils/formatNumber';

export const formulas = [
    {
        id: 'fuerza_de_lorentz',
        title: 'Fuerza de Lorentz',
        formula: 'F = q(v x B)',
        description: 'Fuerza sobre una carga puntual en un campo magnético.',
        variables: [
            { symbol: 'F', name: 'Fuerza', unit: 'N' },
            { symbol: 'q', name: 'Carga', unit: 'C' },
            { symbol: 'v', name: 'Velocidad', unit: 'm/s' },
            { symbol: 'B', name: 'Campo Magnético', unit: 'T' }
        ]
    },
    {
        id: 'fuerza_sobre_conductor',
        title: 'Fuerza sobre un Conductor con Corriente',
        formula: 'F = I(L x B)',
        description: 'Fuerza sobre un segmento de alambre con corriente en un campo magnético.',
        variables: [
            { symbol: 'F', name: 'Fuerza', unit: 'N' },
            { symbol: 'I', name: 'Corriente', unit: 'A' },
            { symbol: 'L', name: 'Vector de Longitud', unit: 'm' },
            { symbol: 'B', name: 'Campo Magnético', unit: 'T' }
        ]
    }
];