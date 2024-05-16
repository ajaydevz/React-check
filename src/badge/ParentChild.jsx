import React, { useState } from 'react'
import ChildParent from './ChildParent'

function ParentChild() {

  const [data, setData] = useState("")

  const setrecivedDate=(data)=>{
    setData(data)
  }

  return (
    <div>
      < ChildParent sendData={setrecivedDate} />
      <h1> data from child</h1>
      <p> {data} </p>
    </div>
  )
}

export default ParentChild
