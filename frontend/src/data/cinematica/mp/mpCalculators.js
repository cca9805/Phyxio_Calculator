import { formatNumber } from '../../../utils/formatNumber';

const G = 9.81; // Valor estándar de la gravedad en m/s²
const PI = Math.PI;

export const calculators = [
  // --- Grupo 1: Componentes de la Velocidad Inicial ---
  {
    id: 'mp-v0x',
    title: 'Calcular Componente Horizontal (v₀x)',
    formula: 'v₀x = v₀ * cos(θ)',
    variables: [
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '50' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '30' }
    ],
    output: { symbol: 'v0x', label: 'Componente v₀x', unit: 'm/s' },
    resolve: ({ v0, theta }) => {
      const theta_rad = theta * (PI / 180);
      const v0x = v0 * Math.cos(theta_rad);
      return { result: { v0x }, steps: [`v₀x = ${v0} * cos(${theta}°) = ${formatNumber(v0x)} m/s`] };
    }
  },
  {
    id: 'mp-v0y',
    title: 'Calcular Componente Vertical (v₀y)',
    formula: 'v₀y = v₀ * sin(θ)',
    variables: [
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '50' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '30' }
    ],
    output: { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s' },
    resolve: ({ v0, theta }) => {
      const theta_rad = theta * (PI / 180);
      const v0y = v0 * Math.sin(theta_rad);
      return { result: { v0y }, steps: [`v₀y = ${v0} * sin(${theta}°) = ${formatNumber(v0y)} m/s`] };
    }
  },
  {
    id: 'mp-v0-desde-componentes',
    title: 'Calcular Velocidad Inicial (v₀)',
    formula: 'v₀ = √(v₀x² + v₀y²)',
    variables: [
      { symbol: 'v0x', label: 'Componente v₀x', unit: 'm/s', example: '43.3' },
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s', example: '25' }
    ],
    output: { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s' },
    resolve: ({ v0x, v0y }) => {
      const v0 = Math.sqrt(Math.pow(v0x, 2) + Math.pow(v0y, 2));
      return { result: { v0 }, steps: [`v₀ = √(${v0x}² + ${v0y}²) = ${formatNumber(v0)} m/s`] };
    }
  },
  {
    id: 'mp-angulo-desde-componentes',
    title: 'Calcular Ángulo (θ)',
    formula: 'θ = tan⁻¹(v₀y / v₀x)',
    variables: [
      { symbol: 'v0x', label: 'Componente v₀x', unit: 'm/s', example: '43.3' },
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s', example: '25' }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    resolve: ({ v0x, v0y }) => {
      if (v0x === 0) return { error: 'La componente v₀x no puede ser cero.' };
      const theta_rad = Math.atan(v0y / v0x);
      const theta = theta_rad * (180 / PI);
      return { result: { theta }, steps: [`θ = tan⁻¹(${v0y} / ${v0x}) = ${formatNumber(theta)}°`] };
    }
  },

  // --- Grupo 2: Altura Máxima (h_max) ---
  {
    id: 'mp-altura-maxima',
    title: 'Calcular Altura Máxima (hₘₐₓ)',
    formula: 'hₘₐₓ = v₀y² / (2g)',
    variables: [
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s', example: '25' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'h_max', label: 'Altura Máxima (hₘₐₓ)', unit: 'm' },
    resolve: ({ v0y, g = G }) => {
      if (g === 0) return { error: 'La gravedad no puede ser cero.' };
      const h_max = Math.pow(v0y, 2) / (2 * g);
      return { result: { h_max }, steps: [`hₘₐₓ = ${v0y}² / (2 * ${g}) = ${formatNumber(h_max)} m`] };
    }
  },
  {
    id: 'mp-v0y-desde-altura-maxima',
    title: 'Calcular v₀y (desde hₘₐₓ)',
    formula: 'v₀y = √(2 * g * hₘₐₓ)',
    variables: [
      { symbol: 'h_max', label: 'Altura Máxima (hₘₐₓ)', unit: 'm', example: '31.8' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s' },
    resolve: ({ h_max, g = G }) => {
      const radicand = 2 * g * h_max;
      if (radicand < 0) return { error: 'El producto de g y hₘₐₓ debe ser positivo.' };
      const v0y = Math.sqrt(radicand);
      return { result: { v0y }, steps: [`v₀y = √(2 * ${g} * ${h_max}) = ${formatNumber(v0y)} m/s`] };
    }
  },

  // --- Grupo 3: Tiempo de Vuelo y Tiempo de Subida ---
  {
    id: 'mp-tiempo-subida',
    title: 'Calcular Tiempo de Subida (tₛ)',
    formula: 'tₛ = v₀y / g',
    description: 'Calcula el tiempo que tarda el proyectil en alcanzar su altura máxima.',
    variables: [
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s', example: '25' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 't_s', label: 'Tiempo de subida (tₛ)', unit: 's' },
    resolve: ({ v0y, g = G }) => {
      if (g === 0) return { error: 'La gravedad no puede ser cero.' };
      const t_s = v0y / g;
      return { result: { t_s }, steps: [`tₛ = ${v0y} / ${g} = ${formatNumber(t_s)} s`] };
    }
  },
  {
    id: 'mp-tiempo-vuelo',
    title: 'Calcular Tiempo de Vuelo (tᵥ)',
    formula: 'tᵥ = 2 * v₀y / g',
    description: 'Calcula el tiempo total que el objeto permanece en el aire (parábola simétrica).',
    variables: [
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s', example: '25' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 't_v', label: 'Tiempo de vuelo (tᵥ)', unit: 's' },
    resolve: ({ v0y, g = G }) => {
      if (g === 0) return { error: 'La gravedad no puede ser cero.' };
      const t_v = 2 * v0y / g;
      return { result: { t_v }, steps: [`tᵥ = 2 * ${v0y} / ${g} = ${formatNumber(t_v)} s`] };
    }
  },
  {
    id: 'mp-v0y-desde-tiempo-vuelo',
    title: 'Calcular v₀y (desde tᵥ)',
    formula: 'v₀y = (tᵥ * g) / 2',
    variables: [
      { symbol: 't_v', label: 'Tiempo de vuelo (tᵥ)', unit: 's', example: '5.1' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s' },
    resolve: ({ t_v, g = G }) => {
      const v0y = (t_v * g) / 2;
      return { result: { v0y }, steps: [`v₀y = (${t_v} * ${g}) / 2 = ${formatNumber(v0y)} m/s`] };
    }
  },

  // --- Grupo 4: Alcance Horizontal (R) ---
  {
    id: 'mp-alcance-horizontal',
    title: 'Calcular Alcance Horizontal (R)',
    formula: 'R = v₀² * sin(2θ) / g',
    description: 'Calcula la distancia horizontal total recorrida (parábola simétrica).',
    variables: [
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '50' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '30' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'R', label: 'Alcance (R)', unit: 'm' },
    resolve: ({ v0, theta, g = G }) => {
      if (g === 0) return { error: 'La gravedad no puede ser cero.' };
      const theta_rad = theta * (PI / 180);
      const R = (Math.pow(v0, 2) * Math.sin(2 * theta_rad)) / g;
      return { result: { R }, steps: [`R = ${v0}² * sin(2*${theta}°) / ${g} = ${formatNumber(R)} m`] };
    }
  },
  {
    id: 'mp-v0-desde-alcance',
    title: 'Calcular v₀ (desde Alcance)',
    formula: 'v₀ = √((R * g) / sin(2θ))',
    variables: [
      { symbol: 'R', label: 'Alcance (R)', unit: 'm', example: '220.7' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '30' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s' },
    resolve: ({ R, theta, g = G }) => {
      const theta_rad = theta * (PI / 180);
      const sin2theta = Math.sin(2 * theta_rad);
      if (sin2theta === 0) return { error: 'El sin(2θ) no puede ser cero (evite ángulos de 0° y 90°).' };
      const radicand = (R * g) / sin2theta;
      if (radicand < 0) return { error: 'El valor dentro de la raíz (R*g/sin(2θ)) debe ser positivo.' };
      const v0 = Math.sqrt(radicand);
      return { result: { v0 }, steps: [`v₀ = √(${R} * ${g} / sin(2*${theta}°)) = ${formatNumber(v0)} m/s`] };
    }
  },
    {
    id: 'mp-angulo-desde-alcance',
    title: 'Calcular Ángulo (θ) (desde Alcance)',
    formula: 'θ = ½ * sin⁻¹(R * g / v₀²)',
    description: 'Calcula el ángulo de lanzamiento. Pueden existir dos soluciones.',
    variables: [
      { symbol: 'R', label: 'Alcance (R)', unit: 'm', example: '220.7' },
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '50' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    resolve: ({ R, v0, g = G }) => {
      if (v0 === 0) return { error: 'La velocidad inicial no puede ser cero.' };
      const sin2theta_val = (R * g) / Math.pow(v0, 2);
      if (sin2theta_val < -1 || sin2theta_val > 1) return { error: 'No es posible alcanzar esa distancia con la velocidad dada (R*g/v₀² fuera del rango de sin).' };
      const angle2_rad = Math.asin(sin2theta_val);
      const theta1 = (angle2_rad * (180 / PI)) / 2;
      const theta2 = 90 - theta1;
      const resultText = `θ₁ = ${formatNumber(theta1)}°, θ₂ = ${formatNumber(theta2)}°`;
      return { result: { theta: resultText }, steps: [`sin(2θ) = (${R}*${g})/${v0}² = ${formatNumber(sin2theta_val)}`, `2θ = sin⁻¹(${formatNumber(sin2theta_val)}) = ${formatNumber(angle2_rad * 180 / PI)}°`, `θ₁ = ${formatNumber(theta1)}°`, `θ₂ = 90° - θ₁ = ${formatNumber(theta2)}°`]};
    }
  },

  // --- Grupo 5: Posición y Velocidad en el tiempo t ---
  {
    id: 'mp-posicion-x',
    title: 'Calcular Posición Horizontal x(t)',
    formula: 'x(t) = v₀x * t',
    variables: [
      { symbol: 'v0x', label: 'Componente v₀x', unit: 'm/s', example: '43.3' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '2' }
    ],
    output: { symbol: 'x', label: 'Posición x', unit: 'm' },
    resolve: ({ v0x, t }) => {
      const x = v0x * t;
      return { result: { x }, steps: [`x(${t}) = ${v0x} * ${t} = ${formatNumber(x)} m`] };
    }
  },
  {
    id: 'mp-posicion-y',
    title: 'Calcular Posición Vertical y(t)',
    formula: 'y(t) = v₀y*t - ½gt²',
    variables: [
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s', example: '25' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '2' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'y', label: 'Posición y', unit: 'm' },
    resolve: ({ v0y, t, g = G }) => {
      const y = v0y * t - 0.5 * g * Math.pow(t, 2);
      return { result: { y }, steps: [`y(${t}) = ${v0y}*${t} - ½*${g}*${t}² = ${formatNumber(y)} m`] };
    }
  },
  {
    id: 'mp-velocidad-vy',
    title: 'Calcular Velocidad Vertical vy(t)',
    formula: 'vy(t) = v₀y - g*t',
    variables: [
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s', example: '25' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's', example: '3' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'vy', label: 'Velocidad vy', unit: 'm/s' },
    resolve: ({ v0y, t, g = G }) => {
      const vy = v0y - g * t;
      return { result: { vy }, steps: [`vy(${t}) = ${v0y} - ${g}*${t} = ${formatNumber(vy)} m/s`] };
    }
  },
  {
    id: 'mp-velocidad-total',
    title: 'Calcular Magnitud Velocidad v(t)',
    formula: 'v(t) = √(vₓ² + vᵧ²)',
    variables: [
      { symbol: 'vx', label: 'Velocidad vₓ (constante)', unit: 'm/s', example: '43.3' },
      { symbol: 'vy', label: 'Velocidad vᵧ en t', unit: 'm/s', example: '-4.43' }
    ],
    output: { symbol: 'v', label: 'Magnitud de Velocidad', unit: 'm/s' },
    resolve: ({ vx, vy }) => {
      const v = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));
      return { result: { v }, steps: [`v = √(${vx}² + ${vy}²) = ${formatNumber(v)} m/s`] };
    }
  },
  
  // --- Grupo 6: Ecuación de la Trayectoria ---
  {
    id: 'mp-trayectoria-y-de-x',
    title: 'Calcular y(x) de la Trayectoria',
    formula: 'y(x) = x*tan(θ) - (g*x²) / (2*v₀²*cos²(θ))',
    variables: [
      { symbol: 'x', label: 'Posición horizontal (x)', unit: 'm', example: '100' },
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s', example: '50' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados', example: '30' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', example: '9.81', isOptional: true }
    ],
    output: { symbol: 'y', label: 'Posición vertical (y)', unit: 'm' },
    resolve: ({ x, v0, theta, g = G }) => {
      const theta_rad = theta * (PI / 180);
      const cos_theta = Math.cos(theta_rad);
      if (v0 === 0 || cos_theta === 0) return { error: 'v₀ y cos(θ) no pueden ser cero.' };
      const y = x * Math.tan(theta_rad) - (g * Math.pow(x, 2)) / (2 * Math.pow(v0, 2) * Math.pow(cos_theta, 2));
      return { result: { y }, steps: [`y(${x}) = ... = ${formatNumber(y)} m`] };
    }
  }
];
