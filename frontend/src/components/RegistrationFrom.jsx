import {useState} from "react";
import {useNavigate} from "react-router-dom";

function UserRegistrationForm({setAuth: setAuth}){

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    //TODO: USE WRAPPER FETCH;
    async function handleSubmit(event) {
        event.preventDefault()
        const register =  await fetch('/api/user/register', {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            } ,
            body: JSON.stringify(user)
        });

        const response = await register.json();
        if(response.status === "401"){
            navigate("/");
        }
        navigate("/login");
        setAuth(true);
    }

    return(
        <div>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <div>

                    <input placeholder={"Username"} type={"text"} name={"name"} value={user.username} onChange={(event) =>
                    {setUser(prev => ({...prev, username: event.target.value}))}}/>
                </div>

                <div>
                    <input placeholder="Password" type={"password"} name={"password"} value={user.password} onChange={(event) =>
                    {setUser(prev => ({...prev, password: event.target.value}))}}/>
                </div>

                <div>
                    <button type={"submit"}>SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default UserRegistrationForm;
