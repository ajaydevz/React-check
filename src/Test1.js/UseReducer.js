import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

const countManager=(state,action)=>{
    switch (action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state -1
        default:
            return state
    }
}

function UseReducer() {


    const [count,setCount] = useState(0);
    const [state, dispatch] = useReducer(countManager,intitalvalue)

  return (
    <div>
      <h>count:</h>
    </div>
  )
}

export default UseReducer
