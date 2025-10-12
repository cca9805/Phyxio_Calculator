import { calculators as leyesTermodinamicaCalculators } from './leyes-termodinamica/leyes-termodinamicaCalculators';
import { calculators as gasesIdealesCalculators } from './gases-ideales/gases-idealesCalculators';

export const calculators = {
  ...leyesTermodinamicaCalculators,
  ...gasesIdealesCalculators
};