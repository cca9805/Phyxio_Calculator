import React from 'react'
import { getSubtemaData } from '../../../utils/findSections';

// Obtén los datos por defecto
const { defaultData } = getSubtemaData('MR');

// Re-exporta usando los datos por defecto
export const teoriaMR = defaultData.teoria;
export const ejemplosMR = defaultData.ejemplos;
export const ejerciciosMR = defaultData.ejercicios;
export const calculadoraMR = defaultData.calculadora;
export const simuladorMR = defaultData.simulador;
export const formulasMR = defaultData.formulas;

// Objeto único para export default
const MRIndex = { 
  teoria: teoriaMR, 
  ejemplos: ejemplosMR, 
  ejercicios: ejerciciosMR, 
  calculadora: calculadoraMR, 
  simulador: simuladorMR, 
  formulas: formulasMR,
  // Añade la función de carga para que el componente pueda actualizar los datos
  load: async () => {
    return await getSubtemaData('MR').load();
  }
}
export { MRIndex }
export default MRIndex