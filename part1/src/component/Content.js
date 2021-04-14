import React from 'react';
import Part from './Part';

const Content = (props) =>{
    console.log(props)
    let [a,b,c]=props.partss;
    
    return(
        <div>
            <Part part={a.name} exercise={a.exercises}/>
            <Part part={b.name} exercise={b.exercises}/>
            <Part part={c.name} exercise={c.exercises}/>

            {/* <p>{props.part1} {props.exercise1}</p>
            <p>{props.part2} {props.exercise2}</p>
            <p>{props.part3} {props.exercise3}</p> */}
            
            {/* <Part part={props.part1} exercise={props.exercise1}/>
            <Part part={props.part2} exercise={props.exercise2}/>
            <Part part={props.part3} exercise={props.exercise3}/> */}
            
        </div>
    )
}
export default Content;