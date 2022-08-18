import React from 'react'

const Footer = ({length}) => {
  return (
   
    <footer>
        <h1 className="badge bg-secondary ms-5 fs-1 mt-3">{length}</h1>
    </footer>
  )
}

export default Footer