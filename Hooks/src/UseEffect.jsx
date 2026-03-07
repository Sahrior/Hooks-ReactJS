// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//                 This component re-renders
//                 This component mounts
//                 The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})          // Runs after every re-render
// 2. useEffect(() => {}, [])      // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes


// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts


import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect = () => {

    const[count,setCount] = useState(0);
    const[color,setColor] = useState(0);

    {/* Example 1 code*/}
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    {/* Example 1 code*/}

    useEffect(()=>{
      document.title = `Count: ${count} ${color}`
    }, [count] )  // depecndecy shudhu count deoa tai jkhn count change hbe just tkhn e tittle change hbeeee


    {/* Example 1 code*/}
    useEffect(()=>{
      window.addEventListener("resize", handleResize)
    })
    {/* Example 1 code*/}

    function addCount(){
      setCount(count+1)
    }
    function subCount(){
      setCount(count-1)
    }
    function changeColor(){
      setColor(c=>c==="green"? "red":"green");
    }

    {/* Example 1 code*/}
    function handleResize(){
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    {/* Example 1 code*/}



  return (
    <>

      <div>
        <p style={{color: color}} >Count: {count}</p>
        <button onClick={addCount} >Add</button>
        <button onClick={subCount} >Subtract</button><br />
        <button onClick={changeColor}>Change Color</button>
      </div>


      {/* Example 1 code*/}

      <div>

        <p>Window width: {width}px</p>
        <p>Window Height: {height}px </p>

      </div>
      
      {/* Example 1 code*/}
      
    </>
  )
}

export default UseEffect
