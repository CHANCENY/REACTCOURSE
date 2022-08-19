import './App.css';
import { useEffect, useState } from 'react';


//how is useEffect works
//useEffect runs every time when activities are happenning on app 

function App() {
   
  //useState creation
  const [number, setNumber] = useState(parseInt(localStorage.getItem('number'),10) || 0);

  //example below of useEffect
  //this useEffect will run automatically everytime and consoling something happened
  //useEffect is displaying number changed with number whenever you click button
  //even if we are not directly useEffect 
  //events can be any saving page, clicking, typing as long as the event is affect the 
  //react state

  //Rule or depencies
  //1. only to act on load time then useEffect(() =>{.....}, [])

  //2. putting useState in depencies blankets useEffect(() =>{...}, [number]) this
  //will make useEffect to run when ever number get updated by setNumber when clicked button
  // or in any other way the number can be updated

 //console.log('before useEffect');

  useEffect(() =>{
    //let assume we want to save the number value in storage every time when 
    //number get updated
    //useEffect can be used check below
    localStorage.setItem('number',JSON.stringify(number));
    
  }, [number])

  //console.log('After useEffect');


  return (
    <div className="App">
      <h1>useEffect hooks</h1>
      <button
      onClick={() => setNumber(number - 1)}
      >Count-Down</button>
      <button
      onClick={() => setNumber(number + 1)}
      >Count-Up</button>

     <h2 htmlFor="number">{number}</h2>
    </div>
  );
}

export default App;
