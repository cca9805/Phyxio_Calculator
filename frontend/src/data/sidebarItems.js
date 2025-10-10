export const sidebarItems = [
  {
    label: 'Física',
    link: '/fisica',
    iconClass: 'bi-gem', // Main icon for Physics
    children: [
      {
        label: 'Física Clásica',
        link: '/clasica',
        iconClass: 'bi-book-half', // Icon for Classical Physics
        children: [
          {
            label: 'Mecánica',
            link: '/clasica/mecanica',
            iconClass: 'bi-gear-wide-connected', // Icon for Mechanics
            children: [
              {
                label: 'Cinemática',
                link: '/clasica/mecanica/cinematica',
                iconClass: 'bi-signpost-split', // Icon for Kinematics
                children: [
                  { label: 'MRU', link: '/clasica/mecanica/cinematica/mru', iconClass: 'bi-arrow-right' },
                  { label: 'MRUV', link: '/clasica/mecanica/cinematica/mruv', iconClass: 'bi-graph-up-arrow' },
                  { label: 'MCU', link: '/clasica/mecanica/cinematica/mcu', iconClass: 'bi-arrow-repeat' },
                  { label: 'MCUA', link: '/clasica/mecanica/cinematica/mcua', iconClass: 'bi-bootstrap-reboot' },
                  { label: 'MAS', link: '/clasica/mecanica/cinematica/mas', iconClass: 'bi-soundwave' },
                  { label: 'MP', link: '/clasica/mecanica/cinematica/mp', iconClass: 'bi-graph-up' },
                  { label: 'MR', link: '/clasica/mecanica/cinematica/mr', iconClass: 'bi-shuffle' }
                ]
              },
              {
                label: 'Dinámica',
                link: '/clasica/mecanica/dinamica',
                iconClass: 'bi-hammer', // Icon for Dynamics
                children: [
                    { label: 'Leyes de Newton', link: '/clasica/mecanica/dinamica/newton', iconClass: 'bi-lightning-charge' },
                    { label: 'Trabajo y Energía', link: '/clasica/mecanica/dinamica/trabajoenergia', iconClass: 'bi-battery-charging' },
                    { label: 'Impulso y Momento', link: '/clasica/mecanica/dinamica/movimpulso', iconClass: 'bi-wind' },
                    { label: 'Rotación y Torque', link: '/clasica/mecanica/dinamica/rotacion', iconClass: 'bi-arrow-clockwise' },
                    { label: 'Gravitación', link: '/clasica/mecanica/dinamica/gravitacion', iconClass: 'bi-globe' },
                    { label: 'Equilibrio Estático', link: '/clasica/mecanica/dinamica/equilibrio', iconClass: 'bi-pause-circle' },
                    { label: 'Fricción', link: '/clasica/mecanica/dinamica/friccion', iconClass: 'bi-grip-horizontal' },
                    { label: 'Oscilaciones y Resortes', link: '/clasica/mecanica/dinamica/oscilaciones', iconClass: 'bi-activity' },
                    { label: 'Sistemas de Masas y Poleas', link: '/clasica/mecanica/dinamica/masaspoleas', iconClass: 'bi-diagram-2' },
                    { label: 'Máquinas Simples', link: '/clasica/mecanica/dinamica/maquinas', iconClass: 'bi-wrench' }
                ]
              },
              {
                label: 'Estática',
                link: '/clasica/mecanica/estatica',
                iconClass: 'bi-building', // Icon for Statics
                children: [
                    { label: 'Fuerzas y Equilibrio', link: '/clasica/mecanica/estatica/fuerzas', iconClass: 'bi-arrows-angle-contract' },
                    { label: 'Torque y Momento de Fuerza', link: '/clasica/mecanica/estatica/torque', iconClass: 'bi-arrow-counterclockwise' },
                    { label: 'Centro de Masa y Gravedad', link: '/clasica/mecanica/estatica/centro', iconClass: 'bi-bullseye' },
                    { label: 'Leyes de los Cuerpos Rígidos', link: '/clasica/mecanica/estatica/leyes', iconClass: 'bi-bounding-box' },
                    { label: 'Apoyos y Reacciones', link: '/clasica/mecanica/estatica/apoyos', iconClass: 'bi-distribute-vertical' },
                    { label: 'Diagramas de Cuerpo Libre', link: '/clasica/mecanica/estatica/diagramas', iconClass: 'bi-front' },
                    { label: 'Fricción en Equilibrio', link: '/clasica/mecanica/estatica/friccionest', iconClass: 'bi-grip-vertical' },
                    { label: 'Estructuras y Armaduras', link: '/clasica/mecanica/estatica/estructuras', iconClass: 'bi-bricks' },
                    { label: 'Estabilidad y Condiciones de Equilibrio', link: '/clasica/mecanica/estatica/estabilidad', iconClass: 'bi-shield-check' },
                    { label: 'Aplicaciones en Ingeniería', link: '/clasica/mecanica/estatica/aplicaciones', iconClass: 'bi-tools' }
                ]
              },
            ]
          },
          {
            label: 'Termodinámica',
            link: '/clasica/termodinamica',
            iconClass: 'bi-thermometer-half', // Icon for Thermodynamics
            children: [
              { label: 'Temperatura y calor', link: '/clasica/termodinamica/temperatura-calor', iconClass: 'bi-thermometer' },
              { label: 'Leyes', link: '/clasica/termodinamica/leyes', iconClass: 'bi-journal-bookmark' },
              { label: 'Máquinas térmicas', link: '/clasica/termodinamica/maquinas', iconClass: 'bi-steam' }
            ]
          },
          {
            label: 'Electromagnetismo',
            link: '/clasica/electromagnetismo',
            iconClass: 'bi-magnet', // Icon for Electromagnetism
            children: [
              {
                label: 'Electricidad',
                link: '/clasica/electromagnetismo/electricidad',
                iconClass: 'bi-plug',
                children: [
                  { label: 'Corriente eléctrica', link: '/clasica/electromagnetismo/electricidad/corriente', iconClass: 'bi-lightbulb' },
                  { label: 'Circuitos eléctricos', link: '/clasica/electromagnetismo/electricidad/circuitos', iconClass: 'bi-battery-full' },
                  { label: 'Ley de Ohm', link: '/clasica/electromagnetismo/electricidad/ohm', iconClass: 'bi-rulers' }
                ]
              },
              {
                label: 'Magnetismo',
                link: '/clasica/electromagnetismo/magnetismo',
                iconClass: 'bi-magnet-fill',
                children: [
                  { label: 'Campos magnéticos', link: '/clasica/electromagnetismo/magnetismo/campos', iconClass: 'bi-globe-americas' },
                  { label: 'Inducción', link: '/clasica/electromagnetismo/magnetismo/induccion', iconClass: 'bi-arrow-left-right' }
                ]
              },
              { label: 'Leyes de Maxwell', link: '/clasica/electromagnetismo/maxwell', iconClass: 'bi-file-earmark-text' }
            ]
          },
          {
            label: 'Acústica',
            link: '/clasica/acustica',
            iconClass: 'bi-ear', // Icon for Acoustics
            children: [
              { label: 'Ondas mecánicas', link: '/clasica/acustica/ondas', iconClass: 'bi-broadcast' },
              { label: 'Propiedades del sonido', link: '/clasica/acustica/sonido', iconClass: 'bi-volume-up' },
              { label: 'Resonancia y armónicos', link: '/clasica/acustica/resonancia', iconClass: 'bi-music-note-beamed' }
            ]
          },
          {
            label: 'Óptica',
            link: '/clasica/optica',
            iconClass: 'bi-eye', // Icon for Optics
            children: [
              { label: 'Óptica geométrica', link: '/clasica/optica/geometrica', iconClass: 'bi-aspect-ratio' },
              { label: 'Óptica ondulatoria', link: '/clasica/optica/ondulatoria', iconClass: 'bi-rainbow' }
            ]
          },
          {
            label: 'Fluidos',
            link: '/clasica/fluidos',
            iconClass: 'bi-water', // Icon for Fluids
            children: [
              { label: 'Presión y empuje', link: '/clasica/fluidos/presion-empuje', iconClass: 'bi-droplet' },
              { label: 'Equilibrio y movimiento', link: '/clasica/fluidos/equilibrio-movimiento', iconClass: 'bi-tsunami' }
            ]
          }
        ]
      },
      {
        label: 'Física Moderna',
        link: '/moderna',
        iconClass: 'bi-rocket-launch' // Icon for Modern Physics
      }
    ]
  }
];