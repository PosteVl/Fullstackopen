import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Form from './components/Form'
import NumberDisplay from './components/NumberDisplay'


const App = () => {  
  const [people, setPeople] = useState([])
  const [newPerson, setNewPerson] = useState('') 
  const [phoneNumber, setPhoneNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPeople(response.data)
      })
  }

  useEffect(hook, [])

  const addPerson = (event) => {    
    event.preventDefault()    
    const personObject = {
      id: people.length + 1,
      name: newPerson,
      phone: phoneNumber
    } 
    if(people.some(person => person.name === newPerson) === false)
      setPeople(people.concat(personObject))
    else
      window.alert(`${newPerson} is already in the phonebook`)
    
    
    setNewPerson('')
    setPhoneNumber('')
   }

   const handlePersonChange = (event) => {    
      setNewPerson(event.target.value)  
    }

    const handlePhoneChange = (event) => {    
      setPhoneNumber(event.target.value)  
    }

    const handleFilterChange = (event) => {    
      setFilterValue(event.target.value)  
    }

  return (
    <div>
      <h1>Phonebook</h1>
        <Filter value={filterValue} changeValue={handleFilterChange} />

      <h1>add a new</h1>
        <Form submitValue={addPerson} 
              personValue={newPerson}
              phoneValue={phoneNumber}
              personChangeValue={handlePersonChange}
              phoneChangeValue={handlePhoneChange}/>

      <h1>Numbers</h1>
        <NumberDisplay people={people} filter={filterValue} />
        
    </div>
  )
}

export default App 