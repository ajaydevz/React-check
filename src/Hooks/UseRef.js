import React, { useEffect, useRef } from 'react'

function UseRef() {

  const inputref = useRef()


  return (
    <div>
      <input type='text' ref={inputref}/>
      <button onClick={()=> inputref.current.focus()}>Focus input</button>
    </div>
  )
}

export default UseRef
