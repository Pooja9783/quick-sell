import React from "react";
import { useState } from "react";
import "../Style/Counter.css";
const Counter = () => {
  let [counter, setCounter] = useState(1);
  let [max, setMax] = useState(1000);

  //   const maxVal = (val) => {
  //     if (counter < 1000) {
  //       setMax(1);
  //     }
  //   };

  return (
    <div className="counter-app">
      <div className="counter">
        <div className="counter-border">
          <button onClick={() => (counter > 1 ? setCounter(counter - 1) : 1)}>
            -
          </button>
          <p>{counter}</p>
          <button onClick={() => (counter < max ? setCounter(counter + 1) : 1)}>
            +
          </button>
        </div>
        <input
          tpye="Number"
          onChange={(e) => setCounter(Number(e.target.value))}
          placeholder="Enter Number...."
        />
        <br />
        <input
          tpye="Number"
          onChange={(e) => setMax(Number(e.target.value))}
          placeholder="Enter Max Number...."
        />
      </div>
    </div>
  );
};

export default Counter;
