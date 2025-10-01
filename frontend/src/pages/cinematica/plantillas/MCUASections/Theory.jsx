import React from 'react'

export default function Theory() {
  return (
    <div className="space-y-4">
      <p className="leading-relaxed">
        El Movimiento Circular Uniformemente Acelerado (MCUA) es aquel en el que un cuerpo se mueve en una trayectoria circular con aceleración angular constante. La velocidad angular varía con el tiempo de manera uniforme.
      </p>
      <div>
        <h4 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>Conceptos Clave</h4>
        <ul className="list-disc list-inside theme-text-muted">
          <li>La aceleración angular es constante: α</li>
          <li>La velocidad angular varía linealmente: ω = ω₀ + α·t</li>
          <li>La posición angular varía cuadráticamente: θ = θ₀ + ω₀·t + ½·α·t²</li>
          <li>Ecuación independiente del tiempo: ω² = ω₀² + 2·α·(θ-θ₀)</li>
          <li>La aceleración total tiene componente tangencial y normal</li>
          <li>Aceleración tangencial: a<sub>t</sub> = α·r</li>
          <li>Aceleración normal: a<sub>n</sub> = ω²·r</li>
        </ul>
      </div>
    </div>
  )
}