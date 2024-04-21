import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <h1> {props.name} {props.purpose}</h1>
    </div>
  )
}

export default ChildComponent
