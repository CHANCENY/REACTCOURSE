import './App.css';
import Add from './Add';
import { useState } from 'react';
import DisplayList from './DisplayList';

function App() {

  //items
  const [listItems, setListItems] = useState(
    JSON.parse(localStorage.getItem('items'))
  );

  //making hook for useState
  const [newItem, setNewItem] = useState('');

  const updateList = (list) =>{
    setListItems(list);
    localStorage.setItem('items',JSON.stringify(list));
  }

  //add item function below
  const addItem = (item) =>{
       
    //making item id by looking at items last id then add 1 for new item
    const id = listItems.length ? listItems[listItems.length - 1].id + 1 : 1;

    //making obj
    const myItem = {id:id, name: item, checked: false};

    //complete of old list and new list made
    const newitems = [ ...listItems, myItem];
    updateList(newitems);

  }

  //function to handle submit action taking event object
  const handleSubmit = (e) =>{

    //preventDefault it stop submittion to reloaded the page
    e.preventDefault();

    //we can check values here if iput is not required by

    if(!newItem){
      console.log("empty input");
      return;
    }else{
      //add item to list
       addItem(newItem);
      //then reset setNewItem('')
      setNewItem('');
    }
    console.log(e.type);

  }

  const checkItem = (id)=>{
     
   
    //after click check box or duoble click item 
    const checkItemCollected = listItems.map((item) => item.id === id ? {...item, checked: !item.checked} : item);

    //then setitem
    updateList(checkItemCollected);
  }

  const removeFromList = (id) =>{
    
    //we will filter through all item and ignore the matched one
    const filteredlist = listItems.filter((item) => item.id !== id);

    //set and save filteredlist
    updateList(filteredlist);
  }

  //props are passed below line 21 newItem={newItem} setNewItem ={setNewItem} handleSubmit ={handleSubmit}
  return (

    <div className="container w-50">
        <h1>React FORMS</h1>
        <Add newItem={newItem} setNewItem ={setNewItem} handleSubmit ={handleSubmit} />
        <DisplayList listItems ={listItems} checkItem ={checkItem} removeFromList = {removeFromList} />
    </div>
   
  );
}

export default App;
