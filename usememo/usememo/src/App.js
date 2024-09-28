import { useState, useMemo, useCallback } from "react";
import "./App.css";
import NumberList from "./NumberList";

function App() {
  const [number, setNumber] = useState(1);
  // const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

  const getItems = useCallback(
    (incrementValue) => {
      return [
        number + incrementValue,
        number + 1 + incrementValue,
        number + 2 + incrementValue,
      ];
    },
    [number]
  );

  const doubleNumber = useMemo(() => {
    return slowFunc(number);
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        {/* <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        /> */}
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Temayı Değiştir
        </button>
        <NumberList getItems={getItems} />
        {/* <div style={theme}>{doubleNumber}</div> */}
      </>
    </div>
  );
}

function slowFunc(num) {
  console.log("Fonksiyon çağrıldı");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default App;
