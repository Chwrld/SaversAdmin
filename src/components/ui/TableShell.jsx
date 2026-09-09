import PanelHeading from './PanelHeading'
import SearchBox from './SearchBox'

export default function TableShell({ title, count, children, search = 'Search' }) {
  return (
    <article className="panel table-panel">
      <PanelHeading title={title} subtitle={count} />
      <div className="table-tools">
        <SearchBox placeholder={search} />
        <select defaultValue="all">
          <option value="all">All statuses</option>
        </select>
      </div>
      {children}
      <div className="table-footer">
        <span>Showing 1–10 of {count.split(' ')[0]} records</span>
        <div>
          <button>&#8249; Previous</button>
          <span>Page 1 of 5</span>
          <button>Next &#8250;</button>
        </div>
      </div>
    </article>
  )
}
