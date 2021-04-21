import React, {useState} from 'react'
import Button from './components/Button'
import MaxVote from './components/MaxVote'

const App =()=>{
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
      ]

      const [selected, setSelected] =useState(0)
      const [vote, setVote] =useState(new Array(anecdotes.length).fill(0))
      const randomnumber = () => setSelected(Math.floor(Math.random() * anecdotes.length));
      

    const pointadd = () => {
         const copy= [...vote]
         copy[selected] +=1;
         setVote(copy); 
      }
    
    return(
        <div>
          <h1>Anecdote of the day</h1>
            {anecdotes[selected]}<br></br> 
            <Button handleClick={pointadd} text="Vote"/>
            <Button handleClick={randomnumber} text="next anecdotes"/>
            <br></br> 
            has {vote[selected]} vote

          <h1>Anecdote with most vote</h1>
          <MaxVote vote={vote} anecdotes={anecdotes}/>
        </div>
    )
}

export default App;