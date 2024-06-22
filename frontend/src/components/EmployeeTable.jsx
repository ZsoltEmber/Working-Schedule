import {Link} from "react-router-dom";
import addIcon from "../assets/Add-Btn.png"
import editIcon from "../assets/Edit-Icon.png"

function EmployeeTable({employees}) {

    let index = 0;

    const username = localStorage.getItem("username")

    return (
        <table className={"table table-striped"}>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Work Hours</th>
                <th scope="col">Can Work Independently</th>
                <th scope="col">
                    <Link to={`/${username}/employees/create`}><img src={addIcon} height={"20"}
                                                                    alt={"add employee"}/></Link></th>

            </tr>
            </thead>
            <tbody>
            {employees && employees.map((employee) => {
                index++;
                return (
                    <tr key={employee.id}>
                        <th scope="row">{index}</th>
                        <td>{employee.name}</td>
                        <td>{employee.monthlyRequiredWorkingHours}</td>
                        <td>{<input type={"checkbox"} checked={employee.ableToWorkIndependently}/>}</td>
                        <td>
                            <Link to={`/${username}/employees/${employee.id}`}>
                                <img src={editIcon} height={"20"} alt={"edit employee"}/>
                            </Link>
                        </td>
                    </tr>

                )
            })}
            </tbody>
        </table>
    )
}


export default EmployeeTable;