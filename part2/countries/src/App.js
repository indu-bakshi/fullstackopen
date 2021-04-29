import React, {useState, useEffect} from 'react'
import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY

const App=()=>{
   
    const [countryData,setCountryData] = useState([])
    const [inputSearch, setInputSearch]=useState("")
    const [val,setVal]= useState([])
    const [weatherData,setWeatherData] =useState([])
    useEffect(()=>{
       
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            setCountryData(response.data)
        })
        
    },[])
    let capital='New York';
        if(val.length===0){
            capital='New York'
        }
        else{
            capital= val[0].capital
        }
    useEffect(()=> {
        
        const params = {
            access_key: api_key,
            query: capital
          }
        //   console.log("UseEffect",)
        axios
        .get('http://api.weatherstack.com/current',{params})
        .then(response=>{
            console.log(response.data)
            setWeatherData(response.data)
        }).catch(error =>{
            console.log(error)
        })
        
    },[val])
console.log("Weatherdata",weatherData);
    // const [newVal,setNewVal]=useState([])
    console.log(countryData)
    const handleChange=(event)=>{
        setInputSearch(event.target.value)
        setVal(countryData.filter(elem=>elem.name.toLowerCase().includes(inputSearch.toLowerCase())))
    }
    
    // setNewVal(val);
    const handleShow=(target)=>{
        setVal(target)
        

    }
    // console.log(newVal)
    console.log("VAl",val)
    if(inputSearch.length>0 && val.length<10 && val.length>1){
        return(
            <div>
            find countries <input onChange={handleChange} value={inputSearch}/>
            {val.map(target=>(
            <p key={target.name}>{target.name}
               
              
             <button onClick={()=>handleShow([target])}>Show</button>
            </p>
            ))}
            </div>
        )
    }
    else if(val.length>=10){
        return(
            <div>
               find countries <input onChange={handleChange} value={inputSearch}/><br>
               </br>
               Too many matches, specify another filter 
            </div>
        )
    }
    else if(val.length===1){
        return(
            <div>
                
               find countries <input onChange={handleChange} value={inputSearch}/>
               {val.map(target=>(
               <div key={target.name}>
                   
                   <h1>{target.name}</h1>
                   capital {target.capital}<br></br>
                   population {target.population}<br/>
                    <h3>Languages</h3>
                    {target.languages.map(lang=>(
                        <li key={lang.name}>{lang.name}</li>
                    )     
                    )}
                    <br></br>
                    <img src={target.flag} alt="Flag" width ="200"/>

                    <h3>Weather in {target.capital}</h3>
                     temperature: {weatherData.current.temperature} celsius<br></br>
                     {weatherData.current.weather_icons.map(imagedata => 
                       <img src={imagedata} alt="weather" width ="100" key={imagedata}/> )}
                     
                   </div>
               ))}
            </div>
        )
    }
    
    

    else if(val.length===0){
        return(

            <div>
                 find countries <input onChange={handleChange} value={inputSearch}/><br></br>
                 Search any country
                 </div>
        )
    }
       
    
 }

export default App