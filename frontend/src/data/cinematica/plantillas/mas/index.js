import React from 'react'
import { getSubtemaData } from '../../../utils/findSections';

// Obtén los datos por defecto
const { defaultData } = getSubtemaData('MAS');

// Re-exporta usando los datos por defecto
export const teoriaMAS = defaultData.teoria;
export const ejemplosMAS = defaultData.ejemplos;
export const ejerciciosMAS = defaultData.ejercicios;
export const calculadoraMAS = defaultData.calculadora;
export const simuladorMAS = defaultData.simulador;
export const formulasMAS = defaultData.formulas;

// Objeto único para export default
const MASIndex = { 
  teoria: teoriaMAS, 
  ejemplos: ejemplosMAS, 
  ejercicios: ejerciciosMAS, 
  calculadora: calculadoraMAS, 
  simulador: simuladorMAS, 
  formulas: formulasMAS,
  // Añade la función de carga para que el componente pueda actualizar los datos
  load: async () => {
    return await getSubtemaData('MAS').load();
  }
}
export { MASIndex }
export default MASIndex