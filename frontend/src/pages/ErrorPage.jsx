import errorIcon from "../assets/Error-Icon.png"

function ErrorPage() {
    const error = {text: localStorage.getItem("statusText"), code: localStorage.getItem("statusCode")};


    return (<div>
        <h1 className={"p-4"}>Oh my god, something went wrong...</h1>
        <div className={"card w-50 flex-row p-4"}>
            <img width={300} height={300} src={errorIcon} alt={"error"}/>
            <p className={"p-4 pe-1  fs-5"}> error:</p>
            <p className={"p-4 tex ps-1 text-danger fs-5"}>{error.code}</p>
            <p className={"p-4 fs-5"}>{error.text}</p>
        </div>
    </div>)
}

export default ErrorPage;