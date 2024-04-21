import React, { useState } from 'react'

function MoreData(props) {
  
    const numbers =  [1,2,3,4,5,6,7]

    const [value,setValue] = useState("");
    const [search,setSerach] = useState(false)

    const handlechange =(e)=>{
        setValue(e.target.value)
        setSerach(true)
    }

    const countries = ["america","london","india"]

    const filtercountry = search ? countries.filter(countries => countries.toLowerCase().includes(value.toLowerCase())) : []

    const multinumber = numbers.map((num)=> num*2 )
  return (
    <div>
      <h1> {props.name} {props.purpose} {props.data} </h1>
      <p> {multinumber} </p>
      <h1> countries </h1>
      <ul style={{backgroundColor:"green"}}>{countries.map((name)=>(<li>{name}</li>))}</ul>

      <input type='text' value={value} onChange={handlechange} placeholder='search here'/>
      <ul>
        <li>{filtercountry}</li>
      </ul>
    </div>
  )
}

export default MoreData
