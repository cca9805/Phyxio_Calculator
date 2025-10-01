
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { temasCinematicaNivel2 } from '../data/cinematicaNivel2';
import { Link } from 'react-router-dom';
import '../styles/inicio.css';
import '../styles/base/_variables.css';

export default function CinematicaNivel2() {
  useEffect(() => {
    console.log('Cinematica mounted');
    console.log('temasCinematicaNivel2 ->', temasCinematicaNivel2);
  }, []);

  return (
    <Layout title="Cinemática" intro="Estudia los movimientos sin considerar las causas que los producen.">
      <div className="tema-cards-row">
        {Array.isArray(temasCinematicaNivel2) && temasCinematicaNivel2.map((tema) => (
          <div className={`tema-card ${tema.tipo}`} key={tema.tipo}>
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
      <div className="compara-card">
        <strong>Comparativa:</strong>
        <br />
        MRU: velocidad constante.<br />
        MRUV: aceleración constante.<br />
        MCU: trayectoria circular, velocidad angular constante.<br />
        MCUA: trayectoria circular, aceleración angular constante.<br />
        MAS: oscilaciones periódicas.<br />
        MP: trayectoria parabólica bajo gravedad.<br />
        MR: movimiento relativo entre sistemas de referencia.
      </div>
    </Layout>
  );
}