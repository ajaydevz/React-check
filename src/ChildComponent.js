import React, { useState } from 'react'

function ChildComponent({sendMessege}) {

  const HandleClick =()=>{
    sendMessege("hey from child component")
    console.log("hii child")
  }
  

  
  return (
    <div>
        <button onClick={HandleClick}> click me </button>
    </div>
  )
}

export default ChildComponent
