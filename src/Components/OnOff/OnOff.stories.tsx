import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,
}
export const OnMode = () => <OnOff onClickOnOff={action("On or off clicked")} on={true} />
export const OffMode = () => <OnOff onClickOnOff={action("On or off clicked")} on={false} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff onClickOnOff={setValue} on={value}/>
}