import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { temasEstaticaNivel2 } from '../data/estaticaNivel2';
import { Link } from 'react-router-dom';
import '../styles/inicio.css';
import '../styles/base/_variables.css';

export default function EstaticaNivel2() {
  useEffect(() => {
    console.log('Estatica mounted');
    console.log('temasEstaticaNivel2 ->', temasEstaticaNivel2);
  }, []);

  return (
    <Layout title="Estática" intro="Es la rama de la mecánica que estudia los cuerpos en equilibrio, es decir, aquellos que no están en movimiento o que se mueven con velocidad constante.">
          <div className="tema-cards-row">
            {Array.isArray(temasEstaticaNivel2) && temasEstaticaNivel2.map((tema) => (
              <div
                className={`tema-card ${tema.tipo}`}
                key={tema.tipo}
                data-theme={tema.tipo}
              >
                <span className="tema-card-icon">
                  <img src={tema.icono} alt={tema.titulo} />
                </span>
                <div className="tema-card-content">
                  <div className="tema-card-title">{tema.titulo}</div>
                  <div className="tema-card-desc">{tema.descripcion}</div>
                  <Link className={`tema-card-btn ${tema.btn.clase}`} to={tema.btn.link} state={{ variant: tema.btn.clase, palette: tema.palette }}>
                    {tema.btn.texto}
                  </Link>
                </div>
              </div>
            ))}
      </div>

      <div className="compara-card" style={{ marginTop: '1.5rem' }}>
        <strong>Estudio de la estática:</strong>
        <br />
        La estática analiza las condiciones para que los cuerpos permanezcan en equilibrio, tanto traslacional (ΣF = 0) como rotacional (Στ = 0).
        <br />
        Se aplica en el diseño de estructuras, puentes, edificios y máquinas, asegurando que no colapsen ni se deformen bajo cargas.
        <br />
        El centro de masa y el centro de gravedad son claves para la estabilidad.
        <br />
        Los diagramas de cuerpo libre ayudan a visualizar todas las fuerzas que actúan sobre un objeto.
        <br />
        La fricción puede ser esencial para mantener el equilibrio, como en rampas o apoyos.
        <br />
        <strong>Curiosidades:</strong>
        <br />
        • Los antiguos egipcios usaron principios de estática para construir las pirámides.
        <br />
        • El equilibrio de fuerzas permite que enormes puentes colgantes se mantengan estables con cables muy delgados.
        <br />
        • En arquitectura, la forma de los arcos y bóvedas distribuye las fuerzas para soportar grandes pesos.
        <br />
        • El análisis de estructuras es fundamental en ingeniería civil, mecánica y aeroespacial.
        <br />
        • La estática explica por qué algunos objetos parecen "imposibles" pero son estables, como esculturas balanceadas.
      </div>
    </Layout>
  );
}