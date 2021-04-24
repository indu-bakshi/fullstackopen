import React from 'react'

const PersonForm = (props)=>{
const {formHandle,handleNameChange,handleNumberChange,newName,newNumber} = props

return(
    <>
     <form onSubmit={formHandle}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <br></br>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <br></br>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
)
}

export default PersonForm