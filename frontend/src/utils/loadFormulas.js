/**
 * getFormulasByTopic(topicId)
 * - intenta cargar dinámicamente el módulo de fórmulas para el topic
 * - soporta export default o named export { formulas }
 * - devuelve array o null
 */
const KNOWN_TOPICS = ['mcu', 'mcua', 'mru', 'mruv', 'mas', 'mp', 'mr', 'newton', 'trabajoenergia', 'movimpulso', 'equilibrio', 'friccion', 'gravitacion', 'maquinas', 'oscilaciones', 'rotacion', 'masaspoleas', 'fuerzas', 'torque', 'centro', 'leyes', 'apoyos', 'diagramas', 'friccionest', 'estructuras', 'estabilidad', 'aplicaciones'];

function extractArray(mod) {
	if (!mod) return null;
	if (Array.isArray(mod)) return mod;
	if (Array.isArray(mod.default)) return mod.default;
	if (Array.isArray(mod.formulas)) return mod.formulas;
	if (Array.isArray(mod.content)) return mod.content;
	return null;
}

async function tryImport(topic) {
	if (!topic) return null;
	try {
		const isDinamica =
			topic.startsWith('newton') ||
			topic.startsWith('trabajoenergia') ||
			topic.startsWith('equilibrio') ||
			topic.startsWith('gravitacion') ||
			topic.startsWith('oscilaciones') ||
			topic.startsWith('maquinas') ||
			topic.startsWith('movimpulso') ||
			topic.startsWith('friccion') ||
			topic.startsWith('masaspoleas') ||
			topic.startsWith('rotacion');
		// intenta cargar ../data/cinematica/{topic}/{topic}Formulas.js o ../data/dinamica/{topic}/{topic}Formulas.js
		const mod = await import(
			isDinamica
				? `../data/dinamica/${topic}/${topic}Formulas.js`
				: `../data/cinematica/${topic}/${topic}Formulas.js`
		);
		return extractArray(mod);
	} catch {
		return null;
	}
}

export async function getFormulasByTopic(topicId) {
	if (!topicId) return null;
	const id = String(topicId).toLowerCase().trim();

	// 1) intento directo con id
	let arr = await tryImport(id);
	if (arr && arr.length) return arr;

	// 2) intentar versiones conocidas y substrings
	for (const t of KNOWN_TOPICS) {
		// si id contiene el topic (p.e. "mcu-xyz") probar primero
		if (id.includes(t)) {
			arr = await tryImport(t);
			if (arr && arr.length) return arr;
		}
	}

	// 3) fallback: probar cada known topic directamente
	for (const t of KNOWN_TOPICS) {
		arr = await tryImport(t);
		if (arr && arr.length) return arr;
	}

	return null;
}

/* New: getCalculatorsByTopic
   - intenta cargar ../data/cinematica/{topic}/{topic}Calculators.js
   - soporta export default (array) o named export { calculators } (array) o objeto único
   - devuelve array/object or null
*/
function extractCalculators(mod) {
	if (!mod) return null;
	if (Array.isArray(mod)) return mod;
	if (Array.isArray(mod.default)) return mod.default;
	if (Array.isArray(mod.calculators)) return mod.calculators;
	// also allow object with keys
	if (typeof mod === 'object' && Object.keys(mod).length) return mod;
	return null;
}

async function tryImportCalculators(topic) {
	if (!topic) return null;
	try {
		const isDinamica =
			topic.startsWith('newton') ||
			topic.startsWith('trabajoenergia') ||
			topic.startsWith('equilibrio') ||
			topic.startsWith('gravitacion') ||
			topic.startsWith('oscilaciones') ||
			topic.startsWith('maquinas') ||
			topic.startsWith('movimpulso') ||
			topic.startsWith('friccion') ||
			topic.startsWith('masaspoleas') ||
			topic.startsWith('rotacion');
		const mod = await import(
			isDinamica
				? `../data/dinamica/${topic}/${topic}Calculators.js`
				: `../data/cinematica/${topic}/${topic}Calculators.js`
		);
		return extractCalculators(mod);
	} catch {
		return null;
	}
}

// Devuelve las calculadoras (o recursos relacionados) para un topic dado.
// Puede leer desde pageData, meta, o desde data/cinematica/<topic>/... como fallback.
export async function getCalculatorsByTopic(topicId) {
	if (!topicId) return null;
	const id = String(topicId).toLowerCase().trim();

	// Detectar si es subtema de estática
	const estaticaTopics = [
		'fuerzas', 'torque', 'centro', 'leyes', 'apoyos',
		'diagramas', 'friccionest', 'estructuras',
		'estabilidad', 'aplicaciones'
	];
	if (estaticaTopics.includes(id)) {
		try {
			const mod = await import(
				`../data/estatica/${id}/${id}Calculators.js`
			);
			return mod.default || mod.calculators || [];
		} catch {
			return null;
		}
	}

	// try exact
	let c = await tryImportCalculators(id);
	if (c) return c;

	for (const t of KNOWN_TOPICS) {
		if (id.includes(t)) {
			c = await tryImportCalculators(t);
			if (c) return c;
		}
	}
	return null;
}
