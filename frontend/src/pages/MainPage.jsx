import Navbar from "../components/Navbar.jsx";
import LoginForm from "../components/LoginForm.jsx";
import {useState} from "react";
import RegistrationFrom from "../components/RegistrationFrom.jsx";
import Loading from "../components/Loading.jsx";



function MainPage({onLogin}) {
    const [register, setRegister] = useState(false)


    return (
        <div  className={"bg-light mh-100"}>
            <Navbar></Navbar>
            <p> {register ? "Register" : "Log in"}</p>
            <button
                onClick={() => setRegister(!register)}>
                {register ? "Log in" : "Register"}
            </button>
            {register ? <RegistrationFrom></RegistrationFrom> : <LoginForm onLogin={onLogin}></LoginForm>}
        </div>
    )
}


export default MainPage;