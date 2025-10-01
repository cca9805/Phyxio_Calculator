import React from 'react'
import { getSubtemaData } from '../../../utils/findSections';

// Obtén los datos por defecto
const { defaultData } = getSubtemaData('MCU');

// Re-exporta usando los datos por defecto
export const teoriaMCU = defaultData.teoria;
export const ejemplosMCU = defaultData.ejemplos;
export const ejerciciosMCU = defaultData.ejercicios;
export const calculadoraMCU = defaultData.calculadora;
export const simuladorMCU = defaultData.simulador;
export const formulasMCU = defaultData.formulas;

// Objeto único para export default
const MCUIndex = { 
  teoria: teoriaMCU, 
  ejemplos: ejemplosMCU, 
  ejercicios: ejerciciosMCU, 
  calculadora: calculadoraMCU, 
  simulador: simuladorMCU, 
  formulas: formulasMCU,
  // Añade la función de carga para que el componente pueda actualizar los datos
  load: async () => {
    return await getSubtemaData('MCU').load();
  }
}
export { MCUIndex }
export default MCUIndex