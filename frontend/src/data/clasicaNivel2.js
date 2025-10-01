// Datos de los cards de nivel 2 para física clásica
import mecanicaIcon from '../assets/m_mecanica.png';
import termodinamicaIcon from '../assets/m_termodinamica.png';
import opticaIcon from '../assets/m_optica.png';
import electromagnetismoIcon from '../assets/m_electromagnetismo.png';
import acusticaIcon from '../assets/m_acustica.png';
import hidrostaticaIcon from '../assets/m_hidrostatica.png';

export const temasClasicaNivel2 = [
  {
    tipo: 'mecanica',
    titulo: 'Mecánica',
    descripcion: 'Movimiento y fuerzas.',
    icono: mecanicaIcon,
    btn: {
      texto: 'Explorar',
      clase: 'mecanica',
      link: '/clasica/mecanica'
    }
  },
  {
    tipo: 'termodinamica',
    titulo: 'Termodinámica',
    descripcion: 'Procesos de calor y energía.',
    icono: termodinamicaIcon,
    btn: {
      texto: 'Explorar',
      clase: 'termodinamica',
      link: '/clasica/termodinamica'
    }
  },
  {
    tipo: 'optica',
    titulo: 'Óptica',
    descripcion: 'Fenómenos de la luz.',
    icono: opticaIcon,
    btn: {
      texto: 'Explorar',
      clase: 'optica',
      link: '/clasica/optica'
    }
  },
  {
    tipo: 'electromagnetismo',
    titulo: 'Electromagnetismo',
    descripcion: 'Electricidad y magnetismo.',
    icono: electromagnetismoIcon,
    btn: {
      texto: 'Explorar',
      clase: 'electromagnetismo',
      link: '/clasica/electromagnetismo'
    }
  },
  {
    tipo: 'acustica',
    titulo: 'Acústica',
    descripcion: 'Propagación de energía y vibraciones.',
    icono: acusticaIcon,
    btn: {
      texto: 'Explorar',
      clase: 'acustica',
      link: '/clasica/acustica'
    }
  },
  {
    tipo: 'hidrostatica',
    titulo: 'Hidrostatica',
    descripcion: 'Comportamiento de líquidos y gases.',
    icono: hidrostaticaIcon,
    btn: {
      texto: 'Explorar',
      clase: 'hidrostatica',
      link: '/clasica/hidrostatica'
    }
  }
];
