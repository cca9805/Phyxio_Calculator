// filepath: src/data/cinematica/mr/mrCalculators.js
export const calculators = [
  // Posición relativa r_AB = r_A − r_B (2D)
  {
    id: 'calc-rab-x',
    title: 'r_AB,x = r_Ax − r_Bx — Posición relativa (componente x)',
    expr: 'rAx - rBx',
    vars: [
      { name: 'rAx', label: 'r_Ax', unit: 'm' },
      { name: 'rBx', label: 'r_Bx', unit: 'm' }
    ],
    output: { name: 'r_ABx', unit: 'm' }
  },
  {
    id: 'calc-rab-y',
    title: 'r_AB,y = r_Ay − r_By — Posición relativa (componente y)',
    expr: 'rAy - rBy',
    vars: [
      { name: 'rAy', label: 'r_Ay', unit: 'm' },
      { name: 'rBy', label: 'r_By', unit: 'm' }
    ],
    output: { name: 'r_ABy', unit: 'm' }
  },

  // Velocidad relativa v_AB = v_A − v_B (2D)
  {
    id: 'calc-vab-x',
    title: 'v_AB,x = v_Ax − v_Bx — Velocidad relativa (x)',
    expr: 'vAx - vBx',
    vars: [
      { name: 'vAx', label: 'v_Ax', unit: 'm/s' },
      { name: 'vBx', label: 'v_Bx', unit: 'm/s' }
    ],
    output: { name: 'v_ABx', unit: 'm/s' }
  },
  {
    id: 'calc-vab-y',
    title: 'v_AB,y = v_Ay − v_By — Velocidad relativa (y)',
    expr: 'vAy - vBy',
    vars: [
      { name: 'vAy', label: 'v_Ay', unit: 'm/s' },
      { name: 'vBy', label: 'v_By', unit: 'm/s' }
    ],
    output: { name: 'v_ABy', unit: 'm/s' }
  },

  // Aceleración relativa a_AB = a_A − a_B (2D)
  {
    id: 'calc-aab-x',
    title: 'a_AB,x = a_Ax − a_Bx — Aceleración relativa (x)',
    expr: 'aAx - aBx',
    vars: [
      { name: 'aAx', label: 'a_Ax', unit: 'm/s²' },
      { name: 'aBx', label: 'a_Bx', unit: 'm/s²' }
    ],
    output: { name: 'a_ABx', unit: 'm/s²' }
  },
  {
    id: 'calc-aab-y',
    title: 'a_AB,y = a_Ay − a_By — Aceleración relativa (y)',
    expr: 'aAy - aBy',
    vars: [
      { name: 'aAy', label: 'a_Ay', unit: 'm/s²' },
      { name: 'aBy', label: 'a_By', unit: 'm/s²' }
    ],
    output: { name: 'a_ABy', unit: 'm/s²' }
  },

  // Transformación galileana de posición: r = r' + V·t (2D)
  {
    id: 'calc-galileana-r-x',
    title: "r_x = r'_x + V_x·t — Transformación de posición (x)",
    expr: 'rpx + Vx * t',
    vars: [
      { name: 'rpx', label: "r'_x", unit: 'm' },
      { name: 'Vx', label: 'V_x', unit: 'm/s' },
      { name: 't', label: 't', unit: 's' }
    ],
    output: { name: 'r_x', unit: 'm' }
  },
  {
    id: 'calc-galileana-r-y',
    title: "r_y = r'_y + V_y·t — Transformación de posición (y)",
    expr: 'rpy + Vy * t',
    vars: [
      { name: 'rpy', label: "r'_y", unit: 'm' },
      { name: 'Vy', label: 'V_y', unit: 'm/s' },
      { name: 't', label: 't', unit: 's' }
    ],
    output: { name: 'r_y', unit: 'm' }
  },

  // Transformación galileana de velocidad: v = v' + V (2D)
  {
    id: 'calc-galileana-v-x',
    title: "v_x = v'_x + V_x — Transformación de velocidad (x)",
    expr: 'vpx + Vx',
    vars: [
      { name: 'vpx', label: "v'_x", unit: 'm/s' },
      { name: 'Vx', label: 'V_x', unit: 'm/s' }
    ],
    output: { name: 'v_x', unit: 'm/s' }
  },
  {
    id: 'calc-galileana-v-y',
    title: "v_y = v'_y + V_y — Transformación de velocidad (y)",
    expr: 'vpy + Vy',
    vars: [
      { name: 'vpy', label: "v'_y", unit: 'm/s' },
      { name: 'Vy', label: 'V_y', unit: 'm/s' }
    ],
    output: { name: 'v_y', unit: 'm/s' }
  },

  // Transformación galileana de aceleración: a = a' (2D)
  {
    id: 'calc-galileana-a-x',
    title: "a_x = a'_x — Transformación de aceleración (x)",
    expr: 'apx',
    vars: [
      { name: 'apx', label: "a'_x", unit: 'm/s²' }
    ],
    output: { name: 'a_x', unit: 'm/s²' }
  },
  {
    id: 'calc-galileana-a-y',
    title: "a_y = a'_y — Transformación de aceleración (y)",
    expr: 'apy',
    vars: [
      { name: 'apy', label: "a'_y", unit: 'm/s²' }
    ],
    output: { name: 'a_y', unit: 'm/s²' }
  },

  // Composición de velocidades: v_obj/suelo = v_obj/medio + v_medio/suelo (2D)
  {
    id: 'calc-compos-vel-x',
    title: 'v_obj/suelo,x = v_obj/medio,x + v_medio/suelo,x',
    expr: 'v_obj_medio_x + v_medio_suelo_x',
    vars: [
      { name: 'v_obj_medio_x', label: 'v_obj/medio,x', unit: 'm/s' },
      { name: 'v_medio_suelo_x', label: 'v_medio/suelo,x', unit: 'm/s' }
    ],
    output: { name: 'v_obj_suelo_x', unit: 'm/s' }
  },
  {
    id: 'calc-compos-vel-y',
    title: 'v_obj/suelo,y = v_obj/medio,y + v_medio/suelo,y',
    expr: 'v_obj_medio_y + v_medio_suelo_y',
    vars: [
      { name: 'v_obj_medio_y', label: 'v_obj/medio,y', unit: 'm/s' },
      { name: 'v_medio_suelo_y', label: 'v_medio/suelo,y', unit: 'm/s' }
    ],
    output: { name: 'v_obj_suelo_y', unit: 'm/s' }
  },

  // Proyección de velocidad relativa sobre û (normaliza û si no es unitario)
  {
    id: 'calc-proyeccion',
    title: 'v_AB·û = (v_A − v_B)·û — Proyección escalar',
    expr: '((vAx - vBx) * ux + (vAy - vBy) * uy) / Math.max(1e-12, Math.hypot(ux, uy))',
    vars: [
      { name: 'vAx', label: 'v_Ax', unit: 'm/s' },
      { name: 'vAy', label: 'v_Ay', unit: 'm/s' },
      { name: 'vBx', label: 'v_Bx', unit: 'm/s' },
      { name: 'vBy', label: 'v_By', unit: 'm/s' },
      { name: 'ux', label: 'û_x', unit: '' },
      { name: 'uy', label: 'û_y', unit: '' }
    ],
    output: { name: 'v_rel_proj', unit: 'm/s' }
  },

  // Distancia relativa d_AB = |r_A − r_B| (2D)
  {
    id: 'calc-dist-rel',
    title: 'd_AB = | r_A − r_B | — Distancia relativa',
    expr: 'Math.hypot(rAx - rBx, rAy - rBy)',
    vars: [
      { name: 'rAx', label: 'r_Ax', unit: 'm' },
      { name: 'rAy', label: 'r_Ay', unit: 'm' },
      { name: 'rBx', label: 'r_Bx', unit: 'm' },
      { name: 'rBy', label: 'r_By', unit: 'm' }
    ],
    output: { name: 'd_AB', unit: 'm' }
  },

  // Intercepción 1D: r_A0 + v_A t = r_B0 + v_B t
  {
    id: 'calc-intercepcion-1d',
    title: 't = (r_B0 − r_A0) / (v_A − v_B) — Intercepción (1D)',
    expr: '(rB0 - rA0) / (vA - vB)',
    vars: [
      { name: 'rA0', label: 'r_A0', unit: 'm' },
      { name: 'vA', label: 'v_A', unit: 'm/s' },
      { name: 'rB0', label: 'r_B0', unit: 'm' },
      { name: 'vB', label: 'v_B', unit: 'm/s' }
    ],
    output: { name: 't', unit: 's' }
  }
];

export default calculators;
