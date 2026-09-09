import PageHeading from '../ui/PageHeading'
import PanelHeading from '../ui/PanelHeading'
import ReportsLineChart from '../charts/ReportsLineChart'
import MarketBarChart from '../charts/MarketBarChart'
import CommodityBarChart from '../charts/CommodityBarChart'
import PriceBarChart from '../charts/PriceBarChart'
import FeedbackDonutChart from '../charts/FeedbackDonutChart'
import StatusDonutChart from '../charts/StatusDonutChart'
import { metrics, observations, freshness } from '../../data'

export default function Dashboard() {
  return (
    <>
      <PageHeading
        title="Dashboard"
        description="Overview of crowdsourced wet market price activity. All prices shown are time-stamped consumer observations not verified official prices."
      />

      <div className="metric-grid">
        {metrics.map(([label, value, icon, tone]) => (
          <article className="metric" key={label}>
            <span className={`metric-icon ${tone}`}>{icon}</span>
            <div><p>{label}</p><strong>{value}</strong></div>
          </article>
        ))}
      </div>

      <div className="dashboard-grid">
        <article className="panel wide">
          <PanelHeading title="Price reports submitted over time" subtitle="Last 14 days of consumer submissions" />
          <ReportsLineChart />
        </article>

        <article className="panel">
          <PanelHeading title="Price reports by market" subtitle="Active markets only" />
          <MarketBarChart />
        </article>

        <article className="panel">
          <PanelHeading title="Most reported commodities" subtitle="Top 8 by submission volume" />
          <CommodityBarChart />
        </article>

        <article className="panel">
          <PanelHeading title="Current average prices" subtitle="Average of all time-stamped consumer observations" />
          <PriceBarChart />
        </article>

        <article className="panel donut-panel">
          <PanelHeading title="Community feedback statistics" subtitle="Consumer interactions on reports" />
          <FeedbackDonutChart />
          <div className="legend">
            <span className="green-dot" /> Still Accurate
            <span className="dark-dot" /> Price Has Changed
            <span className="orange-dot" /> Comments
          </div>
        </article>

        <article className="panel donut-panel">
          <PanelHeading title="Reports by status" subtitle="Moderation state across all reports" />
          <StatusDonutChart />
          <div className="legend">
            <span className="green-dot" /> pending
            <span className="dark-dot" /> flagged
            <span className="orange-dot" /> reviewed
            <span className="blue-dot" /> hidden
          </div>
        </article>

        <article className="panel freshness">
          <PanelHeading title="Price freshness" subtitle="0-24 h current · 24-48 h re-check · 48+ h stale" />
          {freshness.map(([market, time, status]) => (
            <div className="fresh-row" key={market}>
              <b>{market}</b>
              <span>{time}</span>
              <span className={`fresh-badge ${status === 'Current' ? 'ok' : status === 'Re-check needed' ? 'warn' : 'stale'}`}>{status}</span>
            </div>
          ))}
        </article>

        <article className="panel observations">
          <PanelHeading title="Latest observations" subtitle="Recent consumer price submissions" />
          {observations.map(([name, detail], i) => (
            <div className="observation" key={`${name}-${i}`}>
              <div>
                <strong>{name.split(' - ')[0]}</strong>
                <small>{detail.split(' · ')[0]}</small>
              </div>
              <span>{detail.split(' · ')[1]}</span>
            </div>
          ))}
        </article>
      </div>
    </>
  )
}
