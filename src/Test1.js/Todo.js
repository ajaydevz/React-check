import React, { useReducer } from 'react'
import { useState } from 'react'


const todoReducer = (state,action)=>{
    switch (action.type){
        case 'ADD_TODO':
            return [...state, {id:Date.now(), text:action.payload }]

        case 'REMOVE_TODO':
            return state.filter((todo)=>todo.id !== action.payload)

        default:
            return state;
    }
}

function Todo() {

    const [newTodo,setNewTodo] = useState("")
    const [todos, dispatch]  = useReducer(todoReducer,[])

    const addTodo = ()=>{
        dispatch({type: 'ADD_TODO', payload:newTodo })
        setNewTodo('');
    }

    const removeTodo=(id)=>{
        dispatch({type:'REMOVE_TODO', payload:id})
    }
    

  return (
    <div>
      <h1>add todo</h1>
      <input type='text' value={newTodo} placeholder='add task here' onChange={(e)=>setNewTodo(e.target.value)} />
      <button onClick={addTodo}>add to do</button>
      <ul>{todos.map((todo)=><li key={todo.id}>{todo.text} <button onClick={ ()=>removeTodo(todo.id)}>X</button></li>)}</ul>
    </div>
  )
}
export default Todo
