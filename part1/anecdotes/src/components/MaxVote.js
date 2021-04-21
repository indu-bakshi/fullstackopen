import React from 'react'

const MaxVote =({vote, anecdotes})=>{
    const max= Math.max(...vote);
    let index = vote.indexOf(max);
    if(max===0){
        return (
            <>No votes yet</>
            )
    }
    else{
    return(
        <>
          {anecdotes[index]} <br></br> has {max} votes  
        </>
    )
    }
}

export default MaxVote