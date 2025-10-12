// Iconos de temas de Física Clásica
import mecanicaIcon from '../assets/m_mecanica.png';
import termodinamicaIcon from '../assets/m_termodinamica.png';
import electromagnetismoIcon from '../assets/m_electromagnetismo.png';
import opticaIcon from '../assets/m_optica.png';
import acusticaIcon from '../assets/m_acustica.png';
import hidrostaticaIcon from '../assets/m_hidrostatica.png';

// Iconos de Mecánica
import cinematicaIcon from '../assets/m_cinematica.png';
import dinamicaIcon from '../assets/m_dinamica.png';
import estaticaIcon from '../assets/m_estatica.png';

// Iconos de Cinemática
import mruIcon from '../assets/mru.png';
import mruvIcon from '../assets/mruv.png';
import mcuIcon from '../assets/mcu.png';
import mcuaIcon from '../assets/mcua.png';
import masIcon from '../assets/mas.png';
import mpIcon from '../assets/mp.png';
import mrIcon from '../assets/mr.png';

// Iconos de Dinámica
import newtonIcon from '../assets/leyes_newton.png';
import energiaIcon from '../assets/trabajoEnergia.png';
import movimientoIcon from '../assets/movimiento.png';
import movcircularIcon from '../assets/movcircular.png';
import rotacionIcon from '../assets/rotacion.png';
import gravedadIcon from '../assets/gravitacion.png';
import equilibrioIcon from '../assets/equilibrio.png';
import friccionIcon from '../assets/friccion.png';
import masasIcon from '../assets/masas_poleas.png';
import maquinasIcon from '../assets/maquinas.png';
import oscilacionesIcon from '../assets/oscilaciones.png';

// Iconos de Estática
import aplicacionesIcon from '../assets/aplicaciones.png';
import apoyosIcon from '../assets/apoyos_reacciones.png';
import centroIcon from '../assets/centro_masa.png';
import diagramasIcon from '../assets/diagramas.png';
import estabilidadIcon from '../assets/estabilidad.png';
import estructurasIcon from '../assets/estructuras.png';
import friccionestIcon from '../assets/friccionest.png'
import momentosIcon from '../assets/momentos.png';
import vectoresIcon from '../assets/vectores.png';

// Iconos de EletroMagnetismo
import electricidadIcon from '../assets/electricidad.png';
import magnetismoIcon from '../assets/magnetismo.png';
import maxwellIcon from '../assets/maxwell.png';
import ondaselectromagneticasIcon from '../assets/ondas-electromagneticas.png';

// Iconos de Eletricidad
import camposelectricosIcon from '../assets/camposelectricos.png';
import cargafuerzaIcon from '../assets/cargaelectrica.png';
import circuitosIcon from '../assets/circuitos.png';
import corrienteIcon from '../assets/corriente.png';
import potencialenergiacapacidadIcon from '../assets/potencialelectrico.png';

// Iconos de Magnetismo
import camposIcon from '../assets/campos.png';
import fuentescampoIcon from '../assets/fuentescampo.png';
import induccionIcon from '../assets/induccion.png';




export const topicsData = {
  clasica: {
    title: '¿Qué es la Física Clásica?',
    intro: 'La Física Clásica es la rama de la física que estudia los fenómenos naturales a escalas humanas, es decir, aquellos que ocurren a velocidades mucho menores que la de la luz y en cuerpos de gran tamaño comparados con átomos. Se ocupa de explicar el movimiento, las fuerzas, la energía y el equilibrio de los cuerpos, basándose en leyes formuladas entre los siglos XVII y XIX por científicos como Isaac Newton, Galileo Galilei y James Clerk Maxwell.',
    cards: [
      { tipo: 'mecanica', titulo: 'Mecánica', descripcion: 'Movimiento y fuerzas.', icono: mecanicaIcon, btn: { texto: 'Explorar', clase: 'mecanica', link: '/clasica/mecanica' } },
      { tipo: 'termodinamica', titulo: 'Termodinámica', descripcion: 'Procesos de calor y energía.', icono: termodinamicaIcon, btn: { texto: 'Explorar', clase: 'termodinamica', link: '/clasica/termodinamica' } },
      { tipo: 'optica', titulo: 'Óptica', descripcion: 'Fenómenos de la luz.', icono: opticaIcon, btn: { texto: 'Explorar', clase: 'optica', link: '/clasica/optica' } },
      { tipo: 'electromagnetismo', titulo: 'Electromagnetismo', descripcion: 'Electricidad y magnetismo.', icono: electromagnetismoIcon, btn: { texto: 'Explorar', clase: 'electromagnetismo', link: '/clasica/electromagnetismo' } },
      { tipo: 'acustica', titulo: 'Acústica', descripcion: 'Propagación de energía y vibraciones.', icono: acusticaIcon, btn: { texto: 'Explorar', clase: 'acustica', link: '/clasica/acustica' } },
      { tipo: 'hidrostatica', titulo: 'Hidrostática', descripcion: 'Comportamiento de líquidos y gases.', icono: hidrostaticaIcon, btn: { texto: 'Explorar', clase: 'hidrostatica', link: '/clasica/hidrostatica' } }
    ]
  },
  mecanica: {
    title: '¿Qué es la Mecánica? ¿Cuáles son las ramas principales?',
    intro: 'La física mecánica es la rama de la física que estudia el movimiento de los cuerpos y las fuerzas que lo producen o lo modifican. Analiza cómo los objetos se desplazan, cómo reaccionan ante fuerzas externas y cómo se comportan en equilibrio o movimiento. Es una de las áreas más antiguas de la física y la base sobre la que se construyen muchas otras disciplinas científicas.',
    cards: [
      { tipo: 'cinematica', titulo: 'Cinemática', descripcion: 'Estudia el movimiento sin considerar sus causas.', icono: cinematicaIcon, btn: { texto: 'Explorar', clase: 'cinematica', link: '/clasica/mecanica/cinematica' } },
      { tipo: 'dinamica', titulo: 'Dinámica', descripcion: 'Analiza las causas del movimiento: fuerzas y leyes.', icono: dinamicaIcon, btn: { texto: 'Explorar', clase: 'dinamica', link: '/clasica/mecanica/dinamica' } },
      { tipo: 'estatica', titulo: 'Estática', descripcion: 'Estudia los cuerpos en equilibrio y las fuerzas que actúan sobre ellos.', icono: estaticaIcon, btn: { texto: 'Explorar', clase: 'estatica', link: '/clasica/mecanica/estatica' } }
    ],
    additionalContent: `
        <h3>Comparativa rápida</h3>
        <ul>
          <li><b>Cinemática:</b> Describe el movimiento sin analizar sus causas.</li>
          <li><b>Dinámica:</b> Explica el movimiento considerando las fuerzas que lo producen.</li>
          <li><b>Estática:</b> Estudia el equilibrio de los cuerpos y las fuerzas en reposo.</li>
        </ul>
    `
  },
  cinematica: {
    title: 'Cinemática',
    intro: 'Estudia los movimientos sin considerar las causas que los producen.',
    cards: [
      { tipo: 'mru', titulo: 'MRU', descripcion: 'Movimiento Rectilíneo Uniforme: velocidad constante en línea recta.', icono: mruIcon, palette: 'wine', btn: { texto: 'Explorar', clase: 'mru', link: '/clasica/mecanica/cinematica/mru' } },
      { tipo: 'mruv', titulo: 'MRUV', descripcion: 'Movimiento Rectilíneo Uniformemente Variado: aceleración constante.', icono: mruvIcon, palette: 'azure', btn: { texto: 'Explorar', clase: 'mruv', link: '/clasica/mecanica/cinematica/mruv' } },
      { tipo: 'mcu', titulo: 'MCU', descripcion: 'Movimiento Circular Uniforme: velocidad angular constante.', icono: mcuIcon, palette: 'chartreuse', btn: { texto: 'Explorar', clase: 'mcu', link: '/clasica/mecanica/cinematica/mcu' } },
      { tipo: 'mcua', titulo: 'MCUA', descripcion: 'Movimiento Circular Uniformemente Acelerado: aceleración angular constante.', icono: mcuaIcon, palette: 'coral', btn: { texto: 'Explorar', clase: 'mcua', link: '/clasica/mecanica/cinematica/mcua' } },
      { tipo: 'mas', titulo: 'MAS', descripcion: 'Movimiento Armónico Simple: oscilaciones periódicas.', icono: masIcon, palette: 'rose', btn: { texto: 'Explorar', clase: 'mas', link: '/clasica/mecanica/cinematica/mas' } },
      { tipo: 'mp', titulo: 'MP', descripcion: 'Movimiento Parabólico: trayectoria curva bajo gravedad.', icono: mpIcon, palette: 'mint', btn: { texto: 'Explorar', clase: 'mp', link: '/clasica/mecanica/cinematica/mp' } },
      { tipo: 'mr', titulo: 'MR', descripcion: 'Movimiento Relativo: análisis desde diferentes sistemas de referencia.', icono: mrIcon, palette: 'green', btn: { texto: 'Explorar', clase: 'mr', link: '/clasica/mecanica/cinematica/mr' } }
    ],
    additionalContent: `
      <strong>Comparativa:</strong><br />
      MRU: velocidad constante.<br />
      MRUV: aceleración constante.<br />
      MCU: trayectoria circular, velocidad angular constante.<br />
      MCUA: trayectoria circular, aceleración angular constante.<br />
      MAS: oscilaciones periódicas.<br />
      MP: trayectoria parabólica bajo gravedad.<br />
      MR: movimiento relativo entre sistemas de referencia.
    `
  },
  dinamica: {
    title: 'Dinámica',
    intro: 'Estudia la dinámica de los cuerpos en movimiento.',
    cards: [
      { tipo: 'newton', titulo: 'Leyes de Newton', descripcion: 'Primera, Segunda y Tercera ley, masa, fuerza resultante y aplicaciones.', icono: newtonIcon, palette: 'orange', btn: { texto: 'Explorar', clase: 'newton', link: '/clasica/mecanica/dinamica/newton' } },
      { tipo: 'trabajoenergia', titulo: 'Trabajo y Energía', descripcion: 'Trabajo, energía cinética, potencial y conservación.', icono: energiaIcon, palette: 'fuchsia', btn: { texto: 'Explorar', clase: 'trab-energia', link: '/clasica/mecanica/dinamica/trabajoenergia' } },
      { tipo: 'movimpulso', titulo: 'Impulso y Momento', descripcion: 'Impulso, cantidad de movimiento y choques.', icono: movimientoIcon, palette: 'sand', btn: { texto: 'Explorar', clase: 'movimpulso', link: '/clasica/mecanica/dinamica/movimpulso' } },
      { tipo: 'movcircular', titulo: 'Movimiento Circular', descripcion: 'Movimiento circular', icono: movcircularIcon, palette: 'lime', btn: { texto: 'Explorar', clase: 'movcircular', link: '/clasica/mecanica/dinamica/movcircular' } },
      { tipo: 'rotacion', titulo: 'Rotación y Torque', descripcion: 'Momento de fuerza, equilibrio rotacional e inercia.', icono: rotacionIcon, palette: 'sapphire', btn: { texto: 'Explorar', clase: 'rotacion', link: '/clasica/mecanica/dinamica/rotacion' } },
      { tipo: 'gravitacion', titulo: 'Gravitación', descripcion: 'Ley de gravitación universal y campos gravitatorios.', icono: gravedadIcon, palette: 'navy', btn: { texto: 'Explorar', clase: 'gravitacion', link: '/clasica/mecanica/dinamica/gravitacion' } },
      { tipo: 'equilibrio', titulo: 'Equilibrio Estático', descripcion: 'Condiciones de equilibrio traslacional y rotacional.', icono: equilibrioIcon, palette: 'violet', btn: { texto: 'Explorar', clase: 'equilibrio', link: '/clasica/mecanica/dinamica/equilibrio' } },
      { tipo: 'friccion', titulo: 'Fricción', descripcion: 'Fuerza de fricción estática y cinética, aplicaciones en movimiento y equilibrio.', icono: friccionIcon, palette: 'crimson', btn: { texto: 'Explorar', clase: 'friccion', link: '/clasica/mecanica/dinamica/friccion' } },
      { tipo: 'oscilaciones', titulo: 'Oscilaciones y Resortes', descripcion: 'Ley de Hooke, movimiento armónico simple y energía en osciladores.', icono: oscilacionesIcon, palette: 'emerald', btn: { texto: 'Explorar', clase: 'oscilaciones', link: '/clasica/mecanica/dinamica/oscilaciones' } },
      { tipo: 'masaspoleas', titulo: 'Sistemas de Masas y Poleas', descripcion: 'Análisis de sistemas con múltiples masas y poleas ideales.', icono: masasIcon, palette: 'teal', btn: { texto: 'Explorar', clase: 'masas-poleas', link: '/clasica/mecanica/dinamica/masaspoleas' } },
      { tipo: 'maquinas', titulo: 'Máquinas Simples', descripcion: 'Palancas, planos inclinados, poleas y eficiencia mecánica.', icono: maquinasIcon, palette: 'amber', btn: { texto: 'Explorar', clase: 'maquinas', link: '/clasica/mecanica/dinamica/maquinas' } }
    ],
    additionalContent: `
        <strong>Resumen rápido:</strong><br />
        Fuerza: interacción que cambia el estado de movimiento.<br />
        2ª Ley: F = m·a (relación dinámica fundamental).<br />
        Trabajo: transfiere energía mediante fuerza y desplazamiento.<br />
        Energía mecánica: se conserva sin fuerzas no conservativas.<br />
        Impulso: cambio de momentum (J = Δp).<br />
        Movimiento circular: trayectoria circular.<br />
        Choques: elásticos vs inelásticos (conservación de p, a veces de energía).<br />
        Torque: causa rotación (τ = r × F).<br />
        Equilibrio: ΣF = 0 y Στ = 0.<br />
        Gravitación: atracción universal (F = G m₁ m₂ / r²).<br />
        Oscilaciones: Ley de Hooke y movimiento armónico simple (F = -kx).<br />
        Máquinas simples: palancas, planos inclinados y poleas (W = F·d).
    `
  },
  estatica: {
    title: 'Estática',
    intro: 'Es la rama de la mecánica que estudia los cuerpos en equilibrio, es decir, aquellos que no están en movimiento o que se mueven con velocidad constante.',
    cards: [
      { tipo: 'aplicaciones', titulo: 'Aplicaciones en Ingeniería y Arquitectura', descripcion: 'Ejemplos prácticos de estática en ingeniería y arquitectura.', btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/aplicaciones', clase: 'aplicaciones-btn' }, palette: 'bronze', icono: aplicacionesIcon },
      { tipo: 'apoyos', titulo: 'Apoyos y Reacciones', descripcion: 'Tipos de apoyos y fuerzas de reacción en estructuras.', btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/apoyos', clase: 'apoyos-btn' }, palette: 'plum', icono: apoyosIcon }, 
      { tipo: 'centro', titulo: 'Centro de Masa y Gravedad', descripcion: 'Ubicación y cálculo del centro de masa y gravedad.', btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/centro', clase: 'centro-btn' }, palette: 'lima', icono: centroIcon },
      { tipo: 'diagramas', titulo: 'Diagramas de Cuerpo Libre', descripcion: 'Representación gráfica de fuerzas en sistemas en equilibrio.', btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/diagramas', clase: 'diagramas-btn' }, palette: 'royal', icono: diagramasIcon },
      { tipo: 'estabilidad', titulo: 'Estabilidad y Condiciones de Equilibrio', descripcion: 'Criterios de estabilidad y equilibrio en sistemas físicos.', btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/estabilidad', clase: 'estabilidad-btn' }, palette: 'jade', icono: estabilidadIcon },
      { tipo: 'estructuras', titulo: 'Estructuras y Armaduras', descripcion: 'Estudio de vigas, puentes y armaduras en equilibrio.', btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/estructuras', clase: 'estructuras-btn' }, palette: 'indigo', icono: estructurasIcon },
      { tipo: 'friccionest', titulo: 'Fricción en Equilibrio', descripcion: 'Análisis de la fricción en sistemas estáticos.', btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/friccionest', clase: 'friccionest-btn' }, palette: 'magenta', icono: friccionestIcon },
      { tipo: 'momentos', titulo: 'Momentos y Torques', descripcion: 'Estudio de los momentos y torques en cuerpos rígidos.', btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/momentos', clase: 'momentos' }, palette: 'amber', icono: momentosIcon },
      { tipo: 'vectores', titulo: 'Vectores y Descomposición', descripcion: 'Conceptos de vectores, suma, resta y descomposición de fuerzas.', btn: { texto: 'Explorar', link: '/clasica/mecanica/estatica/vectores', clase: 'vectores-btn' }, palette: 'cobalt', icono: vectoresIcon },
    ],
    additionalContent: `
        <strong>Estudio de la estática:</strong><br />
        La estática analiza las condiciones para que los cuerpos permanezcan en equilibrio, tanto traslacional (ΣF = 0) como rotacional (Στ = 0).<br />
        Se aplica en el diseño de estructuras, puentes, edificios y máquinas, asegurando que no colapsen ni se deformen bajo cargas.<br />
        El centro de masa y el centro de gravedad son claves para la estabilidad.<br />
        Los diagramas de cuerpo libre ayudan a visualizar todas las fuerzas que actúan sobre un objeto.<br />
        La fricción puede ser esencial para mantener el equilibrio, como en rampas o apoyos.<br />
        <strong>Curiosidades:</strong><br />
        • Los antiguos egipcios usaron principios de estática para construir las pirámides.<br />
        • El equilibrio de fuerzas permite que enormes puentes colgantes se mantengan estables con cables muy delgados.<br />
        • En arquitectura, la forma de los arcos y bóvedas distribuye las fuerzas para soportar grandes pesos.<br />
        • El análisis de estructuras es fundamental en ingeniería civil, mecánica y aeroespacial.<br />
        • La estática explica por qué algunos objetos parecen "imposibles" pero son estables, como esculturas balanceadas.
    `
  },
  electromagnetismo: {
    title: 'Electromagnetismo',
    intro: 'Es la rama de la física que estudia cómo se relacionan los fenómenos eléctricos y magnéticos.',
    cards: [
      { tipo: 'electricidad', titulo: 'Electricidad', descripcion: 'Estudia la carga eléctrica, los campos eléctricos y los circuitos.', btn: { texto: 'Explorar', link: '/clasica/electromagnetismo/electricidad', clase: 'electricidad-btn' }, palette: 'green', icono: electricidadIcon },
      { tipo: 'magnetismo', titulo: 'Magnetismo', descripcion: 'Estudia los campos magnéticos y las fuerzas que producen.', btn: { texto: 'Explorar', link: '/clasica/electromagnetismo/magnetismo', clase: 'magnetismo-btn' }, palette: 'green', icono: magnetismoIcon },
      { tipo: 'maxwell', titulo: 'Ecuaciones de Maxwell', descripcion: 'Unifica la electricidad y el magnetismo en un solo conjunto de ecuaciones.', btn: { texto: 'Explorar', link: '/clasica/electromagnetismo/maxwell', clase: 'maxwell-btn' }, palette: 'green', icono: maxwellIcon },
      { tipo: 'ondas', titulo: 'Ondas Electromagnéticas', descripcion: 'Las ondas electromagnéticas son uno de los resultados más profundos y de mayor alcance de las Ecuaciones de Maxwell.', btn: { texto: 'Explorar', link: '/clasica/electromagnetismo/ondas', clase: 'ondas-btn' }, palette: 'green', icono: ondaselectromagneticasIcon },
    ],
    additionalContent: `
        <strong>Estudio del electromagnetismo:</strong><br />
        El electromagnetismo es una rama de la física que estudia las interacciones <br />
        entre los campos eléctricos y campos magnéticos, y cómo estas interacciones <br />
        afectan a las cargas eléctricas. Es una teoría unificada que explica <br />
        fenómenos como la electricidad, el magnetismo, la luz y las ondas electromagnéticas.<br />
        🧲 Fundamentos del electromagnetismo<br />
        - Cargas eléctricas generan campos eléctricos.<br />
        - Corrientes eléctricas (cargas en movimiento) generan campos magnéticos.<br />
        - Un campo magnético variable puede inducir un campo eléctrico (inducción electromagnética).<br />
        - Las ecuaciones de Maxwell describen matemáticamente estas relaciones.<br />
        <br />
        <strong>Curiosidades:</strong><br />
        - La luz es electromagnetismo puro<br />
        - La luz visible, los rayos X, las microondas y las ondas de radio son todas ondas electromagnéticas.<br />
        - ¡Ver es literalmente detectar campos eléctricos y magnéticos oscilando!<br />
        - El campo magnético de la Tierra protege la vida<br />
        - Gracias al electromagnetismo, el núcleo terrestre genera un campo magnético que desvía partículas solares peligrosas.<br />
        - Sin él, la atmósfera se habría evaporado como en Marte.<br />
        - La electricidad puede crear magnetismo… y viceversa<br />
        - Un cable con corriente genera un campo magnético.<br />
        - Y un imán en movimiento puede generar corriente en un cable. <br />
        - Este principio es la base de motores y generadores.<br />
        - Las ecuaciones de Maxwell predijeron la existencia de ondas electromagnéticas antes de que se descubrieran<br />
        - James Clerk Maxwell dedujo matemáticamente que los campos eléctricos y magnéticos podían propagarse como ondas… ¡antes de que se observara la luz como tal!<br />n        - La velocidad de la luz se calcula con constantes electromagnéticas<br />
        - La fórmula c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}- relaciona la velocidad de la luz con la permeabilidad magnética y la permitividad eléctrica del vacío.<br />
        - Tu cuerpo usa electromagnetismo<br />
        - El sistema nervioso transmite señales mediante impulsos eléctricos. Además, el corazón genera un campo eléctrico que puede medirse con un electrocardiograma.<br />
        - La inducción electromagnética permite cargar dispositivos sin cables<br />
        - Desde cepillos de dientes hasta móviles, la energía puede transferirse por campos magnéticos sin contacto físico.<br />
        - Los trenes de levitación magnética (maglev) flotan gracias al electromagnetismo<br />
        - Usan campos magnéticos para eliminar el rozamiento y alcanzar velocidades superiores a 500 km/h.<br />
    `
  },
  electricidad: {
    title: 'Electricidad',
    intro: 'La electricidad estudia los fenómenos producidos por la carga eléctrica, desde la fuerza entre cargas hasta el flujo de corriente en un circuito.',
    cards:  [ 
      { tipo: 'campos-electricos', titulo: 'Campos Eléctricos', descripcion: 'El concepto de campo eléctrico fue introducido para describir cómo una carga altera el espacio que la rodea.', btn: { texto: 'Explorar', link: '/clasica/electromagnetismo/electricidad/campos-electricos', clase: 'campos-electricos-btn' }, palette: 'maroon', icono: camposelectricosIcon },
      { tipo: 'carga-fuerza', titulo: 'Carga y Fuerza', descripcion: 'Propiedad intrínseca de la materia.', btn: { texto: 'Explorar', link: '/clasica/electromagnetismo/electricidad/carga-fuerza', clase: 'carga-fuerza-btn' }, palette: 'red', icono: cargafuerzaIcon }, 
      { tipo: 'circuitos-cc', titulo: 'Circuitos Eléctricos', descripcion: 'Sistemas cerrados por donde circula la corriente eléctrica.', btn: { texto: 'Explorar', link: '/clasica/electromagnetismo/electricidad/circuitos-cc', clase: 'circuitos-btn' }, palette: 'red', icono: circuitosIcon }, 
      { tipo: 'corriente-ohm', titulo: 'Corriente Eléctrica', descripcion: 'El flujo ordenado de electrones a través de un material conductor.', btn: { texto: 'Explorar', link: '/clasica/electromagnetismo/electricidad/corriente-ohm', clase: 'corriente-btn' }, palette: 'lima', icono: corrienteIcon }, 
      { tipo: 'potencial', titulo: 'Potencial Energia Capacidad', descripcion: 'El campo electrostático es conservativo, lo que permite definir una función potencial escalar $V$.', btn: { texto: 'Explorar', link: '/clasica/electromagnetismo/electricidad/potencial', clase: 'ohm-btn' }, palette: 'maroon', icono: potencialenergiacapacidadIcon },
    ],
    additionalContent: `
        <strong>Estudio de la electricidad:</strong><br />
        La electricidad estudia los fenómenos producidos por la carga eléctrica, desde la fuerza entre cargas hasta el flujo de corriente en un circuito.<br />
    `
  },
  magnetismo: {
    title: 'Magnetismo', 
    intro: 'El magnetismo es el fenómeno por el cual ciertos materiales ejercen fuerzas de atracción o repulsión y cómo las corrientes eléctricas generan campos magnéticos.', 
    cards: [ 
      { tipo: 'campos-fuerza', titulo: 'Campos Magnéticos', descripcion: 'Región del espacio donde una carga en movimiento experimenta una fuerza.', btn: { texto: 'Explorar', link: '/clasica/electromagnetismo/magnetismo/campos-fuerza', clase: 'campos-btn' }, palette: 'green', icono: camposIcon }, 
      { tipo: 'fuentes-campo', titulo: 'Fuentes de Campo', descripcion: 'Fuerzas que generan un campo magnético.', btn: { texto: 'Explorar  ', link: '/clasica/electromagnetismo/magnetismo/fuentes-campo', clase: 'fuentes-campo-btn' }, palette: 'green', icono: fuentescampoIcon },
      { tipo: 'induccion', titulo: 'Inducción Electromagnética', descripcion: 'Generación de corriente eléctrica a partir de un campo magnético variable.', btn: { texto: 'Explorar', link: '/clasica/electromagnetismo/magnetismo/induccion', clase: 'induccion-btn' }, palette: 'plum', icono: induccionIcon }
    ],
    additionalContent: `
        <strong>Estudio del magnetismo:</strong><br />
        El magnetismo es el fenómeno por el cual ciertos materiales ejercen fuerzas de atracción o repulsión y cómo las corrientes eléctricas generan campos magnéticos.<br />
    `
  },
  maxwell: {
    title: 'Ecuaciones de Maxwell',
    intro: 'Las Ecuaciones de Maxwell son un conjunto de cuatro ecuaciones que forman la base teórica del electromagnetismo clásico.',
    cards: [ { tipo: 'maxwell', titulo: 'Las Cuatro Ecuaciones', descripcion: 'Explora las leyes de Gauss para electricidad y magnetismo, la ley de Faraday y la ley de Ampère-Maxwell.', btn: { texto: 'Explorar', link: '/clasica/electromagnetismo/maxwell/maxwell', clase: 'maxwell-btn' }, palette: 'maroon', icono: maxwellIcon } 
    ] ,
    additionalContent: `
        <strong>Estudio de las Ecuaciones de Maxwell:</strong><br />
        Las Ecuaciones de Maxwell son un conjunto de cuatro ecuaciones que forman la base teórica del electromagnetismo clásico.<br />
    `
    },
  ondas: {
    title: 'Ondas Electromagnéticas',
    intro: 'Las ondas electromagnéticas son uno de los resultados más profundos y de mayor alcance de las Ecuaciones de Maxwell',
    cards: [ { tipo: 'ondas', titulo: 'Ondas Electromagnéticas', descripcion: 'Las ondas electromagnéticas son uno de los resultados más profundos y de mayor alcance de las Ecuaciones de Maxwell.', btn: { texto: 'Explorar', link: '/clasica/electromagnetismo/ondas/ondas', clase: 'ondas-btn' }, palette: 'maroon', icono: ondaselectromagneticasIcon } 
    ] ,
    additionalContent: `
        <strong>Resultado de las Ecuaciones de Maxwell:</strong><br />
        Son perturbaciones de campos eléctricos y magnéticos que se autopropagan a través del espacio, transportando energía y momento.<br />
    `
    }, 
}
