'use client'

import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect, useRef, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"

export default function Map({ address }){
    const [position, setPosition] = useState([-23.316, -58.169])
    const [theme, setTheme] = useState('dark');
    const mapRef = useRef(null)

    const url = theme === 'dark' 
                ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'   
                : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png' 

    useEffect( () => {
        const preferColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
        setTheme(preferColorScheme.matches ? 'dark' : 'light')
        
        preferColorScheme.addEventListener('change', (event) => {
            if (event.matches) 
                setTheme('dark')
            else
                setTheme('light') 
        })
        

        const fetchData = async () => {
            const provider = new OpenStreetMapProvider()
            const results = await provider.search({ query : address.name })
            if(results.length) setPosition([results[0].y, results[0].x])
        }

        fetchData()
    }, [address.name])

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
                    <Fly to={position} zoom={address.zoom}/>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url={url}/>
                    <Marker position={position}>
                        <Popup>{ address.name }</Popup>
                    </Marker>
            </MapContainer>
        </div>
    )
}

function Fly({ to, zoom = 6 }){
    const map = useMap()
    map.flyTo(to, zoom, { duration: .8 })
    return null
}