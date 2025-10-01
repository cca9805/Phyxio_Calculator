import React from 'react'
// Importar la función que faltaba
import { getSubtemaData } from '../../../utils/findSections';
// Importar las fórmulas directamente desde el archivo de fórmulas
import formulasData from '../../../pages/F_Clasica/F_Mecanica/F_Cinematica/MRUSections/formulas';

// Datos estáticos básicos para otros componentes
export const ejemplosMRU = [];
export const ejerciciosMRU = [];
export const calculadoraMRU = [];
export const simuladorMRU = {};
export const formulasMRU = formulasData;

// Incluir una teoría por defecto en HTML
export const teoriaMRU = `
  <div class="space-y-4">
    <p class="leading-relaxed">
      El Movimiento Rectilíneo Uniforme (MRU) es aquel en que un móvil recorre distancias iguales en tiempos iguales. Es un movimiento a velocidad constante en línea recta, sin aceleración.
    </p>
    <div>
      <h4 class="font-semibold mb-2">Conceptos Clave</h4>
      <ul class="list-disc list-inside">
        <li>La velocidad es constante tanto en magnitud como en dirección</li>
        <li>La aceleración es nula</li>
        <li>La trayectoria es una línea recta</li>
        <li>La posición varía linealmente con el tiempo: x = x₀ + v·t</li>
        <li>La distancia recorrida es proporcional al tiempo: d = v·t</li>
        <li>La representación gráfica posición-tiempo es una línea recta</li>
      </ul>
    </div>
  </div>
`;

// Objeto único para export default
const MRUIndex = { 
  teoria: teoriaMRU,
  ejemplos: ejemplosMRU, 
  ejercicios: ejerciciosMRU, 
  calculadora: calculadoraMRU, 
  simulador: simuladorMRU, 
  formulas: formulasMRU,
  // Añade la función de carga para que el componente pueda actualizar los datos
  load: async () => {
    return await getSubtemaData('MRU').load();
  }
}
export { MRUIndex }
export default MRUIndex