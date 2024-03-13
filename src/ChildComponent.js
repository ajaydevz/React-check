import React from 'react'

function ChildComponent({sendmsg}) {

  const SendData =()=>{
    sendmsg("heyy from child component")
  }

  return (
    <div>
        
      <button onClick={SendData}> click me</button>
    </div>
  )
}

export default ChildComponent
