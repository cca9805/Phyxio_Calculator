import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import { topicsData } from '../data/topics';
import { getTheoryByTopic, getExercisesByTopic, getFormulasByTopic, getCalculatorsByTopic } from '../utils/contentLoader';
import Accordion from '../components/Accordion';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import CalculadoraCommon from '../components/CalculadoraCommon';

const ExerciseRenderer = ({ exercise, index }) => {
    const [showSolution, setShowSolution] = useState(false);

    return (
        <div className="exercises-card markdown-content">
            <div className="formula-card theme-sky">
                <ReactMarkdown
                    children={`**Ejercicio ${index + 1}:** ${exercise.prompt}`}
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                />
                <button
                    onClick={() => setShowSolution(!showSolution)}
                    type="button" 
                    className="btn btn-info"
                >
                    {showSolution ? 'Ocultar' : 'Ver Respuesta'}
                </button>
                {showSolution && (
                    <div className="mt-4 pt-3 border-t border-gray-200">
                        <h4 className="font-semibold text-md text-gray-800">Desarrollo:</h4>
                        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                            {Array.isArray(exercise.solution) && exercise.solution.map((step, i) => (
                                <li key={i}><ReactMarkdown children={step} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} /></li>
                            ))}
                        </ul>
                        <div className="mt-4 font-bold text-md text-gray-800">
                            Respuesta: <ReactMarkdown
                                children={exercise.answer}
                                remarkPlugins={[remarkMath]}
                                rehypePlugins={[rehypeKatex]}
                                className="inline"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


export default function SubtopicPage() {
    const { topicId, subtopicId } = useParams();

    const [theoryContent, setTheoryContent] = useState(null);
    const [exercisesArray, setExercisesArray] = useState([]);
    const [formulasContent, setFormulasContent] = useState('');
    const [calculatorsArray, setCalculatorsArray] = useState([]);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const subtopicInfo = topicsData[topicId]?.cards?.find(card => card.tipo === subtopicId);

    useEffect(() => {
        if (!subtopicId) { setLoading(false); return; }
        
        const fetchContent = async () => {
            setLoading(true);
            setError(null);
            try {
                const [theory, exercises, formulas, calculators] = await Promise.all([
                    getTheoryByTopic(subtopicId).catch(() => null),
                    getExercisesByTopic(subtopicId).catch(() => []),
                    getFormulasByTopic(subtopicId).catch(() => []),
                    getCalculatorsByTopic(subtopicId).catch(() => []),
                ]);

                setTheoryContent(theory);
                setExercisesArray(exercises || []);
                
                const formulasText = formulas.map(f => `#### ${f.title}\n\n${f.formula}\n\n${f.description}`).join('\n\n---\n\n');
                setFormulasContent(formulasText);

                setCalculatorsArray(calculators || []);

            } catch (err) { 
                setError('Error crítico al cargar contenido.'); 
                console.error(err); 
            } finally { 
                setLoading(false); 
            }
        };
        fetchContent();
    }, [subtopicId, topicId]);

    if (loading) return <div className="page-root text-center p-8">Cargando...</div>;
    if (!subtopicInfo) return <div className="page-root intro-card theme-red text-center"><strong>Error:</strong><p>No se encontró la configuración para <strong>{subtopicId}</strong>.</p><Link to="/" className="btn btn-primary">Volver</Link></div>;
    if (error) return <div className="page-root intro-card theme-red text-center"><strong>Error Crítico:</strong><p>{error}</p></div>;

    return (
        <div className="page-root">
            <div className="intro-card theme-sky">
                <strong>{subtopicInfo.titulo}</strong>
                <p>{subtopicInfo.descripcion}</p>
            </div>

            <div className="accordions-container">
                <Accordion title="Teoría">
                    <div className="p-4 markdown-content">
                        {theoryContent ? (
                            <ReactMarkdown 
                                children={theoryContent} 
                                remarkPlugins={[remarkMath]}
                                rehypePlugins={[rehypeKatex]}
                            />
                        ) : <p>No hay teoría disponible.</p>}
                    </div>
                </Accordion>
                
                <Accordion title="Ejercicios">
                    <div className="p-4">
                        {exercisesArray.length > 0 ? (
                            exercisesArray.map((ex, i) => (
                                <ExerciseRenderer key={ex.id || i} exercise={ex} index={i} />
                            ))
                        ) : <p>No hay ejercicios disponibles.</p>}
                    </div>
                </Accordion>
                
                <Accordion title="Fórmulas">
                    <div className="p-4 markdown-content">
                         <ReactMarkdown 
                            children={formulasContent} 
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                        />
                    </div>
                </Accordion>

                <Accordion title="Calculadora">
                    <div className="p-4">
                        <CalculadoraCommon calculators={calculatorsArray} />
                    </div>
                </Accordion>
            </div>
        </div>
    );
}
