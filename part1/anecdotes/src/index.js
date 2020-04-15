import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Button component
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// Vote statistics 
const Stats = ({votes}) => (
  <div>
    has {votes} votes
  </div>
)

// Title renderings
const Display = ({title}) => (
  
  <h1>{title}</h1>
)

// Most votes component
const MostVotes = ({votes, anecdotes}) => {
  // get the max element of votes array
  // output the anecdote found at the index of that value, and the value itself
  let maxSelected = Math.max(...votes)
  return (
    <div>
      {anecdotes[votes.indexOf(maxSelected)]}
      <p>has {maxSelected} votes</p>
    </div>
  )
}

// Root component
const App = (props) => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * props.anecdotes.length))
  let [vote, setVote] = useState(new Array(props.anecdotes.length).fill(0))


  // select a random number between 0 and 5 and add it to the selected var
  const nextRandomAnectode = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))
  }

  // debugging purposes
  // console.log(vote, vote[selected])

  // vote for an anecdote
  const voteAnecdote = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }

  return (
    <div>
      <Display title='Anecdotes of the day' />
      {props.anecdotes[selected]}
      <br />
      <Stats votes={vote[selected]} />
      <br />
      <Button handleClick={nextRandomAnectode} text='next anecdote'/>
      <Button handleClick={voteAnecdote} text='vote'/>
      <br />
      <Display title='Anecdote with most votes' />
      <MostVotes votes={vote} anecdotes={props.anecdotes} />
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)