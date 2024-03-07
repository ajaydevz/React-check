import React, { useState } from 'react'
import UpdatedComponent from './HOC'

function Person2({money,HandleIncrease}) {


  return (
    <div>
      <h1>John offering money ${money}</h1>
      <button onClick={ HandleIncrease }>increase money</button>
    </div>
  )
}

export default UpdatedComponent(Person2)
