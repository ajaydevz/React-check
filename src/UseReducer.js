import React, { useReducer } from 'react'

function UseReducer() {
    
    const initialstate ={
        count:0
    }

    const reducer=(state, action) =>{
        switch(action.type){
            case 'INCREMENT':
                return { count:state.count+1}
            case 'DECREMENT':
                return {count:state.count+1}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer,initialstate)

  return (
    <div>
        <p>{state.count}</p>
      <button onClick={ ()=>dispatch({type:'INCREMENT'})}> increment </button>
      <button onClick={ ()=>dispatch({type:'DECREMENT'})}>decrement</button>
    </div>
  )
}

export default UseReducer



