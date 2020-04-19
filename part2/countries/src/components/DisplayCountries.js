import React from 'react'
import Country from './Country'
import SingleCountryDisplay from './SingleCountryDisplay'

const DisplayCountry = ({countries, filter}) => {
  
  if(countries.filter(country =>
    country.name.includes(filter)).length > 10){
      return('Too many matches, specify another filter')
  }
  if(countries.filter(country =>
    country.name.includes(filter)).length === 1){
      return(
       <SingleCountryDisplay 
         key={countries.filter(country => country.name.includes(filter)).id} 
         country={countries.filter(country => country.name.includes(filter))} 
       />
      )
  }
  return (
    countries.filter(country =>
     country.name.includes(filter)
    ).map(country => 
     <Country key={country.id} country={country} />
    )  
  )
}

export default DisplayCountry