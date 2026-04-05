import { useState, useEffect } from 'react'

function useWildfires() {
  const [wildfires, setWildfires] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires&status=open&days=10')
      .then(res => res.json())
      .then(data => {
        const fires = data.events.map(event => ({
          id: event.id,
          title: event.title,
          lat: event.geometry[0].coordinates[1],
          lng: event.geometry[0].coordinates[0],
          date: event.geometry[0].date
        }))
        setWildfires(fires)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])

  return { wildfires, loading, error }
}

export default useWildfires