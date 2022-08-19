import React from 'react'

//we are reciving color value through props and set it to style as bg color
const Box = ({color, textColor}) => {
  return (
    <div className='boxing' style={{backgroundColor:color, color: textColor ? 'black' : 'white'}}>
        <h3 className='insidetext'>{color || 'Empty Value' }</h3> 
    </div>
  )
}

export default Box