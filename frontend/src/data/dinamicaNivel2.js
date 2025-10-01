import newtonIcon from '../assets/leyes_newton.png';
import energiaIcon from '../assets/trabajoEnergia.png';
import movimientoIcon from '../assets/movimiento.png';
import rotacionIcon from '../assets/rotacion.png';
import gravedadIcon from '../assets/gravitacion.png';
import equilibrioIcon from '../assets/equilibrio.png';
import friccionIcon from '../assets/friccion.png';
import masasIcon from '../assets/masas_poleas.png';
import maquinasIcon from '../assets/maquinas.png';
import oscilacionesIcon from '../assets/oscilaciones.png';


export const temasDinamicaNivel2 = [
  {
    tipo: 'newton',
    titulo: 'Leyes de Newton',
    descripcion: 'Primera, Segunda y Tercera ley, masa, fuerza resultante y aplicaciones.',
    icono: newtonIcon,
    palette: 'orange',
    btn: { texto: 'Explorar', clase: 'newton', link: '/dinamica/newton' },
  },
  {
    tipo: 'trab-energia',
    titulo: 'Trabajo y Energía',
    descripcion: 'Trabajo, energía cinética, potencial y conservación.',
    icono: energiaIcon,
    palette: 'fuchsia',
    btn: { texto: 'Explorar', clase: 'trab-energia', link: '/dinamica/trabajoenergia' }
  },
  {
    tipo: 'movimpulso',
    titulo: 'Impulso y Momento',
    descripcion: 'Impulso, cantidad de movimiento y choques.',
    icono: movimientoIcon,
    palette: 'sand',
    btn: { texto: 'Explorar', clase: 'movimpulso', link: '/dinamica/movimpulso' },
  },
  {
    tipo: 'rotacion',
    titulo: 'Rotación y Torque',
    descripcion: 'Momento de fuerza, equilibrio rotacional e inercia.',
    icono: rotacionIcon,
    palette: 'sapphire',
    btn: { texto: 'Explorar', clase: 'rotacion', link: '/dinamica/rotacion' },
  },
  {
    tipo: 'gravitacion',
    titulo: 'Gravitación',
    descripcion: 'Ley de gravitación universal y campos gravitatorios.',
    icono: gravedadIcon,
    palette: 'navy',
    btn: { texto: 'Explorar', clase: 'gravitacion', link: '/dinamica/gravitacion' },
  },
  {
    tipo: 'equilibrio',
    titulo: 'Equilibrio Estático',
    descripcion: 'Condiciones de equilibrio traslacional y rotacional.',
    icono: equilibrioIcon,
    palette: 'violet',
    btn: { texto: 'Explorar', clase: 'equilibrio', link: '/dinamica/equilibrio' },
  },
  {
    tipo: 'friccion',
    titulo: 'Fricción',
    descripcion: 'Fuerza de fricción estática y cinética, aplicaciones en movimiento y equilibrio.',
    icono: friccionIcon,
    palette: 'crimson',
    btn: { texto: 'Explorar', clase: 'friccion', link: '/dinamica/friccion' },
  },  
  {
    tipo: 'oscilaciones',
    titulo: 'Oscilaciones y Resortes',
    descripcion: 'Ley de Hooke, movimiento armónico simple y energía en osciladores.',
    icono: oscilacionesIcon, // necesitarías un ícono nuevo
    palette: 'emerald',
    btn: { texto: 'Explorar', clase: 'oscilaciones', link: '/dinamica/oscilaciones' }
  },
  {
    tipo: 'masas-poleas',
    titulo: 'Sistemas de Masas y Poleas',
    descripcion: 'Análisis de sistemas con múltiples masas y poleas ideales.',
    icono: masasIcon,
    palette: 'teal',
    btn: { texto: 'Explorar', clase: 'masas-poleas', link: '/dinamica/masaspoleas' },
  },
  {
    tipo: 'maquinas',
    titulo: 'Máquinas Simples',
    descripcion: 'Palancas, planos inclinados, poleas y eficiencia mecánica.',
    icono: maquinasIcon, // necesitarías un ícono nuevo
    palette: 'amber',
    btn: { texto: 'Explorar', clase: 'maquinas', link: '/dinamica/maquinas' }
  },
];