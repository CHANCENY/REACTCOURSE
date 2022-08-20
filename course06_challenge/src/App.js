import './App.css';
import Buttons from './Buttons';
import DisplayList from './DisplayList';
import { useEffect, useState } from 'react';

function App() {

  //in this app will be fetching data by clicking on button 
  //users will fetch users posts will fetch post and comments will fetch comments

  //state to be used
  const [fetchedData, setFetchedData] = useState([]);
  const [errfound, setErrorFound] = useState(false);
  const [errors, setErrors] = useState('');
  const urlLink = 'https://jsonplaceholder.typicode.com';
  

  //function to fetch users data
    const usersFunction = async () =>{
      
      try {
        setErrorFound(false);
        const response = await fetch(`${urlLink}/users`);
        if(!response.ok) throw Error('Users Data Not Found!'); 
        const data =await response.json();
        setFetchedData(data); 

    } catch (error) {
        setErrors(error.message);
        setErrorFound(true);
    }finally{
       
    }


    }

    //function to fetch post data
    const postFunction = async () =>{

      try {
        setErrorFound(false);
        const response = await fetch(`${urlLink}/posts`);
        if(!response.ok) throw Error('Posts Data Not Found!'); 
        const data =await response.json();
        setFetchedData(data); 

    } catch (error) {
        setErrors(error.message);
        setErrorFound(true);
    }finally{
       
    }

    }

    //function to fetch comment data

    const CommentFunction = async () =>{

      try {
        setErrorFound(false);
        const response = await fetch(`${urlLink}/comments`);
        if(!response.ok) throw Error('Users Comments Data Not Found!'); 
        const data =await response.json();
        setFetchedData(data); 

    } catch (error) {
        setErrors(error.message);
        setErrorFound(true);
    }finally{
       
    }

    }

  return (
    <div className="App">
      <Buttons usersFunction ={usersFunction} postFunction={postFunction} CommentFunction ={CommentFunction} />
      <DisplayList fetchedData = {fetchedData} errfound ={errfound} errors ={errors}/>
    </div>
  );
}

export default App;
