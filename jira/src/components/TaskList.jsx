/* eslint-disable react/prop-types */
import TaskShow from "./TaskShow";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <div className="taskList">
      {tasks.map((task, index) => {
        return <TaskShow key={index} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
