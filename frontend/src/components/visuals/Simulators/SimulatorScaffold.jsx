import React from 'react'

/**
 * SimulatorScaffold
 * - Contenedor base para cualquier simulador.
 * - Aplica superficies temáticas consistentes y borde.
 * - Usa var(--surface-2) para el fondo del contenido del simulador.
 */
export function SimulatorScaffold({ className = '', style = {}, children }) {
  return (
    <div
      className={`p-4 rounded theme-border ${className}`}
      style={{ backgroundColor: 'var(--surface-2)', ...style }}
    >
      {children}
    </div>
  )
}

/**
 * SimulatorControls
 * - Botonera estándar: Reproducir, Pausa, Reiniciar.
 * - Asegura consistencia visual y comportamiento por defecto.
 */
export function SimulatorControls({
  running,
  onPlay,
  onPause,
  onReset,
  className = '',
}) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <button className="btn btn-primary" onClick={onPlay} disabled={running}>
        Reproducir
      </button>
      <button className="btn btn-secondary" onClick={onPause} disabled={!running}>
        Pausa
      </button>
      <button className="btn btn-secondary" onClick={onReset}>
        Reiniciar
      </button>
    </div>
  )
}
