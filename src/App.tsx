import './App.css';
import {useState} from "react"
import Count from './Count';
import Decrease from './Decrease';
import Increase from './Increase';
function App() {
  const [count,setCount]=useState<number>(0)
  return (
    <div className="App">
     <Count count={count}/>
     <Decrease setCount={setCount}/>
     <Increase setCount={setCount}/>
    </div>
  );
}

export default App;
