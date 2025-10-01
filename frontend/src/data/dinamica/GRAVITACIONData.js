import teoriaText from './gravitacion/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/GRAVITACIONSections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/GRAVITACIONSections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/GRAVITACIONSections/Calculadora';
import GRAVITACION from '../../pages/dinamica/GRAVITACION';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const GRAVITACIONData = {
  id: 'gravitacion',
  meta: {
    id: 'gravitacion',
    title: 'Gravitación',
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

export default GRAVITACIONData;
