const KNOWN_TOPICS = ['mcu', 'mruv', 'mru', 'newton', 'trabajoenergia', 'movimpulso', 'equilibrio', 'friccion', 'gravitacion', 'maquinas', 'oscilaciones', 'rotacion', 'masaspoleas', 'fuerzas', 'torque', 'centro', 'leyes', 'apoyos', 'diagramas', 'friccionest', 'estructuras', 'estabilidad', 'aplicaciones'];

async function tryImportEjercicios(topic) {
	if (!topic) return null;
	try {
		// Detectar si es subtema de estática
		const estaticaTopics = [
			'fuerzas', 'torque', 'centro', 'leyes', 'apoyos',
			'diagramas', 'friccionest', 'estructuras',
			'estabilidad', 'aplicaciones'
		];
		if (estaticaTopics.includes(topic)) {
			const mod = await import(
				`../data/estatica/${topic}/ejercicios.json`
			);
			return mod.default || mod || [];
		}
		// ...dinámica/cinemática como antes...
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
				? `../data/dinamica/${topic}/ejercicios.json`
				: `../data/cinematica/${topic}/ejercicios.json`
		);
		return mod.default || mod || [];
	} catch {
		return null;
	}
}

export async function getExercisesByTopic(topicId) {
	if (!topicId) return null;
	const id = String(topicId).toLowerCase().trim();

	// intento directo
	let arr = await tryImportEjercicios(id);
	if (arr && arr.length) return arr;

	// intentar por substrings conocidas
	for (const t of KNOWN_TOPICS) {
		if (id.includes(t)) {
			arr = await tryImportEjercicios(t);
			if (arr && arr.length) return arr;
		}
	}

	// fallback: probar cada known topic
	for (const t of KNOWN_TOPICS) {
		arr = await tryImportEjercicios(t);
		if (arr && arr.length) return arr;
	}

	return null;
}
