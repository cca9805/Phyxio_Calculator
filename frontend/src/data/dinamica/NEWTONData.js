import teoriaText from './newton/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/NEWTONSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/NEWTONSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/NEWTONSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const NEWTONData = {
  id: 'newton',
  meta: {
    id: 'newton',
    title: 'NEWTON',
    intro: 'Las tres leyes fundamentales que describen el movimiento de los cuerpos y las fuerzas que actúan sobre ellos.',
    tldr: '1ª Ley: Inercia. 2ª Ley: F=ma. 3ª Ley: Acción y Reacción.'
  },
  sections: [
    { id: 'teoria', title: 'Teoría', type: 'markdown', content: teoriaText },
    { id: 'formulas', title: 'Fórmulas', type: 'formulas', content: Formulas },
    { id: 'ejercicios', title: 'Ejercicios', type: 'exercises', content: Ejercicios },
    { id: 'calculadoras', title: 'Calculadoras', type: 'calculators', content: Calculadora }
  ]
};

export default NEWTONData;
