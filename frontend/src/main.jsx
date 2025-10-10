import { StrictMode } from 'react';
import { createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// Estilos de KateX
import 'katex/dist/katex.min.css';

// Estilos de la App
import './styles/base.css';
import './styles/themes.css';
import './styles/components.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
