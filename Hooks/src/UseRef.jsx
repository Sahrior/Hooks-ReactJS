// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
// When you want a component to "remember" some information,
// but you don’t want that information to trigger new renders.

// 1. Accessing / Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals



//Think of useRef like a finger pointing to something 👆.

//While useState stores data that changes the screen,
//useRef remembers something without re-rendering the screen.

import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

const UseRef = () => {

  const [value, setValue] = useState(0);

  const count = useRef(0);

  useEffect(()=>{
    count.current = count.current + 1;
  })


  return (
    <div>
      
      <button onClick={()=>{setValue(prev => prev-1)}} >-1</button>
      <h1>{value}</h1>
      <button onClick={()=>{setValue(prev => prev+1)}} >+1</button>
      <h1>Render Count: {count.current} </h1>


    </div>
  )
}

export default UseRef
