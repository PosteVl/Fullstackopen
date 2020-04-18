import React from 'react'

const Filter = ({value, changeValue}) => {
  return (
    <div>find countries: <input value={value} onChange={changeValue}/></div>
  )
}

export default Filter