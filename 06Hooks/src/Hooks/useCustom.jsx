/*
  Introduction to Custom Hooks in React
 
  This component demonstrates how we typically use built-in hooks like useState and useEffect
  to manage data fetching in a React component. The logic inside useEffect for fetching data 
  from an API can be extracted into a **custom hook** to make the component cleaner and reusable.
 
 For example, we could extract the fetch logic into a custom hook like `useFetch(url)`,
  which returns the data and any errors. This promotes code reuse and separation of concerns.
 
  While this example uses useEffect directly, it's a perfect candidate for refactoring
  into a custom hook structure.
 */


import { useState, useEffect } from "react";

function Fetch() {
    const [data, setData] = useState([]);

    useEffect( () => {
        console.log("Fetching data from API");
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( (response) => response.json())
        .then( (data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <h1>Fetch</h1>
            <p>Fetching data from an API</p>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
            <p>Data fetched from the API</p>
            <button onClick={() => setData([])}>Clear Data</button>
        </>
    );
}
export default Fetch;