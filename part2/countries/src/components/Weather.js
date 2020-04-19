import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Weather = ({capital}) => {

    const REACT_APP_WEATHER = process.env.REACT_APP_WEATHER

    const [weatherData, setWeatherData] = useState({
        current: {
          temperature: null
        }
      })
    
      useEffect(() => {
        axios
          .get(`http://api.weatherstack.com/current?access_key=${REACT_APP_WEATHER}&query=${capital}`)
          .then(response => {
            setWeatherData(response.data)
          })
      }, [])

    return(
        <div>
            <b>temperature: </b> {weatherData.current.temperature}
        </div>
    )
}

export default Weather