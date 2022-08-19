import React from 'react'

//we are recieving color value and setColor setter function 
//input value is set to color and  event onChange is handled by setColor
//which takes the typing word and setting it to color as colorValue in box
const Form = ({color, setColor, textColor, setTextColor}) => {

  const textChanges = (colorvalue) =>{

    console.log("color");
    if(!colorvalue){
      console.log("color empty");
      setTextColor(true);
      return;
    }
    if(colorvalue === 'black' || colorvalue ==='#000'){
      console.log("color black");
      setTextColor(false)
      return;
    }
    if(colorvalue === 'white' || colorvalue === '#fff'){
      console.log("color white");
      setTextColor(true)
      return;
    }else{
      console.log("color else");
      setTextColor(!textColor);
      return;
    }
  }


  return (
    
    <form className="forms" onSubmit={(e) => e.preventDefault()}>
        <input type="text" 
        className="inputfield" 
        placeholder='Add Color Name'
        value={color}
        onChange={(e) =>{ setColor(e.target.value); textChanges(e.target.value)}}
        autoFocus
        />
    </form>
  )
}

export default Form