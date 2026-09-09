import PanelHeading from './PanelHeading'
import SearchBox from './SearchBox'

import { useState } from 'react'

export default function TableShell({ title, count, children, search = 'Search', marketFilter = false, onSearch, onStatusChange }) {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('all')

  function updateQuery(event) {
    setQuery(event.target.value)
    onSearch?.(event.target.value)
  }

  function updateStatus(event) {
    setStatus(event.target.value)
    onStatusChange?.(event.target.value)
  }

  return (
    <article className="panel table-panel">
      <PanelHeading title={title} subtitle={count} />
      <div className="table-tools">
        <SearchBox placeholder={search} value={query} onChange={updateQuery} />
        <select value={status} onChange={updateStatus}>
          <option value="all">All statuses</option>
          <option value="pending">Pending</option>
          <option value="flagged">Flagged</option>
          <option value="reviewed">Reviewed</option>
        </select>
        {marketFilter && <select defaultValue="all-markets"><option value="all-markets">All markets</option><option>Buhangin Public Market</option><option>Agdao Public Market</option><option>Bankerohan Public Market</option></select>}
      </div>
      {children}
      <div className="table-footer">
        <span>Showing 1–10 of {count.split(' ')[0]} records</span>
        <div>
          <button type="button" onClick={() => window.alert('You are on the first page') }>&#8249; Previous</button>
          <span>Page 1 of 5</span>
          <button type="button" onClick={() => window.alert('Next page loaded')}>Next &#8250;</button>
        </div>
      </div>
    </article>
  )
}
