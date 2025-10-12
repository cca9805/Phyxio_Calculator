export const formulas = [
    {
        id: 'f-magnetismo-3',
        title: 'Ley de Biot-Savart',
        formula: 'dB = (μ₀/4π) * (I dL x r̂) / r²',
        description: 'Campo magnético generado por un elemento de corriente.',
        variables: [
            { symbol: 'dB', name: 'Elemento de Campo Magnético', unit: 'T' },
            { symbol: 'μ₀', name: 'Permeabilidad del Vacío', unit: 'T·m/A' },
            { symbol: 'I', name: 'Corriente', unit: 'A' },
            { symbol: 'dL', name: 'Elemento de Longitud', unit: 'm' },
            { symbol: 'r', name: 'Distancia', unit: 'm' }
        ]
    },
    {
        id: 'f-magnetismo-4',
        title: 'Ley de Ampere',
        formula: '∮ B · dL = μ₀ * I_enc',
        description: 'Relaciona el campo magnético en una trayectoria cerrada con la corriente que la atraviesa.',
        variables: [
            { symbol: 'B', name: 'Campo Magnético', unit: 'T' },
            { symbol: 'dL', name: 'Elemento de Longitud', unit: 'm' },
            { symbol: 'μ₀', name: 'Permeabilidad del Vacío', unit: 'T·m/A' },
            { symbol: 'I_enc', name: 'Corriente Encerrada', unit: 'A' }
        ]
    }
];