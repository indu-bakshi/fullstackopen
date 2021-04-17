import React from 'react'

const Display = ({text,count,text2}) =>{
    return(
        <>
        <td>{text}</td>
        <td>{count}{text2}</td>
        </>
    )
} 

export default Display;