import teoriaText from './mcua/teoria.md?raw';
import * as FormulasModule from '../../pages/cinematica/MCUASections/Formulas';
import * as EjerciciosModule from '../../pages/cinematica/MCUASections/Ejercicios';
import * as CalculadoraModule from '../../pages/cinematica/MCUASections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;


const MCUAData = {
  id: 'mcua',
  meta: {
    id: 'mcua',
    title: 'MCUA',
    intro: 'El Movimiento Circular Uniformemente Acelerado (MCUA) es aquel en el que un cuerpo se mueve en una trayectoria circular con aceleración angular constante.',
    tldr: 'La velocidad angular varía con el tiempo de manera uniforme.'
  },
  sections: [
    { id: 'teoria', title: 'Teoría', type: 'markdown', content: teoriaText },
    { id: 'formulas', title: 'Fórmulas', type: 'formulas', content: Formulas },
    { id: 'ejercicios', title: 'Ejercicios', type: 'exercises', content: Ejercicios },
    { id: 'calculadoras', title: 'Calculadoras', type: 'calculators', content: Calculadora }
  ]
};

export default MCUAData;
