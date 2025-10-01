import teoriaText from './centro/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/CENTROSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/CENTROSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/CENTROSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const CENTROData = {
  id: 'centro',
  meta: {
    id: 'centro',
    title: 'CENTRO',
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

export default CENTROData;
