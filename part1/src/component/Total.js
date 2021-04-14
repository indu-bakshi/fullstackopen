import React from 'react';

const Total = (props) =>{
   const [a,b,c]=props.total;
    console.log(props);
    return(
        <div>
            <p>Number of exercises  {a.exercises+b.exercises+c.exercises}</p>
        </div>
    )
}
export default Total;