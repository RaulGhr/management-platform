import "./task.style.scss";

const Task = ({ task, styleClass }) => {
  return (
    <div className={styleClass + " task"}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;