import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
  const [btn1,setbtn1] = useState(true);
  const [btn2,setbtn2] = useState(false);

  const handleClick = (e) =>{
    setbtn1(!btn1);
    setbtn2(!btn2);
  }
  

  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>{(btn1)? "OFF":"ON"}</button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>{(btn2)?"ON":"OFF"}</button>
    </div>
  );
}


export default App;
