import './App.css';
import Home from './Home'
import Footer from './Footer'
import Nav from './Nav'
import NewPost from './NewPost'
import PostPage from './PostPage'
import Missing from './Missing'
import About from './About'
import {Routes, Route, Link} from 'react-router-dom'
import {useState, useEffect} from 'react';
import api from './api/posts';
import EditPost from './EditPost';

function App() {

  const aboutInfo ='This app was developed by Chance Nyasulu';

  //states
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [posts, setPosts] = useState([]);
  const [editPostTitle, setEditPostTitle] = useState('');
  const [editPostBody, setEditPostBody] = useState('');
  const [message, setMessage] = useState('')
  const [isMessage, setIsMessage] = useState(false);


  const dateFormat = ()=>{

    const d = new Date();
    const months =['none','January','Febuary','March','April','May','June','July','Auguast','September','Octaber','November','December'];
    const today = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}  ${d.getHours()}:${d.getMinutes('mm')} ${d.getHours() > 12 ? 'PM' : 'AM'}`;
    return today;
  }

  //fetching data
  useEffect(() =>{

    const fetchData = async()=>{
        
      try {
            //using axios here. Axios has multiple function named as of http method get, post, put etc
            //axios replace the fetch api 
            //using axios the second step of fetch to retrive json data is not need since it automatically
            // handles that as well also it will catch all errors
        const response = await api.get('/posts');
        setPosts(response.data);
        
      } catch (error) {

        if(error.response){
        //if not in 200 range response
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.header);
        }else{
          console.log("Error: ",error.message);
        }

      }
    }

    fetchData();
  }, [])

  //reload after update
  useEffect(() =>{
    const fetchData = async()=>{
        
      try {
            //using axios here. Axios has multiple function named as of http method get, post, put etc
            //axios replace the fetch api 
            //using axios the second step of fetch to retrive json data is not need since it automatically
            // handles that as well also it will catch all errors
        const response = await api.get('/posts');
        setPosts(response.data);
        
      } catch (error) {

        if(error.response){
        //if not in 200 range response
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.header);
        }else{
          console.log("Error: ",error.message);
        }

      }
    }

    fetchData();
  },[isMessage,message])

  //useEffect for searching
 useEffect(() =>{

  const filteredlist = posts.filter(post =>
    ((post.body).toLowerCase()).includes(search.toLowerCase())  
    ||((post.title).toLowerCase()).includes(search.toLowerCase()))

    setSearchResult(filteredlist.reverse());

 },[search, posts]);

  const handleDelete = async (id) =>{
    
    
    try {

       await api.delete(`/posts/${id}`)
       //delete post
       const filteredlist = posts.filter((post) => post.id !== id);

       //set new list
       setPosts(filteredlist);    
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
   
  }


  const handleUpdatePost = async (id) =>{

    try {
       //date
    const dateNow = dateFormat();
    const updates ={id:id, title:editPostTitle, datetime:dateNow, body:editPostBody};

    //update in json
    const updatepost = await api.put(`/posts/${id}`,updates);

    //set our poststate
    setPosts(posts.map((post) => post.id === id ? updatepost.data : post))

    setIsMessage(true);
    setMessage("Post updated successfully");
    //clear fields
    setEditPostBody('');
    setEditPostTitle('');

    setTimeout(() =>{
      setIsMessage('');
      setMessage('');
    },3000)
      
    } catch (error) {
      setIsMessage(true);
      setMessage(error.message);
    }
   
  }

  return (
  <>
  {/* this will not reload only routes will be routing without refreshing the page*/}
  <Nav Link ={Link} search={search} setSearch={setSearch}/>

  <Routes>
    <Route path ="/" element ={<Home  posts={searchResult} />}/>
    <Route path ="/post" element ={<NewPost setPosts ={setPosts} posts ={posts} api ={api}/>}/>
    <Route path ="/post/:id" element ={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
    <Route path ="/about" element ={<About about ={aboutInfo}/>}/>
    <Route path="/editposts/:id" element ={<EditPost posts ={posts} editPostTitle={editPostTitle} setEditPostTitle={setEditPostTitle} editPostBody={editPostBody} setEditPostBody={setEditPostBody} message={message} isMessage={isMessage} handleUpdatePost={handleUpdatePost}/>}/>
    <Route path ="*" element ={<Missing/>}/>
    <Route />
  </Routes>
   
   <Footer />
  </>
  )
}

export default App;
