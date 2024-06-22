import Navbar from "../components/Navbar.jsx";
import EmployeeTable from "../components/EmployeeTable.jsx";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Loading from "../components/Loading.jsx";


function EmployeePage() {
    const {username} = useParams();
    const [employees, setEmployees] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")

        async function getEmployees() {
            const response = await fetch(`/api/employee?username=${username}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            if (response.status === 401) {
                localStorage.removeItem("token")
                localStorage.removeItem("username")
                localStorage.removeItem("role")
                navigate("/login");
            }
            const allEmployees = await response.json();
            setEmployees(allEmployees);
        }

        getEmployees();
    }, []);


    return (
        <div>
            <Navbar></Navbar>
            {employees ?
                <EmployeeTable employees={employees}></EmployeeTable> :
                <Loading></Loading>}
        </div>
    )
}

export default EmployeePage;