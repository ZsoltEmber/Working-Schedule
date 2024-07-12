import {useNavigate} from "react-router-dom";
import deleteIcon from "../assets/Delete-Icon.png"
import DeleteDialog from "./DeleteDialog.jsx";
import {useState} from "react";
function EmployeeForm({employee, setEmployee, onSave, onDelete}) {
    const navigate = useNavigate();
    const username = localStorage.getItem("username")
    const [showModal, setShowModal] = useState(false);

    // function handleModal(){
    //     showModal? setShowModal(false) : setShowModal(true);
    // }

    return (

        <div className={"card w-25 h-50 p-3"}>
            <p className={"card-header"}>Employee</p>

            <div className={"card-body"}>
                <form onSubmit={(event) => onSave(event)}>
                    <div className={"form-outline mb-4"}>
                        <input className={"mw-100"} name="name"
                               type={"text"}
                               value={employee ? employee.name : null}
                               onChange={(event) => {
                                   setEmployee(prev => ({...prev, name: event.target.value}))
                               }}
                        />
                    </div>

                    <div className={"form-outline mb-4"}>
                        <input className={"mw-100"} name="workHours"
                               type={"number"}
                               value={employee ? employee.monthlyRequiredWorkingHours : null}
                               onChange={(event) => {
                                   setEmployee(prev => ({...prev, monthlyRequiredWorkingHours: event.target.value}))
                               }}
                        />
                    </div>


                    <div className={"form-outline mb-4"}>
                        <label htmlFor="ableToWorkIndependently">Able to Work independently:</label>
                        <input className={"mw-100"} name="ableToWorkIndependently"
                               type={"checkbox"}
                               checked={employee ? employee.ableToWorkIndependently : null}
                               onChange={(event) => {
                                   setEmployee(prev => ({...prev, ableToWorkIndependently: event.target.checked}))
                               }}
                        />
                    </div>
                    <button className={"btn btn-primary"} type={"submit"}>Save</button>
                    <button className={"btn btn-secondary"} onClick={() => navigate(`/${username}/employees`)}>Cancel</button>
                </form>
                    <img className={"m-4"}
                    onClick={()=>setShowModal(true)}
                        src={deleteIcon}
                        alt={"delete icon"}
                        height={40}/>
                    <DeleteDialog onDelete={onDelete} showModal={showModal} onClose={setShowModal}/>
            </div>
        </div>


    )
}

export default EmployeeForm;
