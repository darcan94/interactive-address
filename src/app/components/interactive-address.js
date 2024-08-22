'use client'

import dynamic from "next/dynamic"
import { useState } from "react"
import Address from "./address"

const Map = dynamic(() => import("./map"), {
    loading: () => <div>Loading Map...</div>,
    ssr: false
})

export default function InteractiveAddress(){
    const [address, setAddress] = useState("Paraguay")

    return(
        <>
            <Address onClick={(value) => setAddress(value)} />
            <Map address={address}/>
        </>
    )
} 