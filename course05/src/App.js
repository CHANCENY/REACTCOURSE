import './App.css';
import Display from './Display';
import Form from './Form';

function App() {

  //url for data
  const urlLink = ' http://localhost:3500/items';
  
  return (
    <div className="container w-50">
      <h1 className='text-center'>Fetching Data Api</h1>

      <Form />
      <Display />
    </div>
  );
}

export default App;
