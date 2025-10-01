import Theory from './Theory';
import exampleItems from './Examples';
import Calculator from './Calculator';

// Datos para ejemplos
export const ejemplos = exampleItems;

// Datos para ejercicios
export const ejercicios = [
  {
    id: 'ex-mas-1',
    title: 'Periodo de un resorte',
    statement: 'Un objeto de 0.25 kg está unido a un resorte con constante k = 100 N/m. ¿Cuál es el periodo de oscilación?',
    answer: '0.314 s',
    hints: ['Usa T = 2π√(m/k)', 'Sustituye los valores dados']
  },
  {
    id: 'ex-mas-2',
    title: 'Frecuencia de oscilación',
    statement: 'Un péndulo de 0.5 m de longitud oscila con pequeña amplitud. ¿Cuál es su frecuencia? (g = 9.8 m/s²)',
    answer: '0.704 Hz',
    hints: ['Usa f = (1/2π)√(g/L)', 'f = 1/T']
  },
  {
    id: 'ex-mas-3',
    title: 'Energía de un MAS',
    statement: 'Un objeto de 0.3 kg oscila con amplitud de 5 cm en un resorte de constante k = 120 N/m. ¿Cuál es su energía total?',
    answer: '0.15 J',
    hints: ['Usa E = ½kA²', 'Sustituye valores']
  }
];

// Datos para fórmulas
export const formulas = [
  { id: 'f-mas-1', title: 'Periodo de un resorte', formula: 'T = 2π√(m/k)' },
  { id: 'f-mas-2', title: 'Periodo de un péndulo', formula: 'T = 2π√(L/g)' },
  { id: 'f-mas-3', title: 'Posición en MAS', formula: 'x = A·cos(ωt + φ)' },
  { id: 'f-mas-4', title: 'Velocidad en MAS', formula: 'v = -Aω·sin(ωt + φ)' },
  { id: 'f-mas-5', title: 'Energía en MAS', formula: 'E = ½kA²' }
];

// Datos para calculadora
export const calculadora = [
  {
    id: 'calc-mas-1',
    title: 'Calculadora de MAS',
    component: Calculator
  }
];

// Exportaciones
export { Theory, Calculator };
export default {
  Theory,
  ejemplos,
  ejercicios,
  formulas,
  calculadora
};
