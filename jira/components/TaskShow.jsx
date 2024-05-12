/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import TaskCreate from "./TaskCreate";

export default function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setshowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setshowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setshowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div className="taskShow">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="taskTitle">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="taskTitle">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="ButtonDelete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="ButtonUpdate" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
