import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sidebarItems } from '../data/sidebarItems';

// Función auxiliar (movida aquí para ser usada por el hook)
const findActiveBranch = (items, path) => {
  for (const item of items) {
    if (item.link && path.startsWith(item.link)) {
      const branch = [item];
      if (item.children) {
        const childBranch = findActiveBranch(item.children, path);
        if (childBranch.length > 0) {
          return [...branch, ...childBranch];
        }
      }
      return branch;
    }
  }
  return [];
};

export const useSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Estado para la expansión del sidebar (plegado/desplegado)
  const [isExpanded, setIsExpanded] = useState(true);

  // Estado para los elementos abiertos del menú
  const [openSet, setOpenSet] = useState(new Set());

  // Efecto para abrir la rama activa al cambiar de página
  useEffect(() => {
    let branch = findActiveBranch(sidebarItems, currentPath);
    if (currentPath === '/' || currentPath === '/fisica') {
      // Corregido el error de tipeo aquí
      branch = findActiveBranch(sidebarItems, '/');
    }

    if (branch.length > 0) {
      // No reemplaza el set, sino que se asegura de que la rama activa esté abierta
      setOpenSet(prev => new Set([...prev, ...branch.map(item => item.link).filter(Boolean)]));
    }
    // Ya no hacemos un 'else' que limpie el set, para mantener el estado del usuario
  }, [currentPath]);

  // Función para plegar/desplegar el sidebar
  const toggleSidebar = () => {
    setIsExpanded(prev => !prev);
  };

  // Función para abrir/cerrar un submenú
  const toggleOpen = (link) => {
    setOpenSet(prev => {
      const newSet = new Set(prev);
      if (newSet.has(link)) {
        newSet.delete(link);
      } else {
        newSet.add(link);
      }
      return newSet;
    });
  };

  return { 
    isExpanded, 
    toggleSidebar, 
    openSet, 
    toggleOpen 
  };
};
