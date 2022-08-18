import React from 'react'
import ItemList from './ItemList'
//import { useState } from 'react';

const Content = ({items, handleChecked, handleDelete}) => {

    /* // userState we can make like getter and setter
    //alway use const we donot need  to modified name directly
    const [name, setName] = useState('chance');
    //another example  of useState
    const [count, setCount] = useState(0);

    //adding styles way two
    const contentstyles = {
        backgroundColor: '#ccc',
        color: '#000'
    }

   // let names = 'click me';
    //this function get called whenever page load this component
    const groceries = () =>{

        const list = ['sugar','salt','soap','tea','coffee','rice'];
        const index = Math.floor(Math.random() * 6);
        return list[index];
    }
    const groceries2 = () =>{

        const list = ['sugar','salt','soap','tea','coffee','rice'];
        const index = Math.floor(Math.random() * 6);
        setName(list[index]);
    }

    //function demstrating how to handle click therefore this function can be called by referrence in componets
    const handleClickEvent = (e) =>{

      //e it parameter that bring the event properties and function of event occurred
      console.log(`you ${e.type}`);
      
    }

    //this function getting passed value by user eg name as show
    const handleClickEvent2 = (name) =>{

      //e it parameter that bring the event properties and function of event occurred
     
      console.log(`you ${name} clicked`);
     
    }
    const handleClickEvent3 = (e) =>{

      //e it parameter that bring the event properties and function of event occurred
     
      console.log(e);
     
    }

    const countUp = () =>{

      //this doent work as show but after clicking twice you will see increase by 1 then so on

      //calling setCount twice doent make any change
      setCount(count + 1);
      setCount(count + 1);
      console.log(count);
    }

    //reload the page the click button countUp the click countUp2 to verirify above comment you will see 1 as value
    const countUp2 = () =>{
      console.log(count);
    } */
  /* return ( 

    //IN THIS PART WILL WE BE DOING THE EVENTS EG ONCLICK EVENT ETC

  <main style={contentstyles}>
        <p onDoubleClick={handleClickEvent} className='mt-5 text-center lead'>{groceries()}</p>
        <button onClick={handleClickEvent} className ='btn btn-primary mt-5 mb-5'>Item Next</button>
        <button onClick={() => handleClickEvent2('Chance')} className ='btn btn-primary mt-5 mr-3 mb-5'>click</button>
        <button onClick={(e) => handleClickEvent3(e)} className ='btn btn-primary mt-5 ml-5 mr-3 mb-5'>e object</button>
  </main>  
  ) */

  
/* 
  return(
     
    //IN THIS PART WE WILL BE DOING HOOKS AND STATE

    //states in react this state need import for react 
    //first let look at useState
    //second make setter and getter like eg check top const [name,setName] = useState this line
    //third in function of random picking groceries2 instead of returning item we use setName to set name
    //fourth the name variable is in parapha below
    //then call groceries2 onClick event
    <main>
        <p className="text-center mt-5 mb-3">Hello {name}</p>
        <p className="text-center mt-5 mb-3">Count {count}</p>
        <button className="btn btn-secondary float-center" onClick={groceries2}>Check Item</button>
        <button className="btn btn-secondary float-center" onClick={countUp}>CountUp</button>
        <button className="btn btn-secondary float-center" onClick={countUp2}>CountUp2</button>
    </main>
  ) */

 
  return (

    // IN THIS PART WILL BE DOING KEYS AND VALUES LISTS

    //when working with list in react the key is required always
    

    <main> 
      {items.length ? ( <ItemList items={items} handleChecked ={handleChecked} handleDelete ={handleDelete} />) : (<label className="badge bg-primary mt-5 ms-5">Cart is Empty</label>)}
    </main>
  )
}

export default Content