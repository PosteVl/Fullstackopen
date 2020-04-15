import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Display component
const Display = ({title}) => <h1>{title}</h1>

// Individual statistic component
const Statistic = ({text, statNumber}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{statNumber}</td>
    </tr>
  )
}

// Cumulative statistics component, calls individual statistic component multiple times
const Statistics = ({good, bad, neutral, all, average}) => {
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <Statistic text='good' statNumber={good}/>
      <Statistic text='neutral' statNumber={neutral}/>
      <Statistic text='bad' statNumber={bad}/>
      <Statistic text='all' statNumber={all}/>
      <Statistic text='average' statNumber={average / all}/>
      <Statistic text='positive' statNumber={good / all}/>
    </table>
  )
}

// Button component
const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

// Root App component
const App = (props) => {
    const title = 'give feedback'
    const stats = 'statistics'
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)

    // state modifying functions for the button onClick
    const handleGoodClick = () => {    
        setGood(good + 1) 
        setAll(all + 1) 
        setAverage(average + 1)
    }

    const handleBadClick = () => {    
        setBad(bad + 1)  
        setAll(all + 1)
        setAverage(average - 1)
    }

    const handleNeutralClick = () => {    
      setNeutral(neutral + 1)  
      setAll(all + 1)
    }

    return (
      <div>
        <Display title={title} />
        <div>
          <Button handleClick={handleGoodClick} text='good' />
          <Button handleClick={handleNeutralClick} text='neutral' />
          <Button handleClick={handleBadClick} text='bad' />    
          </div>
        <Display title={stats} /> 
        <Statistics good={good} bad={bad} neutral={neutral} average={average} all={all} />
      </div>
    )
  }

// Render page
ReactDOM.render(<App />, document.getElementById('root'))



