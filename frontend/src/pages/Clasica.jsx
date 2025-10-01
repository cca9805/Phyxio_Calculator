import '../styles/inicio.css';
import Layout from '../components/Layout';
import { temasClasicaNivel2 } from '../data/clasicaNivel2';
import { introCards } from '../data/introCards';

function ClasicaNivel2Page() {
  return (
    <Layout title={introCards.clasicaNivel2.titulo} intro={introCards.clasicaNivel2.texto}>
      <div className="tema-cards-row">
        {temasClasicaNivel2.map(card => (
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
    </Layout>
  );
}

export default ClasicaNivel2Page;
