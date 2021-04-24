import React, { useState } from "react";
import Persons from "./components/Persons";
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';


const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "303-304-305" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtering, setFilter] = useState("");

  const formHandle = (event) => {
    event.preventDefault();

    const infoObject = {
      name: newName,
      number: newNumber,
    };

    const nameCount = persons.filter((elem) => elem.name === newName);

    nameCount.length > 0
      ? alert(`${newName} is already added to the phonebook`)
      : setPersons(persons.concat(infoObject));

    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const handleFilter = (event) => {
    // console.log(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filtering={filtering} handleFilter={handleFilter}/>

    <h2>Add a new</h2>
    <PersonForm formHandle={formHandle} 
    handleNameChange={handleNameChange} 
    handleNumberChange={handleNumberChange}
    newName={newName}
    newNumber={newNumber}
    />
     
      <h2>Numbers</h2>
      <Persons persons={persons} filtering={filtering} />
    </div>
  )
};

export default App;
