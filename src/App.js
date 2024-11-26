import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div className="App-Header">
        <h3 data-testid="counter">{counter}</h3>
      </div>
    </div>
  );
}

export default App;
