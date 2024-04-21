import React from 'react'

const Purecomponent = ({count=10}) => {
  return (
    <div>
      <h1>count :{count}</h1>
    </div>
  )
}

export default React.memo(Purecomponent)

