import React, { useEffect, useRef } from 'react'

function Example() {

    const inputref = useRef(null)

    useEffect(()=>{
        inputref.current.focus()
    },[])

  return (
    <div>
        <h1>usereff</h1>
      <input ref={inputref} type="text" />
    </div>
  )
}

export default Example
