//////////////////////////////////////////////////////////// PARENT COMPONENT

const { createContext } = require("react");
import React, { useCallback, useContext, useReducer, useRef, useState } from "react";
import { unstable_useViewTransitionState } from "react-router-dom";

const MyContex = createContext();

function App(){
    
    const [value,setValue] = useState('')



    return (
        <>
          <Mycontext.Provider value={{value,setValue}}>
            < Sample />
          </Mycontext.Provider>
        </>
    )
}

/////////////////////////////////////////////////////////////// CHILD COMPONENT

function ChildComponent (){

    const {value, setValue} = useContext(MyContext)

    const HandleChange=()=>{
        setValue("new value")
    }

    return <>
            <MyContext.consumer>
            <p>value:{value}</p>
            <button onClick={HandleChange}>change</button>
            </MyContext.consumer>
           </>
}


///////////////////////////////////////////////////////////////////////////


const inputref = useRef();

const focusinput = () =>{
    inputref.current.focus();
};

return <div>
        <input ref={inputref} type="text" ></input>
        <button onClick={focusinput}> focus input </button>
</div>



/////////////////////////////////////////////////////////////////////////////


const [count,setCount] = useState(0)

const handleclick = useCallback(()=>{
    setCount(count+1)
},[count]);

<p>count:{count}</p>


////////////////////////////////////////////////////////////use reducer////////


const PureGreeting = React.memo(({name})=>{
    console.log("object")
    return <p> hello , {name} </p>
})



///////////////////////////////////////////////////////////////////////////////






const handleclick = useCallback( ()=>{
    setCount(count+1)
},[count])



/////////////////////////////////////////////


