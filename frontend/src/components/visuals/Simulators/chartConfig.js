import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Register once for the whole app (side-effect import)
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const defaultChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { title: { display: true, text: 'Tiempo (s)' } },
    y: { title: { display: true } }
  },
  plugins: { legend: { display: false } }
}

export function createChartData(labels, data, label, color) {
  return {
    labels,
    datasets: [
      {
        label,
        data,
        borderColor: color,
        backgroundColor: color + '33',
        tension: 0.25,
        pointRadius: 0
      }
    ]
  }
}
