
import "./employe.style.scss";

const Employe = ({ employe, styleClass, setUser }) => {

  const selectUser = () => {
    setUser(employe);
  }

  return (
    <div className={styleClass + " employe"}>
      <h3>{employe.username}</h3>
      <p>{employe.lastActive}</p>
      <button onClick={selectUser}>Add Task</button>
    </div>
  );
};

export default Employe;