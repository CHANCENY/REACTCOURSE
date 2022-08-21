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

function App() {

  const aboutInfo =['This app was developed by Chance Nyasulu',
  'This app was developed using react',
  'Check source code: github https://github.com/CHANCENY/REACTCOURSE/tree/main/course08',
  'This is blog posting app of written in reactjs',
  'Find us on github: https://github.com/CHANCENY',
  'Find us on Linkedln: https://www.linkedin.com/in/chance-nyasulu-8688811b8/',
  'More info WhatsApp https://wa.me/8699522190'];

  //states
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [posts, setPosts] = useState([
    {
      id:0,
      title:'Post 1',
      datetime:'june 03,2020 11:30 AM',
      body:'Navbars come with built-in support for a handful'
    },
    {
      id:1,
      title:'Post 2',
      datetime:'june 03,2020 11:30 AM',
      body:'Navbars come with built-in support for a handful'
    },
    {
      id:2,
      title:'Post 3',
      datetime:'june 03,2020 11:30 AM',
      body:'Navbars come with built-in support for a handful'
    },
    {
      id:3,
      title:'Post 4',
      datetime:'june 03,2020 11:30 AM',
      body:'Navbars come with built-in support for a handful'
    }
  ]);

  //useEffect for searching
 useEffect(() =>{

  const filteredlist = posts.filter(post =>
    ((post.body).toLowerCase()).includes(search.toLowerCase())  
    ||((post.title).toLowerCase()).includes(search.toLowerCase()))

    setSearchResult(filteredlist.reverse());

 },[search, posts]);

  const handleDelete = (id) =>{
    
    //delete post
    const filteredlist = posts.filter((post) => post.id !== id);

    //set new list
    setPosts(filteredlist);
    
  }

  return (
  <>
  {/* this will not reload only routes will be routing without refreshing the page*/}
  <Nav Link ={Link} search={search} setSearch={setSearch}/>

  <Routes>
    <Route path ="/" element ={<Home  posts={searchResult} />}/>
    <Route path ="/post" element ={<NewPost setPosts ={setPosts} posts ={posts}/>}/>
    <Route path ="/post/:id" element ={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
    <Route path ="/about" element ={<About about ={aboutInfo}/>}/>
    <Route path ="*" element ={<Missing/>}/>
    <Route />
  </Routes>
   
   <Footer />
  </>
  )
}

export default App;
