import React from 'react'

export default function Theory() {
  return (
    <div className="space-y-4">
      <p className="leading-relaxed">
        El Movimiento Circular Uniforme (MCU) es aquel en el que un cuerpo se mueve siguiendo una trayectoria circular con rapidez constante. Aunque la rapidez no cambia, la velocidad (por ser vector) sí varía constantemente en dirección.
      </p>
      <div>
        <h4 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>Conceptos Clave</h4>
        <ul className="list-disc list-inside theme-text-muted">
          <li>La rapidez lineal es constante: v = ω·r</li>
          <li>La velocidad angular es constante: ω = θ/t = 2π/T</li>
          <li>El periodo es el tiempo en completar una vuelta: T = 2π/ω</li>
          <li>La frecuencia es el número de vueltas por unidad de tiempo: f = 1/T</li>
          <li>Existe aceleración centrípeta: a<sub>c</sub> = v²/r = ω²·r</li>
          <li>La posición angular: θ = θ₀ + ω·t</li>
        </ul>
      </div>
    </div>
  )
}