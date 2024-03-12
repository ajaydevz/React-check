import React, { useReducer } from "react";

// Pretty scary one
// Basically it's a pure function that takes a previous state and returns a new action; it returns the next state!!

// Do this in App.js
const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1 >= 0 ? state - 1 :state ;
        default:
            return state;
    } 
};

function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return( 
        <>
            <p>count: {count}</p>
            <button onClick={() => dispatch({type:'increment'})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
        </>
    );
}

export default UseReducer;
