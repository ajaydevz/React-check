import React, { useState } from 'react'

function AddNum() {

    const [number1, setNumber1] = useState()
    const [number2, setNumber2] = useState()
    const [total, setTotal] = useState(number1+number2)

    function addnum(){
        const sum = parseInt(number1) + parseInt(number2)
        setTotal(sum)
    }
  return (
    <div>
      <h1>Add two numbers</h1>
      <input type='number' value={number1} onChange={(e)=>{setNumber1(e.target.value)}}/>
      <input type='number' value={number2} onChange={(e)=>{setNumber2(e.target.value)}}/>
      <p>{total}</p>
      <button onClick={addnum}> add num</button>

    </div>
  ) 
}

export default AddNum
