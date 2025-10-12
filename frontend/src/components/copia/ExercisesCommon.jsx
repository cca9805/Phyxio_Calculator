import React, { useEffect, useState } from 'react';
import Accordion from './Accordion';
import { getExercisesByTopic } from '../utils/contentLoader';

export default function ExercisesCommon({ topicId = 'mcu' }) {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    (async () => {
      try {
        const data = await getExercisesByTopic(topicId);
        if (mounted) setItems(Array.isArray(data) ? data : []);
      } catch {
        if (mounted) setItems([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [topicId]);

  if (loading) return <div className="exercises-list">Cargando ejercicios…</div>;
  if (!items || !items.length) return <div className="exercises-list">No hay ejercicios disponibles.</div>;

  // Transforma los datos de los ejercicios al formato que espera el componente Accordion.
  const accordionItems = items.map(item => ({
    id: item.id || item.title, // Usa el id o el título como clave única.
    title: item.title, // El enunciado del ejercicio es el título del acordeón.
    content: <ExerciseSolution item={item} />, // El contenido es el componente con la solución.
  }));

  return (
    <div className="exercises-list">
      <Accordion items={accordionItems} />
    </div>
  );
}

// Componente interno para renderizar la solución de un ejercicio.
function ExerciseSolution({ item }) {
  return (
    <div className="solution">
      {/* Muestra la descripción o el planteamiento si existe. */}
      <p className="prompt">{item.prompt || item.description}</p>
      
      {/* Renderiza los pasos de la solución si es un array. */}
      {Array.isArray(item.solution) ? (
        <ol className="solution-steps">
          {item.solution.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      ) : (
        <p>{item.solution}</p>
      )}

      {/* Muestra la respuesta final si existe. */}
      {item.answer && (
        <div className="answer">
          <strong>Respuesta:</strong> {item.answer}
        </div>
      )}
    </div>
  );
}
