import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ThemeContext = createContext();

// Mapa para convertir el segmento de la URL al nombre del tema.
// Es mucho más fácil de mantener que una cadena de if-else.
const THEME_MAP = {
  // Cinemática
  'mruv': 'mruv',
  'mru': 'mru',
  'mcua': 'mcua',
  'mcu': 'mcu',
  'mas': 'mas',
  'mp': 'mp',
  'mr': 'mr',
  // Dinámica
  'equilibrio': 'equilibrio',
  'newton': 'newton',
  'trabajoenergia': 'trab-energia',
  'movimpulso': 'movimpulso',
  'rotacion': 'rotacion',
  'gravitacion': 'gravitacion',
  'oscilaciones': 'oscilaciones',
  'masaspoleas': 'masaspoleas',
  'maquinas': 'maquinas',
  // Estática
  'fuerzas': 'fuerzas',
  'torque': 'torque',
  'centro': 'centro-masa',
  'cuerpos': 'leyes',
  'apoyos': 'apoyos',
  'diagramas': 'diagramas-cuerpo-libre',
  'estructuras': 'estructuras',
  'estabilidad': 'estabilidad',
  'aplicaciones': 'aplicaciones',
  // ElectroMagenetismo
  // Electricidad
  'circuitos': 'circuitos',
  'corriente': 'corriente',
  'ohm': 'ohm',
  // Magnetismo
  'campos': 'campos',
  'induccion': 'induccion',
  // Maxwell
  'maxwell': 'maxwell'
};

const DEFAULT_THEME = 'light'; // Tema neutral por defecto.

export const ThemeProvider = ({ children }) => {
  const location = useLocation();
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const path = location.pathname;
    let newTheme = DEFAULT_THEME;

    // 1. Manejar casos especiales donde el tema depende de la ruta completa.
    if (path.includes('/clasica/mecanica/estatica/friccion')) {
      newTheme = 'friccion-equilibrio';
    } else if (path.includes('/clasica/mecanica/dinamica/friccion')) {
      newTheme = 'friccion';
    } else {
      // 2. Lógica general: extraer el último segmento de la URL.
      const pathSegments = path.split('/').filter(Boolean);
      const lastSegment = pathSegments[pathSegments.length - 1];

      if (lastSegment) {
        // Usar el mapa para encontrar el tema; si no existe, se mantiene el DEFAULT_THEME.
        newTheme = THEME_MAP[lastSegment] || DEFAULT_THEME;
      }
    }

    setTheme(newTheme);

    // Opcional: Depuración para ver el tema aplicado en la consola.
    // console.log('Ruta actual:', path, '| Tema aplicado:', newTheme);

  }, [location]);

  // Efecto para actualizar el atributo data-theme en el <html>.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
};
