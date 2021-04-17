import React from 'react'
import Display from './Display'
const Statistics= ({good,bad,neutral,total})=>{
    if(good===0 && bad===0 && neutral===0){
        return(
            <div>
                <h1>Statistics</h1>
            No Feedback given</div>
        )
    }
    else{
        let avg=(good*1 + bad*(-1))/(total);
        let pos = (good/total)*100;
        
    return(
        <div>
        <h1>Statistics</h1>
        <table>
            <tbody>
                <tr><Display text="Good" count={good}/></tr>
                <tr><Display text="Neutral" count={neutral}/></tr>
                <tr><Display text="Bad" count={bad}/></tr>
                <tr><Display text="All" count={total}/></tr>
                <tr><Display text="Average" count={avg.toFixed(2)}/></tr>
                <tr><Display text="Positive" count={pos.toFixed(2)} text2="%"/></tr>
                </tbody>
        </table>
            </div>
    )
    }
}

export default Statistics;