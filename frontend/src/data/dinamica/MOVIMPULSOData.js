import teoriaText from './movimpulso/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/MOVIMPULSOSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/MOVIMPULSOSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/MOVIMPULSOSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const MOVIMPULSOData = {
  id: 'movimpulso',
  meta: {
    id: 'movimpulso',
    title: 'movimpulso',
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

export default MOVIMPULSOData;
