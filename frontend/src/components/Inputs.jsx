import {useState} from "react";

function Inputs() {
    const [worker, setWorker] = useState({})


    async function handleSubmit(event) {
        event.preventDefault();
        const addWorker = await fetch("/api/workers", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(worker)
        })
        const response = await addWorker.json();
        console.log(response);
        //TODO: NAVIGATE
        // const response = await addWorker.json();
        // if(response.status === "200"){
        //
        // }
    }


    return (
        <form  onSubmit={(event)=>handleSubmit(event)}>
            <div>
                <label htmlFor="name">Name:</label>
                <input name="name"
                       type={"text"}
                       value={worker.name}
                       onChange={(event) => {
                           setWorker(prev => ({...prev, name: event.target.value}))
                       }}
                />
            </div>

            <div>
                <label htmlFor="workHours">Work Hours:</label>
                <input name="workHours"
                       type={"number"}
                       value={worker.workHours}
                       onChange={(event) => {
                           setWorker(prev => ({...prev, workHours: event.target.value}))
                       }}
                />
            </div>


            <div>
                <label htmlFor="ableToWorkIndependently">Able to Work independently:</label>
                <input name="ableToWorkIndependently"
                       type={"checkbox"}
                       value={worker.ableToWorkIndependently}
                       onChange={(event) => {
                           setWorker(prev => ({...prev, ableToWorkIndependently: event.target.checked}))
                       }}
                />
            </div>
            <button type={"submit"}>Save</button>
            <button>Cancel</button>
        </form>


    )
}

export default Inputs;