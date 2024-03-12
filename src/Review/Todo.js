import React, { useState } from 'react';

function Todo() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (inputValue.trim() !== "") {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    return (
        <>
            <h1>Todo App</h1>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    placeholder='Type here'
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={addTodo}>Add</button>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Todo;
