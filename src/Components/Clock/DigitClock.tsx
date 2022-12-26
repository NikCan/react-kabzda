import React from 'react';

type DigitClockPropsType = {
    date: Date
}

const get2digitString = (num: number) => num < 10 ? "0" + num : num

export const DigitClock: React.FC<DigitClockPropsType> = ({date}) => {

    return <div>
        <span>{get2digitString(date.getHours())}</span>
        :
        <span>{get2digitString(date.getMinutes())}</span>
        :
        <span>{get2digitString(date.getSeconds())}</span>
    </div>
}

