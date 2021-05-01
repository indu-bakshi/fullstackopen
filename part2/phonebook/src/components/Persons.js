import React from 'react'
import personService from '../services/persons'

const Persons = ({persons,filtering,setPerson}) =>{
        const val = persons.filter(elem => elem.name.toLowerCase().includes(filtering.toLowerCase()))
    
   
   const handleButton = (info)=> {

    if(window.confirm(`Delete ${info.name}?`)){
        personService
        .deletePerson(info.id)
        setPerson(persons.filter(el=>el.id !== info.id))
    }   
    }
    
   
    
    console.log(val)
    if(filtering ===''){
        return(
            <> {persons.map((info) => (
                <div key={info.name}>
                  {info.name} {info.number}     
                      <button onClick={()=>handleButton(info)}>Delete</button>
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
            <div key={elem.name}>{elem.name} {elem.number} 
           <button onClick={()=>handleButton(elem.id)}>Delete</button>
            </div> 
           ))}
            
            </>
        )
    }
    
    
}
export default Persons