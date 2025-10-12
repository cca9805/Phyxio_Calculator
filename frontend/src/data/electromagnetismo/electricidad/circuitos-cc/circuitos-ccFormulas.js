export const formulas = [
    {
        id: 'lck_nodo',
        title: 'Ley de Corrientes de Kirchhoff (LCK)',
        formula: 'ΣI_entrada = ΣI_salida',
        description: 'La suma de corrientes que entran a un nodo es igual a la suma de las que salen.',
        variables: []
    },
    {
        id: 'lvk_malla',
        title: 'Ley de Voltajes de Kirchhoff (LVK)',
        formula: 'ΣV = 0 en una malla',
        description: 'La suma algebraica de los voltajes en cualquier lazo cerrado es cero.',
        variables: []
    },
    {
        id: 'resistencia_serie',
        title: 'Resistencia Equivalente en Serie',
        formula: 'Req = R1 + R2 + ...',
        description: 'Las resistencias en serie se suman para obtener la resistencia total.',
        variables: [
            { symbol: 'R', name: 'Resistencia individual', unit: 'Ω' }
        ]
    },
    {
        id: 'resistencia_paralelo',
        title: 'Resistencia Equivalente en Paralelo',
        formula: '1/Req = 1/R1 + 1/R2 + ...',
        description: 'El inverso de la resistencia equivalente es la suma de los inversos de las resistencias en paralelo.',
        variables: [
            { symbol: 'R', name: 'Resistencia individual', unit: 'Ω' }
        ]
    },
    {
        id: 'divisor_voltaje',
        title: 'Divisor de Voltaje',
        formula: 'V₂ = V_total * (R₂ / (R₁ + R₂))',
        description: 'Calcula el voltaje a través de una de dos resistencias conectadas en serie.',
        variables: [
            { symbol: 'V₂', name: 'Voltaje en R₂', unit: 'V' },
            { symbol: 'V_total', name: 'Voltaje total de la fuente', unit: 'V' },
            { symbol: 'R₁, R₂', name: 'Resistencias en serie', unit: 'Ω' }
        ]
    },
    {
        id: 'constante_tiempo_rc',
        title: 'Constante de Tiempo RC (τ)',
        formula: 'τ = R * C',
        description: 'Representa el tiempo característico de carga/descarga de un circuito RC.',
        variables: [
            { symbol: 'τ', name: 'Constante de tiempo', unit: 's' },
            { symbol: 'R', name: 'Resistencia', unit: 'Ω' },
            { symbol: 'C', name: 'Capacidad', unit: 'F' }
        ]
    },
    {
        id: 'carga_capacitor_rc',
        title: 'Carga de un Capacitor (Circuito RC)',
        formula: 'q(t) = Q_f * (1 - e^{-t/τ})',
        description: 'Carga instantánea de un capacitor que se carga a través de una resistencia.',
        variables: [
            { symbol: 'q(t)', name: 'Carga en el tiempo t', unit: 'C' },
            { symbol: 'Q_f', name: 'Carga final (V*C)', unit: 'C' },
            { symbol: 'τ', name: 'Constante de tiempo (RC)', unit: 's' }
        ]
    },
    {
        id: 'descarga_capacitor_rc',
        title: 'Descarga de un Capacitor (Circuito RC)',
        formula: 'q(t) = Q_0 * e^{-t / τ}',
        description: 'Carga instantánea de un capacitor que se descarga a través de una resistencia.',
        variables: [
            { symbol: 'q(t)', name: 'Carga en el tiempo t', unit: 'C' },
            { symbol: 'Q_0', name: 'Carga inicial', unit: 'C' },
            { symbol: 'τ', name: 'Constante de tiempo (RC)', unit: 's' }
        ]
    }
];