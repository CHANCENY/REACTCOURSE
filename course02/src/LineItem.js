import React from 'react'



const LineItem = ({item,checkItem, removeFromList}) => {
  return (
    <li className="list-group-item mb-2">

        <input type="checkbox"
        checked={item.checked}
        onChange ={() => checkItem(item.id)}
        />

        <label htmlFor="Name" 
        className='lead ms-5'
        onDoubleClick={() => checkItem(item.id)}
        >{item.name}</label>

        <button className="btn btn-danger float-end"
         onClick={() => removeFromList(item.id)}
         aria-label ={`Delete ${item.item}`}
        >delete</button>
    </li>
  )
}

export default LineItem