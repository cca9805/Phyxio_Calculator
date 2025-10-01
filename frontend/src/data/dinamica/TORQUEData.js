import teoriaText from './torque/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/TORQUESections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/TORQUESections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/TORQUESections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const TORQUEData = {
  id: 'torque',
  meta: {
    id: 'torque',
    title: 'TORQUE',
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

export default TORQUEData;
