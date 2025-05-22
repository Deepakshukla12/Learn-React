/*
useCallback is a React hook that returns a memoized version of the callback function.
This memoized function only changes if one of its dependencies changes.
It helps to prevent unnecessary re-renders of child components that depend on the function's reference equality.

Syntax:
  useCallback(fn, deps)
  - fn: The function to memoize.
  - deps: Dependency array that triggers recreation of the memoized function when changed.

This example demonstrates useCallback by memoizing the `calc` function,
which calculates a table of multiples based on the current number input.
The `calc` function is passed down to a child component (Table).
Thanks to useCallback, the `calc` function reference only changes when `number` changes,
preventing unnecessary re-renders of Table when toggling dark mode.

The dark mode toggle state change does not cause the Table component to re-render unnecessarily
because the `calc` function remains stable unless `number` changes. */


import { useState, useCallback } from "react";
import Table from "../Table";

function CallBack() {
  const [number, setNumber] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const calc = useCallback( () => {
    console.log("Print Table Run");
    return [number * 1, number * 2, number * 3, number * 4, number * 5];
  }, [number]);

  const styles = {
    backgroundColor: darkMode ? "black" : "white", // typo fixed: 'balck' -> 'black'
    color: darkMode ? "white" : "black",
    padding: "20px",
  };

  return (
    <div style={styles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.valueAsNumber || 0)}
      />
      <Table calculateTable={calc} />
      <button onClick={() => setDarkMode((prev) => !prev)}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default CallBack;
