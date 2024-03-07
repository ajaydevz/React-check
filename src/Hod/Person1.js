import React, { useState } from 'react'
import UpdatedComponent from './HOC'

function Person1({money,HandleIncrease}) {

 
  
  return (
    <div>
      <h1>Jimmy offering money ${money} </h1>
      <button onClick={ HandleIncrease }>increase money</button>
    </div>
  )
}

export default UpdatedComponent(Person1)
