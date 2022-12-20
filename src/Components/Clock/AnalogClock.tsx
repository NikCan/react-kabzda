import React, {useEffect, useState} from 'react';
import "./AnalogClock.css"

type AnalogClockPropsType = {}
export const AnalogClock: React.FC<AnalogClockPropsType> = (props) => {
    const [day, setDay] = useState(new Date())
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    useEffect(() => {

        const ID = setInterval(() => {
            setDay(new Date())
        }, 1000)

        return () => clearInterval(ID)
    }, [])

    return <div className="clock">
        <div className="hour">
            <div style={{transform: `rotateZ(${(hh) + (mm / 12)}deg)`}} className="hr" id="hr"></div>
        </div>
        <div className="min">
            <div style={{transform: `rotateZ(${mm}deg)`}} className="mn" id="mn"></div>
        </div>
        <div className="sec">
            <div style={{transform: `rotateZ(${ss}deg)`}} className="sc" id="sc"></div>
        </div>
    </div>
}

