import teoriaText from './diagramas/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/DIAGRAMASSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/DIAGRAMASSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/DIAGRAMASSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const DIAGRAMASData = {
  id: 'diagramas',
  meta: {
    id: 'diagramas',
    title: 'DIAGRAMAS',
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

export default DIAGRAMASData;
