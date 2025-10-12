export const formulas = [
  {
    id: 'potencial_puntual',
    title: 'Potencial de Carga Puntual',
    formula: 'V = k * q / R',
    description: 'Potencial creado por una carga q a una distancia R, con V=0 en el infinito.',
    variables: [
      { symbol: 'V', name: 'Potencial Eléctrico', unit: 'V' },
      { symbol: 'q', name: 'Carga', unit: 'C' },
      { symbol: 'R', name: 'Distancia', unit: 'm' }
    ]
  },
  {
    id: 'energia_potencial_sistema',
    title: 'Energía Potencial de un Sistema de Cargas',
    formula: 'U = 0.5 * Σ(qi * Vi)',
    description: 'Trabajo necesario para ensamblar un sistema de cargas puntuales.',
    variables: [
      { symbol: 'U', name: 'Energía Potencial', unit: 'J' },
      { symbol: 'qi', name: 'Carga i', unit: 'C' },
      { symbol: 'Vi', name: 'Potencial en la posición i', unit: 'V' }
    ]
  },
  {
    id: 'relacion_campo_potencial',
    title: 'Relación Campo-Potencial (Uniforme)',
    formula: 'E = -ΔV / d',
    description: 'Relación entre el campo eléctrico uniforme y la diferencia de potencial a lo largo de una distancia d.',
    variables: [
        { symbol: 'E', name: 'Campo Eléctrico', unit: 'V/m' },
        { symbol: 'ΔV', name: 'Diferencia de Potencial', unit: 'V' },
        { symbol: 'd', name: 'Distancia', unit: 'm' }
    ]
  },
  {
    id: 'capacidad_definicion',
    title: 'Definición de Capacidad',
    formula: 'C = Q / V',
    description: 'La capacidad es la relación entre la carga almacenada y el potencial adquirido.',
    variables: [
      { symbol: 'C', name: 'Capacidad', unit: 'F' },
      { symbol: 'Q', name: 'Carga', unit: 'C' },
      { symbol: 'V', name: 'Potencial', unit: 'V' }
    ]
  },
  {
    id: 'capacidad_placas_paralelas',
    title: 'Capacidad de Placas Paralelas (Vacío)',
    formula: 'C = ε₀ * A / d',
    description: 'Capacidad de un condensador de placas paralelas en el vacío.',
    variables: [
      { symbol: 'C', name: 'Capacidad', unit: 'F' },
      { symbol: 'ε₀', name: 'Permitividad del vacío', unit: 'F/m' },
      { symbol: 'A', name: 'Área de las placas', unit: 'm²' },
      { symbol: 'd', name: 'Separación', unit: 'm' }
    ]
  },
  {
    id: 'capacidad_con_dielectrico',
    title: 'Capacidad con Dieléctrico',
    formula: 'C = κ * C₀',
    description: 'Capacidad de un condensador al introducir un dieléctrico de constante κ.',
    variables: [
      { symbol: 'C', name: 'Capacidad final', unit: 'F' },
      { symbol: 'κ', name: 'Constante Dieléctrica', unit: 'Adimensional' },
      { symbol: 'C₀', name: 'Capacidad inicial (vacío)', unit: 'F' }
    ]
  },
  {
    id: 'energia_almacenada_condensador',
    title: 'Energía en Condensador',
    formula: 'U = 0.5 * C * V^2 = Q^2 / (2C) = 0.5 * Q * V',
    description: 'Energía potencial electrostática almacenada en un condensador.',
    variables: [
      { symbol: 'U', name: 'Energía', unit: 'J' },
      { symbol: 'C', name: 'Capacidad', unit: 'F' },
      { symbol: 'V', name: 'Voltaje', unit: 'V' },
      { symbol: 'Q', name: 'Carga', unit: 'C' }
    ]
  },
  {
    id: 'capacidad_equivalente_serie',
    title: 'Capacidad Equivalente en Serie',
    formula: '1/Ceq = 1/C1 + 1/C2 + ...',
    description: 'El inverso de la capacidad equivalente es la suma de los inversos de las capacidades en serie.',
    variables: [
      { symbol: 'C', name: 'Capacidad individual', unit: 'F' }
    ]
  },
  {
    id: 'capacidad_equivalente_paralelo',
    title: 'Capacidad Equivalente en Paralelo',
    formula: 'Ceq = C1 + C2 + ...',
    description: 'La capacidad equivalente es la suma de las capacidades individuales en paralelo.',
    variables: [
      { symbol: 'C', name: 'Capacidad individual', unit: 'F' }
    ]
  }
];