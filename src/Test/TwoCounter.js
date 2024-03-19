import React, { useState } from 'react'

function TwoCounter() {

    const [count1, setCount1] = useState(0)
    const [count2,setCount2] = useState(0)
    const [searchItem,setSearchItem] = useState('')
    const [searchPerformed,setSearchPerformed] = useState(false)
    const Countries = ["america","europe","germany","italy"]


    const handleIncrementDecrement=()=>{
        setCount1(count1+1)
        setCount2(count2-1)
    }

    
    const handleChange=(e)=>{
        setSearchItem(e.target.value)
        setSearchPerformed(true)
    }

    
    const filteredCountries = searchPerformed ? Countries.filter(country =>country.toLowerCase().includes(searchItem.toLowerCase())) : [] ;

  return (
    <div>
        <div>
            <h1>Counter 1</h1>
            <p>Count: {count1}</p>
            <button onClick={handleIncrementDecrement}>Increment</button>
        </div>
        <div>
            <h1>Counter 2</h1>
            <p>Count: {count2}</p>
        </div>
        <div>
            <h1>countries</h1>
            <u>{Countries.map((country,index)=>(<li key={index} style={{backgroundColor:"green"}}>{country}</li>))}</u>
        </div>
        <div>
        <input type='text' value={searchItem} placeholder='Search country here' onChange={handleChange} />
        <p></p>
                {filteredCountries.length > 0 ? (
                    <ul>
                        {filteredCountries.map((filteredCountry, index) => (
                            <li key={index}>{filteredCountry}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No matching countries found</p>
                )}
        </div>
        
    </div>
  )
}

export default TwoCounter
