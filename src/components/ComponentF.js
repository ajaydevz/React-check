import React from 'react'
import { userContext } from '../App'

function ComponentF() {
  return (
    <div>
      <userContext.Consumer>
        { user =>{
          return <div>value from the use context : {user} </div>
        }}
      </userContext.Consumer>
    </div>
  )
}

export default ComponentF
