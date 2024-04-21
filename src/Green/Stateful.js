import React, { useState } from 'react'

// statefull

function Stateful() {

  const [count,setCount] = useState(0);    


  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Stateful
