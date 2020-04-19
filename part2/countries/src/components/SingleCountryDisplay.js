import React from 'react'
import Language from './Language'
import Flag from './Flag'
import Weather from './Weather'

const SingleCountryDisplay = ({country}) => {

  return (
    <div>
        <div>
          <h1>{country[0].name}</h1>
          <p>capital {country[0].capital}</p>
          <p>population {country[0].population}</p>
        </div>

        <div>
          <h1>languages</h1>
          <ul>
          {country[0].languages.map((language, index) => 
            <Language key={index} language={language} /> )}
          </ul>
        </div>

        <div>
         <Flag flag={country[0].flag} />
        </div>

        <div>
          <h1>Weather in {country[0].capital}</h1>
          <Weather capital={country[0].capital} />
        </div>
    </div>
  )
}

export default SingleCountryDisplay