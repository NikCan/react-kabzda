import React, {useEffect, useState} from 'react';

type DigitClockPropsType = {}

const get2digitString = (num: number) => num < 10 ? "0" + num : num

export const DigitClock: React.FC<DigitClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return <div>
        <span>{get2digitString(date.getHours())}</span>
        :
        <span>{get2digitString(date.getMinutes())}</span>
        :
        <span>{get2digitString(date.getSeconds())}</span>
    </div>
}

