
const CINEMATICA_TOPICS_PREFIX = [
    'mru', 'mruv', 'mcu', 'mcua', 'mas', 'mp', 'mr'
];

const DINAMICA_TOPICS_PREFIX = [
    'newton', 'trabajoenergia', 'movimpulso', 'equilibrio', 'friccion',
    'gravitacion', 'maquinas', 'oscilaciones', 'rotacion', 'masaspoleas'
];

const ESTATICA_TOPICS_PREFIX = [
    'fuerzas', 'torque', 'centro', 'leyes', 'apoyos', 'diagramas',
    'friccionest', 'estructuras', 'estabilidad', 'aplicaciones'
];

const ELECTRICIDAD_TOPICS_PREFIX = [
    'circuitos', 'corriente', 'ohm'
];

const MAGNETISMO_TOPICS_PREFIX = [
    'campos', 'induccion'
];

const MAXWELL_TOPICS_PREFIX = [
    'maxwell'
];

const KNOWN_TOPICS = [
    ...CINEMATICA_TOPICS_PREFIX,
    ...DINAMICA_TOPICS_PREFIX,
    ...ESTATICA_TOPICS_PREFIX,
    ...ELECTRICIDAD_TOPICS_PREFIX,
    ...MAGNETISMO_TOPICS_PREFIX,
    ...MAXWELL_TOPICS_PREFIX
];

function getTopicCategory(topic) {
    if (!topic) return null;

    if (CINEMATICA_TOPICS_PREFIX.includes(topic)) {
        return 'cinematica';
    }
    if (DINAMICA_TOPICS_PREFIX.includes(topic)) {
        return 'dinamica';
    }
    if (ESTATICA_TOPICS_PREFIX.includes(topic)) {
        return 'estatica';
    }
    if (ELECTRICIDAD_TOPICS_PREFIX.includes(topic)) {
        return 'electricidad';
    }
    if (MAGNETISMO_TOPICS_PREFIX.includes(topic)) {
        return 'magnetismo';
    }
    if (MAXWELL_TOPICS_PREFIX.includes(topic)) {
        return 'maxwell';
    }
    return null;
}

async function loadGenericContent(topicId, importFn) {
    if (!topicId) return null;
    const id = String(topicId).toLowerCase().trim();

    let content = await importFn(id);
    if (content) return content;

    // Fallback for cases where the topicId might be part of a larger string
    for (const t of KNOWN_TOPICS) {
        if (id.includes(t)) {
            content = await importFn(t);
            if (content) return content;
        }
    }

    return null;
}

async function tryImportTheory(topic) {
    const category = getTopicCategory(topic);
    if (!category) return null;

    try {
        const path = `../data/${category}/${topic}/teoria.md?raw`;
        const mdModule = await import(path);
        return mdModule?.default || null;
    } catch (e) {
        console.error(`Failed to import theory for topic "${topic}":`, e);
        return null;
    }
}

async function tryImportEjercicios(topic) {
    const category = getTopicCategory(topic);
    if (!category) return null;
    try {
        const path = `../data/${category}/${topic}/ejercicios.json`;
        const mod = await import(path);
        return mod?.default || mod || [];
    } catch {
        return null;
    }
}

async function tryImportFormulas(topic) {
    const category = getTopicCategory(topic);
    if (!category) return null;

    try {
        const path = `../data/${category}/${topic}/${topic}Formulas.js`;
        const mod = await import(path);
        return mod?.default || mod?.formulas || null;
    } catch {
        return null;
    }
}

async function tryImportCalculators(topic) {
    const category = getTopicCategory(topic);
    if (!category) return null;
    try {
        const path = `../data/${category}/${topic}/${topic}Calculators.js`;
        const mod = await import(path);
        return mod?.default || mod?.calculators || mod || null;
    } catch {
        return null;
    }
}

export const getTheoryByTopic = (topicId) => loadGenericContent(topicId, tryImportTheory);
export const getExercisesByTopic = (topicId) => loadGenericContent(topicId, tryImportEjercicios);
export const getFormulasByTopic = (topicId) => loadGenericContent(topicId, tryImportFormulas);
export const getCalculatorsByTopic = (topicId) => loadGenericContent(topicId, tryImportCalculators);
