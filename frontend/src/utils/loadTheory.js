const KNOWN_TOPICS = [
	'mcu', 'mcua', 'mruv', 'mru', 'newton', 'trabajoenergia', 'movimpulso', 'equilibrio', 'friccion', 'gravitacion', 'maquinas', 'oscilaciones', 'rotacion', 'masaspoleas', 'fuerzas', 'torque', 'centro', 'leyes', 'apoyos', 'diagramas', 'friccionest', 'estructuras', 'estabilidad', 'aplicaciones'
];

async function tryImportTheory(topic) {
	if (!topic) return null;
	try {
		// Detectar si es subtema de estática
		const estaticaTopics = [
			'fuerzas', 'torque', 'centro', 'leyes', 'apoyos',
			'diagramas', 'friccionest', 'estructuras',
			'estabilidad', 'aplicaciones'
		];
		if (estaticaTopics.includes(topic)) {
			const mdRaw = await import(
				`../data/estatica/${topic}/teoria.md?raw`
			);
			if (mdRaw) {
				if (typeof mdRaw === 'string') return mdRaw;
				if (typeof mdRaw.default === 'string') return mdRaw.default;
			}
			return null;
		}

		// 1) Intentar importar Markdown como texto (raw) — lo más fiable con Vite
		try {
			const isDinamica = (
				topic.startsWith('newton') ||
				topic.startsWith('trabajoenergia') ||
				topic.startsWith('equilibrio') ||
				topic.startsWith('gravitacion') ||
				topic.startsWith('oscilaciones') ||
				topic.startsWith('maquinas') ||
				topic.startsWith('movimpulso') ||
				topic.startsWith('friccion') ||
				topic.startsWith('masaspoleas') ||
				topic.startsWith('rotacion')
			);
			const mdRaw = await import(
				isDinamica
					? `../data/dinamica/${topic}/teoria.md?raw`
					: `../data/cinematica/${topic}/teoria.md?raw`
			);
			if (mdRaw) {
				if (typeof mdRaw === 'string') return mdRaw;
				if (typeof mdRaw.default === 'string') return mdRaw.default;
			}
		} catch {
			// no hay MD raw, seguir con otros intentos
		}

		// 2) Intentar módulo JS: <topic>Theory.js exportando string o { content }
		try {
			const isDinamica = (
				topic.startsWith('newton') ||
				topic.startsWith('trabajoenergia') ||
				topic.startsWith('equilibrio') ||
				topic.startsWith('gravitacion') ||
				topic.startsWith('oscilaciones') ||
				topic.startsWith('maquinas') ||
				topic.startsWith('movimpulso') ||
				topic.startsWith('friccion') ||
				topic.startsWith('masaspoleas') ||
				topic.startsWith('rotacion')
			);
			const mod = await import(
				isDinamica
					? `../data/dinamica/${topic}/${topic}Theory.js`
					: `../data/cinematica/${topic}/${topic}Theory.js`
			);
			if (mod) {
				if (typeof mod === 'string') return mod;
				if (typeof mod.default === 'string') return mod.default;
				if (mod.content && typeof mod.content === 'string') return mod.content;
			}
		} catch {
			// ignore and try next
		}

		// 3) Último recurso: importar el .md sin ?raw (por compatibilidad con algunas configuraciones)
		try {
			const isDinamica = (
				topic.startsWith('newton') ||
				topic.startsWith('trabajoenergia') ||
				topic.startsWith('equilibrio') ||
				topic.startsWith('gravitacion') ||
				topic.startsWith('oscilaciones') ||
				topic.startsWith('maquinas') ||
				topic.startsWith('movimpulso') ||
				topic.startsWith('friccion') ||
				topic.startsWith('masaspoleas') ||
				topic.startsWith('rotacion')
			);
			const mdMod = await import(
				isDinamica
					? `../data/dinamica/${topic}/teoria.md`
					: `../data/cinematica/${topic}/teoria.md`
			);
			if (mdMod) {
				if (typeof mdMod === 'string') return mdMod;
				if (typeof mdMod.default === 'string') return mdMod.default;
				if (mdMod.content && typeof mdMod.content === 'string') return mdMod.content;
			}
		} catch {
			// falló también
		}

		return null;
	}
	catch {
		return null;
	}
}

export async function getTheoryByTopic(topicId) {
	if (!topicId) return null;
	const id = String(topicId).toLowerCase().trim();

	// intento directo
	let t = await tryImportTheory(id);
	if (t) return t;

	// probar por substrings conocidas
	for (const k of KNOWN_TOPICS) {
		if (id.includes(k)) {
			t = await tryImportTheory(k);
			if (t) return t;
		}
	}

	// fallback: probar cada known topic
	for (const k of KNOWN_TOPICS) {
		t = await tryImportTheory(k);
		if (t) return t;
	}

	return null;
}
