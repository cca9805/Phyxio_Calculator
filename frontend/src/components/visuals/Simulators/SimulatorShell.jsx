import React from 'react'
import PlaybackBar from './PlaybackBar'
import ChartGrid from './ChartGrid'

/*
  SimulatorShell
  - Proporciona una estructura estándar para simuladores:
    header, toolbar (playback), paneles lateral/central, editor y grilla de gráficos
  - Soporta temas por asignatura usando clases .theme-*

  Props principales:
  - theme: 'sky' | 'amber' | 'emerald' | string (clase CSS en themes.css)
  - title: string | ReactNode (encabezado)
  - description?: string | ReactNode (texto corto debajo del título)
  - playbackProps?: props para PlaybackBar (si no se pasan, no se renderiza)
  - leftPanel?: ReactNode (inputs o presets)
  - rightPanel?: ReactNode (sumarios o resultados)
  - editor?: ReactNode (editor avanzado o consola)
  - charts?: ReactNode (normalmente <ChartGrid> con <GraphCard>)
  - toolbarRight?: ReactNode (contenido adicional en la derecha de la barra)
  - className?: string (clases extra para el contenedor)
*/

export default function SimulatorShell({
  theme = 'sky',
  title,
  description,
  playbackProps,
  leftPanel,
  rightPanel,
  editor,
  charts,
  toolbarRight,
  className = '',
}) {
  return (
    <section className={`theme-scope theme-${theme} p-4 sm:p-6 rounded-xl border theme-border ${className}`} style={{ backgroundColor: 'var(--surface-2)' }}>
      {/* Header */}
      {(title || description) && (
        <header className="mb-4">
          {title && (
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text)' }}>
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-1 text-sm theme-text-muted">
              {description}
            </p>
          )}
        </header>
      )}

      {/* Toolbar / Playback */}
      {(playbackProps || toolbarRight) && (
        <div className="mb-4">
          {playbackProps ? (
            <PlaybackBar {...playbackProps} rightContent={toolbarRight} />
          ) : (
            <div className="rounded-lg shadow-md p-3 border theme-border">
              <div className="flex items-center gap-3">
                <div className="ml-auto flex items-center gap-4 text-sm">
                  {toolbarRight}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Panels + Editor */}
      {(leftPanel || rightPanel || editor) && (
        (leftPanel || rightPanel) ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            {/* Left panel */}
            {leftPanel && (
              <div className="rounded-lg border p-4 theme-border">
                {leftPanel}
              </div>
            )}

            {/* Editor (centro, ocupa 1 o 2 cols según haya rightPanel) */}
            {editor && (
              <div className={`${rightPanel ? 'lg:col-span-1' : 'lg:col-span-2'} rounded-lg border p-4 theme-border`}>
                {editor}
              </div>
            )}

            {/* Right panel */}
            {rightPanel && (
              <div className="rounded-lg border p-4 theme-border">
                {rightPanel}
              </div>
            )}
          </div>
        ) : (
          // Sin paneles laterales: editor a ancho completo
          editor && (
            <div className="mb-4 rounded-lg border p-4 theme-border">
              {editor}
            </div>
          )
        )
      )}

      {/* Charts */}
      {charts && (
        <div className="rounded-lg border p-4 theme-border">
          {/* Permitimos pasar ChartGrid desde fuera o renderizamos wrapper por defecto */}
          {React.isValidElement(charts) ? charts : (
            <ChartGrid>
              {charts}
            </ChartGrid>
          )}
        </div>
      )}
    </section>
  )
}
