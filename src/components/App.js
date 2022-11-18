import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
  const [toggle,settoggle] = useState(false);
  

  const handleClick = () =>{
    settoggle(!toggle);
  }
  

  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>{toggle}</button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>{toggle}</button>
    </div>
  );
}


export default App;
