import "./task.style.scss";

import { deleteTask } from "../../utils/ApiCalls";

const Task = ({ task, styleClass, setTask, refresh}) => {

  const selectTask = () => {
    setTask(task);
  }

  const deleteTaskHandler = async () => {
    console.log("Delete task");
    const response = await deleteTask(task);
    // console.log(response);
    // if (response.error) {
    //   alert(response.error);
    //   return;
    // } 
    refresh();
  }

  return (
    <div className={styleClass + " task"} onClick={selectTask}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={deleteTaskHandler}>DELETE</button>
    </div>
  );
};

export default Task;