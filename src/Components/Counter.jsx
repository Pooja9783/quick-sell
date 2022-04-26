import React from "react";
import { useState } from "react";
import "../Style/Counter.css";
const Counter = () => {
  //   let [counter, setCounter] = useState(10);
  let [input, setInput] = useState(10);
  const counterVal = (val) => {
    if (input == " ") {
      setInput(1);
    } else if (input === 1000) {
      setInput(val + 1);
    } else {
      setInput(val + 1);
    }
  };

  return (
    <div className="counter-app">
      <div className="counter">
        <div className="counter-border">
          <button onClick={() => setInput(input - 1)}>-</button>
          <input
            tpye="text"
            onChange={(e) => setInput(e.target.value)}
            value={+input}
          />
          <button onClick={() => counterVal(Number(input))}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
