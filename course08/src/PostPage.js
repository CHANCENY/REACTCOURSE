import {useParams, Link} from 'react-router-dom';

const PostPage = ({posts, handleDelete}) => {

  //grabbing id for url (/post/id)
  const {id} = useParams();

  //looking for post extra
  const post = posts.find((post) => (post.id).toString() === id);
  return (
    <main className='container mt-3'>
      <article className='border bg-light p-3 m-2'>
       {post &&
       
       <>
         <h2>{post.title}</h2>
         <p>{post.datetime}</p>
         <p className="lead">{post.body}</p>
          <button className="btn btn-danger"
          onClick={() => handleDelete(post.id)}
          >Delete post..</button>
       </>     
       }
       {
        !post && 
        <>
           <p className='bg-danger mt-5 p-4 text-white text-center'>Post not found</p>
           <Link to="/" className='links' replace>Visit our homepage</Link>
        </>
       }
      </article>
    </main>
  )
}

export default PostPage