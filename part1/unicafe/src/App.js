import React, {useState} from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = ()=>{

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] =useState(0);
    const [bad, setBad] = useState(0);

    const handleGood = () => setGood(good+1);
    const handleNeutral =()=> setNeutral(neutral+1);
    const handleBad =()=> setBad(bad+1);

    let total= good+bad+neutral;
    
    return(
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick = {handleGood}  text="Good"/>
            <Button handleClick = {handleNeutral} text="Neutral"/>
            <Button handleClick ={handleBad} text="Bad"/>

            <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
           
        </div>
    )
}

export default App;