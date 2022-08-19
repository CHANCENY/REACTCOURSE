import './App.css';
import Box from './Box';
import Form from './Form';
import { useState } from 'react';

function App() {

  //creating state hook here with color as variable and setcolor as setter 
  const [color, setColor] = useState('');
  const [textColor, setTextColor] = useState(true);
  
  return ( 
    <div className='App'>
      <Box color ={color} textColor ={textColor}/> 
      <Form color={color} setColor ={setColor} textColor ={textColor} setTextColor ={setTextColor} />
    </div> 
  );
}

export default App;
