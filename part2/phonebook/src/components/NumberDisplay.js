import React from 'react'
import People from './People'

const NumberDisplay = ({people, filter}) => {
  return (
    <ul>
        {people.filter(person =>
          person.name.includes(filter)
        ).map(person => 
          <People key={person.id} people={person} />
        )}
      </ul>
  )
}

export default NumberDisplay