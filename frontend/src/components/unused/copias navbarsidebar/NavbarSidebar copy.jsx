import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Phyxio.png';
import './NavbarSidebar.css';
import { sidebarItems } from '../data/sidebarItems';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-gradient">
        <img
          src={logo}
          alt="Phyxio Logo"
          className="navbar-logo-img"
          style={{ background: 'transparent' }}
        />
      </div>
      <span className="navbar-title">Phyxio Calculator</span>
    </nav>
  );
}

function SidebarRecursive({ items, level = 0, currentPath, openSet, toggleOpen }) {
  return (
    <ul className={`sidebar-list sidebar-level-${level}`}>
      {items.map((item, idx) => {
        const isActive = item.link === currentPath;
        const isOpen = openSet.has(item.link);
        return (
          <li key={item.label + idx}>
            {item.children ? (
              <div className={`sidebar-card${isActive ? ' sidebar-card-active' : ''}`}>
                <Link to={item.link} state={{ palette: item.palette }} className="sidebar-card-link">
                  <span className="sidebar-icon">{item.icon ? item.icon : (item.iconClass ? <i className={`bi ${item.iconClass}`} aria-hidden="true"></i> : '')}</span>
                  <span className="sidebar-label">{item.label}</span>
                </Link>
                <button
                  type="button"
                  className="sidebar-chevron"
                  aria-expanded={isOpen}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleOpen(item.link); }}
                >
                  {isOpen ? '▼' : '▶'}
                </button>
              </div>
            ) : (
              <Link to={item.link} state={{ palette: item.palette }} className={`sidebar-card${isActive ? ' sidebar-card-active' : ''}`}>
                <span className="sidebar-icon">{item.icon ? item.icon : (item.iconClass ? <i className={`bi ${item.iconClass}`} aria-hidden="true"></i> : '')}</span>
                <span className="sidebar-label">{item.label}</span>
              </Link>
            )}
            {item.children && isOpen && (
              <SidebarRecursive items={item.children} level={level + 1} currentPath={currentPath} openSet={openSet} toggleOpen={toggleOpen} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function Sidebar({ onWidthChange } = {}) {
  const [isWide, setIsWide] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const [openSet, setOpenSet] = useState(new Set());
  // Encuentra la rama activa desde sidebarItems
  function findActiveBranch(items, path) {
    for (const item of items) {
      if (item.link === path) return [item];
      if (item.children) {
        const branch = findActiveBranch(item.children, path);
        if (branch.length) return [item, ...branch];
      }
    }
    return [];
  }
  let activeBranch = findActiveBranch(sidebarItems, currentPath);
  if (!activeBranch.length && currentPath.startsWith('/clasica')) {
    activeBranch = findActiveBranch(sidebarItems, '/clasica');
  }
  if (!activeBranch.length && currentPath.startsWith('/fisica')) {
    activeBranch = findActiveBranch(sidebarItems, '/fisica');
  }
  // initialize openSet from activeBranch so the path to current page is expanded
  useState(() => {
    if (activeBranch.length) {
      const s = new Set(activeBranch.map((it) => it.link));
      setOpenSet(s);
    }
  });
  const toggleOpen = (link) => {
    setOpenSet((prev) => {
      const s = new Set(prev);
      if (s.has(link)) s.delete(link);
      else s.add(link);
      return s;
    });
  };
  const iconsToShow = activeBranch.length
  ? activeBranch.map((item, idx) => ({ icon: item.icon, iconClass: item.iconClass, label: item.label, active: idx === activeBranch.length - 1 }))
  : sidebarItems.map((item) => ({ icon: item.icon, iconClass: item.iconClass, label: item.label, active: false }));
  return (
    <aside className={`sidebar sidebar-flex${isWide ? ' sidebar-wide' : ' sidebar-narrow'}`}
      tabIndex={0}
    onMouseEnter={() => { setIsWide(true); if (onWidthChange) onWidthChange(true); }}
    onMouseLeave={() => { setIsWide(false); if (onWidthChange) onWidthChange(false); }}
    >
      <div className="sidebar-content">
        {isWide ? (
          <SidebarRecursive items={sidebarItems} currentPath={currentPath} openSet={openSet} toggleOpen={toggleOpen} />
        ) : (
          <ul className="sidebar-list sidebar-narrow-list">
            {iconsToShow.map((item, idx) => (
              <li key={item.label + idx}>
                <span className={`sidebar-icon${item.active ? ' sidebar-icon-active' : ''}`}>
                  {item.icon ? item.icon : (item.iconClass ? <i className={`bi ${item.iconClass}`}></i> : null)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* botón de herramientas (simple) */}
      <div className="sidebar-footer-button">
        <Link
          to="/pages/Constantes"
          title="Constantes"
          aria-label="Constantes"
          className="tools-button"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 0', textDecoration: 'none' }}
        >
          <i className="bi bi-rulers" aria-hidden="true" style={{ fontSize: 20, color: '#fff' }}></i>
          {isWide ? <span style={{ marginLeft: 8, color: '#fff' }}>Constantes</span> : null}
        </Link>
      </div>
      <div className="sidebar-footer-label">
        <span style={{ display: 'inline-block', lineHeight: 1.1 }}>Phyxio<br/>C. Coullaut</span>
      </div>
    </aside>
  );
}