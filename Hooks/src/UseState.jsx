import React from 'react'
import { useState } from 'react'

const UseState = () => {


    {/* Basic useState */}
    const [num, setnum] = useState(0)
    function ChangeNum(){
        setnum(num+1);
    }

    {/*useState using Object */}
    const [car, setCar] = useState({
        brand: "Ferrari",
        model: "Roma",
        year: "2023",
        color: "red"
    });
    const changeColor =()=>{
        setCar((prev)=>{
            return{...prev, color: "blue"}
        })
    }


  return (
    <>
        {/* Basic useState */}
        <div>
            <h1>Counter is {num}</h1>
            <button onClick={ChangeNum} >Change</button>
        </div>

        {/*useState using Object */}
        <div>
            <h1>My {car.brand}</h1>
            <h2>It is a {car.color} {car.model} from {car.year}</h2>
            <button onClick={changeColor} >Blue</button>
        </div>


    </>
  )
}

export default UseState
