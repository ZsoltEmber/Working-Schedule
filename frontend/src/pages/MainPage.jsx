import Navbar from "../components/Navbar.jsx";
import LoginForm from "../components/LoginForm.jsx";
import {useState} from "react";
import RegistrationFrom from "../components/RegistrationFrom.jsx";
import {useNavigate} from "react-router-dom";


function MainPage({auth}) {
    const [register, setRegister] = useState(false)
    const [username, setUsername] = useState(localStorage.username ? localStorage.username : null)

    const navigate = useNavigate();


    return (
        auth && username ? navigate(`/${username}/menu`) :


            <div className={"bg-light mh-100"}>
                <Navbar isAuthenticated={auth}></Navbar>
                <p> {register ? "Register" : "Log in"}</p>
                <button
                    onClick={() => setRegister(!register)}>
                    {register ? "Log in" : "Register"}
                </button>
                {register ? <RegistrationFrom></RegistrationFrom> :
                    <LoginForm isAuth={auth} onLogin={setUsername}></LoginForm>}
            </div>
    )
}


export default MainPage;