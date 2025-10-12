
import { topicsData } from '../data/topics';

// Finds the direct parent of a subtopic by searching all cards in topicsData.
const findParent = (childId) => {
    for (const parentId in topicsData) {
        const topic = topicsData[parentId];
        if (topic.cards && topic.cards.some(card => card.tipo === childId)) {
            return parentId;
        }
    }
    return null;
};

// Constructs the proper folder path prefix for a given subtopic ID.
const findFullPathPrefix = (subtopicId) => {
    const path = [];
    let currentId = subtopicId;
    // Traverse up the hierarchy to build the path
    while (currentId) {
        const parent = findParent(currentId);
        // Stop when we reach the top-level 'clasica' or if there's no parent
        if (!parent || parent === 'clasica') {
            break;
        }
        path.unshift(parent);
        currentId = parent;
    }

    // Special handling for 'mecanica' sub-topics, which have a flatter directory structure.
    if (path.length > 0 && path[0] === 'mecanica') {
        // The path should be like 'cinematica/mru' instead of 'mecanica/cinematica/mru'
        path.shift();
    }
    
    return path.join('/');
};


// Generic loader for JS modules
const loadJsModule = async (path) => {
    try {
        // Use a static path for Vite's dynamic import analysis, with variables for the specific file
        return await import(/* @vite-ignore */ path);
    } catch (error) {
        // console.error(`Failed to load JS module at ${path}:`, error);
        return null;
    }
};

// Generic loader for raw text files (like .md)
const loadRawFile = async (path) => {
    try {
        const module = await import(/* @vite-ignore */ `${path}?raw`);
        return module.default;
    } catch (error) {
        // console.error(`Failed to load raw file at ${path}:`, error);
        return null;
    }
};

const buildPath = (subtopicId, fileName) => {
    const prefix = findFullPathPrefix(subtopicId);
    if (prefix) {
        return `../data/${prefix}/${subtopicId}/${fileName}`;
    }
    // Handle top-level topics that might not have a prefix
    return `../data/${subtopicId}/${fileName}`;
}

export const getCalculatorsByTopic = async (subtopicId) => {
    const path = buildPath(subtopicId, `${subtopicId}Calculators.js`);
    const module = await loadJsModule(path);
    return module ? module.calculators : [];
};

export const getFormulasByTopic = async (subtopicId) => {
    const path = buildPath(subtopicId, `${subtopicId}Formulas.js`);
    const module = await loadJsModule(path);
    return module ? module.formulas : [];
};

export const getTheoryByTopic = async (subtopicId) => {
    const path = buildPath(subtopicId, `teoria.md`);
    return await loadRawFile(path);
};

export const getExercisesByTopic = async (subtopicId) => {
    const path = buildPath(subtopicId, `ejercicios.json`);
    const module = await loadJsModule(path);
    if (module && module.default) {
        return module.default;
    }

    return []; // Return empty if not found
};
