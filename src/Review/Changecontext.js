// Changecontext.js
import React, { useContext } from "react";
import { MyContext } from "../App";


const ChildComponent = () => {

    const {value,setValue} = useContext(MyContext);

    const handleClick = () =>{
        setValue('updated value passing through usecontext')
    }

    return (
        <div>
            <p> {value} </p>
            <button onClick={handleClick}> Click here </button>
        </div>
    );
}

export default ChildComponent;
