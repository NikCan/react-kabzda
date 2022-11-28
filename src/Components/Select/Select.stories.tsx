import React, {useState} from 'react';
import {Select} from "./Select";
import {v1} from "uuid";
import {string} from "prop-types";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select stories',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState<string>("Novgorod")
    return <Select
        onChange={setValue}
        title={value}
        items={[{id: v1(), title: 'Novgorod'}, {id: v1(), title: 'Moscow'}, {id: v1(), title: 'Nanaimo'}]}
    />
}

export const WithoutValue = () => {
    const [value, setValue] = useState<string>("")
    return <Select
        onChange={setValue}
        title={value}
        items={[{id: v1(), title: 'Novgorod'}, {id: v1(), title: 'Moscow'}, {id: v1(), title: 'Nanaimo'}]}
    />
}