// Datos de los cards de nivel 2 para Cinemática
import mruIcon from '../assets/mru.png';
import mruvIcon from '../assets/mruv.png';
import mcuIcon from '../assets/mcu.png';
import mcuaIcon from '../assets/mcua.png';
import masIcon from '../assets/mas.png';
import mpIcon from '../assets/mp.png';
import mrIcon from '../assets/mr.png';


export const temasCinematicaNivel2 = [
  {
    tipo: 'mru',
    titulo: 'MRU',
    descripcion: 'Movimiento Rectilíneo Uniforme: velocidad constante en línea recta.',
    icono: mruIcon,
    palette: 'wine',
    btn: {
      texto: 'Explorar',
      clase: 'mru',
      link: '/clasica/mecanica/cinematica/mru'
    }
  },
  {
    tipo: 'mruv',
    titulo: 'MRUV',
    descripcion: 'Movimiento Rectilíneo Uniformemente Variado: aceleración constante.',
    icono: mruvIcon,
    palette: 'azure',
    btn: {
      texto: 'Explorar',
      clase: 'mruv',
      link: '/clasica/mecanica/cinematica/mruv'
    }
  },
  {
    tipo: 'mcu',
    titulo: 'MCU',
    descripcion: 'Movimiento Circular Uniforme: velocidad angular constante.',
    icono: mcuIcon,
  palette: 'chartreuse',
    btn: {
      texto: 'Explorar',
      clase: 'mcu',
      link: '/clasica/mecanica/cinematica/mcu'
    }
  },
  {
    tipo: 'mcua',
    titulo: 'MCUA',
    descripcion: 'Movimiento Circular Uniformemente Acelerado: aceleración angular constante.',
    icono: mcuaIcon,
  palette: 'coral',
    btn: {
      texto: 'Explorar',
      clase: 'mcua',
      link: '/clasica/mecanica/cinematica/mcua'
    }
  },
  {
    tipo: 'mas',
    titulo: 'MAS',
    descripcion: 'Movimiento Armónico Simple: oscilaciones periódicas.',
    icono: masIcon,
  palette: 'rose',
    btn: {
      texto: 'Explorar',
      clase: 'mas',
      link: '/clasica/mecanica/cinematica/mas'
    }
  },
  {
    tipo: 'mp',
    titulo: 'MP',
    descripcion: 'Movimiento Parabólico: trayectoria curva bajo gravedad.',
    icono: mpIcon,
  palette: 'mint',
    btn: {
      texto: 'Explorar',
      clase: 'mp',
      link: '/clasica/mecanica/cinematica/mp'
    }
  },
  {
    tipo: 'mr',
    titulo: 'MR',
    descripcion: 'Movimiento Relativo: análisis desde diferentes sistemas de referencia.',
    icono: mrIcon,
  palette: 'green',
    btn: {
      texto: 'Explorar',
      clase: 'mr',
      link: '/clasica/mecanica/cinematica/mr'
    }
  }
];