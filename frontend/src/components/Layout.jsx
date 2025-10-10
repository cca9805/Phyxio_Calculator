import React from 'react';
import { Navbar, Sidebar } from './NavbarSidebar';
import { useSidebar } from '../hooks/useSidebar';

const Layout = ({ children }) => {
  // El hook ahora provee todo lo necesario para manejar el estado del sidebar
  const { isExpanded, toggleSidebar, openSet, toggleOpen } = useSidebar();

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar 
          isExpanded={isExpanded} 
          openSet={openSet} 
          toggleOpen={toggleOpen} 
        />
      </div>
      <div className="main-layout">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
