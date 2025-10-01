import React, { useEffect, useState } from 'react';
import { getExercisesByTopic } from '../utils/loadEjercicios';

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

  return (
    <div className="exercises-list">
      {items.map(item => <ExerciseCard key={item.id || item.title} item={item} />)}
    </div>
  );
}

function ExerciseCard({ item }) {
  const [showSolution, setShowSolution] = useState(false);
  return (
    <div className="exercises-card" style={{ marginBottom: '1rem', borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)', padding: '0.75rem' }}>
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h3>
      <p style={{ margin: '0 0 0.5rem 0', color: 'var(--muted, #666)' }}>{item.prompt || item.description}</p>
      <button className="exercise-button" onClick={() => setShowSolution(s => !s)} style={{ marginBottom: '0.5rem' }}>
        {showSolution ? 'Ocultar solución' : 'Ver solución'}
      </button>
      {showSolution && (
        <div className="solution">
          {Array.isArray(item.solution) ? (
            <ol style={{ paddingLeft: '1.25rem' }}>
              {item.solution.map((step, i) => <li key={i} style={{ marginBottom: '0.25rem' }}>{step}</li>)}
            </ol>
          ) : (
            <p>{item.solution}</p>
          )}
          {item.answer && (
            <div style={{ marginTop: '0.5rem', padding: '0.5rem', borderRadius: 6, background: 'rgba(0,0,0,0.03)' }}>
              <strong>Respuesta:</strong> {item.answer}
            </div>
          )}
        </div>
      )}
    </div>
  );
}