import { useMemo, useState } from 'react'
import PageHeading from '../ui/PageHeading'
import Status from '../ui/Status'
import { commodities } from '../../data'

export default function CommoditiesPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All categories')
  const [rows, setRows] = useState(commodities)
  const filtered = useMemo(() => rows.filter(([, name, group]) => {
    const matchesQuery = name.toLowerCase().includes(query.toLowerCase())
    return matchesQuery && (category === 'All categories' || group === category)
  }), [category, query, rows])

  function toggleStatus(id) {
    setRows((current) => current.map((row) => row[0] === id ? [...row.slice(0, 4), row[4] === 'Active' ? 'Archived' : 'Active', row[5]] : row))
  }

  return <>
    <PageHeading title="Commodity Management" description="Wet market goods tracked by consumers, grouped by category and standard unit." actions={<button className="primary" onClick={() => window.alert('Add commodity form coming soon')}>＋ Add commodity</button>} />
    <article className="panel table-panel commodity-panel">
      <div className="panel-heading"><h2>Commodity catalogue</h2><p>{rows.length} commodities</p></div>
      <div className="table-tools"><label className="table-search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search commodities..." /></label><select value={category} onChange={(event) => setCategory(event.target.value)}><option>All categories</option><option>Vegetables</option><option>Fruits</option><option>Meat</option></select></div>
      <div className="data-table commodity-table"><div className="table-row table-head"><span>Commodity ID</span><span>Name</span><span>Category</span><span>Standard unit</span><span>Status</span><span>Created</span><span>Actions</span></div>{filtered.map(([id, name, group, unit, status, created]) => <div className="table-row" key={id}><span>{id}</span><span><strong>{name}</strong></span><span>{group}</span><span>{unit}</span><span><Status>{status}</Status></span><span>{created}</span><span className="row-actions"><button onClick={() => window.alert(`Editing ${name}`)}>Edit</button><button onClick={() => toggleStatus(id)}>{status === 'Active' ? 'Archive' : 'Restore'}</button></span></div>)}</div>
      <div className="table-footer"><span>Showing {filtered.length} of {rows.length} commodities</span><span>Catalogue is up to date</span></div>
    </article>
  </>
}
