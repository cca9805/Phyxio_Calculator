import teoriaText from './mru/teoria.md?raw';
import * as FormulasModule from '../../pages/cinematica/MRUSections/Formulas';
import * as EjerciciosModule from '../../pages/cinematica/MRUSections/Ejercicios';
import * as CalculadoraModule from '../../pages/cinematica/MRUSections/Calculadora';


const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const MRUData = {
  id: 'mru',
  meta: {
    id: 'mru',
    title: 'Movimiento Rectilíneo Uniforme',
    intro: 'Movimiento en línea recta con velocidad constante.',
    tldr: 'Velocidad constante'
  },
  sections: [
    { id: 'teoria', title: 'Teoría', type: 'markdown', content: teoriaText },
    { id: 'formulas', title: 'Fórmulas', type: 'formulas', content: Formulas },
    { id: 'ejercicios', title: 'Ejercicios', type: 'markdown', content: Ejercicios },
    { id: 'calculadoras', title: 'Calculadoras', type: 'calculators', content: Calculadora },
   
  ]
};

export default MRUData;
