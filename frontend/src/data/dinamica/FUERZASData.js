import teoriaText from './fuerzas/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/FUERZASSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/FUERZASSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/FUERZASSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const FUERZASData = {
  id: 'fuerzas',
  meta: {
    id: 'fuerzas',
    title: 'FUERZAS',
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

export default FUERZASData;
