import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Sidebar } from './NavbarSidebar';

export default function Layout({ title, intro, children }) {
  const location = useLocation();
  // allow links to pass { state: { palette: '<name>' } } (preferred) or
  // { state: { variant: '<class>' } } as fallback so the intro-card can
  // pick the corresponding CSS variable like --<palette>-300
  const palette = location.state && (location.state.palette || location.state.variant) ? (location.state.palette || location.state.variant) : null;
  const introStyle = palette ? { background: `var(--${palette}-300)`, color: `var(--${palette}-900)` } : {};

  return (
    <div className="inicio-container" style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
        <Navbar />
        <div style={{ display: 'flex', flex: 1, width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
          <Sidebar />
          <main style={{ 
            flex: 1, 
            width: '100%', 
            maxWidth: '100%', 
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div className="nivel1-card" style={{ width: '100%', maxWidth: '100%', minHeight: '100%' }}>
              {title || intro ? (
                <>
                  <div className="intro-card" style={introStyle}>
                    <strong>{title}</strong>
                    <div>{intro}</div>
                  </div>
                  <hr className="intro-separator" />
                </>
              ) : null}
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
