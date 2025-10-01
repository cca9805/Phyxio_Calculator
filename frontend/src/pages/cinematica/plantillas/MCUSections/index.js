import Theory from './Theory';
import exampleItems from './Examples';

// Datos para ejemplos
export const ejemplos = exampleItems;

// Datos para ejercicios
export const ejercicios = [
  {
    id: 'ex-mcu-1',
    title: 'Velocidad angular',
    statement: 'Una rueda de 60 cm de diámetro gira a 300 rpm. ¿Cuál es su velocidad angular en rad/s?',
    answer: '31.42 rad/s',
    hints: ['1 rpm = 2π/60 rad/s', 'Multiplica por el factor de conversión']
  },
  {
    id: 'ex-mcu-2',
    title: 'Velocidad lineal',
    statement: 'Un punto en el borde de un disco de 25 cm de radio gira a 180 rpm. ¿Cuál es su velocidad lineal?',
    answer: '4.71 m/s',
    hints: ['Calcula ω en rad/s', 'Usa v = ωr']
  },
  {
    id: 'ex-mcu-3',
    title: 'Aceleración centrípeta',
    statement: 'Un objeto gira en círculo de radio 3 m a 2 revoluciones por segundo. ¿Cuál es su aceleración centrípeta?',
    answer: '474 m/s²',
    hints: ['Calcula ω en rad/s', 'Usa a_c = ω²r']
  }
];

// Datos para fórmulas
export const formulas = [
  { id: 'f-mcu-1', title: 'Velocidad angular', formula: 'ω = 2π/T' },
  { id: 'f-mcu-2', title: 'Velocidad lineal', formula: 'v = ωr' },
  { id: 'f-mcu-3', title: 'Aceleración centrípeta', formula: 'a_c = v²/r = ω²r' },
  { id: 'f-mcu-4', title: 'Periodo', formula: 'T = 2π/ω' }
];

// Exportaciones
export { Theory };
export default {
  Theory,
  ejemplos,
  ejercicios,
  formulas
};