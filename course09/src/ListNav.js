import React from 'react'

const ListNav = ({Link}) => {
  return (
    <div className='collapse navbar-collapse'>
    <ul  className="navbar-nav">
      <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
      <li className="nav-item"><Link to="/post" className="nav-link" >Post</Link></li>
    </ul>
    </div>
  )
}

export default ListNav