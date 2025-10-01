import teoriaText from './leyes/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/LEYESSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/LEYESSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/LEYESSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const LEYESData = {
  id: 'leyes',
  meta: {
    id: 'leyes',
    title: 'LEYES',
    intro: '',
    tldr: ''
  },
  sections: [
    { id: 'teoria', title: 'Teoría', type: 'markdown', content: teoriaText },
    { id: 'formulas', title: 'Fórmulas', type: 'formulas', content: Formulas },
    { id: 'ejercicios', title: 'Ejercicios', type: 'exercises', content: Ejercicios },
    { id: 'calculadoras', title: 'Calculadoras', type: 'calculators', content: Calculadora }
  ]
};

export default LEYESData;
