import { useEffect, useRef, useState } from 'react'

// Simulador ligero de MCU: x(t) = r, muestra punto girando con ω constante
export default function Simulator() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)
  // historial simple de theta(t) para graficar
  const [thetaHistory, setThetaHistory] = useState([])
  const [params, setParams] = useState({ radius: 60, angularVelocity: 2*Math.PI/4 }) // 1 vuelta cada 4 s
  const rafRef = useRef(null)
  const lastRef = useRef(null)

  useEffect(() => {
    if (!isPlaying) return
    const step = (now) => {
      const last = lastRef.current ?? now
      const dt = Math.min(0.05, (now - last) / 1000)
      lastRef.current = now
      setTime(t => t + dt)
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isPlaying])

  // Controles internos propios del simulador

  // Helpers MCU
  const theta = params.angularVelocity * time
  const x = params.radius * Math.cos(theta)
  const y = params.radius * Math.sin(theta)

  // actualizar historial cuando cambie theta/time
  useEffect(() => {
    setThetaHistory(prev => {
      const next = [...prev, theta]
      // limitar a 120 muestras (~últimos pocos segundos)
      if (next.length > 120) next.shift()
      return next
    })
  }, [theta])

  const reset = () => { setIsPlaying(false); setTime(0); lastRef.current = null }

  return (
    <div className="rounded-lg border p-4" style={{ backgroundColor: 'var(--surface-2)', borderColor: 'var(--border)', color: 'var(--text)' }}>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <button onClick={() => setIsPlaying(true)} className="px-4 py-2 rounded text-white" style={{ backgroundColor: 'var(--primary)' }}>
          Reproducir
        </button>
        <button onClick={() => setIsPlaying(false)} className="px-4 py-2 rounded text-white" style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 55%, black)' }}>
          Pausar
        </button>
        <button onClick={reset} className="px-4 py-2 rounded text-white" style={{ backgroundColor: 'color-mix(in srgb, var(--text) 35%, var(--border))' }}>Reiniciar</button>
        <div className="text-sm opacity-80">t = {time.toFixed(2)} s</div>
        <label className="ml-2 text-sm">
          ω (rad/s)
          <input type="number" step="0.1" value={params.angularVelocity}
            onChange={e => { setParams(p => ({ ...p, angularVelocity: parseFloat(e.target.value)||0 })); setTime(0) }}
            className="ml-2 px-2 py-1 border rounded w-28"
            style={{ backgroundColor: 'var(--surface)', color: 'var(--text)', borderColor: 'var(--border)' }} />
        </label>
        <label className="ml-2 text-sm">
          r (px)
          <input type="number" step="1" min="10" value={params.radius}
            onChange={e => { setParams(p => ({ ...p, radius: Math.max(10, parseFloat(e.target.value)||10) })); setTime(0) }}
            className="ml-2 px-2 py-1 border rounded w-24"
            style={{ backgroundColor: 'var(--surface)', color: 'var(--text)', borderColor: 'var(--border)' }} />
        </label>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Lienzo simple */}
        <svg width={240} height={240} className="rounded border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--primary)' }}>
          <circle cx={120} cy={120} r={params.radius} fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1={120} y1={120} x2={120 + x} y2={120 + y} stroke="currentColor" strokeWidth="3" />
          <circle cx={120 + x} cy={120 + y} r={8} fill="currentColor" />
        </svg>

        {/* Datos instantáneos */}
        <div className="text-sm grid grid-cols-2 gap-3 p-3 rounded border" style={{ backgroundColor: 'var(--surface-2)', borderColor: 'var(--border)', color: 'var(--text)' }}>
          <div>
            <div className="font-semibold" style={{ color: 'var(--primary)' }}>θ</div>
            <div>{theta.toFixed(2)} rad</div>
          </div>
          <div>
            <div className="font-semibold" style={{ color: 'var(--primary)' }}>v = r·ω</div>
            <div>{(params.radius * params.angularVelocity).toFixed(2)} px/s</div>
          </div>
          <div>
            <div className="font-semibold" style={{ color: 'var(--primary)' }}>a_c = r·ω²</div>
            <div>{(params.radius * params.angularVelocity * params.angularVelocity).toFixed(2)} px/s²</div>
          </div>
          <div>
            <div className="font-semibold" style={{ color: 'var(--primary)' }}>Periodo T</div>
            <div>{params.angularVelocity !== 0 ? (2*Math.PI/params.angularVelocity).toFixed(2) : '—'} s</div>
          </div>
        </div>
      </div>

      {/* Gráfico pequeño de θ(t) */}
      <div className="mt-4">
        <svg width={480} height={90} className="rounded border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--primary)' }}>
          {(() => {
            const w = 460, h = 70, ox = 10, oy = 10
            if (thetaHistory.length < 2) return null
            // normalización simple: envolver theta a [-pi, pi]
            const norm = (th) => {
              let t = th % (2*Math.PI)
              if (t > Math.PI) t -= 2*Math.PI
              if (t < -Math.PI) t += 2*Math.PI
              return t
            }
            const ys = thetaHistory.map(norm)
            const minY = -Math.PI, maxY = Math.PI
            const dx = w / (ys.length - 1)
            const points = ys.map((v, i) => [ox + i*dx, oy + h * (1 - (v - minY)/(maxY - minY))])
            const d = points.reduce((acc, [px, py], i) => acc + (i === 0 ? `M ${px} ${py}` : ` L ${px} ${py}`), '')
            return <path d={d} fill="none" stroke="currentColor" strokeWidth="2" />
          })()}
        </svg>
      </div>
    </div>
  )
}
