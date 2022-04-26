import React from "react";
import { useState } from "react";
import "../Style/Counter.css";
const Counter = () => {
  let [counter, setCounter] = useState(10);
  //   console.log(input);

  const counterVal = (val) => {
    if (counter == "") {
      setCounter(1000);
    } else {
      setCounter(val);
    }
  };

  return (
    <div className="counter-app">
      <div className="counter">
        <div className="counter-border">
          <button onClick={() => setCounter(counter - 1)}>-</button>
          <h1 className="h1">{counter}</h1>
          <button onClick={() => counterVal(counter + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
