import React from 'react'
import LineItem from './LineItem'


const DisplayList = ({listItems, checkItem, removeFromList}) => {
  return (
    <ul className="list-group mt-4">
        {listItems.map((item) => (
         <LineItem key={item.id} item ={item} checkItem={checkItem} removeFromList ={removeFromList}/>
        ))}
    </ul>
  )
}

export default DisplayList