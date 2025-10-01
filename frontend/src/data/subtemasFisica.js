// Estructura inicial automatizable para Sidebar
export const subtemasFisica = [
  {
    nombre: 'Cinemática',
    ruta: '/clasica/mecanica/cinematica',
    subtemas: [
      { nombre: 'MRU', ruta: '/clasica/mecanica/cinematica/mru' },
      { nombre: 'MRUV', ruta: '/clasica/mecanica/cinematica/mruv' },
      { nombre: 'MCU', ruta: '/clasica/mecanica/cinematica/mcu' },
      { nombre: 'MCUA', ruta: '/clasica/mecanica/cinematica/mcua' },
      { nombre: 'MAS', ruta: '/clasica/mecanica/cinematica/mas' },
      { nombre: 'MP', ruta: '/clasica/mecanica/cinematica/mp' },
      { nombre: 'MR', ruta: '/clasica/mecanica/cinematica/mr' },
    ]
  },
  {
    nombre: 'Dinámica',
    ruta: '/clasica/mecanica/dinamica',
    subtemas: [
      { nombre: 'Newton', ruta: '/clasica/mecanica/dinamica/newton' },
      { nombre: 'Trabajo y Energía', ruta: '/clasica/mecanica/dinamica/trabajoenergia' },
      { nombre: 'Impulso y Cantidad de Movimiento', ruta: '/clasica/mecanica/dinamica/impulso' }
    ]
  },
  // Puedes agregar más bloques de subtemas aquí para automatizar el menú
];
