import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [cat, setCat] = useState(0);
  const [dog, setDog] = useState(0);

  useEffect(() => {
    console.log("Ilk kez render edildiginde calisir, daha da calismaz");
  }, []);

  useEffect(() => {
    console.log("Her zaman calisir");
  });

  useEffect(() => {
    console.log(
      "Ilk kez render edildiginde calisir, cat degerinde degisiklik oldugunda calisir"
    );
  }, [cat]);

  useEffect(() => {
    console.log(
      "Ilk kez render edildiginde calisir, dog degerinde degisiklik oldugunda calisir"
    );
  }, [dog]);

  useEffect(() => {
    console.log(
      "Ilk kez render edildiginde calisir, cat veya dog degerinde degisiklik oldugunda calisir"
    );
  }, [cat, dog]);

  return (
    <div className="App">
      <div className="firstDiv">
        <button
          onClick={() => {
            setCat(cat + 1);
          }}
        >
          Cat ++{" "}
        </button>
        <div>Cat: {cat}</div>
      </div>

      <div>
        <button
          onClick={() => {
            setDog(dog + 1);
          }}
        >
          Dog ++{" "}
        </button>
        <div>Dog: {dog}</div>
      </div>
    </div>
  );
}

export default App;
