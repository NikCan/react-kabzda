import React, {useRef, useState} from 'react';

export default {
    title: 'input',
}

export const UncontrolledInput = () => <input/>
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    return <><input ref={inputRef}/>
        <button onClick={() => {
            setValue((inputRef.current as HTMLInputElement).value)
        }}>save
        </button>
         - actual value: {value}</>
}
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    return <><input onChange={(e) => {
        setValue(e.currentTarget.value)
    }}/> - {value}</>
}
export const ControlledInputWithFixedValue = () => <input value={"IT"}/>