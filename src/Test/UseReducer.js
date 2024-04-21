import React from 'react'
import { useReducer } from 'react'

const reducer = (state, action)=>{
        switch(action.type){
            case 'INCREMENT':
                return { count : state.count > 0 ? state.count+1 : state.count}
            case 'DECREMENT':
                return {count : state.count-1}
        }
}


function UseReducer(){

    const [state, dispatch] = useReducer(reducer,{count:0})

    return (
        <div>
            <h1>hehheheh</h1>
            <p>counter app</p>
            <button onClick={()=>dispatch({type:'INCREMENT'})} > + </button>
            <p>count : {state.count} </p>
            <button onClick={()=>dispatch({type:'DECREMENT'})} > - </button>
        </div>
    )
}


export default UseReducer ;



