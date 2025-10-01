import teoriaText from './maquinas/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/MAQUINASSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/MAQUINASSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/MAQUINASSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const MAQUINASData = {
  id: 'maquinas',
  meta: {
    id: 'maquinas',
    title: 'Maquinas Simples',
    intro: 'Estudio de las máquinas simples como palancas, poleas y planos inclinados.',
    tldr: 'Levantar y mover objetos con menos esfuerzo'
  },
  sections: [
    { id: 'teoria', title: 'Teoría', type: 'markdown', content: teoriaText },
    { id: 'formulas', title: 'Fórmulas', type: 'formulas', content: Formulas },
    { id: 'ejercicios', title: 'Ejercicios', type: 'exercises', content: Ejercicios },
    { id: 'calculadoras', title: 'Calculadoras', type: 'calculators', content: Calculadora }
  ]
};

export default MAQUINASData;
