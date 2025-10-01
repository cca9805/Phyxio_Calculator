// Componente centralizado para páginas de nivel
function PageTemplate({ title, intro, cards }) {
  return (
    <div className="page">
      <h1 className="titulo-seccion">{title}</h1>
      <p className="texto-descripcion">{intro}</p>
      <div className="grid-2col">
        {cards.map(card => (
          <div className="card" key={card.title} onClick={card.onClick} style={{cursor: 'pointer'}}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PageTemplate;
