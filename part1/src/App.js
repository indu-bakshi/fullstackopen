import React from 'react';
import Content from './component/Content';
import Header from './component/Header';
import Total from './component/Total';

const App = () =>{
    const course =' Half stack application development';
    const part1= "Fundamentals of React";
    const exercise1 = 10;
    const part2= 'Using Props to Pass Data';
    const exercise2 = 7;
    const part3='state of a component';
    const exercise3= 14;

    return(
        <div>
            <Header course={course}/>
            <Content part1={part1} part2={part2} part3={part3} exercise1={exercise1} exercise2={exercise2} exercise3={exercise3}/>
            <Total total={exercise1 + exercise2 + exercise3}/>
            {/* <h1>{course}</h1>
            <p>
                {part1} {exercise1}
            </p>
            <p>
                {part2} {exercise2}
            </p>
            <p>
                {part3} {exercise3}
            </p>
            <p>No of exercises {exercise1 + exercise2 + exercise3} </p> */}
        </div>
    )
}

export default App