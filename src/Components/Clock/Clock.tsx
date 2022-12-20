import React from 'react';
import {AnalogClock} from "./AnalogClock";
import {DigitClock} from "./DigitClock";

type PropsType = {
    mode: "analog" | "digit"
}
export const Clock: React.FC<PropsType> = (props) => {

    return <div>
        {props.mode === "analog"
            ? <AnalogClock/>
            : <DigitClock/>}
    </div>
}

