import teoriaText from './mcu/teoria.md?raw';
import * as FormulasModule from '../../pages/cinematica/MASSections/Formulas';
import * as EjerciciosModule from '../../pages/cinematica/MASSections/Ejercicios';
import * as CalculadoraModule from '../../pages/cinematica/MASSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const MASData = {
  id: 'mas',
  meta: {
    id: 'mas',
    title: 'MAS',
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

export default MASData;
