#  Wildfire Tracker

A live wildfire tracking web app built with React, powered by NASA's EONET API and OpenStreetMap.

## What it does
- Displays active wildfires on a world map in real time
- Shows fire emoji markers at exact coordinates
- Click any marker to see the fire name, coordinates and date
- Shows total count of active fires in the last 10 days
- Smooth loading screen while data is being fetched

## Tech Stack
- **React** — UI framework
- **Vite** — build tool
- **React Leaflet** — interactive map
- **OpenStreetMap** — free map tiles
- **NASA EONET API** — live wildfire data

## Running locally
```bash
npm install
npm run dev
```

## Data Source
[NASA EONET API](https://eonet.gsfc.nasa.gov/) — Earth Observatory Natural Event Tracker
