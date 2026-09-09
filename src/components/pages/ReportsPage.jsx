import { useMemo, useState } from 'react'
import PageHeading from '../ui/PageHeading'
import Status from '../ui/Status'
import TableShell from '../ui/TableShell'
import { observations } from '../../data'

const reportRows = observations.concat(observations).map(([name, detail, status], index) => ({ id: `RPT-${String(index + 1).padStart(4, '0')}`, name, detail, status }))

export default function ReportsPage() {
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [hiddenReports, setHiddenReports] = useState([])
  const [reviewedReports, setReviewedReports] = useState([])
  const [flaggedReports, setFlaggedReports] = useState([])
  const [selectedReport, setSelectedReport] = useState(null)
  const visibleRows = useMemo(() => reportRows.filter((row) => !hiddenReports.includes(row.id) && `${row.id} ${row.name} ${row.detail}`.toLowerCase().includes(query.toLowerCase()) && (statusFilter === 'all' || row.status.toLowerCase() === statusFilter)), [hiddenReports, query, statusFilter])

  function markAction(id, action) {
    if (action === 'Hide') setHiddenReports((current) => [...current, id])
    if (action === 'Mark reviewed') setReviewedReports((current) => [...current, id])
    if (action === 'Flag') setFlaggedReports((current) => [...current, id])
  }

  return (
    <>
      <PageHeading
        title="Crowdsourced Price Reports"
        description="Every report is a time-stamped consumer observation. Nothing here is automatically declared an officially verified price."
      />
      <TableShell title="All observations" count="460 reports" search="Search reports" marketFilter onSearch={setQuery} onStatusChange={setStatusFilter}>
        <div className="data-table reports-table">
          <div className="table-row table-head">
            <span>Report ID</span>
            <span>Commodity</span>
            <span>Reported price</span>
            <span>Market & zone</span>
            <span>Submitted</span>
            <span>Feedback</span>
            <span>Photo</span>
            <span>Status</span>
            <span>Actions</span>
          </div>
          {visibleRows.map(({ id, name, detail, status }, index) => (
            <div className="table-row" key={`${name}-${index}`}>
              <span>{id}</span>
              <span><strong>{name.split(' - ')[0]}</strong><small>{['Rhea Aquino', 'Ana Torres', 'Jose Aquino', 'Kim Domingo'][index % 4]}</small></span>
              <span>{name.split(' - ')[1]}</span>
              <span><strong>{detail.split(' · ')[0]}</strong><small>Vegetable Section</small></span>
              <span>{detail.split(' · ')[1]}</span>
              <span>{index % 3 + 2} accurate · {index % 5} changed</span>
              <span>{index % 2 ? '—' : <button className="photo-view" onClick={() => setSelectedReport({ id, name, detail, status, index })}>View</button>}</span>
              <span><Status>{reviewedReports.includes(id) ? 'Reviewed' : flaggedReports.includes(id) ? 'Flagged' : status}</Status></span>
              <span className="row-actions">
                <button onClick={() => markAction(id, 'Mark reviewed')}>Mark reviewed</button>
                <button onClick={() => markAction(id, 'Flag')}>Flag</button>
                <button onClick={() => markAction(id, 'Hide')}>Hide</button>
                <button className="danger" onClick={() => markAction(id, 'Hide')}>Remove</button>
              </span>
            </div>
          ))}
        </div>
      </TableShell>
      {selectedReport && <ReportModal report={selectedReport} onClose={() => setSelectedReport(null)} />}
    </>
  )
}

function ReportModal({ report, onClose }) {
  const [name, price] = report.name.split(' - ')
  const [market, submitted] = report.detail.split(' · ')
  const consumer = ['Rhea Aquino', 'Ana Torres', 'Jose Aquino', 'Kim Domingo'][report.index % 4]
  const zone = name === 'Whole Chicken' ? 'Meat & Poultry Section' : name === 'Galunggong' || name === 'Tilapia' ? 'Fish & Seafood Section' : 'Vegetable Section'

  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><section className="report-modal" role="dialog" aria-modal="true" aria-labelledby="report-modal-title"><button className="modal-close" aria-label="Close report details" onClick={onClose}>×</button><h2 id="report-modal-title">Price report {report.id}</h2><p className="modal-subtitle">Consumer observation record</p><div className="modal-summary"><div><small>Reported price</small><strong>{price}</strong></div><div><small>Submitted</small><span>{submitted}</span><em>Outdated</em></div></div><div className="modal-details"><div><small>Consumer</small><span>{consumer}</span></div><div><small>Commodity</small><span>{name}</span></div><div><small>Market</small><span>{market}</span></div><div><small>Market zone</small><span>{zone}</span></div></div><div className="photo-evidence"><small>Photo evidence</small><div>▧&nbsp; Photo attached by consumer (sample data)</div></div><div className="feedback-pills"><span>♧ 11 Still Accurate</span><span>⌁ 4 Price Has Changed</span></div><div className="modal-comments"><h3>Comments</h3><p>No comments on this observation.</p></div><p className="modal-footnote">Community feedback never changes the original reported price. The observation stays stored as historical data.</p></section></div>
}
