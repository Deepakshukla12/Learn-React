import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-blue-400 text-black p-4  rounded-xl mb-5">
        Hello, this is tailwind
      </h1>
      <Card username="My Code" />

      {/* giving another name to the same component */}
      <Card username="My Second Code" />
    </>
  );
}

export default App;
