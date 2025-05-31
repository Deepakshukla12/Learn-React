// This React component fetches and displays a list of products from an API endpoint.
// It includes a search input that sends a query to the backend (`/api/products?search=value`).
// The component handles loading, error states, and uses `AbortController` to cancel
// previous requests when the search input changes quickly (to optimize performance).


import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

  // const [products, error, loading] = customQuery('/api/products')

  useEffect(() => {
    // for optimizing the query calls
    const controller = new AbortController()



    //     // Example: axios.get('https://fakestoreapi.com/products')
    //     // But if you want to use async/await inside useEffect, use an IIFE (Immediately Invoked Function Expression)
        ;(async () => {
          try {
            setLoading(true);
            setError(false);
            const response = await axios.get('/api/products?search='+search, {
              signal: controller.signal 
            });
            console.log(response.data);
            setProducts(response.data);
          } catch (error) {
            if (axios.isCancel(error)) {
              console.log('Request canceled', error);
              return 
            }
            console.error("Error fetching products:", error);
            setError(true);
          } finally {
            setLoading(false);
          }
        })();

        // clean up method
        return () => {
          controller.abort();
        }
      }, [search]); // ✅ added dependency array to run once on component mount

  // if (error) {
  //   return <h1>Something went wrong</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>API Handling in React</h1>

      <input 
        type="text"
        value={search}
        placeholder='search'
        onChange={(e) => setSearch(e.target.value)}
      />


      {loading && (<h1>Loading...</h1>)}
      {error && (<h1>Something went wrong</h1>)}
      <h2>Number of Products: {products.length}</h2>
    </>
  );
}

export default App;

// this is a custom case
// const customQuery = (urlPath) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Example: axios.get('https://fakestoreapi.com/products')
//     // But if you want to use async/await inside useEffect, use an IIFE (Immediately Invoked Function Expression)

//     (async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get(urlPath);
//         console.log(response.data);
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []); // ✅ added dependency array to run once on component mount
  
//   return [products, error, loading];
// }