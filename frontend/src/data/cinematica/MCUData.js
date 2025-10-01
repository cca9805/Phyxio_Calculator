import teoriaText from './mcu/teoria.md?raw';
import * as FormulasModule from '../../pages/cinematica/MCUSections/Formulas';
import * as EjerciciosModule from '../../pages/cinematica/MCUSections/Ejercicios';
import * as CalculadoraModule from '../../pages/cinematica/MCUSections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const MCUData = {
  id: 'mcu',
  meta: {
    id: 'mcu',
    title: 'Movimiento Circular Uniforme',
    intro: 'Movimiento en una trayectoria circular con rapidez constante.',
    tldr: 'Rapidez constante en trayectoria circular'
  },
  sections: [
    { id: 'teoria', title: 'Teoría', type: 'markdown', content: teoriaText },
    { id: 'formulas', title: 'Fórmulas', type: 'formulas', content: Formulas },
    { id: 'ejercicios', title: 'Ejercicios', type: 'markdown', content: Ejercicios },
    { id: 'calculadoras', title: 'Calculadoras', type: 'calculators', content: Calculadora },
   
  ]
};

export default MCUData;
