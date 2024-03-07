import React, { useEffect, useState } from 'react'

function HookCounter() {

    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=>{
        console.log("updating document tittle")
        document.title = `you clicked ${count} times`
    },[count])

  return (
    <div>
      <h1> Counter app </h1>
      <input type="text" value={name} placeholder='Enter here' onChange={(e)=> setName(e.target.value)}></input>
      <button onClick={()=> setCount(count+1)}>click {count} times</button>
    </div>
  )
}

export default HookCounter
