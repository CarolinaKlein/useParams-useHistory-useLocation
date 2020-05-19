import React from 'react'
import {useParams, useHistory} from 'react-router'

function Mallorca(){
    const {city, neighborhood} = useParams()
    const history = useHistory()
    
    const goBackHandle = () => {
        history.goBack()
    }
    return (
        <>
        <div>Mallorca {city} {neighborhood}</div>
        <button onClick={goBackHandle}>Go Back</button>
        </>
        )
}

export default Mallorca