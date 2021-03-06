import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)    
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)
  return (
    <div>
      <div><Display counter={counter}/></div>
      <Button handleClick={increaseByOne} text='plus'/> 
      <Button handleClick={setToZero}  text='zero' />
      <Button handleClick={decreaseByOne}  text='minus' />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))