import cuerposIcon from '../assets/cuerpos_rigidos.png';
import fuerzasIcon from '../assets/fuerzas_equilibrio.png';
import torqueIcon from '../assets/torque_momentum.png';
import centroIcon from '../assets/centro_masa.png';
import apoyosIcon from '../assets/apoyos_reacciones.png';
import friccionIcon from '../assets/friccion.png';
import diagramasIcon from '../assets/diagramas.png';
import estructurasIcon from '../assets/estructuras.png';
import estabilidadIcon from '../assets/estabilidad.png';
import aplicacionesIcon from '../assets/aplicaciones.png';



export const temasEstaticaNivel2 = [
  {
    tipo: 'fuerzas',
    titulo: 'Fuerzas y Equilibrio',
    descripcion: 'Condiciones de equilibrio de fuerzas en sistemas en reposo.',
    btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/fuerzas', clase: 'fuerzas-btn' },
    palette: 'cobalt',
    icono: fuerzasIcon,
  },
  {
    tipo: 'torque',
    titulo: 'Torque y Momento de Fuerza',
    descripcion: 'Análisis de torques y momentos en cuerpos rígidos.',
    btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/torque', clase: 'torque-btn' },
    palette: 'red',
    icono: torqueIcon,
  },
  {
    tipo: 'centro',
    titulo: 'Centro de Masa y Gravedad',
    descripcion: 'Ubicación y cálculo del centro de masa y gravedad.',
    btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/centro', clase: 'centro-btn' },
    palette: 'lima',
    icono: centroIcon,
  },
  {
    tipo: 'leyes',
    titulo: 'Leyes de los Cuerpos Rígidos',
    descripcion: 'Propiedades y leyes de los cuerpos rígidos en equilibrio.',
    btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/leyes', clase: 'leyes-btn' },
    palette: 'maroon',
    icono: cuerposIcon,
  },
  {
    tipo: 'apoyos',
    titulo: 'Apoyos y Reacciones',
    descripcion: 'Tipos de apoyos y fuerzas de reacción en estructuras.',
    btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/apoyos', clase: 'apoyos-btn' },
    palette: 'plum',
    icono: apoyosIcon,
  },
  {
    tipo: 'diagramas',
    titulo: 'Diagramas de Cuerpo Libre',
    descripcion: 'Representación gráfica de fuerzas en sistemas en equilibrio.',
    btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/diagramas', clase: 'diagramas-btn' },
    palette: 'royal',
    icono: diagramasIcon,
  },
  {
    tipo: 'friccionest',
    titulo: 'Fricción en Equilibrio',
    descripcion: 'Análisis de la fricción en sistemas estáticos.',
    btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/friccionest', clase: 'friccionest-btn' },
    palette: 'magenta',
    icono: friccionIcon,
  },
  {
    tipo: 'estructuras',
    titulo: 'Estructuras y Armaduras',
    descripcion: 'Estudio de vigas, puentes y armaduras en equilibrio.',
    btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/estructuras', clase: 'estructuras-btn' },
    palette: 'indigo',
    icono: estructurasIcon,
  },
  {
    tipo: 'estabilidad',
    titulo: 'Estabilidad y Condiciones de Equilibrio',
    descripcion: 'Criterios de estabilidad y equilibrio en sistemas físicos.',
    btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/estabilidad', clase: 'estabilidad-btn' },
    palette: 'jade',
    icono: estabilidadIcon,
  },
  {
    tipo: 'aplicaciones',
    titulo: 'Aplicaciones en Ingeniería y Arquitectura',
    descripcion: 'Ejemplos prácticos de estática en ingeniería y arquitectura.',
    btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/aplicaciones', clase: 'aplicaciones-btn' },
    palette: 'bronze',
    icono: aplicacionesIcon,
  }
];