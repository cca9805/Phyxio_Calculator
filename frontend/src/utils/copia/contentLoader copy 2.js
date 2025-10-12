import { topicsData } from '../data/topics';

// Helper to find the main topic (e.g., 'electricidad') for a subtopic (e.g., 'ohm')
const findTopicForSubtopic = (subtopicId) => {
    for (const topicKey in topicsData) {
        if (topicsData[topicKey].cards.some(card => card.tipo === subtopicId)) {
            return topicKey;
        }
    }
    return null;
};

// Generic loader for JS modules
const loadJsModule = async (path) => {
    try {
        return await import(/* @vite-ignore */ path);
    } catch (error) {
        return null;
    }
};

// Generic loader for raw text files (like .md)
const loadRawFile = async (path) => {
    try {
        const module = await import(/* @vite-ignore */ `${path}?raw`);
        return module.default;
    } catch (error) {
        return null;
    }
};

export const getCalculatorsByTopic = async (subtopicId) => {
    const topicId = findTopicForSubtopic(subtopicId);
    if (!topicId) return [];
    const module = await loadJsModule(`../data/${topicId}/${subtopicId}/${subtopicId}Calculators.js`);
    return module ? module.calculators : [];
};

export const getFormulasByTopic = async (subtopicId) => {
    const topicId = findTopicForSubtopic(subtopicId);
    if (!topicId) return [];
    const module = await loadJsModule(`../data/${topicId}/${subtopicId}/${subtopicId}Formulas.js`);
    return module ? module.formulas : [];
};

export const getTheoryByTopic = async (subtopicId) => {
    const topicId = findTopicForSubtopic(subtopicId);
    if (!topicId) return null;
    return await loadRawFile(`../data/${topicId}/${subtopicId}/teoria.md`);
};

export const getExercisesByTopic = async (subtopicId) => {
    const topicId = findTopicForSubtopic(subtopicId);
    if (!topicId) return [];

    // Try loading .js first
    let module = await loadJsModule(`../data/${topicId}/${subtopicId}/ejercicios.js`);
    if (module && module.exercises) {
        return module.exercises;
    }

    // If .js fails or doesn't have 'exercises', try .json
    module = await loadJsModule(`../data/${topicId}/${subtopicId}/ejercicios.json`);
    if (module && module.default) {
        return module.default; // JSON files are imported as default
    }

    return []; // Return empty if neither is found
};
