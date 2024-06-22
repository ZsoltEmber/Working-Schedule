import {useState} from "react";
import {useNavigate} from "react-router-dom";
import errorPage from "../pages/ErrorPage.jsx";


function LoginForm({onLogin, isAuth}){
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
        //TODO: DELETE LINE BELOW
        console.log(response)
        if(!response.jwt){
            throw new Error('Token is missing')
        }
        onLogin(response.username)
        localStorage.setItem('token', response.jwt);
        localStorage.setItem('username', response.username);
        console.log("res: " + response);
        const roles = response.roles;
        localStorage.setItem("roles", roles)
        if(roles.includes("ROLE_USER")){
            navigate(`/${response.username}/menu`)
        }
        if(response.ok){
            isAuth(true);
        }
    }

    return(
        <div className={"card w-25 h-50 p-3"}>
            <p className={"card-header"}>LOG IN FORM</p>
            <div className={"card-body"}>
                <form onSubmit={(event)=>handleSubmit(event)}>
                    <div className={"form-outline mb-4"}>

                        <input
                            className={"mw-100"}
                            placeholder={"Username"} type={"text"} name={"name"} value={user.username} onChange={(event) =>
                        {setUser(prev => ({...prev, username: event.target.value}))}}/>
                    </div>

                    <div className={"form-outline mb-4"}>
                        <input  className={"mw-100"}
                                placeholder="Password" type={"password"} name={"password"} value={user.password} onChange={(event) =>
                        {setUser(prev => ({...prev, password: event.target.value}))}}/>
                    </div>

                    <div>
                        <button className={"btn btn-primary"} type={"submit"}>SUBMIT</button>
                    </div>
                </form>
            </div>

        </div>
    );
}


export default LoginForm;