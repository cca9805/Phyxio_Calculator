import Theory from './Theory';
import exampleItems from './Examples';
import Calculator from './Calculator';

// Datos para ejemplos
export const ejemplos = exampleItems;

// Datos para ejercicios
export const ejercicios = [
  {
    id: 'ex-mcua-1',
    title: 'Aceleración angular',
    statement: 'Un disco pasa de 33.3 rpm a 45 rpm en 2 segundos. ¿Cuál es su aceleración angular?',
    answer: '0.61 rad/s²',
    hints: ['Convierte ambas velocidades a rad/s', 'Usa α = (ω - ω₀)/t']
  },
  {
    id: 'ex-mcua-2',
    title: 'Vueltas hasta detenerse',
    statement: 'Una rueda gira a 600 rpm y comienza a frenar con α = -2 rad/s². ¿Cuántas vueltas dará hasta detenerse?',
    answer: '157 vueltas',
    hints: ['Calcula ω₀ en rad/s', 'Usa θ = ω₀²/(2α)', 'Convierte radianes a vueltas']
  }
];

// Datos para fórmulas
export const formulas = [
  { id: 'f-mcua-1', title: 'Velocidad angular en MCUA', formula: 'ω = ω₀ + αt' },
  { id: 'f-mcua-2', title: 'Posición angular en MCUA', formula: 'θ = θ₀ + ω₀t + ½αt²' },
  { id: 'f-mcua-3', title: 'Relación ω-θ', formula: 'ω² = ω₀² + 2α(θ-θ₀)' }
];


// Datos para calculadora
export const calculadora = [
  {
    id: 'calc-mcua-1',
    title: 'Calculadora de MCUA',
    component: Calculator
  }
];

// Exportaciones
export { Theory, Calculator }; // Añadir Calculator a las exportaciones nombradas
export default {
  Theory,
  ejemplos,
  ejercicios,
  formulas,
  calculadora
};
