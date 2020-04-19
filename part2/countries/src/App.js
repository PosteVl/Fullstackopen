import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayCountries from './components/DisplayCountries'
import Filter from './components/Filter'


const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filterValue, setFilterValue] = useState('')


  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  const handleFilterChange = (event) => {    
    setFilterValue(event.target.value)  
  }

  return (
    <div>

      <div>
        <Filter value={filterValue} changeValue={handleFilterChange} />
      </div>

      <div>
        <DisplayCountries countries={countries} filter={filterValue}/>
      </div>

    </div>
  )
}

export default App 