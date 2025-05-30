import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8 cursor-pointer'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts


// import React, { useState, useEffect } from 'react';
// import appwriteService from '../appwrite/config';
// import { Container, PostCard } from '../components';

// function AllPosts() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     appwriteService.getPosts([]).then((posts) => {
//       if (posts) {
//         setPosts(posts.documents);
//       }
//     });
//   }, []); // <-- runs only once when the component mounts

//   return (
//     <div className="w-full py-8">
//       <Container>
//         <div className="flex flex-wrap">
//           {posts.map((post) => (
//             <div key={post.$id} className="p-2 w-full sm:w-1/2 lg:w-1/4">
//               <PostCard post={post} />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default AllPosts;
