import "./App.css";
import { useState } from 'react';
import LikeButton from "./LikeButton";
import Object from "./Object_State";
import Array from "./Array_State";

function App() {
  // using useState hook to create a state variable
  let [counter, setCounter] = useState(15);

  const [text, setText] = useState("Hello this is default text");

  //let counter = 15;

  const addValue = () => {
    counter++;
    if (counter > 50) {
      alert("Counter value is greater than 50");
      return;
    }
    setCounter(counter);
  };

  const removeValue = () => {
    counter--;
    if (counter < 1) {
      alert("Counter value is less than 1");
      return;
    }
    setCounter(counter);
  };
  return (
    <>
      <h1>Let's start the counter :</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Subtract Value</button>
      <br />
      <br />
      <button onClick={() => setText("This is after clicking")}>{text}</button>

      <br /><br />
      <LikeButton />
      <br /><br />
      <Object />
      <br /><br />
      <Array />
    </>
  );
}

export default App;