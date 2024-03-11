/// use reducer with counter app

import React, { useReducer } from "react";

function UseReducer (){
    
    const [value,dispatch] = useReducer();


    return (
        <div>
            <label>{value}</label>
            <button> </button>
        </div>
    )
}

export default UseReducer