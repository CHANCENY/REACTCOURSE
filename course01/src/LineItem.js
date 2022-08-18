import React from 'react'

const LineItem = ({ item, handleChecked, handleDelete }) => {

    //this will be called on every each loop with item
    //this component is reauseble 
  return (
    <li className="list-group-item w-50" key={item.id}>
          <input
            type="checkbox"
            onChange={() => handleChecked(item.id)}
            checked={item.checked}
            className="ms-3"
          />

          <label
            htmlFor="name"
            className="ms-4 lead"
            onDoubleClick={() => handleChecked(item.id)}
          >
            {item.name}
          </label>

          <button
            className="btn btn-danger float-end"
            onClick={() => handleDelete(item.id)}
            aria-label ={`Delete ${item.item}`}
          >
            Delete
          </button>
        </li>
  )
}

export default LineItem