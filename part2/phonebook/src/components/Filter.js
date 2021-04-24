import React from 'react'

const Filter = ({filtering, handleFilter}) =>{

    return(
        <>
        filter shown with <input value={filtering} onChange={handleFilter} />
        </>
    )
}

export default Filter