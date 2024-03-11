import React, { useMemo, useState } from "react";

function UseMemo(){

    const [count,setCount] = useState(5)
    let expensivecountwithoutusememo

    expensivecountwithoutusememo = count ** 2
    console.log("expensive count without using use memo:",expensivecountwithoutusememo)

    const ExpensiveCount = useMemo (()=>{
        console.log("not recomputingg......")
        return count**2
    },[count])
    console.log("expensive count using usememo:",ExpensiveCount)

    const increment=()=>{
        setCount(count+1)
    }
    
    return(
        <>
        <p> Hello Babesss..!</p>
        <p> expensive count :{ExpensiveCount} </p>
        <p>count wiothout usememo : {expensivecountwithoutusememo} </p>
        <button onClick={increment}>increment</button>
        </>
    )
}

export default UseMemo