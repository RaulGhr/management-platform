import "./employe.style.scss";

const Employe = ({ employe, styleClass }) => {
  return (
    <div className={styleClass + " employe"}>
      <h3>{employe.name}</h3>
      <p>{employe.activeDate}</p>
      <button>Add Task</button>
    </div>
  );
};

export default Employe;