import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    };
    return <input value={parentValue} onChange={onChange}/>
}


export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    };
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    };
    return <select value={parentValue} onChange={onChange}>
        <option value={"1"}>none</option>
        <option value={"2"}>Novgorod</option>
        <option value={"3"}>Nanaimo</option>
    </select>
}