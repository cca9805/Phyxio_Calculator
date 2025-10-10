import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

// Importar componentes de layout
import { Navbar, Sidebar } from './components/NavbarSidebar';

// Importar páginas
import Index from './pages/Index';
import Constantes from './pages/Constantes';
import SubtopicPage from './pages/SubtopicPage';
import TopicPage from './pages/TopicPage';

// Componente que define el Layout principal de la aplicación
const AppLayout = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false); // Por defecto, la sidebar estará contraída

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content-area">
          <div 
            className="sidebar-container"
            onMouseEnter={() => setSidebarExpanded(true)}
            onMouseLeave={() => setSidebarExpanded(false)}
          >
            <Sidebar isExpanded={isSidebarExpanded} />
          </div>
          <main className="main-content">
            {/* Outlet renderizará la página que corresponda a la ruta actual */}
            <Outlet />
          </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Routes>
        {/* Todas las rutas se renderizan dentro de AppLayout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/constantes" element={<Constantes />} />
          <Route path="/fisica" element={<Index />} />
          <Route path="/clasica" element={<TopicPage />} />
          <Route path="/clasica/:topicId" element={<TopicPage />} />
          <Route path="/clasica/mecanica/:topicId" element={<TopicPage />} />
          <Route path="/clasica/mecanica/:topicId/:subtopicId/*" element={<SubtopicPage />} />
          <Route path="/clasica/electromagnetismo/:topicId" element={<TopicPage />} />
          <Route path="/clasica/electromagnetismo/:topicId/:subtopicId/*" element={<SubtopicPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
