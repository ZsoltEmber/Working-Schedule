import {useState} from "react";
import {useNavigate} from "react-router-dom";

function UserRegistrationForm() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [passwordAgain, setPasswordAgain] = useState()

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
                        <input  className={"mw-100"}
                                placeholder="Password" type={"password"} name={"password"} value={user.password}
                               onChange={(event) => {
                                   setUser(prev => ({...prev, password: event.target.value}))
                               }}/>
                    </div>

                    <div className={"form-outline mb-4"}>
                        <input  className={"mw-100"}
                                placeholder="Password again" type={"password"} name={"password"} value={user.password}
                               onChange={(event) => {
                                   setUser(prev => ({...prev, password: event.target.value}))
                               }}/>
                    </div>

                    <div>
                        <button className={"btn btn-primary"} type={"submit"}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserRegistrationForm;
