import teoriaText from './rotacion/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/ROTACIONSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/ROTACIONSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/ROTACIONSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const ROTACIONData = {
  id: 'rotacion',
  meta: {
    id: 'rotacion',
    title: 'ROTACION',
    intro: 'Estudio del movimiento de los cuerpos que giran alrededor de un eje.',
    tldr: 'La rotación es el movimiento de un cuerpo alrededor de un eje fijo.'
  },
  sections: [
    { id: 'teoria', title: 'Teoría', type: 'markdown', content: teoriaText },
    { id: 'formulas', title: 'Fórmulas', type: 'formulas', content: Formulas },
    { id: 'ejercicios', title: 'Ejercicios', type: 'exercises', content: Ejercicios },
    { id: 'calculadoras', title: 'Calculadoras', type: 'calculators', content: Calculadora }
  ]
};

export default ROTACIONData;
