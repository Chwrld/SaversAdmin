import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

ChartJS.defaults.font.family = "'Trebuchet MS', 'Segoe UI', sans-serif"
ChartJS.defaults.font.size = 11
ChartJS.defaults.color = '#78938a'
ChartJS.defaults.plugins.legend.display = false
ChartJS.defaults.responsive = true
ChartJS.defaults.maintainAspectRatio = false
