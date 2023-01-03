import React, { useState } from "react";

function App() {
  setInterval(gettime, 1000);
  let time = new Date().toLocaleTimeString().slice(0, 8);
  // For  auto  rendring we use hook method
  let [state, setState] = useState(time);

  function gettime() {
    const newTime = new Date().toLocaleTimeString().slice(0, 8);
    setState(newTime);
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={gettime}>Get Time</button>
    </div>
  );
}

export default App;
