import './App.css';
import Buttons from './Buttons';
import UsersDisplayer from "./UsersDisplayer";
import PostDisplayer from './PostDisplayer';
import CommentsDisplayer from './CommentsDisplayer';
import { useState, useEffect } from "react";

function App() {

  //states
  const [fetchedData, setFetchedData] = useState([]);
  const [typeButton, setTypeButton] = useState('users');

  //APi url
  const API_URL = 'https://jsonplaceholder.typicode.com/';

  //useEffect
  useEffect(() =>{

   const requestData = async () =>{

    try {
      const response = await fetch(`${API_URL}${typeButton}`);
      if(!response.ok) throw Error(`${typeButton} data not recieved!`);
      const data = await response.json();    
      setFetchedData(data);

    } catch (error) {
      console.log(error.message);
    }
   }

   requestData();

  },[typeButton])



  return (
    <div className="App">
    <div className ='btn-group w-100 fixed-top'>
         <Buttons typeButton={typeButton} setTypeButton ={setTypeButton} buttonText = 'users'/>
     
         <Buttons typeButton={typeButton} setTypeButton ={setTypeButton} buttonText = 'posts'/>
      
         <Buttons typeButton={typeButton} setTypeButton ={setTypeButton} buttonText = 'comments'/>   
    </div>

      <div className='mt-5'>
        {typeButton === 'users' ?<UsersDisplayer fetchedData = {fetchedData}/>:
         typeButton === 'posts' ?<PostDisplayer fetchedData = {fetchedData}/>:
         <CommentsDisplayer fetchedData = {fetchedData}/>
         }
      </div>    
    </div>
  );
}

export default App;
