'use client'

import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect, useRef, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"

export default function Map({ address }){
    const [position, setPosition] = useState([-23.316, -58.169])
    const mapRef = useRef(null)

    useEffect( () => {
        const fetchData = async () => {
            const provider = new OpenStreetMapProvider()
            const results = await provider.search({ query : address })

            if(results) setPosition([results[0].y, results[0].x])
        }

        fetchData()
    }, [address])

    return(
        <div className="w-7/12">
            <MapContainer 
                ref={mapRef}
                center={position}
                zoom={10}
                minZoom={3}
                style={{ height: "100vh" , width: "100%" }}
                zoomControl={false}
                preferCanvas={true}>
                    <Fly to={position} />
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={position}>
                        <Popup>{ address }</Popup>
                    </Marker>
            </MapContainer>
        </div>
    )
}

function Fly({ to }){
    const map = useMap()
    map.flyTo(to, 16, {duration: .8, animate: true})
    return null
}