import React from 'react'

const Filter = ({value, changeValue}) => {
  return (
    <div>filter shown with: <input value={value} onChange={changeValue}/></div>
  )
}

export default Filter