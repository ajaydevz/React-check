import React, { useEffect, useState } from "react";

const CounterText = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const increment = () => {
        setCount(count + 1);
    };

    const handleToggle = (e) => {
        setName(e.target.value);
    };
    
    useEffect(() => {
        console.log("heyy look at this");
    },[count]); // useEffect will run whenever `count` changes

    return (
        <div>
            <input type="text" placeholder="type here" value={name} onChange={handleToggle} />
            <button onClick={increment}>increment: {count}</button>
        </div>
    );
};

export default CounterText;
