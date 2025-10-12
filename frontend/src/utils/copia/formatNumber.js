/**
 * Formatea un número para su visualización, limitando la cantidad de decimales
 * en números de punto flotante para mejorar la legibilidad.
 * 
 * @param {number} num El número a formatear.
 * @returns {string} El número formateado como una cadena de texto.
 */
export function formatNumber(num) {
  // Si el número es muy cercano a cero, devuélvelo como '0' para evitar notación científica.
  if (Math.abs(num) < 1e-10) {
    return '0';
  }

  // Si el número no es un entero, formátalo a un máximo de 4 decimales significativos.
  // El uso de toPrecision ayuda a manejar tanto números muy grandes como muy pequeños.
  if (!Number.isInteger(num)) {
    // Usamos parseFloat(num.toPrecision(4)) para eliminar los ceros finales que toPrecision puede dejar.
    // Por ejemplo, 1.2300 se convierte en 1.23
    return String(parseFloat(num.toPrecision(4)));
  }

  // Si es un entero, devuélvelo como está.
  return String(num);
}
