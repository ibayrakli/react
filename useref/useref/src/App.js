import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0);

  const renderCount = useRef(0);

  const inputRef = useRef();

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    renderCount.current = renderCount.current + 1;
  });

  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.value = "Test";
  };

  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Benim adım {name}</div>
      <div>{renderCount.current} defa render oldu </div>
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default App;
