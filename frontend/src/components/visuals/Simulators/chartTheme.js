// Utilidades de tema para Chart.js
// Lee variables CSS definidas en styles/themes.css para sincronizar colores de gráficos

export function getCssVar(name, fallback = '#999999') {
  const root = document.documentElement
  const val = getComputedStyle(root).getPropertyValue(name)
  return val?.trim() || fallback
}

export function getThemeColors() {
  return {
    text: getCssVar('--text', '#0f172a'),
    border: getCssVar('--border', '#e2e8f0'),
    primary: getCssVar('--primary', '#0284c7'),
    chart1: getCssVar('--chart-1', getCssVar('--primary', '#0284c7')),
    chart2: getCssVar('--chart-2', '#22c55e'),
    chart3: getCssVar('--chart-3', '#eab308'),
    chart4: getCssVar('--chart-4', '#ef4444'),
  }
}

export function rgba(hex, alpha = 0.2) {
  // admite #rrggbb
  const h = hex.replace('#', '')
  if (h.length !== 6) return `rgba(0,0,0,${alpha})`
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function dataset(lines) {
  // lines: [{ label, data, color }]
  return {
    datasets: lines.map(({ label, data, color }) => ({
      label,
      data,
      borderColor: color,
      backgroundColor: rgba(color, 0.2),
      tension: 0.25,
      pointRadius: 0,
    }))
  }
}

export function makeLineData(labels, series) {
  // series: [{ label, data, color }]
  return {
    labels,
    ...dataset(series)
  }
}

export function makeOptions({ xLabel = 'Tiempo (s)', yLabel = '', legend = false } = {}) {
  const colors = getThemeColors()
  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: { display: !!xLabel, text: xLabel, color: colors.text },
        ticks: { color: colors.text },
        grid: { color: colors.border }
      },
      y: {
        title: { display: !!yLabel, text: yLabel, color: colors.text },
        ticks: { color: colors.text },
        grid: { color: colors.border }
      }
    },
    plugins: {
      legend: {
        display: legend,
        labels: { color: colors.text }
      },
      tooltip: {
        titleColor: colors.text,
        bodyColor: colors.text,
        borderColor: colors.border,
        backgroundColor: rgba(colors.text, 0.9)
      }
    }
  }
}
