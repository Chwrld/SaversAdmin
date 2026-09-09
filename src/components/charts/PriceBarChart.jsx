import { Bar } from 'react-chartjs-2'

const labels = ['Rice', 'Egg', 'Chicken', 'Pork', 'Fish', 'Banana', 'Cabbage', 'Tomato']

export default function PriceBarChart() {
  return (
    <div className="chart-container">
      <Bar
        data={{
          labels,
          datasets: [{
            data: [88, 32, 94, 60, 27, 16, 21, 16],
            backgroundColor: '#ff9700',
            borderRadius: 3,
            barPercentage: 0.6,
          }],
        }}
        options={{
          scales: {
            x: {
              grid: { display: false },
              ticks: { font: { size: 9 }, color: '#7d9990' },
              border: { display: false },
            },
            y: {
              grid: { color: '#edf3f0', lineWidth: 1 },
              ticks: { font: { size: 9 }, color: '#7d9990', stepSize: 25 },
              border: { display: false },
            },
          },
        }}
      />
    </div>
  )
}
