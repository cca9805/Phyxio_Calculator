import teoriaText from './estructuras/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/ESTRUCTURASSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/ESTRUCTURASSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/ESTRUCTURASSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const ESTRUCTURASData = {
  id: 'estructuras',
  meta: {
    id: 'estructuras',
    title: 'ESTRUCTURAS',
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

export default ESTRUCTURASData;
