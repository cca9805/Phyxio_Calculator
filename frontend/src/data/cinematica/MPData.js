import teoriaText from './mp/teoria.md?raw';
import * as FormulasModule from '../../pages/cinematica/MPSections/Formulas';
import * as EjerciciosModule from '../../pages/cinematica/MPSections/Ejercicios';
import * as CalculadoraModule from '../../pages/cinematica/MPSections/Calculadora';


const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const MPData = {
  id: 'mp',
  meta: {
    id: 'mp',
    title: 'MP',
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

export default MPData;
