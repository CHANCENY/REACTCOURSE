import React from 'react'

//type Props = {}


//on props e can also denstruct the props eg instead of passing props as all we can
//do this {title} if title is in props
const headers = ({title}) => {
  return (

    //adding styles way one
   <header style={{
    backgroundColor:'mediumblue',color:'#fff'
   }}>
      <h1 className='text-center'>{title}</h1>
   </header>
  )
}

export default headers