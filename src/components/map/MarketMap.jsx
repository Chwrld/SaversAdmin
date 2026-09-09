import { useEffect, useRef } from 'react'
import { Map, Marker, NavigationControl, Popup } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const markets = [
  { id: 'MKT-001', name: 'Agdao Public Market', address: 'Lapu-Lapu St, Agdao, Davao City', lng: 125.6205, lat: 7.0925 },
  { id: 'MKT-002', name: 'Bankerohan Public Market', address: 'Quirino Ave, Poblacion, Davao City', lng: 125.6068, lat: 7.0699 },
  { id: 'MKT-003', name: 'Toril Public Market', address: 'Aquino St, Toril, Davao City', lng: 125.4989, lat: 7.0128 },
  { id: 'MKT-004', name: 'Buhangin Public Market', address: 'Buhangin Rd, Davao City', lng: 125.6146, lat: 7.1044 },
  { id: 'MKT-005', name: 'Bangkal Public Market', address: 'McArthur Hwy, Bangkal, Davao City', lng: 125.5912, lat: 7.0487 },
]

export default function MarketMap() {
  const mapContainer = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (mapRef.current) return

    const map = new Map({
      container: mapContainer.current,
      style: 'https://tiles.openfreemap.org/styles/liberty',
      center: [125.57, 7.07],
      zoom: 12,
    })

    map.addControl(new NavigationControl(), 'top-right')

    map.on('load', () => {
      markets.forEach((m) => {
        const el = document.createElement('div')
        el.className = 'market-marker'

        const popup = new Popup({ offset: 20, className: 'market-popup' })
          .setHTML(`<strong>${m.name}</strong><small>${m.address}</small>`)

        new Marker({ element: el })
          .setLngLat([m.lng, m.lat])
          .setPopup(popup)
          .addTo(map)
      })
    })

    mapRef.current = map

    return () => { map.remove(); mapRef.current = null }
  }, [])

  return <div ref={mapContainer} className="maplibregl-map market-map" />
}
