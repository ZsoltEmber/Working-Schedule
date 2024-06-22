import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/Logo.png';
import userLogo from "../assets/User.png"
import logout from "../assets/Sign-Out.png"
import {useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.clear();
        navigate("/");
    }

    return (
        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
            <div className={"container m-1"}>
                <a className={"navbar-brand"}>
                    <img src={logo} height={"40"}/>
                </a>
                {localStorage.getItem("username") ?
                    <div>
                        <img alt={"user-icon"} src={userLogo} height={"40"}/>
                        <a style={{color: "white"}}>{localStorage.username}</a>
                        <img alt={"logout-icon"} onClick={() => handleLogout()} src={logout} height={"40"}/>
                    </div>
                    : null}
            </div>
        </nav>
    )
        ;
}


export default Navbar;