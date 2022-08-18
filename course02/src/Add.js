import React from 'react'


//denstructing the oncoming props {newItem, setNewItem, handleSubmit} to be used
const Add = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className="forms" onSubmit={handleSubmit}>
        
        <label htmlFor="Add Items">Add Items</label>

        <input type="text" className="form-control mt-2" 
        autoFocus id='additem' 
        placeholder='additem' 
        value={newItem}
        onChange ={(e) => setNewItem(e.target.value)}
        required/>

        <button className="btn btn-secondary mt-4"
        type='submit'
        aria-label='add Item'
        >Add Item</button>
    </form>
  )
}

export default Add