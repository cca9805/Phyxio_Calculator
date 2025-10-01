import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const location = useLocation();
  const [theme, setTheme] = useState('light');

  // Determinar el tema basado en la ruta actual
  useEffect(() => {
    const path = location.pathname;

    // Temas de cinemática
    if (path.includes('/clasica/mecanica/cinematica/mruv') || path.includes('/mruv')) {
      setTheme('mruv');
    } else if (path.includes('/clasica/mecanica/cinematica/mru') || path.includes('/mru')) {
      setTheme('mru');
    } else if (path.includes('/clasica/mecanica/cinematica/mcua') || path.includes('/mcua')) {
      setTheme('mcua');
    } else if (path.includes('/clasica/mecanica/cinematica/mcu') || path.includes('/mcu')) {
      setTheme('mcu');
    } else if (path.includes('/clasica/mecanica/cinematica/mas') || path.includes('/mas')) {
      setTheme('mas');
    } else if (path.includes('/clasica/mecanica/cinematica/mp') || path.includes('/mp')) {
      setTheme('mp');
    } else if (path.includes('/clasica/mecanica/cinematica/mr') || path.includes('/mr')) {
      setTheme('mr');
    }
    // Temas de dinámica
    else if (path.includes('/clasica/mecanica/dinamica/equilibrio') || path.includes('/equilibrio')) {
      setTheme('equilibrio');
    } else if (path.includes('/clasica/mecanica/dinamica/newton') || path.includes('/newton')) {
      setTheme('newton');
    } else if (path.includes('/clasica/mecanica/dinamica/trabajoenergia') || path.includes('/trabajoenergia')) {
      setTheme('trab-energia');
    } else if (path.includes('/clasica/mecanica/dinamica/movimpulso') || path.includes('/movimpulso')) {
      setTheme('movimpulso');
    } else if (path.includes('/clasica/mecanica/dinamica/rotacion') || path.includes('/rotacion')) {
      setTheme('rotacion');
    } else if (path.includes('/clasica/mecanica/dinamica/gravitacion') || path.includes('/gravitacion')) {
      setTheme('gravitacion');
    } else if (path.includes('/clasica/mecanica/dinamica/friccion') || path.includes('/friccion')) {
      setTheme('friccion');
    } else if (path.includes('/clasica/mecanica/dinamica/oscilaciones') || path.includes('/oscilaciones')) {
      setTheme('oscilaciones');
    } else if (path.includes('/clasica/mecanica/dinamica/masaspoleas') || path.includes('/masaspoleas')) {
      setTheme('masaspoleas');
    } else if (path.includes('/clasica/mecanica/dinamica/maquinas') || path.includes('/maquinas')) {
      setTheme('maquinas');
    }
    // Temas de estática
    else if (path.includes('/clasica/mecanica/estatica/fuerzas') || path.includes('/fuerzas')) {
      setTheme('fuerzas');
    } else if (path.includes('/clasica/mecanica/estatica/torque') || path.includes('/torque')) {
      setTheme('torque');
    } else if (path.includes('/clasica/mecanica/estatica/centro') || path.includes('/centro')) {
      setTheme('centro-masa');
    } else if (path.includes('/clasica/mecanica/estatica/cuerpos') || path.includes('/cuerpos')) {
      setTheme('leyes');
    } else if (path.includes('/clasica/mecanica/estatica/apoyos') || path.includes('/apoyos')) {
      setTheme('apoyos');
    } else if (path.includes('/clasica/mecanica/estatica/diagramas') || path.includes('/diagramas')) {
      setTheme('diagramas-cuerpo-libre');
    } else if (path.includes('/clasica/mecanica/estatica/friccion') || path.includes('/friccion')) {
      setTheme('friccion-equilibrio');
    } else if (path.includes('/clasica/mecanica/estatica/estructuras') || path.includes('/estructuras')) {
      setTheme('estructuras');
    } else if (path.includes('/clasica/mecanica/estatica/estabilidad') || path.includes('/estabilidad')) {
      setTheme('estabilidad');
    } else if (path.includes('/clasica/mecanica/estatica/aplicaciones') || path.includes('/aplicaciones')) {
      setTheme('aplicaciones');
    }
    // Tema por defecto
    else {
      setTheme('light');
    }

    // Depuración: Mostrar la ruta y el tema aplicado
    console.log('Ruta actual:', path, '| Tema aplicado:', theme);
  }, [location]);

  // Actualizar el atributo data-theme en el elemento raíz
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // Limpiar al desmontar
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
