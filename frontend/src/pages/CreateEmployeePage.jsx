import EmployeeForm from "../components/EmployeeForm.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Navbar from "../components/Navbar.jsx";


function CreateEmployeePage() {
    const [employee, setEmployee] = useState()
    const  navigate = useNavigate();
    const username = localStorage.getItem("username")

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch(`/api/employee?username=${username}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        if (response.ok) {
            navigate(`/${username}/employees`)
        }else{
            localStorage.setItem("statusText", response.statusText)
            localStorage.setItem("statusCode", response.status.toString())
            navigate("/error")
        }

    }


    return (
        <div>
            <Navbar/>
            <EmployeeForm employee={employee} setEmployee={setEmployee} onSave={handleSubmit}/>
        </div>)
}


export default CreateEmployeePage;