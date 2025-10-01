import teoriaText from './oscilaciones/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/OSCILACIONESSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/OSCILACIONESSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/OSCILACIONESSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const OSCILACIONESData = {
  id: 'oscilaciones',
  meta: {
    id: 'oscilaciones',
    title: 'OSCILACIONES',
    intro: 'Estudio del movimiento repetitivo alrededor de una posición de equilibrio.',
    tldr: 'La oscilación es un movimiento que se repite en el tiempo, como el péndulo de un reloj o las ondas en el agua.'
  },
  sections: [
    { id: 'teoria', title: 'Teoría', type: 'markdown', content: teoriaText },
    { id: 'formulas', title: 'Fórmulas', type: 'formulas', content: Formulas },
    { id: 'ejercicios', title: 'Ejercicios', type: 'exercises', content: Ejercicios },
    { id: 'calculadoras', title: 'Calculadoras', type: 'calculators', content: Calculadora }
  ]
};

export default OSCILACIONESData;
