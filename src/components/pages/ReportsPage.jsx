import PageHeading from '../ui/PageHeading'
import Status from '../ui/Status'
import TableShell from '../ui/TableShell'
import { observations } from '../../data'

export default function ReportsPage() {
  return (
    <>
      <PageHeading
        title="Crowdsourced Price Reports"
        description="Every report is a time-stamped consumer observation. Nothing here is automatically declared an officially verified price."
      />
      <TableShell title="All observations" count="460 reports" search="Search reports">
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
          {observations.concat(observations).map(([name, detail, status], index) => (
            <div className="table-row" key={`${name}-${index}`}>
              <span>RPT-{String(index + 1).padStart(4, '0')}</span>
              <span><strong>{name.split(' - ')[0]}</strong><small>{['Rhea Aquino', 'Ana Torres', 'Jose Aquino', 'Kim Domingo'][index % 4]}</small></span>
              <span>{name.split(' - ')[1]}</span>
              <span><strong>{detail.split(' · ')[0]}</strong><small>Vegetable Section</small></span>
              <span>{detail.split(' · ')[1]}</span>
              <span>{index % 3 + 2} accurate · {index % 5} changed</span>
              <span>{index % 2 ? '—' : 'Yes'}</span>
              <span><Status>{status}</Status></span>
              <span className="row-actions">
                <button>View</button>
                <button>Mark reviewed</button>
                <button>Flag</button>
                <button>Hide</button>
                <button className="danger">Remove</button>
              </span>
            </div>
          ))}
        </div>
      </TableShell>
    </>
  )
}
