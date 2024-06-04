import "./task.style.scss";

const Task = ({ task, styleClass, setTask}) => {

  const selectTask = () => {
    setTask(task);
  }
  return (
    <div className={styleClass + " task"} onClick={selectTask}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;