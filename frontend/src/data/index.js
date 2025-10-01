// Archivo central para importar y exportar datos de temas
export { temasFisica } from './fisicaDatos';
import MRUData from './cinematica/MRUData';
import MRUVData from './cinematica/MRUVData'; // Importa tu nuevo subtopic aquí

const pages = {
  cinematica: {
    mru: MRUData,
    mruv: MRUVData,
  }
};

export default pages;
export { MRUData };
