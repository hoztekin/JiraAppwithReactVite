// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskFormUpdate, onUpdate }) {
  // eslint-disable-next-line no-unused-vars
  const { createTask, EditTaskById } = useContext(TasksContext);
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
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
      //EditTaskById(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
      //onCreate(title, taskDesc);
    }

    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {" "}
      {taskFormUpdate ? (
        <div className="TaskUpdate">
          <h3>
            <b>Lütfen Görevi Düzenleyiniz</b>
          </h3>
          <form className="TaskForm">
            <label className="TaskLabel">Başlığı Düzenleyiniz</label>
            <input
              className="TaskInput"
              value={title}
              onChange={handleChange}
            ></input>
            <label className="TaskLabel">Görevi Düzenleyiniz</label>
            <textarea
              className="TaskInput"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            ></textarea>
            <button className="TaskButtonUpdate" onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="TaskCreate">
          <h3>
            <b>Lütfen Görev Ekleyiniz</b>
          </h3>
          <form className="TaskForm">
            <label className="TaskLabel">Başlık</label>
            <input
              className="TaskInput"
              value={title}
              onChange={handleChange}
            ></input>
            <label className="TaskLabel">Görev Giriniz</label>
            <textarea
              className="TaskInput"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            ></textarea>
            <button className="TaskButton" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
