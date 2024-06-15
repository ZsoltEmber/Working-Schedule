import {useState} from "react";
import {useNavigate} from "react-router-dom";
import PasswordError from "./PasswordError.jsx";

function UserRegistrationForm() {
    const [user, setUser] = useState({});
    const [passwordAgain, setPasswordAgain] = useState(null)
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState(false)

    //TODO: USE WRAPPER FETCH;
    async function handleSubmit(event) {
        event.preventDefault()

        const register = await fetch('/api/user/register', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const response = await register.json();
        if (response.status === "401") {
            navigate("/");
        }
        navigate("/login");
    }


    return (
        <div className={"card w-25 h-50 p-3"}>
            <p className={"card-header"}>Registration Form</p>
            <div className={"card-body"}>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className={"form-outline mb-4"}>

                        <input className={"mw-100"}
                               placeholder={"Username"} type={"text"} name={"name"} value={user.username}
                               onChange={(event) => {
                                   setUser(prev => ({...prev, username: event.target.value}))
                               }}/>
                    </div>

                    <div className={"form-outline mb-4"}>
                        <input className={"mw-100"}
                               placeholder="Password" type={"password"} name={"password"} value={user.password}
                               onChange={(event) => {
                                   setUser(prev => ({...prev, password: event.target.value}))
                               }}/>
                    </div>

                    <div className={"form-outline mb-4"}>
                        <input className={"mw-100"}
                               placeholder="Password again" type={"password"} name={"password"} value={passwordAgain}
                               onChange={(event) => {
                                   setPasswordAgain(event.target.value)
                                   event.target.value !== user.password? setPasswordError(true) : setPasswordError(false)
                               }}/>
                        <span>{passwordError? <PasswordError/> : null}</span>
                    </div>
                    <div>
                        <button disabled={passwordError} className={"btn btn-primary"} type={"submit"}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserRegistrationForm;
