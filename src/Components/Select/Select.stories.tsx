import React, {useMemo, useState} from 'react';
import {Select} from "./Select";
import {v1} from "uuid";

export default {
    title: 'Select stories',
    component: Select,
}

const items = [
    {id: v1(), city: 'Novgorod', country: "Russia", people: 1000}, {
        id: v1(),
        city: 'Moscow',
        country: "Russia",
        people: 34000300
    },
    {id: v1(), city: 'Minsk', country: "BY", people: 101231300}, {
        id: v1(),
        city: 'Brest',
        country: "BY",
        people: 340000
    },
    {id: v1(), city: 'Toronto', country: "CA", people: 10112300}, {
        id: v1(),
        city: 'Nanaimo',
        country: "CA",
        people: 3000
    },
]
export const WithValue = () => {
    const [value, setValue] = useState<string>("Novgorod")
    return <Select
        onChange={setValue}
        title={value}
        items={items}
    />
}

export const WithoutValue = () => {
    const [value, setValue] = useState<string>("")
    return <Select
        onChange={setValue}
        title={value}
        items={items}
    />
}

export const ExampleWithUseMemo = () => {
    const [value, setValue] = useState<string>("")
    const [counter, setCounter] = useState(0)
    const RussiaCity = useMemo(() => {
        return items.filter(c => c.country === "Russia")
    }, [items])
    const BigCities = useMemo(() => {
        return items.filter(c => c.people > 10000)
    }, [items])
    return <>
        <Select
            onChange={setValue}
            title={value}
            items={items}
        />
        <Select
            onChange={setValue}
            title={value}
            items={RussiaCity}
        />
        <Select
            onChange={setValue}
            title={value}
            items={BigCities}
        />
        <button onClick={() => {
            setCounter(counter + 1)
        }}>{counter}</button>
    </>
}