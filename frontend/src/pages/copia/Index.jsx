import { temasFisica } from '../data/fisicaDatos';
import '../styles/pages.css';

function IndexPage() {
  const titulo = '¿Qué es la Física?';
  const intro = 'La física estudia cómo funciona el universo: el movimiento, las fuerzas, la energía, el espacio y el tiempo. Se divide en ramas como la Física Clásica y la Moderna según la época y fenómenos que trata.';

  return (
    <div className="page-root">
        <div className="intro-card theme-sky">
              <strong>{titulo}</strong>
              <div>{intro}</div>
        </div>
        <div className="tema-cards-row">
          {temasFisica.map(card => (
            <div className={`tema-card theme-sky ${card.tipo}`} key={card.tipo}>
              <span className="tema-card-icon">
                <img src={card.icono} alt={card.titulo} className="tema-card-icon-img" />
              </span>
              <div className="tema-card-content">
                <div className="tema-card-title">{card.titulo}</div>
                <div className="tema-card-desc">{card.descripcion}</div>
                <a className={`tema-card-btn ${card.btn.clase}`} href={card.btn.link}>{card.btn.texto}</a>
              </div>
            </div>
          ))}
        </div>
        <div className="compara-card theme-sky">
          <h3>¿En qué se diferencian?</h3>
          <ul>
            <li><strong>Clásica:</strong> Objetos grandes y velocidades bajas.</li>
            <li><strong>Moderna:</strong> Partículas subatómicas y altas velocidades.</li>
            <li><strong>Clásica: Newton, Galileo:</strong> Leyes del movimiento y fuerza.</li>
            <li><strong>Moderna: Einstein, Planck:</strong> Relatividad y teoría cuántica.</li>
          </ul>
        </div>
    </div>
  );
}

export default IndexPage;
