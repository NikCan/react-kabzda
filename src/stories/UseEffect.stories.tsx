import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo",
}
//api.getUsers().then('')  --> запрос на сервер
//setInterval
//indexedDB --> работа с базой данных браузера
//document.getElementById() --> обращение к элементам DOM
// document.title = counter.toString()
export const SimpleExample = () => {
    // console.log("SimpleExample")
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log("useEffect only first render")
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log("useEffect with depend")
        document.title = counter.toString()
    }, [counter])
    return <>
        <button onClick={() => setCounter(state => state + 1)}>counter+</button>
        <button onClick={() => setFake(state => state + 1)}>fake+</button>
        <div>Hello, {counter}</div>
        <div> I'm fake {fake}</div>
    </>
}
export const SetTimeOutExample = () => {
    console.log("SetTimeOutExample")
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        const intervalId = setTimeout(() => {
            console.log("setTimeOut")
            document.title = counter.toString()
        }, 5000)
        return () => {
            clearTimeout(intervalId)
        }
    }, [counter])

    return <>
        <button onClick={() => setCounter(state => state + 1)}>counter+</button>
        <button onClick={() => setFake(state => state + 1)}>fake+</button>
        <div>Hello, {counter}</div>
        <div> I'm fake {fake}</div>
    </>
}
export const SetIntervalExample = () => {
    console.log("SetIntervalExample")
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        <div>Hello, {counter}</div>
        <div> I'm fake {fake}</div>
    </>
}
export const ClockExample = () => {
    console.log("ClockExample")
    const [counter, setCounter] = useState(1)
    const date = new Date()
    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
    </>
}

export const ResetEffectExample = () => {
    console.log("ResetEffectExample rendered")
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log("effect occurred" + counter)

        return () => {
            console.log('reset effect' + counter)
        }
    }, [counter])

    return <>
        Hello, counter {counter}!
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("")

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }
        window.addEventListener('keydown', handler)
        return () => {
            window.removeEventListener('keydown', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}







