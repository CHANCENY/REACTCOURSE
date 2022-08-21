import { useState } from "react"
import {Navigate} from 'react-router-dom';


const NewPost = ({setPosts, posts}) => {
  //states
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] =useState('');
  const [message, setMessage] = useState('')
  const [isMessage, setIsMessage] = useState(false);

  //add post handler
  const handleAddNewPost = () =>{

    const dateFormat = ()=>{

      const d = new Date();
      const months =['none','January','Febuary','March','April','May','June','July','Auguast','September','Octaber','November','December'];
      const today = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}  ${d.getHours()}:${d.getMinutes('mm')} ${d.getHours() > 12 ? 'PM' : 'AM'}`;
      return today;
    }

   const newId = posts.length ? posts[posts.length - 1].id + 1 : 1;

   //generate date

   const date = new Date();
   const now = dateFormat();
   
   //make newpost
    
   const newpost = {id:newId, title:postTitle, datetime:now, body:postBody}

  //merging old and new one
  const myPost = [...posts, newpost];
  
  //set post
   setPosts(myPost);
   setPostBody('');
   setPostTitle('');
  
   setIsMessage(true);
   setMessage('Post posted successfully');

   setTimeout(() =>{
    setIsMessage(false);
    setMessage('');
   },3000);

}



  return (
    <main className="container mt-5">
      {isMessage && message && <p className="bg-success text-white p-3 text-center">{message}</p>}
        <form className="forms" onSubmit={(e) => e.preventDefault()}>

          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text"
            id="title"
            autoFocus
             className="form-control mb-2"
             value={postTitle}
             onChange={(e) => setPostTitle(e.target.value)}
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
            value={postBody}
            onChange={(e) =>setPostBody(e.target.value)}
            required
            ></textarea>
          </div>
          
          { postTitle && postBody &&
          <div className="form-group">
            <button className="btn btn-primary w-100 mt-3"
            type="submit"
            onClick={handleAddNewPost}
            >Add post..</button>
          </div>
          }

        </form>
    </main>
  )
}

export default NewPost