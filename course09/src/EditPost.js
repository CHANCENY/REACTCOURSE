import React from 'react'
import { useEffect } from 'react';
import { useParams} from 'react-router-dom';

const EditPost = ({posts,editPostTitle,setEditPostTitle,editPostBody,setEditPostBody,message,isMessage,handleUpdatePost}) => {
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() =>{
        if(post){
            setEditPostTitle(post.title);
            setEditPostBody(post.body);
        }

    },[post, setEditPostBody, setEditPostTitle])
   

  return (
    <main className="container mt-5 mb-5">
    {isMessage && message && <p className="bg-success text-white p-3 text-center">{message}</p>}
      <form className="forms" onSubmit={(e) => e.preventDefault()}>

        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text"
          id="title"
          autoFocus
           className="form-control mb-2"
           value={editPostTitle}
           onChange={(e) => setEditPostTitle(e.target.value)}
           required
           />
        </div>

        <div className="form-control">
          <label htmlFor="message">Message:</label>
          <textarea name="message" 
          id="message" 
          cols="30" 
          rows="10" 
          className="form-control"
          value={editPostBody}
          onChange={(e) =>setEditPostBody(e.target.value)}
          required
          ></textarea>
        </div>
        
        <div className="form-group">
          <button className="btn btn-primary w-100 mt-3"
          type="submit"
          onClick={() =>handleUpdatePost(id)}
          >Update post..</button>
        </div>
      </form>
  </main>
  )
}

export default EditPost