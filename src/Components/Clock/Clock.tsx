import React, {useEffect, useState} from 'react';
import {AnalogClock} from "./AnalogClock";
import {DigitClock} from "./DigitClock";

type PropsType = {
    mode: "analog" | "digit"
}
export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return <div>
        {props.mode === "analog"
            ? <AnalogClock date={date}/>
            : <DigitClock date={date}/>}
    </div>
}

