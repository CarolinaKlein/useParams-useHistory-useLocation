import React from 'react'
import {useLocation, useHistory} from 'react-router'

function Miami(){
    const location = useLocation();
    console.log(location)

    const history = useHistory()
    
    const goBackHandle = () => {
        history.goBack()
    }
    
    return(
        <>
        <div>Miami</div>
        <div>Location Pathname = {location.pathname}</div>
        <div>Location State From = {location.state.from}</div>
        <button onClick={goBackHandle}>Go Back</button>
        </>
    )
}

export default Miami