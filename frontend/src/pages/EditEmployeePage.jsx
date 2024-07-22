import EmployeeForm from "../components/EmployeeForm.jsx";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";



function EditEmployeePage() {
    const {id} = useParams();
    const [employee, setEmployee] = useState({})
    const navigate = useNavigate()
    const token = localStorage.getItem("token")


    //TODO: PATCH
    async function handleSubmit(event) {
        event.preventDefault();
        const addEmployees = await fetch(`/api/employee/edit?id=${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(employee)
        })
        const response = await addEmployees;
        if (!response.ok) {
            navigate("/error")
        }else{
            navigate(`/${localStorage.getItem("username")}/employees`)
        }
    }

    async function handleDeleteEmployee(id){
        const deleteEmployee = await fetch(`/api/employee/delete?id=${id}`, {
            method: "DELETE",
                headers: {
                "Content-type": "application/json",
                    'Authorization': `Bearer ${token}`
            },
        })
        const response = await deleteEmployee;
        console.log(response)
        if (!response.ok) {
            navigate("/error")
        }else{
            navigate(`/${localStorage.getItem("username")}/employees`)
        }
    }

    useEffect(() => {
        async function getEmployee() {
            const response = await fetch(`/api/employee/edit?id=${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            const employeeData = await response.json();
            setEmployee(employeeData);
        }

        getEmployee();
    }, [id]);

    return (
        <div>
            <Navbar/>
            <EmployeeForm employee={employee} onDelete={handleDeleteEmployee} onSave={handleSubmit} setEmployee={setEmployee}/>
        </div>
    )
}

export default EditEmployeePage;