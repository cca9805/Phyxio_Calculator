import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
// Importar estilos globales (ya se importan en main.jsx)
import './styles/main.css';
import Index from './pages/Index';
import Constantes from './pages/Constantes';
import Clasica from './pages/Clasica';
import Mecanica from './pages/Mecanica';
import Cinematica from './pages/Cinematica';
import Dinamica from './pages/Dinamica';
import Estatica from './pages/Estatica';
import Nivel3 from './pages/Nivel3';
import MRU from './pages/cinematica/MRU';
import MRUV from './pages/cinematica/MRUV';
import MCU from './pages/cinematica/MCU';
import MCUA from './pages/cinematica/MCUA';
import MAS from './pages/cinematica/MAS';
import MP from './pages/cinematica/MP';
import MR from './pages/cinematica/MR';
import NEWTON from './pages/dinamica/NEWTON';
import TrabajoEnergia from './pages/dinamica/TRABAJOENERGIA';
import MOVIMPULSO from './pages/dinamica/MOVIMPULSO';
import EQUILIBRIO from './pages/dinamica/EQUILIBRIO';
import FRICCION from './pages/dinamica/FRICCION';
import GRAVITACION from './pages/dinamica/GRAVITACION';
import MAQUINAS from './pages/dinamica/MAQUINAS';
import OSCILACIONES from './pages/dinamica/OSCILACIONES';
import ROTACION from './pages/dinamica/ROTACION';
import MASASPOLEAS from './pages/dinamica/MASASPOLEAS';
import FUERZAS from './pages/estatica/FUERZAS';
import TORQUE from './pages/estatica/TORQUE';
import CENTRO from './pages/estatica/CENTRO';
import LEYES from './pages/estatica/LEYES';
import APOYOS from './pages/estatica/APOYOS';
import DIAGRAMAS from './pages/estatica/DIAGRAMAS';
import FRICCIONEST from './pages/estatica/FRICCIONEST';
import ESTRUCTURAS from './pages/estatica/ESTRUCTURAS';
import ESTABILIDAD from './pages/estatica/ESTABILIDAD';
import APLICACIONES from './pages/estatica/APLICACIONES';

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/constantes" element={<Constantes />} />
      
      {/* alias para compatibilidad con links que usan /pages/Constantes */}
      <Route path="/pages/Constantes" element={<Constantes />} />
      <Route path="/fisica" element={<Index />} />
      <Route path="/clasica" element={<Clasica />} />
      <Route path="/clasica/nivel2" element={<Clasica />} />
      <Route path="/clasica/nivel3" element={<Nivel3 />} />
      <Route path="/clasica/mecanica" element={<Mecanica />} />
      <Route path="/clasica/mecanica/cinematica" element={<Cinematica />} />
      <Route path="/clasica/mecanica/dinamica" element={<Dinamica />} />
      <Route path="/clasica/mecanica/estatica" element={<Estatica />} />
      
      {/* Cinemática subtemas: rutas completas y anidadas */}
      <Route path="/clasica/mecanica/cinematica/mru/*" element={<MRU />} />
      <Route path="/clasica/mecanica/cinematica/mruv/*" element={<MRUV />} />
      <Route path="/clasica/mecanica/cinematica/mcu" element={<MCU />} />
      <Route path="/clasica/mecanica/cinematica/mcua" element={<MCUA />} />
      <Route path="/clasica/mecanica/cinematica/mas" element={<MAS />} />
      <Route path="/clasica/mecanica/cinematica/mp" element={<MP />} />
      <Route path="/clasica/mecanica/cinematica/mr" element={<MR />} />
      
      {/* Dinámica subtemas: rutas completas y anidadas */}
      <Route path="/clasica/mecanica/dinamica/newton" element={<NEWTON />} />
      <Route path="/clasica/mecanica/dinamica/trabajoenergia" element={<TrabajoEnergia />} />
      <Route path="/clasica/mecanica/dinamica/movimpulso" element={<MOVIMPULSO />} />
      <Route path="/clasica/mecanica/dinamica/equilibrio" element={<EQUILIBRIO />} />
      <Route path="/clasica/mecanica/dinamica/friccion" element={<FRICCION />} />
      <Route path="/clasica/mecanica/dinamica/gravitacion" element={<GRAVITACION />} />
      <Route path="/clasica/mecanica/dinamica/maquinas" element={<MAQUINAS />} />
      <Route path="/clasica/mecanica/dinamica/oscilaciones" element={<OSCILACIONES />} />
      <Route path="/clasica/mecanica/dinamica/rotacion" element={<ROTACION />} />
      <Route path="/clasica/mecanica/dinamica/masaspoleas" element={<MASASPOLEAS />} />

      {/* Estática subtemas: rutas completas y anidadas */}
      <Route path="/clasica/mecanica/estatica/fuerzas" element={<FUERZAS />} />
      <Route path="/clasica/mecanica/estatica/torque" element={<TORQUE />} />
      <Route path="/clasica/mecanica/estatica/centro" element={<CENTRO />} />
      <Route path="/clasica/mecanica/estatica/leyes" element={<LEYES />} />
      <Route path="/clasica/mecanica/estatica/apoyos" element={<APOYOS />} />
      <Route path="/clasica/mecanica/estatica/diagramas" element={<DIAGRAMAS />} />
      <Route path="/clasica/mecanica/estatica/friccionest" element={<FRICCIONEST />} />
      <Route path="/clasica/mecanica/estatica/estructuras" element={<ESTRUCTURAS />} />
      <Route path="/clasica/mecanica/estatica/estabilidad" element={<ESTABILIDAD />} />
      <Route path="/clasica/mecanica/estatica/aplicaciones" element={<APLICACIONES />} />

      {/* rutas directas para compatibilidad con /dinamica/... */}
      <Route path="/dinamica/newton" element={<NEWTON />} />
      <Route path="/dinamica/trabajoenergia" element={<TrabajoEnergia />} />
      <Route path="/dinamica/movimpulso" element={<MOVIMPULSO />} />
      <Route path="/dinamica/equilibrio" element={<EQUILIBRIO />} />
      <Route path="/dinamica/friccion" element={<FRICCION />} />
      <Route path="/dinamica/gravitacion" element={<GRAVITACION />} />
      <Route path="/dinamica/maquinas" element={<MAQUINAS />} />
      <Route path="/dinamica/oscilaciones" element={<OSCILACIONES />} />
      <Route path="/dinamica/rotacion" element={<ROTACION />} />
      <Route path="/dinamica/masaspoleas" element={<MASASPOLEAS />} />
      
      {/* rutas directas para compatibilidad con /estatica/... */}
      <Route path="/estatica/fuerzas" element={<FUERZAS />} />
      <Route path="/estatica/torque" element={<TORQUE />} />
      <Route path="/estatica/centro" element={<CENTRO />} />
      <Route path="/estatica/leyes" element={<LEYES />} />
      <Route path="/estatica/apoyos" element={<APOYOS />} />
      <Route path="/estatica/diagramas" element={<DIAGRAMAS />} />
      <Route path="/estatica/friccionest" element={<FRICCIONEST />} />
      <Route path="/estatica/estructuras" element={<ESTRUCTURAS />} />
      <Route path="/estatica/estabilidad" element={<ESTABILIDAD />} />
      <Route path="/estatica/aplicaciones" element={<APLICACIONES />} />
      </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
