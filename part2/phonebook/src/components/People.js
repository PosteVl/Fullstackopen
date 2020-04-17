import React from 'react'

const People = ({ people }) => {
  return (
    <li>{people.name} {people.phone}</li>
  )
}

export default People