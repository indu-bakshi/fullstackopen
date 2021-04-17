import React from 'react';
import Content from './component/Content';
import Header from './component/Header';
import Total from './component/Total';

const App = () =>{
    // const course =' Half stack application development';
const course={
    name: 'Half stack application development',
    parts: [ 
    {
        name:"Fundamentals of React",
        exercises:10
    },
    {
        name: 'Using Props to Pass Data',
        exercises: 7
    },
    {
        name: 'state of a component',
        exercises: 14
    }
]
}
    // const part1= {
    //     name:"Fundamentals of React",
    //     exercises:10
    // }
    // const part2= {
    //     name: 'Using Props to Pass Data',
    //     exercises: 7
    // }
    // const part3= {
    //     name: 'state of a component',
    //     exercises: 14
    // }
    return(
        <div>
            <Header course={course}/>
            <Content partss={course.parts}/>
            <Total total={course.parts}/>

            {/* commented this section to update exercise 1.4 */}
            {/* <Content part1={part1.name} part2={part2.name} part3={part3.name} exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises}/>
            <Total total={part1.exercises + part2.exercises + part3.exercises}/> */}
            {/* -------end----- */}

            {/* commented this section to update exercise 1.3 */}
            {/* <Content part1={part1} part2={part2} part3={part3} exercise1={exercise1} exercise2={exercise2} exercise3={exercise3}/>
            <Total total={exercise1 + exercise2 + exercise3}/> */}
            {/* -------end----- */}

            {/* commented this section to update exercise 1.2 */}
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
            {/* -------end---------- */}
        </div>
    )
}

export default App