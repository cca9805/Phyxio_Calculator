import teoriaText from './mruv/teoria.md?raw';
import * as FormulasModule from '../../pages/cinematica/MRUVSections/Formulas';
import * as EjerciciosModule from '../../pages/cinematica/MRUVSections/Ejercicios';
import * as CalculadoraModule from '../../pages/cinematica/MRUVSections/Calculadora';


const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;


const MRUVData = {
  id: 'mruv',
  meta: {
    id: 'mruv',
    title: 'Movimiento Rectilíneo Uniforme Variado',
    intro: 'Movimiento en línea recta con aceleración constante.',
    tldr: 'Aceleración constante'
  },
  sections: [
    { id: 'teoria', title: 'Teoría', type: 'markdown', content: teoriaText },
    { id: 'formulas', title: 'Fórmulas', type: 'formulas', content: Formulas },
    { id: 'ejercicios', title: 'Ejercicios', type: 'markdown', content: Ejercicios },
    { id: 'calculadoras', title: 'Calculadoras', type: 'calculators', content: Calculadora },
   
  ]
};

export default MRUVData;