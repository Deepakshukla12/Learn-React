/* useContext is a React hook used to access the current value of a context object in functional components.
 It accepts a context object (created via React.createContext) and returns the current context value.
 The value is taken from the nearest matching Context.Provider above in the component tree.
 
 Steps to use useContext:
 1. Create a context using React.createContext().
 2. Create a Provider component that wraps children and passes the context value via the Provider's value prop.
 3. Wrap components that need access to the context value with this Provider.
 4. Use useContext inside any descendant component to read the context value.

 This example demonstrates useContext by:
 - Creating a UserContext to share user data.
 - Providing the user object in Component1 with UserContext.Provider.
 - Nesting several components (Component2 to Component5).
 - Accessing the user context in Component5 via useContext(UserContext).
 This way, deeply nested components can access shared data without prop drilling. */



// useContextExample.js
import React, { createContext, useContext } from "react";

// Step 1: Create the context
const UserContext = createContext(null); // Optional default value

// Step 2: Create a component that provides the context value
function Component1() {
  const user = {
    name: "John",
    age: 21
  };

  return (
    // Step 3: Wrap children with UserContext.Provider
    <UserContext.Provider value={user}>
      <h1>{`Hello, I am ${user.name} and I am ${user.age} years old!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h2>Component 2</h2>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h2>Component 3</h2>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h2>Component 4</h2>
      <Component5 />
    </>
  );
}

// Step 4: Use useContext to access the context value
function Component5() {
  const user = useContext(UserContext); // Access shared user data

  return (
    <>
      <h2>Component 5</h2>
      <h3>{`Hello again, ${user.name}!`}</h3>
    </>
  );
}

// Main component
function ContextExample() {
  return (
    <>
      <h1>useContext Hook Example</h1>
      <Component1 />
    </>
  );
}

export default ContextExample;
