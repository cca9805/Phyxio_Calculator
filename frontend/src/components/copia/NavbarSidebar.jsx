import { useState, useMemo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/phyxio_fb.png';
import { sidebarItems } from '../data/sidebarItems';

// ==========================================================================
// Navbar
// ==========================================================================
export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo-link">
        <img src={logo} alt="Phyxio Logo" className="navbar-logo-img" />
        <span className="navbar-title">Phyxio Calculator</span>
      </Link>
    </nav>
  );
}

// ==========================================================================
// Componente Recursivo para renderizar los elementos del menú
// ==========================================================================
function SidebarRecursive({ items, currentPath, openSet, toggleOpen, isExpanded }) {
  const navigate = useNavigate();

  // Manejador para el clic en la flecha (chevron)
  const handleToggle = (e, link) => {
    e.stopPropagation(); // Evita que el clic se propague al contenedor principal
    toggleOpen(link);
  };

  return (
    <ul className="sidebar-list">
      {items.map((item, idx) => {
        const isActive = item.link && currentPath.startsWith(item.link);
        const isOpen = item.link && openSet.has(item.link);

        // Renderiza un elemento con submenú
        if (item.children) {
          return (
            <li key={`${item.label}-${idx}`} className={`sidebar-card ${isActive ? 'sidebar-card-active' : ''}`}>
              {/* El contenedor principal navega al hacer clic */}
              <div 
                className="sidebar-card-link" 
                onClick={() => navigate(item.link || '#')} 
                role="button"
                tabIndex="0"
              >
                <span className="sidebar-icon">
                  {item.iconClass && <i className={`bi ${item.iconClass}`}></i>}
                </span>
                <span className="sidebar-label">{item.label}</span>
                {isExpanded && (
                  // La flecha solo despliega/contrae, deteniendo la navegación
                  <span 
                    className={`sidebar-chevron ${isOpen ? 'sidebar-chevron-open' : ''}`} 
                    onClick={(e) => handleToggle(e, item.link)}
                  >
                    <i className="bi bi-chevron-down"></i>
                  </span>
                )}
              </div>
              {isOpen && isExpanded && (
                <div className="sidebar-submenu">
                   <SidebarRecursive items={item.children} currentPath={currentPath} openSet={openSet} toggleOpen={toggleOpen} isExpanded={isExpanded} />
                </div>
              )}
            </li>
          );
        }
        
        // Renderiza un elemento de enlace simple (sin hijos)
        return (
          <li key={`${item.label}-${idx}`} className={`sidebar-card ${isActive ? 'sidebar-card-active' : ''}`}>
            <Link to={item.link} className="sidebar-card-link">
              <span className="sidebar-icon">
                {item.iconClass && <i className={`bi ${item.iconClass}`}></i>}
              </span>
              <span className="sidebar-label">{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}


// ==========================================================================
// Sidebar: Controlada por props desde App.jsx
// ==========================================================================
export function Sidebar({ isExpanded }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openSet, setOpenSet] = useState(new Set());

  // Encuentra la rama activa para mantenerla abierta en la carga de la página
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

  useEffect(() => {
    let branch = findActiveBranch(sidebarItems, currentPath);
    if (currentPath === '/' || currentPath === '/fisica') {
      branch = findActiveBranch(sidebarItems, '/');
    }

    if (branch.length > 0) {
      setOpenSet(new Set(branch.map(item => item.link).filter(Boolean)));
    } else {
      setOpenSet(new Set());
    }
  }, [currentPath]);

  // Abre o cierra un submenú
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
  
  const sidebarClassName = isExpanded ? 'sidebar-expanded' : 'sidebar-collapsed';

  return (
    <aside className={`sidebar ${sidebarClassName}`}>
      <nav className="sidebar-nav">
        <SidebarRecursive 
            items={sidebarItems} 
            currentPath={currentPath} 
            openSet={openSet} 
            toggleOpen={toggleOpen}
            isExpanded={isExpanded}
        />
      </nav>
      <div className="sidebar-footer">
        <Link to="/constantes" className="sidebar-card-link" title="Constantes Físicas">
            <span className="sidebar-icon"><i className="bi bi-rulers"></i></span>
            <span className="sidebar-label">Constantes</span>
        </Link>
      </div>
    </aside>
  );
}
