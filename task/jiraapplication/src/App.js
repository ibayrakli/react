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

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id != id;
    });

    setTasks(afterDeletingTasks);
  };

  const editTaskById = (id, title, description) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id == id) {
        return {
          id: id,
          title: title,
          taskDesc: description,
        };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
