/*
useRef is a React hook that returns a mutable ref object with a .current property.
This object persists for the entire lifetime of the component.

useRef has two main use cases demonstrated here:

1. Storing mutable values that do not cause re-renders when updated.
   - In the Ref component, useRef tracks how many times the component renders by updating count.current,
     but it does not trigger a re-render itself.

2. Accessing and manipulating DOM elements directly.
   - In the RefDom component, useRef obtains a reference to an input element,
     allowing focus control, reading input value, and clearing it programmatically.

useRef is useful when you need to maintain values across renders without causing updates,
or when you want to interact directly with DOM nodes in a React-friendly way.
*/


// 1. first usecase of useRef is to mutate a DOM element without re-rendering the component.
import { useEffect, useState, useRef } from 'react';

function Ref() {
    const [name, setName] = useState('');
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
            <h2>Name: {name}</h2>
            <h2>Renders: {count.current}</h2>
        </>
    );
}

// 2. second usecase of useRef is to access a DOM element directly.
function RefDom() {
    const inputEle = useRef(null);

    // .current is a mutable object that can be changed without causing re-renders. It is used to access the DOM element directly.
    const handleClick = () => {
        inputEle.current.focus();
        alert(`Hello ${inputEle.current.value}`);
        inputEle.current.value = '';
    };

    return (
        <>
            <input type="text" placeholder="Enter your name" ref={inputEle} />
            <button onClick={handleClick}>Click Me</button>
        </>
    );
}

export { Ref, RefDom };
