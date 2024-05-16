import React, { useState } from 'react'

function useCounter() {
    const  [count, setCount] = useState(0)

    const increament=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1)
    }

  return 
    {increament,decrement,count}
  
}

export default useCounter
