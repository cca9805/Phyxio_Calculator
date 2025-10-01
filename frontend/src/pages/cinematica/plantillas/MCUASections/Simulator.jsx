import { useEffect, useRef, useState } from 'react'

// Simulador ligero de MCUA: θ(t) = ω0·t + 1/2·α·t^2
export default function Simulator() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [params, setParams] = useState({ radius: 60, w0: 0, alpha: Math.PI / 4 })
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

  const theta = params.w0 * time + 0.5 * params.alpha * time * time
  const omega = params.w0 + params.alpha * time
  const x = params.radius * Math.cos(theta)
  const y = params.radius * Math.sin(theta)
  const at = params.radius * params.alpha
  const ac = params.radius * omega * omega
  const T = omega !== 0 ? (2*Math.PI/Math.abs(omega)) : Infinity

  const reset = () => { setIsPlaying(false); setTime(0); lastRef.current = null }

  return (
    <div className="rounded-lg border p-4" style={{ backgroundColor: 'var(--surface-2)', borderColor: 'var(--border)', color: 'var(--text)' }}>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <button onClick={() => setIsPlaying(p => !p)} className={`px-4 py-2 rounded text-white ${isPlaying ? 'bg-red-500' : 'bg-violet-600'}`}>
          {isPlaying ? 'Pausar' : 'Reproducir'}
        </button>
        <button onClick={reset} className="px-4 py-2 rounded bg-gray-600 text-white">Reiniciar</button>
        <div className="text-sm opacity-80">t = {time.toFixed(2)} s</div>
        <label className="ml-2 text-sm">
          ω0 (rad/s)
          <input type="number" step="0.1" value={params.w0}
            onChange={e => { setParams(p => ({ ...p, w0: parseFloat(e.target.value)||0 })); setTime(0) }}
            className="ml-2 px-2 py-1 border rounded w-28"
            style={{ backgroundColor: 'var(--surface)', color: 'var(--text)', borderColor: 'var(--border)' }} />
        </label>
        <label className="ml-2 text-sm">
          α (rad/s²)
          <input type="number" step="0.1" value={params.alpha}
            onChange={e => { setParams(p => ({ ...p, alpha: parseFloat(e.target.value)||0 })); setTime(0) }}
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
        <svg width={240} height={240} className="rounded border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
          <circle cx={120} cy={120} r={params.radius} fill="none" stroke="#a78bfa" strokeWidth="2" />
          <line x1={120} y1={120} x2={120 + x} y2={120 + y} stroke="#7c3aed" strokeWidth="3" />
          <circle cx={120 + x} cy={120 + y} r={8} fill="#7c3aed" />
        </svg>

        <div className="text-sm grid grid-cols-2 gap-3 p-3 rounded border" style={{ backgroundColor: 'var(--surface-2)', borderColor: 'var(--border)', color: 'var(--text)' }}>
          <div>
            <div className="font-semibold text-violet-700 dark:text-violet-300">θ</div>
            <div>{theta.toFixed(2)} rad</div>
          </div>
          <div>
            <div className="font-semibold text-violet-700 dark:text-violet-300">ω</div>
            <div>{omega.toFixed(2)} rad/s</div>
          </div>
          <div>
            <div className="font-semibold text-violet-700 dark:text-violet-300">a_t = r·α</div>
            <div>{at.toFixed(2)} px/s²</div>
          </div>
          <div>
            <div className="font-semibold text-violet-700 dark:text-violet-300">a_c = r·ω²</div>
            <div>{ac.toFixed(2)} px/s²</div>
          </div>
          <div>
            <div className="font-semibold text-violet-700 dark:text-violet-300">Periodo T</div>
            <div>{T !== Infinity ? T.toFixed(2) : '—'} s</div>
          </div>
        </div>
      </div>
    </div>
  )
}
