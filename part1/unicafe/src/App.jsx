import { useState } from 'react'

const StatisticLine = ({ text, value }) => <p>{text} {value}</p>
const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <p>No feedback given</p>
  }
  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text='Good' /></td>
            <td><StatisticLine value={good} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='Neutral' /></td>
            <td><StatisticLine value={neutral} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='Bad' /></td>
            <td><StatisticLine value={bad} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='All' /></td>
            <td><StatisticLine value={total} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='Average' /></td>
            <td><StatisticLine value={average} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='Positive' /></td>
            <td><StatisticLine value={positive} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ feedback, text }) => (
  <button onClick={feedback}>{text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = (good + neutral + bad)
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const positive = (good / total) * 100 + '%'

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button feedback={() => setGood(good + 1)} text='Good' />
      <Button feedback={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button feedback={() => setBad(bad + 1)} text='Bad' />
      
      <h1>Statistics</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App
