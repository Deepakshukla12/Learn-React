// This code defines and exports a React Context named `UserContext`.
// React Context is used to create a global state that can be shared 
// across multiple components without passing props manually at every level.
// `React.createContext()` creates a context object which can be used 
// with a Provider to supply values and with a Consumer or `useContext` hook to access them.

import React from 'react';

const UserContext = React.createContext();

export default UserContext;
