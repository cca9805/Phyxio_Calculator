import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Importar estilos de KaTeX
import 'katex/dist/katex.min.css';

// Importar estilos globales
import './styles/main.css';

// Importar estilos de nivel3 directamente aquí para asegurar que se carguen
import './styles/nivel3.css';

// Importar la aplicación
import App from './App';

// Crear la raíz de la aplicación
const container = document.getElementById('root');
const root = createRoot(container);

// Renderizar la aplicación
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
