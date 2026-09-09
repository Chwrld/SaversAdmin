import { Line } from 'react-chartjs-2'

const labels = ['08-26','08-27','08-28','08-29','08-30','08-31','09-01','09-02','09-03','09-04','09-05','09-06','09-07']
const data = [8, 15, 28, 18, 12, 14, 16, 18, 19, 28, 25, 29, 46]

export default function ReportsLineChart() {
  return (
    <div className="chart-container">
      <Line
        data={{
          labels,
          datasets: [{
            data,
            borderColor: '#00ae70',
            backgroundColor(ctx) {
              const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 150)
              g.addColorStop(0, 'rgba(0,174,112,.25)')
              g.addColorStop(1, 'rgba(0,174,112,0)')
              return g
            },
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
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
              min: 0,
              max: 60,
              ticks: { stepSize: 15, font: { size: 9 }, color: '#7d9990' },
              grid: { color: '#d9e7e1', lineWidth: 1, drawTicks: false },
              border: { display: false },
            },
          },
          plugins: {
            tooltip: {
              enabled: true,
              callbacks: {
                label(ctx) { return `${ctx.parsed.y} reports` },
              },
            },
          },
        }}
      />
    </div>
  )
}
