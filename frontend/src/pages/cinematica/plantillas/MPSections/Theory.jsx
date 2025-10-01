export default function Theory() {
  return (
    <div className="space-y-4">
      <p className="leading-relaxed">
        El Movimiento Parabólico (MP) es un tipo de movimiento en dos dimensiones que describe la trayectoria de un
        proyectil lanzado con cierta velocidad inicial y sometido únicamente a la aceleración de la gravedad. La
        trayectoria resultante es una parábola.
      </p>
      <div>
        <h4 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>Conceptos Clave</h4>
        <ul className="list-disc list-inside theme-text-muted">
          <li>Se puede analizar como la composición de dos movimientos independientes:</li>
          <li>Horizontal: MRU con v<sub>x</sub> = v₀·cos(θ)</li>
          <li>Vertical: MRUV con a = g y v<sub>y</sub> = v₀·sen(θ) - g·t</li>
          <li>Ecuaciones de posición: x(t) = x₀ + v₀·cos(θ)·t, y(t) = y₀ + v₀·sen(θ)·t - ½·g·t²</li>
          <li>Alcance horizontal: R = v₀²·sen(2θ)/g</li>
          <li>Altura máxima: H = v₀²·sen²(θ)/(2g)</li>
          <li>Tiempo de vuelo: T = 2·v₀·sen(θ)/g</li>
        </ul>
      </div>
    </div>
  )
}