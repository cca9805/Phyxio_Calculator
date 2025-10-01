import teoriaText from './equilibrio/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/EQUILIBRIOSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/EQUILIBRIOSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/EQUILIBRIOSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;


const EQUILIBRIOData = {
  id: '${subId}',
  meta: {
    id: '${subId}',
    title: '${U}',
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

export default EQUILIBRIOData;
