import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { topicsData } from '../data/topics';
import { Link } from 'react-router-dom';

export default function TopicPage() {
    const { topicId: paramTopicId } = useParams();
    const location = useLocation();

    // Determinamos el ID del tema a mostrar.
    // Si el topicId viene en los parámetros de la URL (ej: /clasica/mecanica), tiene prioridad.
    // Si no, lo inferimos del último segmento de la ruta (ej: /clasica -> 'clasica').
    const effectiveTopicId = paramTopicId || location.pathname.split('/').pop() || 'clasica';

    const topic = topicsData[effectiveTopicId];

    // Si el tema no se encuentra, mostramos un mensaje de error.
    if (!topic) {
        return (
            <div className="page-root">
                <div className="intro-card theme-sky">
                    <strong>Error</strong>
                    <div>El tema que buscas ({effectiveTopicId}) no existe.</div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-root">
            <div className="intro-card theme-sky">
                <strong>{topic.title}</strong>
                <div>{topic.intro}</div>
            </div>
            <div className="tema-cards-row theme-sky">
                {Array.isArray(topic.cards) && topic.cards.map((card) => (
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
                )
    )}
</div>
{/* Renderizamos contenido adicional si existe */}
{topic.additionalContent && (
    <div className="compara-card theme-sky" dangerouslySetInnerHTML={{ __html: topic.additionalContent }} />
)}
</div>
    );
}