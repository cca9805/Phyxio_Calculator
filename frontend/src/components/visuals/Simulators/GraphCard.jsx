import { Line } from 'react-chartjs-2'

export default function GraphCard({
  title,
  data,
  options,
  containerClass = 'theme-card theme-border',
  heightClass = 'h-40'
}) {
  return (
    <div className={`p-4 rounded-lg border-2 ${containerClass}`}>
      {title && <h3 className="font-bold mb-2" style={{ color: 'var(--text)' }}>{title}</h3>}
      <div className={heightClass}>
        <Line data={data} options={options} />
      </div>
    </div>
  )
}
