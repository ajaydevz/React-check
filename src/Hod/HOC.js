import React, { useState } from 'react'

function UpdatedComponent(OriginalComponent) {
  function NewComponent(){
    const [money, setMoney] = useState(10)
    // this state response for all the function this used in this project
    const HandleIncrease=()=>{
        setMoney(money+10)
    }
    return <OriginalComponent HandleIncrease={HandleIncrease} money={money}/>
  }
  return NewComponent
}

export default UpdatedComponent
