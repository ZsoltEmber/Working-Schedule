import {useState} from "react";

function Inputs() {
    const [name, setName] = useState(null);
    const [workHours, setWorkHours] = useState(0);
    const [ableToWorkIndependently, setAbleToWorkIndependently] = useState(true);




    function onSubmit(event) {
        event.preventDefault();
        //TODO: FILL ME
    }


    return (
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input name="name"
                       type={"text"}/>
            </div>

            <div>
                <label htmlFor="workHours">Work Hours:</label>
                <input name="workhours"
                       type={"number"}/>
            </div>


            <div>
                <label htmlFor="ableToWorkIndependently">Able to Work independently:</label>
                <input name="ableToWorkIndependently"
                       type={"checkbox"}/>
            </div>
        <button type={"Submit"}>Submit</button>
        <button>Cancel</button>
        </form>


    )
}

export default Inputs;