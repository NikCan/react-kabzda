import React, {useEffect, useState} from 'react';
import "./Clock.module.css"

type PropsType = {
    mode: "analog" | "digit"
}
const get2digitString = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])
    const deg = 6;
    const hr = document.querySelector('#hr');
    const sc = document.querySelector('#sc');

    useEffect(() => {
        const ID = setInterval(() => {
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
        })
        return ()=>clearInterval(ID)
    }, [])

    return <div>
        {props.mode === "analog"
            ? <div className="clock">
                <div className="hour">
                    <div className="hr" id="hr"></div>
                </div>
                <div className="min">
                    <div className="mn" id="mn"></div>
                </div>
                <div className="sec">
                    <div className="sc" id="sc"></div>
                </div>
            </div>
            : <div><span>{get2digitString(date.getHours())}</span>
                :
                <span>{get2digitString(date.getMinutes())}</span>
                :
                <span>{get2digitString(date.getSeconds())}</span></div>}
    </div>
}

