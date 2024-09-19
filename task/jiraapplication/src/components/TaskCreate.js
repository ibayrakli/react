import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Lütfen taskı düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label"> Başlığı düzenleyiniz</label>
            <input
              value={title}
              className="task-input"
              onChange={handleChange}
            />

            <label className="task-label"> Taskı düzenleyiniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows="5"
            />

            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              {" "}
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen task ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label"> Başlık</label>
            <input
              value={title}
              className="task-input"
              onChange={handleChange}
            />

            <label className="task-label"> Task Giriniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows="5"
            />

            <button className="task-button" onClick={handleSubmit}>
              {" "}
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
