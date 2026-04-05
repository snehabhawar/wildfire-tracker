import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import useWildfires from '../hooks/useWildfires'
import L from 'leaflet'

const fireIcon = L.divIcon({
  className: '',
  html: '🔥',
  iconSize: [30, 30],
  iconAnchor: [15, 15]
})

function Map() {
  const { wildfires, loading, error } = useWildfires()

  if (loading) return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <h2>Loading Wildfires...</h2>
      <p>Fetching live data from NASA EONET</p>
    </div>
  )

  if (error) return (
    <div className="loading-screen">
      <h2>Something went wrong</h2>
      <p>Could not fetch wildfire data. Try refreshing.</p>
    </div>
  )

  return (
    <>
      <div className="fire-count">
        🔥 {wildfires.length} Active Wildfires in the last 10 days
      </div>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {wildfires.map(fire => (
          <Marker key={fire.id} position={[fire.lat, fire.lng]} icon={fireIcon}>
            <Popup>
              <b>{fire.title}</b><br />
              Lat: {fire.lat}<br />
              Lng: {fire.lng}<br />
              Date: {new Date(fire.date).toLocaleDateString()}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  )
}

export default Map