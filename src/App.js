import './App.css';
import {useState} from 'react'

function App() {
  const[count,setCount] = useState(0)
  const increase = ()=>{
    setCount(count+1)
  }
  const decrease = ()=>{
   if(count>0){
    setCount(count=>count-1)
   }
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease} >decrease</button>
    </div>
  );
}

export default App;
