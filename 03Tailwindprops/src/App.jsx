import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App(props) {
  // console.log(props)
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-4 mb-4">Tailwind test</h1>
     <Card username="Divya" btnText="click me"/>
     <Card username="KD" />


    </>
  );
}

export default App;
