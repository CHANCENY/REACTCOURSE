import React from 'react'
import {Link} from 'react-router-dom';

const post = ({post}) => {
  return (
    <article className='d-block'>
      <Link to={`/post/${post.id}`} className='links'>
       <h2>{post.title}</h2>
       <p className="text-wrap">{post.datetime}</p>
      </Link>
      <p>
        {(post.body).length <= 25 ? post.body : `${(post.body).slice(0, 25)}...`}
      </p>
      <hr />
    </article>
  )
}

export default post