/*
useReducer is a React hook used for managing complex state logic in functional components.
It is an alternative to useState, ideal when state depends on previous state or involves multiple related values.

Parameters:
- reducer: a function that determines how state updates based on an action.
- initialState: the starting state value.

The reducer function receives the current state and an action object, then returns the updated state.

This example demonstrates:
- A simple counter with increment, decrement, and reset actions.
- Dispatching actions triggers the reducer to update the state accordingly.
- The component re-renders when the state changes, showing the updated count.

useReducer is especially useful for managing state with multiple possible transitions and complex logic.
*/


import { useReducer } from 'react';

const reducer = (state, action ) => {
    switch( action.type ){
        case 'increment':
            return { count: state.count +1 };
        case 'decrement':
            return { count: state.count -1 };
        case 'reset':
            return { count: 0};
    }
}

function Reduce() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h2>Count : {state.count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick = {() => dispatch({ type: 'decrement'})}>-</button>
            <button onClick = {() => dispatch({ type: 'reset'})}>Reset</button>
        </>
    );
}

export default Reduce;