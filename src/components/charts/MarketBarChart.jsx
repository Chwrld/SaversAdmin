import { Bar } from 'react-chartjs-2'

export default function MarketBarChart() {
  return (
    <div className="chart-container">
      <Bar
        data={{
          labels: ['Agdao', 'Bankerohan', 'Toril', 'Buhangin', 'Bangkal'],
          datasets: [{
            data: [112, 98, 75, 105, 70],
            backgroundColor: '#00ae70',
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
