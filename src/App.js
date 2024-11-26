import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [isOn, setIsOn] = useState(true);
  // data-testid 로 해서 테스트 할 수 있도록 함
  // 해당 아이디 값으로 app.test.js 에서 불러와서 테스트 가능
  return (
    <div className="App">
      <div className="App-Header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button
            data-testid="minus-button"
            onClick={() => setCounter(counter - 1)}
            disabled={!isOn}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            onClick={() => setCounter(counter + 1)}
            disabled={!isOn}
          >
            +
          </button>
          <div>
            <button
              data-testid="on/off-button"
              style={{ background: "blue" }}
              onClick={() => setIsOn(!isOn)}
            >
              on/off
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
