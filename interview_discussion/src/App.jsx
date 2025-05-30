import { useState } from 'react'
import './App.css'


function App() {
  console.log("App rendered", Math.random());
  const [value, setValue] = useState({
    value: 0,
  })
  
  
  //const [multipliedValue, setMultipliedValue] = useState(1)
  //let multipliedValue = value * 5

  // const multiplybyfive = () => {
  //   //setMultipliedValue(value * 5)
  //   setValue(value + 1)
  // }

 // Even though the value is already 0, this still causes a re-render
// because a new object { value: 0 } is created on every click.
// React compares object references, not deep values, so it sees this as a new state.
// To avoid unnecessary re-renders, either:
// 1. Check if the value is already 0 before updating, or
// 2. Use a primitive value like a number instead of an object.

  const clickMe = () => {
    setValue({
      value: 0,
    })
  }

  return (
    <>
      <h1>Main value: {value.value} </h1>
      <button
      onClick={clickMe}
      >Click to multiply by 5</button>
      {/* <h2>Multiplied value: {multipliedValue} </h2> */}
    </>
  )
}

export default App