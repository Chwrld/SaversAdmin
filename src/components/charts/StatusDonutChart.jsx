import { Doughnut } from 'react-chartjs-2'

export default function StatusDonutChart() {
  return (
    <div className="chart-container donut-container">
      <Doughnut
        data={{
          labels: ['Pending', 'Flagged', 'Reviewed', 'Hidden', 'Other'],
          datasets: [{
            data: [72, 12, 10, 4, 2],
            backgroundColor: ['#00ae70', '#003f36', '#ff9700', '#1aa8bb', '#e9faf1'],
            borderWidth: 0,
          }],
        }}
        options={{
          cutout: '53%',
          plugins: {
            tooltip: {
              callbacks: {
                label(ctx) { return ` ${ctx.label}: ${ctx.parsed}%` },
              },
            },
          },
        }}
      />
    </div>
  )
}
