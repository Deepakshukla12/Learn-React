// import React, {useEffect, useState} from 'react'
// import {Container, PostForm} from '../components'
// import appwriteService from "../appwrite/config";
// import { useNavigate,  useParams } from 'react-router-dom';


// function EditPost() {
//     const [post, setPost] = useState([]);

//     const {slug} = useParams()
//     const navigate = useNavigate();

//     useEffect(() => {
//         if(slug){
//             appwriteService.getPost(slug).then((post) => {
//                 setPost(post)
//             })
//         }
//          else{
//             navigate('/')
//          }
//     }, [slug, navigate])
  
    
//     return post ? (
//         <div className='py-8'>
//             <Container>
//                 <PostForm post={post} />
//             </Container>
//         </div>
//       ) : null
// }

// export default EditPost


import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/config';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate('/'); // Post not found
        }
        setLoading(false);
      });
    } else {
      navigate('/');
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="py-8 text-center text-gray-500">
        Loading post...
      </div>
    );
  }

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : (
    <div className="py-8 text-center text-red-500">
      Post not found.
    </div>
  );
}

export default EditPost;
