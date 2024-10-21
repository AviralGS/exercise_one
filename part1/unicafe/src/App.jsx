import { useState } from 'react'
const Positive = ({ text, value }) => <p>{text} {value}%</p>
const Display = ({ text, value }) => <p>{text} {value}</p>


const Button = ({ feedback, text }) => (
  <button onClick={feedback}>{text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = (good + neutral + bad)
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const positive = good / total * 100

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button feedback={() => setGood(good + 1)} text='Good' />
      <Button feedback={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button feedback={() => setBad(bad + 1)} text='Bad' />
      
      <h1>Statistics</h1>
      <Display text='Good' value={good} />
      <Display text='Neutral' value={neutral} />
      <Display text='Bad' value={bad} />
      <Display text='All' value={total} />
      <Display text='Average' value={average} />
      <Positive text='Positive' value={positive}/>
    </div>
  )
}

export default App
