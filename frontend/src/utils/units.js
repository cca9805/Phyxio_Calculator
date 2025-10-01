// Utilidades para conversiones de unidades

// Conversiones de longitud
export const LENGTH_CONVERSIONS = {
  m: 1,
  km: 1000,
  cm: 0.01,
  mm: 0.001,
  mi: 1609.34,
  ft: 0.3048,
  in: 0.0254,
}

// Conversiones de masa
export const MASS_CONVERSIONS = {
  kg: 1,
  g: 0.001,
  mg: 1e-6,
  lb: 0.453592,
  oz: 0.0283495,
}

// Conversiones de tiempo
export const TIME_CONVERSIONS = {
  s: 1,
  min: 60,
  h: 3600,
  ms: 0.001,
  μs: 1e-6,
}

// Conversiones de velocidad
export const VELOCITY_CONVERSIONS = {
  'm/s': 1,
  'km/h': 0.277778,
  'mi/h': 0.44704,
  'ft/s': 0.3048,
}

// Conversiones de fuerza
export const FORCE_CONVERSIONS = {
  N: 1,
  kN: 1000,
  lbf: 4.44822,
  dyn: 1e-5,
}

// Conversiones de energía
export const ENERGY_CONVERSIONS = {
  J: 1,
  kJ: 1000,
  cal: 4.184,
  kcal: 4184,
  eV: 1.60218e-19,
}

// Conversiones de temperatura
export const convertTemperature = (value, fromUnit, toUnit) => {
  // Primero convertir a Kelvin
  let kelvin;
  switch (fromUnit) {
    case 'K':
      kelvin = value;
      break;
    case '°C':
      kelvin = value + 273.15;
      break;
    case '°F':
      kelvin = (value - 32) * 5/9 + 273.15;
      break;
    default:
      return value;
  }
  
  // Luego convertir a la unidad deseada
  switch (toUnit) {
    case 'K':
      return kelvin;
    case '°C':
      return kelvin - 273.15;
    case '°F':
      return (kelvin - 273.15) * 9/5 + 32;
    default:
      return value;
  }
}

// Conversión general de unidades
export const convertUnit = (value, fromUnit, toUnit, conversionTable) => {
  if (fromUnit === toUnit) return value;
  
  const fromFactor = conversionTable[fromUnit];
  const toFactor = conversionTable[toUnit];
  
  if (!fromFactor || !toFactor) {
    console.warn(`Unidad no soportada: ${fromUnit} o ${toUnit}`);
    return value;
  }
  
  // Convertir a unidad base y luego a unidad objetivo
  const baseValue = value * fromFactor;
  return baseValue / toFactor;
}

// Formateo de números científicos
export const formatScientific = (value, precision = 3) => {
  if (Math.abs(value) < 0.001 || Math.abs(value) > 9999) {
    return value.toExponential(precision);
  }
  return value.toFixed(precision);
}

// Formateo de unidades
export const formatUnit = (value, unit, precision = 3) => {
  const formattedValue = formatScientific(value, precision);
  return `${formattedValue} ${unit}`;
} 