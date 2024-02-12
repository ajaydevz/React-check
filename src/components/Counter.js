import React, { useEffect, useState } from 'react'
import './Counter.css'

function Counter({condition}) {
  const [count,setCount] = useState(0)
  const fruites = ['apple','banana','orange'];
  
  const increment=()=>{
    setCount(count+1)
  }

  const decrement=()=>{
    setCount(count-1)
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
        increment();
    },5000);
    return ()=>{
        clearTimeout(timer);
    }
  },[count])

  

  return (
    <div className='container'>
        <button onClick={increment}>+</button>
        <h1> Counter:{count} </h1>
        <button onClick={decrement}>-</button>

    
        

    </div>
  )
}

export default Counter
