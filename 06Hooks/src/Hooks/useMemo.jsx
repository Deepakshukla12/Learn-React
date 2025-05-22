/*
useMemo is a React hook that memoizes the result of a function call and only recomputes 
the value when one of its dependencies changes. This helps optimize performance by 
avoiding expensive recalculations on every render.

Arguments:
  1. A function that returns a computed value.
  2. An array of dependencies that, when changed, trigger recomputation.

In this example:
- slowSquare simulates a slow, expensive calculation of squaring a number.
- useMemo caches the result of slowSquare so it only runs again if `number` changes.
- Changing `count` triggers a re-render but does NOT cause slowSquare to run again,
  demonstrating how useMemo prevents unnecessary recalculations.

This improves UI responsiveness by skipping expensive calculations on unrelated state changes.
*/



import { useState, useMemo } from "react";

function SquareCalculator() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  // Simulate a slow calculation
  const slowSquare = (num) => {
    console.log('Calculating square...');
    for (let i = 0; i < 1000000000; i++) {} // Simulate delay
    return num * num;
  };

  // Only re-calculates when `number` changes
  const squaredNumber = useMemo(() => slowSquare(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <h2>Square: {squaredNumber}</h2>

      <button onClick={() => setCount(count + 1)}>Re-render: {count}</button>
    </div>
  );
}

export default SquareCalculator;
