import LoginForm from "../components/LoginForm.jsx";
import Navbar from "../components/Navbar.jsx";
import {useState} from "react";


function LoginPage(){
    const [username, setUsername] = useState(localStorage.username ? localStorage.username : null)



    return (
        <div>
        <Navbar/>
            <h2>session expired pls log in</h2>
        <LoginForm onLogin={setUsername}/>
        </div>
    )
}

export default LoginPage;