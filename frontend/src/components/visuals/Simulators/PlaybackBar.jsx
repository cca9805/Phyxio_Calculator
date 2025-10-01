export default function PlaybackBar({
  isPlaying,
  t,
  dt,
  tMax,
  onToggle,
  onReset,
  onSetT,
  onSetDt,
  onSetTMax,
  rightContent = null,
}) {
  return (
    <div className="rounded-lg shadow-md p-4 border theme-border mb-4" style={{ backgroundColor: 'var(--surface-2)', color: 'var(--text)' }}>
      <div className="flex flex-wrap items-center gap-3">
        <button
          className="px-3 py-1 rounded text-white transition-opacity"
          style={{ backgroundColor: isPlaying ? 'var(--accent)' : 'var(--primary)' }}
          onClick={onToggle}
          title={isPlaying ? 'Pausar' : 'Reproducir'}
          onMouseDown={e => (e.currentTarget.style.opacity = '0.9')}
          onMouseUp={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          {isPlaying ? 'Pausar' : 'Reproducir'}
        </button>
        <button
          className="px-3 py-1 rounded text-white transition-opacity"
          style={{ backgroundColor: 'var(--muted)' }}
          onClick={onReset}
          title="Reiniciar"
          onMouseDown={e => (e.currentTarget.style.opacity = '0.9')}
          onMouseUp={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Reiniciar
        </button>
        <div className="flex items-center gap-2">
          <label className="text-sm">t =</label>
          <input type="range" min={0} max={tMax} step={dt} value={t} onChange={e => onSetT(parseFloat(e.target.value) || 0)} />
          <span className="text-sm w-14 text-right">{t.toFixed(1)} s</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Δt</label>
          <input type="number" className="w-20 border rounded px-2 py-1 theme-border" min={0.01} step={0.01} value={dt} onChange={e => onSetDt(e.target.value)} />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">t_max</label>
          <input type="number" className="w-20 border rounded px-2 py-1 theme-border" min={1} step={1} value={tMax} onChange={e => onSetTMax(e.target.value)} />
        </div>
        {rightContent && (
          <div className="ml-auto flex items-center gap-4 text-sm">
            {rightContent}
          </div>
        )}
      </div>
    </div>
  )
}
