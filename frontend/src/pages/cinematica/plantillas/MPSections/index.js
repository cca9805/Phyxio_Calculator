import Theory from './Theory';
import exampleItems from './Examples';
import Calculator from './Calculator';

// Datos para ejemplos
export const ejemplos = exampleItems;

// Datos para ejercicios
export const ejercicios = [
  {
    id: 'ex-mp-1',
    title: 'Alcance horizontal',
    statement: 'Un proyectil se lanza con velocidad inicial de 50 m/s a un ángulo de 45°. ¿Cuál es su alcance horizontal?',
    answer: '255.1 m',
    hints: ['Usa la fórmula R = (v₀² · sen(2θ))/g', 'Sustituye valores']
  },
  {
    id: 'ex-mp-2',
    title: 'Altura máxima',
    statement: 'Un objeto se lanza con velocidad inicial de 30 m/s a un ángulo de 60°. ¿Cuál es la altura máxima que alcanza?',
    answer: '34.7 m',
    hints: ['Usa h_max = (v₀·senθ)²/(2g)', 'Sustituye valores']
  },
  {
    id: 'ex-mp-3',
    title: 'Tiempo de vuelo',
    statement: 'Un proyectil se lanza con velocidad inicial de 40 m/s a un ángulo de 30°. ¿Cuánto tiempo permanece en el aire?',
    answer: '4.08 s',
    hints: ['Usa t_vuelo = (2·v₀·senθ)/g', 'Sustituye valores']
  }
];

// Datos para fórmulas
export const formulas = [
  { id: 'f-mp-1', title: 'Alcance horizontal', formula: 'R = (v₀² · sen(2θ))/g' },
  { id: 'f-mp-2', title: 'Altura máxima', formula: 'h_max = (v₀·senθ)²/(2g)' },
  { id: 'f-mp-3', title: 'Tiempo de vuelo', formula: 't_vuelo = (2·v₀·senθ)/g' },
  { id: 'f-mp-4', title: 'Posición x', formula: 'x = (v₀·cosθ)·t' },
  { id: 'f-mp-5', title: 'Posición y', formula: 'y = (v₀·senθ)·t - ½gt²' }
];

// Datos para calculadora
export const calculadora = [
  {
    id: 'calc-mp-1',
    title: 'Calculadora de MP',
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
