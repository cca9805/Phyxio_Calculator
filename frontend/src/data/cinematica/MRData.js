import teoriaText from './mr/teoria.md?raw';
import * as FormulasModule from '../../pages/cinematica/MRSections/Formulas';
import * as EjerciciosModule from '../../pages/cinematica/MRSections/Ejercicios';
import * as CalculadoraModule from '../../pages/cinematica/MRSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const MRData = {
  id: 'mr',
  meta: {
    id: 'mr',
    title: 'MR',
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

export default MRData;
