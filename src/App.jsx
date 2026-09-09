import { useState } from 'react'
import './App.css'
import Icon from './components/ui/Icon'
import Dashboard from './components/pages/Dashboard'
import UsersPage from './components/pages/UsersPage'
import MarketsPage from './components/pages/MarketsPage'
import ReportsPage from './components/pages/ReportsPage'
import CommoditiesPage from './components/pages/CommoditiesPage'
import PageHeading from './components/ui/PageHeading'

const navItems = [
  ['Dashboard', '▦'], ['Users', '♙'], ['Commodities', '◈'],
  ['Markets & Zones', '⌁'], ['Price Reports', '▤'], ['Community Feedback', '◌'],
  ['Flagged Reports', '⚑'], ['Reference Prices', '⌖'], ['Descriptive Analytics', '◒'],
  ['Activity Logs', '◷'], ['Settings', '⚙'],
]

function App() {
  const [page, setPage] = useState('Dashboard')
  const pages = {
    Dashboard: <Dashboard />,
    Users: <UsersPage />,
    Commodities: <CommoditiesPage />,
    'Markets & Zones': <MarketsPage />,
    'Price Reports': <ReportsPage />,
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">SB</span>
          <span><strong>SaversBubble</strong><small>Admin Control Center</small></span>
        </div>
        <nav>
          {navItems.map(([label, icon]) => (
            <a
              className={page === label ? 'active' : ''}
              href={`#${label.toLowerCase().replaceAll(' ', '-')}`}
              onClick={(e) => { e.preventDefault(); setPage(label) }}
              key={label}
            >
              <Icon>{icon}</Icon>{label}
            </a>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <label className="search">
            <span>⌕</span>
            <input placeholder="Search markets, commodities, reports" />
          </label>
          <div className="user-tools">
            <span>♧</span>
            <span className="avatar">AD</span>
            <div><strong>Admin Dela Cruz</strong><small>Administrator</small></div>
            <span>⌄</span>
          </div>
        </header>
        <section className="content">
          {pages[page] || (
            <PageHeading
              title={page}
              description="This administration section is ready for content and workflow configuration."
            />
          )}
        </section>
      </main>
    </div>
  )
}

export default App
