import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";

import "./managerpage.style.scss";

import FieldWithTitle from "../../components/FieldWithTitle/fieldwithtitle.component";
import Employe from "../../components/Employe/employe.component";

import { getActiveUsers, addTask } from "../../utils/ApiCalls";

const ManagerPage = () => {
    const [activeUsers, setActiveUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});

    const fetchActiveUsers = async () => {
        const response = await getActiveUsers();
        console.log(response);
        if (response.error) {
            alert(response.error);
            return;
        }
        setActiveUsers(response);
    };

    const createTaskHandler = async () => {
        console.log("Add task");
        var task = {
            name: document.querySelector("input[name='name']").value,
            description: document.querySelector("textarea[name='description']").value,
            userId: selectedUser.id
        };
        const response = await addTask(task);
        console.log(response);
        if (response.error) {
            alert(response.error);
            return;
        } 
        alert("Task added successfully");
    }

    const refresh = () => {
        fetchActiveUsers();
        setSelectedUser({})
    };

    useEffect(() => {
        fetchActiveUsers();
    }, []);




    return (
        <div className="manager-page">
            <div className="prezentare">
                <section className="employees">
                    <h2 className="section-title">Actives Employees</h2>
                    <div className="employe-list">
                        <button onClick={()=>refresh()}>Refresh</button>
                        {activeUsers.map(user => <Employe key={user.id} employe={user} styleClass="employeDisplay" setUser={setSelectedUser}/>)}
                        
                    </div>
                </section>
                <div className="add-task">
                    <div className="form">
                        {selectedUser.id? <h2>Selected User: {selectedUser.username}</h2>:<h2>Select an user</h2>}
                        <FieldWithTitle type="text" name="name" title="Name" styleClass="name-field"/>
                        <FieldWithTitle type="text" name="description" title="Description" styleClass="description-field" textarea/>
                        
                        <button onClick={()=>createTaskHandler()}>Create</button>
                    </div>
                </div>
            
            </div>
            
        </div>
    )
};

export default ManagerPage;