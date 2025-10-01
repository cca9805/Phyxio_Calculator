import teoriaText from './trabajoenergia/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/TRABAJOENERGIASections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/TRABAJOENERGIASections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/TRABAJOENERGIASections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const TRABAJOENERGIAData = {
  id: 'trabajoenergia',
  meta: {
    id: 'trabajoenergia',
    title: 'TRABAJOENERGIA',
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

export default TRABAJOENERGIAData;
