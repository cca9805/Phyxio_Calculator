import Theory from './Theory';
import exampleItems from './Examples';
import Calculator from './Calculator';
import formulasData from './formulas';

// Definición de datos
const ejercicios = [
  {
    id: 'ex-mr-1',
    title: 'Velocidad relativa',
    statement: 'Un tren se mueve a 80 km/h. Un pasajero camina dentro del tren a 5 km/h en la misma dirección. ¿Cuál es la velocidad del pasajero respecto a tierra?',
    answer: '85 km/h',
    hints: ['Usa la suma de velocidades', 'v_PT = v_PT\' + v_TT']
  },
  {
    id: 'ex-mr-2',
    title: 'Cruce de trenes',
    statement: 'Dos trenes se acercan en sentidos opuestos a 60 km/h y 80 km/h. ¿A qué velocidad se acercan entre sí?',
    answer: '140 km/h',
    hints: ['Velocidad relativa = suma de velocidades absolutas']
  },
  {
    id: 'ex-mr-3',
    title: 'Velocidad relativa 2D',
    statement: 'Un barco navega a 10 km/h dirección este y hay una corriente de 5 km/h dirección norte. ¿Cuál es la velocidad resultante del barco?',
    answer: '11.18 km/h',
    hints: ['Usa el teorema de Pitágoras', 'v = √(v₁² + v₂²)']
  }
];

// Configuración de la calculadora
const calculadoraConfig = [
  {
    id: 'calc-mr-1',
    title: 'Calculadora de MR',
    component: Calculator
  }
];

// Exportaciones con nombres específicos
export const ejemplos = exampleItems;
export const formulas = formulasData;
export const calculadora = calculadoraConfig;

// Exportaciones individuales
export { Theory, Calculator };

// Exportación por defecto
export default {
  Theory,
  ejemplos,
  ejercicios,
  formulas,
  calculadora
};
