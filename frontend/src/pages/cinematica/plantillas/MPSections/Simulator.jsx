import React, { useState } from 'react'

export default function Simulator() {
  const [v0, setV0] = useState(20)
  const [angle, setAngle] = useState(45)
  const g = 9.8

  const angleRad = (angle * Math.PI) / 180
  const tFlight = (2 * v0 * Math.sin(angleRad)) / g
  const hMax = (v0 * v0 * Math.sin(angleRad) * Math.sin(angleRad)) / (2 * g)
  const range = (v0 * v0 * Math.sin(2 * angleRad)) / g

  return (
    <div className="rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <label className="flex flex-col text-sm">
          <span>v₀ (m/s)</span>
          <input type="number" value={v0} min={0} onChange={e => setV0(Number(e.target.value))} className="input" />
        </label>
        <label className="flex flex-col text-sm">
          <span>θ (°)</span>
          <input type="number" value={angle} min={0} max={90} onChange={e => setAngle(Number(e.target.value))} className="input" />
        </label>
        <div className="text-sm flex items-end opacity-70">g = 9.8 m/s²</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Metric label="Tiempo de vuelo" value={tFlight} unit="s" />
        <Metric label="Altura máxima" value={hMax} unit="m" />
        <Metric label="Alcance" value={range} unit="m" />
      </div>
    </div>
  )
}

function Metric({ label, value, unit }) {
  return (
    <div className="rounded-md border p-3 bg-cyan-50 border-cyan-200 dark:bg-cyan-900/30 dark:border-cyan-800">
      <div className="text-xs uppercase tracking-wide text-cyan-700 dark:text-cyan-200">{label}</div>
      <div className="text-lg font-semibold text-cyan-900 dark:text-cyan-100">{value.toFixed(2)} {unit}</div>
    </div>
  )
}
