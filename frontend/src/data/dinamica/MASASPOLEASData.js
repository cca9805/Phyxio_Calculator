import teoriaText from './masaspoleas/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/masaspoleasSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/masaspoleasSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/masaspoleasSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const masaspoleasData = {
  id: 'masaspoleas',
  meta: {
    id: 'masaspoleas',
    title: 'masaspoleas',
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

export default masaspoleasData;
