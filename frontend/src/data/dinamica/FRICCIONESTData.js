import teoriaText from './friccionest/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/FRICCIONESTSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/FRICCIONESTSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/FRICCIONESTSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const FRICCIONESTData = {
  id: 'friccionest',
  meta: {
    id: 'friccionest',
    title: 'FRICCIONEST',
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

export default FRICCIONESTData;
