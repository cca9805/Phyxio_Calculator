import React, { useState } from 'react'

export default function Simulator() {
  // Simulador ligero demostrativo (composición de velocidades con ángulo)
  const [v1, setV1] = useState(10)
  const [v2, setV2] = useState(8)
  const [angle, setAngle] = useState(90)

  const a = (angle * Math.PI) / 180
  const vR = Math.sqrt(v1*v1 + v2*v2 + 2*v1*v2*Math.cos(a))

  return (
    <div className="rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <label className="flex flex-col text-sm">
          <span>v₁ (m/s)</span>
          <input type="number" value={v1} min={0} onChange={e => setV1(Number(e.target.value))} className="input" />
        </label>
        <label className="flex flex-col text-sm">
          <span>v₂ (m/s)</span>
          <input type="number" value={v2} min={0} onChange={e => setV2(Number(e.target.value))} className="input" />
        </label>
        <label className="flex flex-col text-sm">
          <span>θ (°)</span>
          <input type="number" value={angle} min={0} max={180} onChange={e => setAngle(Number(e.target.value))} className="input" />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Metric label="Velocidad resultante" value={vR} unit="m/s" />
      </div>
    </div>
  )
}

function Metric({ label, value, unit }) {
  return (
    <div className="rounded-md border p-3 bg-teal-50 border-teal-200 dark:bg-teal-900/30 dark:border-teal-800">
      <div className="text-xs uppercase tracking-wide text-teal-700 dark:text-teal-200">{label}</div>
      <div className="text-lg font-semibold text-teal-900 dark:text-teal-100">{value.toFixed(2)} {unit}</div>
    </div>
  )
}
