// Datos de los cards de nivel 2 para Mecánica
import cinematicaIcon from '../assets/m_cinematica.png';
import dinamicaIcon from '../assets/m_dinamica.png';
import estaticaIcon from '../assets/m_estatica.png';

export const temasMecanicaNivel2 = [
  {
    tipo: 'cinematica',
    titulo: 'Cinemática',
    descripcion: 'Estudia el movimiento sin considerar sus causas.',
    icono: cinematicaIcon,
    btn: {
      texto: 'Explorar',
      clase: 'cinematica',
      link: '/clasica/mecanica/cinematica'
    }
  },
  {
    tipo: 'dinamica',
    titulo: 'Dinámica',
    descripcion: 'Analiza las causas del movimiento: fuerzas y leyes.',
    icono: dinamicaIcon,
    btn: {
      texto: 'Explorar',
      clase: 'dinamica',
      link: '/clasica/mecanica/dinamica'
    }
  },
  {
    tipo: 'estatica',
    titulo: 'Estática',
    descripcion: 'Estudia los cuerpos en equilibrio y las fuerzas que actúan sobre ellos.',
    icono: estaticaIcon,
    btn: {
      texto: 'Explorar',
      clase: 'estatica',
      link: '/clasica/mecanica/estatica'
    }
  }
];
