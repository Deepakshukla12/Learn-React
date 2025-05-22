/*
useEffect is a React hook that lets you perform side effects in functional components.
Side effects include data fetching, subscriptions, or manually changing the DOM.

The hook takes two arguments:
  1. A function that contains the side effect code (effect callback).
  2. An optional dependency array that controls when the effect runs.

Different use cases of useEffect demonstrated in this example:
- Effect without dependency array: runs after every render.
- Effect with empty dependency array ([]): runs only once after the initial render (componentDidMount).
- Effect with dependencies ([count]): runs only when the specified dependency changes.
- Cleanup function inside useEffect: runs before the effect runs next time or when component unmounts.

This component shows how document title updates and console logs happen based on these different useEffect patterns.
It also demonstrates how to clean up side effects using a return function inside useEffect.
*/


import { useEffect, useState } from 'react';

function Effect() {
    const [count, setCount] = useState(1);

    // This effect runs after every render wihtout any dependencies
    useEffect( () => {
        console.log('Component mounted');
        document.title = 'You have '+count+' new messages';
    })
    
    // This effect run only once when the component mounts(empty dependency array)
    useEffect( () => {
        console.log('Component mounted');
        document.title = 'You have '+count+' new messages';
    }, [])

    // This effect runs when the count changes(count as a dependency)
    useEffect(() => {
        console.log('Component mounted');
        document.title = 'You have ' + count + ' new messages';
    }, [count]);

    // This effect runs when the component unmounts(using return function)
    useEffect(() => {
       console.log('Run useEffect', count);
       return () => {
            console.log('Clean Up', count);
       }
    }, [count]);


    return (
        <>
            <h3> {count} new Messages! </h3>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </>
    );
}

export default Effect;
