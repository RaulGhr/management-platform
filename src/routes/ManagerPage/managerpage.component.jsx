import "./managerpage.style.scss";
import FieldWithTitle from "../../components/FieldWithTitle/fieldwithtitle.component";
import Employe from "../../components/Employe/employe.component";

const ManagerPage = () => {
    return (
        <div className="manager-page">
            <div className="prezentare">
                <section className="employees">
                    <h2 className="section-title">Actives Employees</h2>
                    <div className="employe-list">
                        <Employe employe={{ name: "Employe 1", activeDate: "10:15" }} styleClass="employeDisplay" />
                        <Employe employe={{ name: "Employe 2", activeDate: "10:30" }} styleClass="employeDisplay" />
                    </div>
                </section>
                <div className="add-task">
                    <form>
                        <FieldWithTitle type="text" name="name" title="Name" styleClass="name-field"/>
                        <FieldWithTitle type="text" name="description" title="Description" styleClass="description-field" textarea/>
                        
                        <button>Create</button>
                    </form>
                </div>
            
            </div>
            
        </div>
    )
};

export default ManagerPage;