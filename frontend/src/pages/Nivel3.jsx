import React, { useState } from 'react';
import SubtopicLayout from '../components/SubtopicLayout';
import '../styles/nivel3.css';

function Exercise({ sample, onResult }) {
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState(null); // 'ok' | 'wrong' | 'seen'

  function check() {
    if (answer.trim() === '') return;
    if (answer.trim() === String(sample.correct)) {
      setStatus('ok');
      onResult && onResult('ok');
    } else {
      setStatus('wrong');
      onResult && onResult('wrong');
    }
  }

  function seeSolution() {
    setStatus('seen');
    onResult && onResult('seen');
  }

  return (
    <div className="exercise-card">
      <div className="exercise-problem">{sample.question}</div>
      <div className="exercise-controls">
        <input value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Tu resultado" />
        <button onClick={check}>Comprobar</button>
        <button onClick={seeSolution}>Ver solución</button>
      </div>
      <div className="exercise-result">
        {status === 'ok' && <div className="ok">¡Correcto! 🎉</div>}
        {status === 'wrong' && <div className="wrong">No es correcto, repasa los pasos.</div>}
        {status === 'seen' && <div className="seen">Solución: {sample.correct}</div>}
      </div>
    </div>
  );
}

export default function Nivel3() {
  const [solved, setSolved] = useState(0);
  const [unsolved, setUnsolved] = useState(0);
  const [seen, setSeen] = useState(0);

  // sample exercise data
  const exercises = [
    { id: 1, question: 'Calcula la velocidad final para v0=0, a=2, t=3 (v = v0 + a t)', correct: 6 },
    { id: 2, question: 'Calcula la distancia recorrida con v0=0, a=2, t=3 (s = v0 t + 1/2 a t^2)', correct: 9 },
  ];

  return (
    <SubtopicLayout
      meta={{ title: 'Nivel 3 - Subtema', intro: 'Aquí va la introducción breve', tldr: 'Resumen del subtema', estimatedTime: '20–40 minutos' }}
      items={[
        { id: 'teoria', title: 'Teoría', content: <p>Explicación didáctica del subtema.</p> },
        { id: 'ejemplos', title: 'Ejemplos prácticos', content: <div className="examples-row"><article className="example-card"><h3>Ejemplo 1</h3><p>Enunciado del ejemplo.</p></article></div> },
        { id: 'formulas', title: 'Fórmulas', content: <ul className="formulas"><li>v = v0 + a t</li><li>s = v0 t + 1/2 a t^2</li></ul> },
        { id: 'ejercicios', title: 'Ejercicios', content: <div className="exercises-list">{exercises.map(ex => <Exercise key={ex.id} sample={ex} onResult={(r) => { if (r === 'ok') setSolved(s => s + 1); if (r === 'wrong') setUnsolved(u => u + 1); if (r === 'seen') setSeen(s => s + 1); }} />)}<div className="exercise-counters">Resueltos: {solved} — No resueltos: {unsolved} — Vistos: {seen}</div></div> },
        { id: 'calculadoras', title: 'Calculadoras', content: <Calculator /> },
        { id: 'tips', title: 'Tips', content: <ul><li>Tip 1: Una nota útil.</li><li>Tip 2: Otra recomendación breve.</li></ul> }
      ]}
    >
      {/* children area kept empty because content is provided via items */}
    </SubtopicLayout>
  );
}