import React from 'react'

const Buttons = ({buttonText, typeButton, setTypeButton}) => {
  return ( 
       <button className="btn btn-light w-100"
       value={typeButton}
       onClick={(e) => setTypeButton(buttonText)}
       >{buttonText}</button>
   
  )
}

export default Buttons