import './App.css';
import useWindowSize from './hooks/useWindowSize';
import Home from './Home';
import useAxiosFetch from './hooks/useAxiosFetch';
import {useEffect} from 'react'
import Display from './Display';

function App() {

  const {data, fetchError, isLoading } = useAxiosFetch(' http://localhost:3500/items');

  //In this app we are working with custom hooks

  const {width, height, msg} = useWindowSize();
  return (
    <div className="App">
      <h1>Custorm hooks</h1>
      {/* <Home width={width} height={height} msg={msg} /> */}
      <Display data={data} fetchError={fetchError} isLoading={isLoading} />
    </div>
  );
}

export default App;
