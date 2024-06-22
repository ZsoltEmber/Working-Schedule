import Navbar from "../components/Navbar.jsx";
import employeeIcon from "../assets/Employees.png"
import calendarIcon from "../assets/Calendar.png"
import {Link} from "react-router-dom";

function HomePage() {

    const username = localStorage.getItem("username")

    return (
        <div>
            <Navbar/>
            <div
                className={"container d-flex align-items-center justify-content-lg-evenly position-relative flex-wrap"}>
                <Link to={`/${username}/employees`}>
                    <div className={"card w-100"}>
                        <div className={"card-header"}>
                            <img height={40} src={employeeIcon} alt={"employee manager"}/>
                            <span className={"content p-4"}>Employee Manager</span>
                        </div>
                    </div>
                </Link>

                <Link to={`/${username}/schedule`}>
                    <div className={"p-2"}>
                        <div className={"card w-100"}>
                            <div className={"card-header"}>
                                <img height={40} src={calendarIcon} alt={"Schedule manager"}/>
                                <span className={"content p-4"}>Schedule Manager</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default HomePage;