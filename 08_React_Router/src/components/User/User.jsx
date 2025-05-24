import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    // useParams is a hook that gives you access to the URL parameters. 
    // useParams returns an object of key-value pairs where the keys are the names of the parameters defined in the route.
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User