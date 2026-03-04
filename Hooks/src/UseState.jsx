import React from 'react'
import { useState } from 'react'

const UseState = () => {

    const [num, setnum] = useState(0)

    function ChangeNum(){
        setnum(num+1);
    }


  return (
    <div>
        <h1>Counter is {num}</h1>
        <button onClick={ChangeNum} >Change</button>
    </div>
  )
}

export default UseState
