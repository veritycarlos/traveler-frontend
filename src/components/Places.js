import React, { useState, useEffect } from 'react'
import PlaceLink  from '../components/PlaceLink'

const Places = () => {
    const [places, setPlaces] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:9292/places')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPlaces(data)
            })
    }, [])


    const placesList = places.map( p => <PlaceLink key={p.id} place={p} />)
   
    return (
        <div>
            <br/>
            <h1>Cities</h1>
            <h3>
                {placesList}
            </h3>
        </div>
    )
}

export default Places
