import React, { useState} from 'react'
import SingleCountryDisplay from './SingleCountryDisplay'

const Country = ({country}) => {
  const [displayCountry, setDisplayCountry] = useState([])

  const showCountry = () => {
    setDisplayCountry(displayCountry.concat(country))
  }
  if(displayCountry.length !== 0){
    return(<SingleCountryDisplay country={displayCountry}/>)
  }

    
  return (

      <div>
        {country.name}
        <button onClick={showCountry}> show </button>
      </div>
       
  )
}

export default Country