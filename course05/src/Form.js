import React from 'react'

const Form = () => {
  return (
    <form className="forms mt-3">
        <div className="form-group">
            <label htmlFor="Name">Name:</label>
            <input type="text" className="form-control" />
        </div>

        <div className="form-group">
        <label htmlFor="Number">Number:</label>
        <input type="text" className="form-control" />
        </div>
        <button className="btn btn-secondary w-100 mt-4 mb-5">Add Person Details</button>
    </form>
  )
}

export default Form