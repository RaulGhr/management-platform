import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import "./employepage.style.scss";

import Task from "../../components/Task/task.component";

import { getTasksForUser, updateTask } from "../../utils/ApiCalls";

const EmployePage = () => {
    const [tasks, setTasks] = useState({created:[], workingOn:[], testing:[], finished:[]});
    const [selectedTask, setSelectedTask] = useState({});
    const { logedUser, setLogedUser } = useContext(UserContext);
    // console.log(logedUser);

    if (!logedUser.id) {
        window.location.href = "/";
        // setLogedUser({
        //     "id": 2,
        //     "password": "1",
        //     "permission": 0,
        //     "username": "u1"});

        
    }

    const fetchTasks = async () => {
        const response = await getTasksForUser(logedUser);
        // console.log(response);
        if (response.error) {
            alert(response.error);
            return;
        }

        var tasksOrganized = {}
        console.log("in functie response", response);
        response.forEach(task => {
            if (tasksOrganized[task.status]) {
                tasksOrganized[task.status].push(task);
            } else {
                tasksOrganized[task.status] = [task];
            }
        });
        console.log("in functie org", tasksOrganized);
        setTasks(tasksOrganized);


    }

    useEffect(() => {
        fetchTasks();
    }, []);

    const refresh = () => {
        fetchTasks();
    }

    const updateTaskHandler = async (newStatus) => {
        console.log("Update task");
        var task = selectedTask;
        if (!task.id) {
            alert("Please select a task");
            return;
        }

        task.status = newStatus;
        const response = await updateTask(task);
        console.log(response);
        if (response.error) {
            alert(response.error);
            return;
        } 
        // alert("Task updated successfully");
        fetchTasks();
        setSelectedTask({});
    }

    console.log("inainte de return",tasks);
    return (
        <div className="employe-page">
            <div className="prezentare">
                <section>
                    <h2 className="section-title" onClick={()=>updateTaskHandler("created")}>New Tasks</h2>
                    <div className="tasks-list">
                        <button onClick={()=>refresh()}>Refresh</button>
                        {tasks.created && tasks.created.map(task => <Task key={task.id} task={task} styleClass="taskDisplay" setTask={setSelectedTask} refresh={fetchTasks}/> )}
                    </div>
                    
                </section>
                <section>
                    <h2 className="section-title" onClick={()=>updateTaskHandler("workingOn")}>Working On</h2>
                    <div className="tasks-list">
                        {tasks.workingOn && tasks.workingOn.map(task => <Task key={task.id} task={task} styleClass="taskDisplay" setTask={setSelectedTask} refresh={fetchTasks}/>)}
                    </div>
                </section>
                <section>
                    <h2 className="section-title" onClick={()=>updateTaskHandler("testing")}>Testing</h2>
                    <div className="tasks-list">
                        {tasks.testing && tasks.testing.map(task => <Task key={task.id} task={task} styleClass="taskDisplay" setTask={setSelectedTask} refresh={fetchTasks}/>)}
                    </div>
                </section>
                <section>
                    <h2 className="section-title" onClick={()=>updateTaskHandler("finished")}>Finished</h2>
                    <div className="tasks-list">
                        {tasks.finished && tasks.finished.map(task => <Task key={task.id} task={task} styleClass="taskDisplay" setTask={setSelectedTask} refresh={fetchTasks}/>)}
                    </div>
                </section>
                
            </div>

        </div>
    );
};

export default EmployePage;