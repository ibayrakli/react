
import './App.css';
import TaskCreate from './components/TaskCreate';

function App() {

  const createTask = (title, taskDesc) => {

}

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      {/* <TaskList /> */}

    </div>
  );
}

export default App;
