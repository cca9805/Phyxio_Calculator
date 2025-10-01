import React from 'react'
import { getSubtemaData } from '../../../utils/findSections';

// Datos estáticos básicos para otros componentes
export const ejemplosMRUV = [];
export const ejerciciosMRUV = [];
export const calculadoraMRUV = [];
export const simuladorMRUV = {};
export const formulasMRUV = [];

// Incluir una teoría por defecto en HTML
export const teoriaMRUV = `
  <div class="space-y-4">
    <p class="leading-relaxed">
      El Movimiento Rectilíneo Uniformemente Variado (MRUV) es aquel en el que un objeto se mueve en línea recta con aceleración constante.
    </p>
    <div>
      <h4 class="font-semibold mb-2">Conceptos Clave</h4>
      <ul class="list-disc list-inside">
        <li>La aceleración es constante</li>
        <li>La velocidad varía linealmente con el tiempo: v = v₀ + a·t</li>
        <li>La posición varía cuadráticamente con el tiempo: x = x₀ + v₀·t + ½·a·t²</li>
        <li>Ecuación independiente del tiempo: v² = v₀² + 2·a·(x-x₀)</li>
      </ul>
    </div>
  </div>
`;

// Objeto único para export default
const MRUVIndex = { 
  teoria: teoriaMRUV,
  ejemplos: ejemplosMRUV, 
  ejercicios: ejerciciosMRUV, 
  calculadora: calculadoraMRUV, 
  simulador: simuladorMRUV, 
  formulas: formulasMRUV,
  load: async () => {
    return await getSubtemaData('MRUV').load();
  }
}
export { MRUVIndex }
export default MRUVIndex