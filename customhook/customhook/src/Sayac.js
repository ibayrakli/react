import React from "react";
import useCounter from "./useCounter";

const Sayac = () => {
  const [num, increment, decrement, reset] = useCounter();

  return (
    <div>
      <h2>Sayı = {num}</h2>
      <button onClick={increment}>Arttır</button>
      <button onClick={decrement}>Azalt</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Sayac;
