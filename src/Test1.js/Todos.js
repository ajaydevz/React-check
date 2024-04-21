import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { useReducer } from 'react'

const todoReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state,{id:Date.now(),text:action.payload}]
        
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.payload)

        default:
            return state;
    }
}

function Todos() {
   
   const [newTodo,setNewTodo] = useState("")

   const [setTodos,dispatch] = useReducer(todoReducer,[])

   const addTodo=()=>{
    dispatch({type:'ADD_TODO',payload:newTodo})
    setNewTodo("")
   }

   const removeTodo=(id)=>{
    dispatch({type:'REMOVE_TODO',payload:id})
   }


  return (
    <div>
      <h1>todo app</h1>
      <input type='text' value={newTodo} placeholder='add task here' onChange={(e)=>setNewTodo(e.target.value)}  />
      <button onClick={addTodo}>add to do</button>
      <ul>{setTodos.map((todo)=><li key={todo.id}>{todo.text} <button onClick={ ()=>removeTodo(todo.id)}>X</button></li>)}</ul>
    </div>
  )
}

export default Todos
