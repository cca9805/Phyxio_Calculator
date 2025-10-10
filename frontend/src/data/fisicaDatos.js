// Datos de los cards de física clásica y moderna
import m_clasica from '../assets/m_clasica.png';
import m_moderna from '../assets/m_moderna.png';

export const temasFisica = [
  {
    tipo: 'clasica',
    titulo: 'Física Clásica',
    descripcion: 'Mecánica, Termodinámica, Óptica, Electromagnetismo...',
    icono: m_clasica,
    btn: {
      texto: 'Explorar',
      clase: 'clasica',
      link: '/clasica'
    }
  },
  {
    tipo: 'moderna',
    titulo: 'Física Moderna',
    descripcion: 'Relatividad, Cuántica, Física de partículas...',
    icono: m_moderna,
    btn: {
      texto: 'Explorar',
      clase: 'moderna',
      link: '/moderna'
    }
  }
];
