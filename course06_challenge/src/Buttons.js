import React from 'react';

const Buttons = ({usersFunction, postFunction, CommentFunction}) => {
  return (
    
    <div className="row mt-3 w-90 px-5 bg-light border">
        <button className="btn btn-secondary col"
        onClick={usersFunction}
        >Users</button>
        <button className="btn btn-primary col"
        onClick={postFunction}
        >Posts</button>
        <button className="btn btn-warning col"
        onClick={CommentFunction}
        >Comments</button>
    </div>
  )
}

export default Buttons