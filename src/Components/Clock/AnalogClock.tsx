import React from 'react';
import s from "./AnalogClock.module.css"

type AnalogClockPropsType = {
    date: Date
}
export const AnalogClock: React.FC<AnalogClockPropsType> = ({date}) => {
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;

    return <div className={s.clock}>
        <div style={{transform: `rotateZ(${(hh) + (mm / 12)}deg)`}} className={`${s.hr} ${s.hour}`}></div>
        <div style={{transform: `rotateZ(${mm}deg)`}} className={`${s.mn} ${s.min}`}></div>
        <div style={{transform: `rotateZ(${ss}deg)`}} className={`${s.sc} ${s.sec}`}></div>
    </div>
}

