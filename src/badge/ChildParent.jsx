import React from 'react'

function ChildParent({sendData}) {

    const handleclick=()=>{
        sendData("hello from child")
    }
  return (
    <button onClick={handleclick}> send data to parent</button>
  )
}

export default ChildParent
