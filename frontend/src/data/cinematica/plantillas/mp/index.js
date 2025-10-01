import React from 'react'
import { getSubtemaData } from '../../../utils/findSections';

// Obtén los datos por defecto
const { defaultData } = getSubtemaData('MP');

// Re-exporta usando los datos por defecto
export const teoriaMP = defaultData.teoria;
export const ejemplosMP = defaultData.ejemplos;
export const ejerciciosMP = defaultData.ejercicios;
export const calculadoraMP = defaultData.calculadora;
export const simuladorMP = defaultData.simulador;
export const formulasMP = defaultData.formulas;

// Objeto único para export default
const MPIndex = { 
  teoria: teoriaMP, 
  ejemplos: ejemplosMP, 
  ejercicios: ejerciciosMP, 
  calculadora: calculadoraMP, 
  simulador: simuladorMP, 
  formulas: formulasMP,
  // Añade la función de carga para que el componente pueda actualizar los datos
  load: async () => {
    return await getSubtemaData('MP').load();
  }
}
export { MPIndex }
export default MPIndex