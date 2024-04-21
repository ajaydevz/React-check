import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

const TodoApp = () => {

    const [todoInput,setTodoInput] = useState("");
    const [todos,dispatch] = useReducer(todoReducer,[])


     return (
        <div>
            <input type='text'  value={todoInput} onChange={(e)=>setTodoInput(e.target.value)}/>
            
        </div>
  )
}

export default TodoApp
