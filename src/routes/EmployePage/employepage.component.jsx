import "./employepage.style.scss";

import Task from "../../components/Task/task.component";


const EmployePage = () => {
    return (
        <div className="employe-page">
            <div className="prezentare">
                <section>
                    <h2 className="section-title">New Tasks</h2>
                    <div className="tasks-list">
                        <Task task={{ title: "Task 1", description: "Description 1" }} styleClass="taskDisplay" />
                        <Task task={{ title: "Task 2", description: "Description 2" }} styleClass="taskDisplay" />
                        <Task task={{ title: "Task 3", description: "Description 3" }} styleClass="taskDisplay" />
                    </div>
                </section>
                <section>
                    <h2 className="section-title">Working On</h2>
                    <div className="tasks-list"></div>
                </section>
                <section>
                    <h2 className="section-title">Testing</h2>
                    <div className="tasks-list"></div>
                </section>
                <section>
                    <h2 className="section-title">Finished</h2>
                    <div className="tasks-list"></div>
                </section>
            </div>

        </div>
    );
};

export default EmployePage;