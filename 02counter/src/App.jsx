import { useState } from "react";
import "./App.css";

function App() {
  // let count = 5;
  let [count, setCount] = useState(0);
  const addValue = () => {
    console.log("teddy" + count);
    // count= count+1;
    if (count < 20) {
      count = count + 1;
      setCount(count);
    }
  };
  const removeValue = () => {
    if (count > 0) {
      count = count - 1;
      setCount(count);
    }
  };

  return (
    <>
      <h1>Chai aur React </h1>
      <h2> Counter Value : {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value </button>
    </>
  );
}

export default App;
