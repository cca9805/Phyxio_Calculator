import teoriaText from './friccion/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/FRICCIONSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/FRICCIONSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/FRICCIONSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const FRICCIONData = {
  id: 'friccion',
  meta: {
    id: 'friccion',
    title: 'FRICCION',
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

export default FRICCIONData;
