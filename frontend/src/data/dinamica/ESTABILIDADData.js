import teoriaText from './estabilidad/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/ESTABILIDADSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/ESTABILIDADSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/ESTABILIDADSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const ESTABILIDADData = {
  id: 'estabilidad',
  meta: {
    id: 'estabilidad',
    title: 'ESTABILIDAD',
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

export default ESTABILIDADData;
