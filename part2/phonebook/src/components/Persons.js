import React from 'react'

const Persons = ({persons,filtering}) =>{
    const val = persons.filter(elem => elem.name.toLowerCase().includes(filtering.toLowerCase()))
    // console.log(val)
    if(filtering ===''){
        return(
            <> {persons.map((info) => (
                <div key={info.name}>
                  {info.name} {info.number}
                </div>
              ))}
              </>
        )
    }
    else if(val.length===0){
        return(
            <>No result Found</>
        )
    }
    else{
        return(
            <>
            {val.map(elem => (
            <div key={elem.name}>{elem.name} {elem.number}</div>
            ))}
            
            </>
        )
    }
    
    
}
export default Persons