import { Doughnut } from 'react-chartjs-2'

export default function FeedbackDonutChart() {
  return (
    <div className="chart-container donut-container">
      <Doughnut
        data={{
          labels: ['Still Accurate', 'Price Has Changed', 'Comments', 'Other'],
          datasets: [{
            data: [80, 11, 5, 4],
            backgroundColor: ['#00ae70', '#003f36', '#ff9700', '#e9faf1'],
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
