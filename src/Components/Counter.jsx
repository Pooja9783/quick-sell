import React from "react";
import { useState } from "react";
import "../Style/Counter.css";
const Counter = () => {
  let [counter, setCounter] = useState(1);

  return (
    <div className="counter-app">
      <div className="counter">
        <input type="text" placeholder="Enter Number..." />
        <div className="counter-border">
          <button onClick={() => setCounter(counter - 1)}>-</button>
          <h1 className="h1">{counter}</h1>
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
