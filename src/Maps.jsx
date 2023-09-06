import React from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
const Maps = ({coordinates}) => {

    const Marker = new L.icon({iconUrl:'src/icon-location.svg'})

    let state = {
        keyMap:Math.random(),
    }
  return (
    <MapContainer
      key={state.keyMap}
      center={[coordinates.lat, coordinates.lng]}
      zoom={18}
      className="w-full h-3/5 z-0"
    >
      <TileLayer
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      >
        <Marker
          position={[coordinates.lat, coordinates.lng]}
          icon={Marker}
        ></Marker>
      </TileLayer>
    </MapContainer>
  )
}

export default Maps