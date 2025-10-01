import React from 'react'
import { getSubtemaData } from '../../../utils/findSections';

// Obtén los datos por defecto
const { defaultData } = getSubtemaData('MCUA');

// Re-exporta usando los datos por defecto
export const teoriaMCUA = defaultData.teoria;
export const ejemplosMCUA = defaultData.ejemplos;
export const ejerciciosMCUA = defaultData.ejercicios;
export const calculadoraMCUA = defaultData.calculadora;
export const simuladorMCUA = defaultData.simulador;
export const formulasMCUA = defaultData.formulas;

// Objeto único para export default
const MCUAIndex = { 
  teoria: teoriaMCUA, 
  ejemplos: ejemplosMCUA, 
  ejercicios: ejerciciosMCUA, 
  calculadora: calculadoraMCUA, 
  simulador: simuladorMCUA, 
  formulas: formulasMCUA,
  // Añade la función de carga para que el componente pueda actualizar los datos
  load: async () => {
    return await getSubtemaData('MCUA').load();
  }
}
export { MCUAIndex }
export default MCUAIndex