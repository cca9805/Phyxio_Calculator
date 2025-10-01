export default [
	{
		name: "Velocidad Angular",
		expression: "ω = θ/t",
		variables: [
			{ symbol: "ω", name: "Velocidad Angular", unit: "rad/s" },
			{ symbol: "θ", name: "Ángulo", unit: "rad" },
			{ symbol: "t", name: "Tiempo", unit: "s" }
		],
		description: "Rapidez con que cambia el ángulo en MCU."
	},
	{
		name: "Velocidad Tangencial",
		expression: "v = rω",
		variables: [
			{ symbol: "v", name: "Velocidad Tangencial", unit: "m/s" },
			{ symbol: "r", name: "Radio", unit: "m" },
			{ symbol: "ω", name: "Velocidad Angular", unit: "rad/s" }
		],
		description: "Velocidad en la dirección tangente a la circunferencia."
	},
	{
		name: "Período y Frecuencia",
		expression: "T = 2π/ω, f = 1/T",
		variables: [
			{ symbol: "T", name: "Período", unit: "s" },
			{ symbol: "f", name: "Frecuencia", unit: "Hz" },
			{ symbol: "ω", name: "Velocidad Angular", unit: "rad/s" }
		],
		description: "Tiempo para completar una vuelta y número de vueltas por segundo."
	}
];
