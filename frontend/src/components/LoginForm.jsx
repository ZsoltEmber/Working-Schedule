import {useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginForm(){
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    //TODO: USE WRAPPER FETCH;
    async function handleSubmit(event) {
        event.preventDefault()
        const login =  await fetch('/api/user/login', {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            } ,
            body: JSON.stringify(user)
        });

        const response = await login.json();
        console.log(response)
        if(!response.jwt){
            throw new Error('Token is missing')
        }
        localStorage.setItem('token', response.jwt);
        console.log("res: " + response);
        const role = response.role;
        localStorage.setItem("role", role)

        if(role === "ROLE_USER"){
            navigate("/Dummy")
        }
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


export default LoginForm;