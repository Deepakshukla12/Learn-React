// import React, {useState, useEffect} from 'react'
// import {useSelector} from 'react-redux'
// import {useNavigate} from 'react-router-dom'

// export default function Protected({children, authentication = true}) {
//     const navigate = useNavigate();
//     const [loader, setLoader] = useState(true);

//     const authStatus = useSelector(state => state.auth.status);

//     useEffect(() => {
//         // TODO : we can also make it easy and straight forward
//         // if(authStatus===true){
//         //     navigate('/')
//         // }else if(authStatus===false){
//         //     navigate('/login')
//         // }

//         if(authentication && authStatus !== authentication){
//             navigate('/login');
//         } else if(!authentication && authStatus !== authentication){
//             navigate('/');
//         }
//         setLoader(false);

//     }, [authStatus, navigate, authentication])
//   return (
//     loader ? <h1>Loading ...</h1> : <> {children} </>
//   )
// }


import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // If authentication is required but user is not authenticated
    if (authentication && authStatus !== true) {
      navigate("/login");
    }
    // If authentication is NOT required but user is authenticated
    else if (!authentication && authStatus === true) {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, [authStatus, navigate, authentication]);

  if (loading) return <h1>Loading ...</h1>;
  return <>{children}</>;
}
