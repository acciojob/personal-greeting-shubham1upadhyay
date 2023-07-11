
import React from "react";
import './../styles/App.css';

const App = () => {
  const[val, setVal] = useState("");

  function display(e){
    return setVal(e.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your name:</label><br/>
        <input type="text" onChange={display} value={val} />
        <p>{"Hello " + val + "!"}</p>
    </div>
  )
}

export default App
