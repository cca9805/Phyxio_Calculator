import teoriaText from './aplicaciones/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/APLICACIONESSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/APLICACIONESSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/APLICACIONESSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const APLICACIONESData = {
  id: 'aplicaciones',
  meta: {
    id: 'aplicaciones',
    title: 'APLICACIONES',
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

export default APLICACIONESData;
