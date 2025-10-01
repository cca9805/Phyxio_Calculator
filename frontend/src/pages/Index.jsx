import '../styles/inicio.css';
import Layout from '../components/Layout';
import { temasFisica } from '../data/fisicaDatos';
import { introCards } from '../data/introCards';

function IndexPage() {
  return (
    <div className="page-root">
      <Layout title={introCards.index.titulo} intro={introCards.index.texto}>
        <div className="tema-cards-row">
          {temasFisica.map(card => (
            <div className={`tema-card ${card.tipo}`} key={card.tipo}>
              <span className="tema-card-icon">
                <img src={card.icono} alt={card.titulo} style={{width: '48px', height: '48px', objectFit: 'contain'}} />
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
          <h3>¿En qué se diferencian?</h3>
          <ul>
            <li><strong>Clásica:</strong> Objetos grandes y velocidades bajas.</li>
            <li><strong>Moderna:</strong> Partículas subatómicas y altas velocidades.</li>
            <li><strong>Clásica: Newton, Galileo:</strong> Leyes del movimiento y fuerza.</li>
            <li><strong>Moderna: Einstein, Planck:</strong> Relatividad y teoría cuántica.</li>
          </ul>
        </div>
      </Layout>
    </div>
  );
}

export default IndexPage;
