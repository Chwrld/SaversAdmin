import PageHeading from '../ui/PageHeading'
import PanelHeading from '../ui/PanelHeading'
import Status from '../ui/Status'
import TableShell from '../ui/TableShell'
import MarketMap from '../map/MarketMap'
import { markets } from '../../data'

export default function MarketsPage() {
  return (
    <>
      <PageHeading
        title="Markets & Zones"
        description="Geolocation is used for market discovery, location, zone identification and commodity section navigation only."
        actions={<>
          <button>+ Add zone</button>
          <button className="primary">+ Add market</button>
        </>}
      />

      <article className="panel map-panel">
        <PanelHeading
          title="Market map"
          subtitle="Market locations rendered with MapLibre GL JS, OpenFreeMap vector tiles and OpenStreetMap data."
        />
        <MarketMap />
      </article>

      <div className="tabs">
        <button className="selected">Markets</button>
        <button>Market zones</button>
      </div>

      <TableShell title="Registered markets" count="5 markets" search="Search markets">
        <div className="data-table markets-table">
          <div className="table-row table-head">
            <span>Market ID</span>
            <span>Market</span>
            <span>Coordinates</span>
            <span>Zones</span>
            <span>Status</span>
            <span>Actions</span>
          </div>
          {markets.map(([id, name, address, coordinates, zones]) => (
            <div className="table-row" key={id}>
              <span>{id}</span>
              <span><strong>{name}</strong><small>{address}</small></span>
              <span>{coordinates}</span>
              <span>{zones}</span>
              <span><Status>Active</Status></span>
              <span className="row-actions">
                <button>Show on map</button>
                <button>Edit</button>
                <button>Archive</button>
              </span>
            </div>
          ))}
        </div>
      </TableShell>
    </>
  )
}
