import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useReducer, useState } from 'react'

const reducer = (state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count < 10 ? state.count+1 : state.count}
        case 'DECREMENT':
            return {count:state.count > 0 ? state.count-1 : state.count}
        case 'RESET':
            return {count:0}
        
    }
    
}

function Finalpratice() {

    const initialstate ={
        count:0 ,
    }

    const [state, dispatch] = useReducer(reducer, initialstate)
 
 
  return (
    <div>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
      <h1>count:{state.count}</h1>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
      <h1>Reset</h1>
      <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
    </div>
  )
}

export default Finalpratice




