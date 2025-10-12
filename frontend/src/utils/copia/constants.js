// Constantes físicas fundamentales
export const PHYSICAL_CONSTANTS = {
  // Constantes universales
  GRAVITATIONAL_CONSTANT: 6.67430e-11, // m³/kg·s²
  SPEED_OF_LIGHT: 299792458, // m/s
  PLANCK_CONSTANT: 6.62607015e-34, // J·s
  BOLTZMANN_CONSTANT: 1.380649e-23, // J/K
  
  // Constantes de la Tierra
  EARTH_GRAVITY: 9.81, // m/s²
  EARTH_MASS: 5.972e24, // kg
  EARTH_RADIUS: 6371000, // m
  
  // Constantes electromagnéticas
  VACUUM_PERMITTIVITY: 8.8541878128e-12, // F/m
  VACUUM_PERMEABILITY: 1.25663706212e-6, // H/m
  ELEMENTARY_CHARGE: 1.602176634e-19, // C
  
  // Constantes termodinámicas
  AVOGADRO_NUMBER: 6.02214076e23, // mol⁻¹
  GAS_CONSTANT: 8.314462618, // J/(mol·K)
  STEFAN_BOLTZMANN: 5.670374419e-8, // W/(m²·K⁴)
  
  // Constantes acústicas
  SPEED_OF_SOUND_AIR: 343, // m/s (a 20°C)
  SPEED_OF_SOUND_WATER: 1482, // m/s
  SPEED_OF_SOUND_STEEL: 5960, // m/s
}

// Constantes por rama de la física
export const MECHANICS_CONSTANTS = {
  GRAVITY: 9.81,
  PI: Math.PI,
  EULER_NUMBER: Math.E,
}

export const THERMODYNAMICS_CONSTANTS = {
  ABSOLUTE_ZERO: -273.15, // °C
  ROOM_TEMPERATURE: 293.15, // K (20°C)
  BOILING_POINT_WATER: 373.15, // K (100°C)
  FREEZING_POINT_WATER: 273.15, // K (0°C)
}

export const ELECTROMAGNETISM_CONSTANTS = {
  COULOMB_CONSTANT: 8.988e9, // N·m²/C²
  MAGNETIC_CONSTANT: 1.257e-6, // H/m
}

export const OPTICS_CONSTANTS = {
  REFRACTIVE_INDEX_AIR: 1.0003,
  REFRACTIVE_INDEX_WATER: 1.33,
  REFRACTIVE_INDEX_GLASS: 1.5,
  REFRACTIVE_INDEX_DIAMOND: 2.42,
} 