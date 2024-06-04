import RegistrationFrom from "./components/RegistrationFrom.jsx";
import LoginForm from "./components/LoginForm.jsx";
import {useEffect, useState} from "react";
import Dummy from "./components/Dummy.jsx";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
        setIsAuthenticated(true);
        }
    }, []);


    return (
        <div>
            {isAuthenticated? <Dummy></Dummy> :
                <div>
                <RegistrationFrom setAuth={setIsAuthenticated}></RegistrationFrom>
                    <p>-------------------------</p>
                    <LoginForm></LoginForm>


                </div>}
        </div>
    )
}

export default App;
