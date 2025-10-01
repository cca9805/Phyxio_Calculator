// Estructura global del sidebar para todas las páginas
import { temasCinematicaNivel2 } from './cinematicaNivel2';
import { temasDinamicaNivel2 } from './dinamicaNivel2';

// Map tema tipo -> emoji (unique emojis per topic)
const emojiMap = {
  mru: '🚗',       // MRU - straight motion
  mruv: '🏎️',      // MRUV - accelerated motion
  mcu: '🌀',       // MCU - circular
  mcua: '🔁',      // MCUA - accelerated circular
  mas: '🎶',       // MAS - oscillation
  mp: '🪁',        // MP - projectile/parabolic
  mr: '🔀'         // MR - relative motion
};

// Dinámica: subtema -> emoji
const dinamicaEmojiMap = {
  newton: '⚡',           // Leyes de Newton
  equilibrio: '🧘',       // Equilibrio
  trabajoenergia: '🔋',   // Trabajo y energía
  movimpulso: '💥',       // Movimiento e impulso
  rotacion: '🔄',         // Rotación
  gravitacion: '🌍',      // Gravitación
  friccion: '🧽',         // Fricción
  oscilaciones: '🎵',     // Oscilaciones
  maquinas: '🛠️',        // Máquinas simples
  masas_poleas: '🪤'      // Masas y poleas
};

const cinematicaChildren = Array.isArray(temasCinematicaNivel2)
  ? temasCinematicaNivel2.map(t => ({ label: t.titulo, link: t.btn.link, palette: t.palette, icon: emojiMap[t.tipo] || '🔹' }))
  : [];

const dinamicaChildren = Array.isArray(temasDinamicaNivel2)
  ? temasDinamicaNivel2.map(t => ({
      label: t.titulo,
      link: t.btn.link,
      palette: t.palette,
      icon: dinamicaEmojiMap[t.tipo] || '🔹'
    }))
  : [];

export const sidebarItems = [
  {
    label: 'Física',
    link: '/fisica',
    icon: '🧪',
    children: [
      {
        label: 'Física Clásica',
        link: '/clasica',
        icon: '📚',
        children: [
          {
            label: 'Mecánica',
            link: '/clasica/mecanica',
            icon: '⚙️',
            children: [
              { label: 'Cinemática', link: '/clasica/mecanica/cinematica', icon: '🧭', children: cinematicaChildren },
              { label: 'Dinámica', link: '/clasica/mecanica/dinamica', icon: '🏋️‍♂️', children: dinamicaChildren },
              { label: 'Estática', link: '/clasica/mecanica/estatica', icon: '🛡️' }
            ]
          },
          {
            label: 'Termodinámica',
            link: '/clasica/termodinamica',
            icon: '🔥',
            children: [
              { label: 'Temperatura y calor', link: '/clasica/termodinamica/temperatura-calor', icon: '🌡️' },
              { label: 'Leyes de la termodinámica', link: '/clasica/termodinamica/leyes', icon: '📜' },
              { label: 'Máquinas térmicas y eficiencia', link: '/clasica/termodinamica/maquinas', icon: '🔧' }
            ]
          },
          {
            label: 'Electromagnetismo',
            link: '/clasica/electromagnetismo',
            icon: '⚡',
            children: [
              {
                label: 'Electricidad',
                link: '/clasica/electromagnetismo/electricidad',
                icon: '🔌',
                children: [
                  { label: 'Corriente eléctrica', link: '/clasica/electromagnetismo/electricidad/corriente', icon: '💡' },
                  { label: 'Circuitos eléctricos', link: '/clasica/electromagnetismo/electricidad/circuitos', icon: '🔋' },
                  { label: 'Ley de Ohm', link: '/clasica/electromagnetismo/electricidad/ohm', icon: '📐' }
                ]
              },
              {
                label: 'Magnetismo',
                link: '/clasica/electromagnetismo/magnetismo',
                icon: '🧲',
                children: [
                  { label: 'Campos magnéticos', link: '/clasica/electromagnetismo/magnetismo/campos', icon: '🌐' },
                  { label: 'Inducción electromagnética', link: '/clasica/electromagnetismo/magnetismo/induccion', icon: '🔃' }
                ]
              },
              { label: 'Leyes de Maxwell (universitario)', link: '/clasica/electromagnetismo/maxwell', icon: '🧾' }
            ]
          },
          {
            label: 'Acústica',
            link: '/clasica/acustica',
            icon: '🔊',
            children: [
              { label: 'Ondas mecánicas', link: '/clasica/acustica/ondas', icon: '📣' },
              { label: 'Propiedades del sonido', link: '/clasica/acustica/sonido', icon: '🔈' },
              { label: 'Resonancia y armónicos', link: '/clasica/acustica/resonancia', icon: '🎵' }
            ]
          },
          {
            label: 'Óptica',
            link: '/clasica/optica',
            icon: '🔍',
            children: [
              { label: 'Óptica geométrica', link: '/clasica/optica/geometrica', icon: '🔭' },
              { label: 'Óptica ondulatoria', link: '/clasica/optica/ondulatoria', icon: '🌈' }
            ]
          },
          {
            label: 'Hidrostática / Fluidos',
            link: '/clasica/fluidos',
            icon: '🌊',
            children: [
              { label: 'Presión, empuje', link: '/clasica/fluidos/presion-empuje', icon: '🫧' },
              { label: 'Fluidos en equilibrio y movimiento', link: '/clasica/fluidos/equilibrio-movimiento', icon: '🌪️' }
            ]
          }
        ]
      },
      {
        label: 'Física Moderna',
        link: '/moderna',
        icon: '🎓'
      }
    ]
  }
];
