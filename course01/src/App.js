import Headers from './Headers';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  //dami data
  const [items, setItems] = useState([
    {id:1, name: "sugar", checked: false},
    {id:2, name: "salt", checked: false},
    {id:3, name: "coffee", checked: false},
    {id:4, name: "rice", checked: false},
    {id:5, name: "meat", checked: false}
  ])

  const handleChecked = (id) =>{
   
    //apply checked box of id its state
    //remember state cannot change directly

    //here we are checking which of object in our items has id as of passed id then if found
    //we are spreading it into new array obj with checked value opposite of current value (if false will be true or
    // if true will be false ) but when id do mutch this will return same item
    const list = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);

    //then we have to setItem  but after reload the change will go away and defualt values will be set
    setItems(list);

    // local storage to keep changes alive alltime
     localStorage.setItem('Groceries',JSON.stringify(list));
  }

  const handleDelete = (id) =>{
     
    //make a copy of items but should only contain all the ones thoses delete button has nt been click
    //but effect is tempory reload the page will bring old value
    const list = items.filter( (item) => item.id !== id);
    setItems(list);

    //local storage
    localStorage.setItem('Groceries',JSON.stringify(list));
  }

 //variable 
 //const name = "React by Chance Nyasulu";

 //functions arrow
const handleName = () =>{

  //making a array
    const names = ['chance', 'marcos', 'emma'];

    //generating random number
    const int = Math.floor(Math.random() * 3);

    //return name at random index
    return names[int];
 }
  return (
    <div className="App">
     
     {/* we can insert functional component like below and also pass value through props*/}
     <Headers title ='Grocery List'/>
     <Content 
     items ={items}
     handleChecked ={handleChecked}
     handleDelete = {handleDelete}
     />
     <Footer length ={items.length} />

     {/* <p>jax renders as string eg chance or as value{"Chance"} or numerical {500}</p>
        <p> or array {[40,50,70,100]} but of we remove curl blanket [40,50,70,100]</p>
        <p>Note objects can not be rendered boolen also can not be rendered</p>
        <p>we can also pass variable {name}</p> */}

    </div>
  );
}

//defaultProps gives the values to props if the props are not set
Headers.defaultProps = {
  title: "Default Title"
}
export default App;
