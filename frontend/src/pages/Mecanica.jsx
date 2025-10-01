import '../styles/inicio.css';
import Layout from '../components/Layout';
import { temasMecanicaNivel2 } from '../data/mecanicaNivel2';
import { introCards } from '../data/introCards';

function MecanicaNivel2Page() {
  return (
    <Layout title={introCards.mecanicaNivel2.titulo} intro={introCards.mecanicaNivel2.texto}>
      <div className="tema-cards-row">
        {temasMecanicaNivel2.map(card => (
          <div className={`tema-card ${card.tipo}`} key={card.tipo}>
            <span className="tema-card-icon">
              <img src={card.icono} alt={card.titulo} />
            </span>
            <div className="tema-card-content">
              <div className="tema-card-title">{card.titulo}</div>
              <div className="tema-card-desc">{card.descripcion}</div>
              <a className={`tema-card-btn ${card.btn.clase}`} href={card.btn.link}>{card.btn.texto}</a>
            </div>
          </div>
        ))}
      </div>
      <div className="compara-card">
        <h3>Comparativa rápida</h3>
        <ul>
          <li><b>Cinemática:</b> Describe el movimiento sin analizar sus causas.</li>
          <li><b>Dinámica:</b> Explica el movimiento considerando las fuerzas que lo producen.</li>
          <li><b>Estática:</b> Estudia el equilibrio de los cuerpos y las fuerzas en reposo.</li>
        </ul>
      </div>
    </Layout>
  );
}

export default MecanicaNivel2Page;
