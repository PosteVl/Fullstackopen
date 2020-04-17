import React from 'react'

const Form = ({submitValue, 
               personValue, 
               phoneValue, 
               personChangeValue, 
               phoneChangeValue}) => {
  return (
    <form onSubmit={submitValue}>        
        <div>Name: <input value={personValue} onChange={personChangeValue}/></div> 
        <div>Number: <input value={phoneValue} onChange={phoneChangeValue}/></div>
        <div> <button type="submit"> add </button> </div>       
                
      </form> 
  )
}

export default Form