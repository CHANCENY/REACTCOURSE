import { useState } from "react"



const NewPost = ({setPosts, posts, api}) => {
  //states
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] =useState('');
  const [message, setMessage] = useState('')
  const [isMessage, setIsMessage] = useState(false);


   //generate date
  const dateFormat = ()=>{

    const d = new Date();
    const months =['none','January','Febuary','March','April','May','June','July','Auguast','September','Octaber','November','December'];
    const today = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}  ${d.getHours()}:${d.getMinutes('mm')} ${d.getHours() > 12 ? 'PM' : 'AM'}`;
    return today;
  }

  //add post handler
  const handleAddNewPost = async () =>{

    try {
      const newId = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const now = dateFormat();
     
      //make newpost   
      const newpost = {id:newId, title:postTitle, datetime:now, body:postBody}
      //save to json
     const response = await api.post('/posts',newpost)
   
     //merging old and new one
     const myPost = [...posts, response.data];
     
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
      
    } catch (error) {
      
      console.log(`Error:  ${error.message}`);
    }
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