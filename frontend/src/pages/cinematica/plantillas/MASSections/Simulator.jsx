import React, { useEffect, useRef, useState } from 'react'
import { SimulatorScaffold, SimulatorControls } from '../../../../../components/simulator/SimulatorScaffold'

// Simulador ligero de MAS (patrón Temperatura):
// - Sin contenedor extra (SubtopicShell envuelve con superficies temáticas)
// - Controles mínimos: A, ω, φ
// - Vista previa animada de x(t) con un punto en una guía
// - Estilos con clases theme-* y variables CSS
export default function Simulator() {
  const [A, setA] = useState(1)
  const [omega, setOmega] = useState(2 * Math.PI)
  const [phi, setPhi] = useState(0)

  const [running, setRunning] = useState(true)
  const [t, setT] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(0)

  useEffect(() => {
    if (!running) return
    const start = performance.now()
    startRef.current = start

    const tick = (now) => {
      const elapsed = (now - startRef.current) / 1000 // s
      setT(elapsed)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => rafRef.current && cancelAnimationFrame(rafRef.current)
  }, [running])

  // x(t) = A cos(ωt + φ)
  const x = A * Math.cos(omega * t + phi)

  const handleReset = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    setT(0)
    setRunning(false)
    // valores por defecto suaves
    setA(1)
    setOmega(2 * Math.PI)
    setPhi(0)
  }

  const handlePause = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    setRunning(false)
  }

  const handlePlay = () => {
    if (!running) setRunning(true)
  }

  // Mapeo de x a posición de píxeles en la guía visual
  const guideWidth = 300 // px
  const half = guideWidth / 2
  const scale = half / Math.max(0.001, Math.abs(A)) // A se mapea a [-half, half]
  const px = half + x * scale

  return (
    <SimulatorScaffold className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Controles */}
        <div className="space-y-3">
          <div>
            <label className="text-sm theme-text-muted">Amplitud A (m)</label>
            <input
              type="number"
              className="w-full rounded px-2 h-10 input-theme"
              value={A}
              step="0.1"
              onChange={(e) => setA(parseFloat(e.target.value || 0))}
            />
          </div>
          <div>
            <label className="text-sm theme-text-muted">Frecuencia angular ω (rad/s)</label>
            <input
              type="number"
              className="w-full rounded px-2 h-10 input-theme"
              value={omega}
              step="0.5"
              onChange={(e) => setOmega(parseFloat(e.target.value || 0))}
            />
          </div>
          <div>
            <label className="text-sm theme-text-muted">Fase φ (rad)</label>
            <input
              type="number"
              className="w-full rounded px-2 h-10 input-theme"
              value={phi}
              step="0.1"
              onChange={(e) => setPhi(parseFloat(e.target.value || 0))}
            />
          </div>
          <SimulatorControls running={running} onPlay={handlePlay} onPause={handlePause} onReset={handleReset} />
          <div className="text-sm theme-text-muted">x(t) = A cos(ω t + φ)</div>
          <div className="text-sm theme-text-muted">t = {t.toFixed(2)} s, x = {Number.isFinite(x) ? x.toFixed(3) : '-'} m</div>
        </div>

        {/* Vista previa de movimiento */}
        <div className="flex items-center justify-center">
          <div className="p-3 rounded theme-border" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="relative" style={{ width: guideWidth, height: 80 }}>
              {/* Guía */}
              <div className="absolute left-0 right-0 top-1/2" style={{ height: 2, backgroundColor: 'var(--border)' }} />
              {/* Marcas de amplitud */}
              <div className="absolute top-0 bottom-0" style={{ left: 0, width: 2, backgroundColor: 'var(--border)' }} />
              <div className="absolute top-0 bottom-0" style={{ right: 0, width: 2, backgroundColor: 'var(--border)' }} />
              {/* Objeto */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full shadow"
                style={{
                  left: px,
                  top: '50%',
                  width: 18,
                  height: 18,
                  background: 'var(--primary)',
                  border: '2px solid var(--surface-3)'
                }}
                title={`x = ${Number.isFinite(x) ? x.toFixed(3) : '-'}`}
              />
            </div>
            <div className="mt-2 text-center text-xs theme-text-muted">La escala horizontal se adapta a A</div>
          </div>
        </div>
      </div>
    </SimulatorScaffold>
  )
}
