import React, { ChangeEvent, FC } from "react";
import { useState } from "react";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }

    console.log(task, workDay);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={task}
          name="task"
          onChange={handleChange}
          placeholder="Taskınızı giriniz"
        />
        <input
          type="number"
          value={workDay}
          name="workDay"
          onChange={handleChange}
          placeholder="Kaç günde tamamlamalısınız"
        />
        <button>Yeni Task Ekle</button>
      </div>
    </div>
  );
};

export default App;
