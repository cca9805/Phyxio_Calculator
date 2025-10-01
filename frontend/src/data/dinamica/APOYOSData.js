import teoriaText from './apoyos/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/APOYOSSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/APOYOSSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/APOYOSSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const APOYOSData = {
  id: 'apoyos',
  meta: {
    id: 'apoyos',
    title: 'APOYOS',
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

export default APOYOSData;
