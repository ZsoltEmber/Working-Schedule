import {useEffect, useState} from "react";

function DateForm() {
    const [month, setMonth] = useState();
    const nextMonth = new Date().getMonth()+1
    console.log(nextMonth)

    return (
        <input type="month" />
    );
}


export default DateForm;