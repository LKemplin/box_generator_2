import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import { useState } from 'react';
import ShowBox from './components/ShowBox';

function App() {
  const [colorBoxArray, setColorBoxArray] = useState([])

  return (
    <div className="App">
      <ColorBox colorBoxArray={colorBoxArray} setColorBoxArray={setColorBoxArray}/>
      <ShowBox colorBoxArray={colorBoxArray} />
    </div>
  );
}

export default App;
