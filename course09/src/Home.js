import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
  return (
    <main className='container mt-4 mt-5'>
    {posts.length ?(
      <Feed posts={posts} />
    ) : (<p className='lead ms-5 bg-info text-center p-4'>No posts</p> )}
     
    </main>
  )
}

export default Home