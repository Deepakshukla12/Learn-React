import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // useLoaderData is a hook that gives you access to the data returned by the loader function.
    // It is used to fetch data before the component is rendered, so that the data is available when the component is rendered.
    const data = useLoaderData()

    // The following code is an alternative way to fetch data using useEffect and useState hooks and its a bit laggy.
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Deepakshukla12')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Deepakshukla12')
    return response.json()
}