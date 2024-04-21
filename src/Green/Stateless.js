import React from 'react'

///stateless 

function State() {
    
  let count = 0;

  const increment=()=>{
    count+= 1;
    console.log(count)
  }

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default State
