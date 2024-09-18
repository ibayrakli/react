import "./App.css";
import TaskCreate from "./components/TaskCreate";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999999),
        title: title,
        taskDesc: taskDesc,
      },
    ];

    setTasks(createdTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
